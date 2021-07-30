import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import HomeLayout   from 'components/layout/HomeLayout';
import CLoading     from 'components/customized/CLoading';
import CCard        from 'components/customized/CCard';
import BtnModalForm from 'components/customized/BtnModalForm';
import FormCurso    from 'components/pages/admin/courses/FormCurso';
import withAuthorize    from 'src/HOC/withAuthorize';
import withIndexing     from 'src/HOC/withIndexing';
import AppContext       from 'src/context/app/app.context';
import { getCurso }       from 'src/graphql/curso/getCurso';
import { useBorrarCurso } from 'src/graphql/curso/useBorrarCurso';
import RouterContext from 'src/context/router/router.context';
import { ArrowBackIos } from '@material-ui/icons';

const CoursePage = () => {
    const router = useRouter();
    const [loadCurso] = getCurso();
    const [borrarCurso, { loading: borrandoCurso }] = useBorrarCurso();
    const { curso, setCurso } = useContext( AppContext );
    const { gotoAdminCourses } = useContext( RouterContext );

    useEffect(() => {
        return () => { setCurso(null) }
    }, [])

    useEffect(() => {
        if( router?.query.id_curso ) {
            loadCurso( router.query.id_curso );
        }
    }, [router]);

    if( !curso ) return <CLoading />

    return (
        <div>
            <Button
                startIcon={<ArrowBackIos />}
                style={{marginBottom: 10}}
                onClick={gotoAdminCourses}
                color="primary"
                size="small"
            >
                ver cursos
            </Button>

            <CCard style={{height: 'auto'}}>
                <CardContent>
                    <Typography 
                        variant="h6" 
                        component="h3" 
                        align="center"
                        style={{
                            fontWeight: 500, 
                            textTransform: 'uppercase'
                        }}
                    >{ curso.id_curso }</Typography>
                    <Typography 
                        variant="h4" 
                        component="h1" 
                        align="center"
                        style={{
                            fontSize: '1.6rem',
                            fontWeight: 600, 
                            textTransform: 'uppercase'
                        }}
                    >{ curso.curso }</Typography>
                    <Typography
                        align="center"
                        variant="subtitle1" 
                        component="p"
                        style={{
                            fontSize: '1rem',
                            fontWeight: 500, 
                            marginTop: 5,
                        }}
                    >
                        { curso.area.area } - { curso.categoria.categoria }
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <BtnModalForm 
                        Button={( props ) => (
                            <Button 
                                {...props}
                                variant="outlined"
                                color="primary"
                            > editar </Button>
                        )}
                        width={420}
                        title="EDITAR CURSO"
                        Form={({ toggleModal }) => <FormCurso curso={curso} toggleModal={toggleModal}/>}
                    />
                    <Button 
                        color="secondary"
                        onClick={() => {borrarCurso(curso.id_curso, gotoAdminCourses)}}
                        disabled={borrandoCurso}
                    > eliminar </Button>
                </CardActions>
            </CCard>
        </div>
    )
}

const Component = withAuthorize(withIndexing(CoursePage, 'admin-courses'), ['ADMIN']);
Component.layout = HomeLayout;

export default Component;
