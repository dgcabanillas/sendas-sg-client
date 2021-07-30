import React, { useContext, useEffect } from 'react';
import { CardMedia, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import { getCursoAperturado } from 'src/graphql/cursoAperturado/getCursoAperturado';
import HomeLayout   from 'components/layout/HomeLayout';
import CLoading     from 'components/customized/CLoading';
import CCard        from 'components/customized/CCard';
import CTypography  from 'components/customized/CTypography';
import AppContext   from 'src/context/app/app.context';
import withIndexing from 'src/HOC/withIndexing';
import { auxImage } from 'src/util/helpers';
import { useRouter } from 'next/router';
import CAModulos     from 'components/pages/home/cursosAperturados/CAModulos';
import CAProfesores  from 'components/pages/home/cursosAperturados/CAProfesores';
import CAInformacion from 'components/pages/home/cursosAperturados/CAInformacion';
import AuthContext from 'src/context/auth/auth.context';

const useStyles = makeStyles({
    ord_1: { order: 1 },
    ord_2: { order: 2 },
    ord_3: { order: 3 },
});

const OpenedCoursePage = () => {
    const router = useRouter();
    const classes = useStyles();
    const [loadCursoAperturado] = getCursoAperturado();
    const { cursoAperturado, setCursoAperturado } = useContext(AppContext);
    const { user } = useContext(AuthContext);
    const isMD = useMediaQuery(theme => theme.breakpoints.up('md'));

    useEffect(() => {
        return () => { setCursoAperturado(null) }
    }, []) 

    useEffect(() => {
        if( router?.query?.id_curso_aperturado ) {
            loadCursoAperturado( +router.query.id_curso_aperturado );
        }
    }, [router])

    useEffect(() => {
        if( cursoAperturado ) {
            console.log(cursoAperturado);
        }
    }, [cursoAperturado])

    if( !cursoAperturado ) return <CLoading />

    const {
        curso,
        imagen
    } = cursoAperturado;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={user?12:8} className={classes.ord_1}>
                <CCard>
                    <CTypography
                        variant="subtitle1" 
                        component="p" 
                        color="initial"
                        style={{ 
                            marginBottom: 10,
                            fontSize: '1.1rem'
                        }}
                        colortext="main"
                    > Información del curso </CTypography>
                    <Grid container spacing={1}>
                        <Grid item xs={12} lg={5}>
                            <CardMedia
                                component="img"
                                alt={ curso.curso }
                                height="280"
                                image={ imagen || auxImage }
                                title={ curso.curso }
                                style={{ borderRadius: 10 }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={7}>
                            <CAInformacion cursoAperturado={cursoAperturado}/>
                        </Grid>
                    </Grid>
                </CCard>
            </Grid>
            <Grid 
                item xs={12} md={user?12:8} lg={user?7:false}
                className={!user && isMD ? classes.ord_3: classes.ord_2}
            >
                <CAModulos cursoAperturado={cursoAperturado}/>            
            </Grid>
            <Grid 
                item xs={12} md={user?12:4} lg={user?5:false}
                className={!user && isMD ? classes.ord_2: classes.ord_3}
            >
                <CAProfesores cursoAperturado={cursoAperturado} />
            </Grid>
        </Grid>
    )
}

const Component = withIndexing(OpenedCoursePage, 'home');
Component.layout = HomeLayout;

export default Component;

