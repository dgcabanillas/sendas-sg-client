import React, { useContext, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import HomeLayout       from 'components/layout/HomeLayout';
import Title            from 'components/customized/Title';
import CLoading         from 'components/customized/CLoading';
import BtnModalForm     from 'components/customized/BtnModalForm';
import ItemCurso        from 'components/pages/admin/courses/ItemCurso';
import FormCurso        from 'components/pages/admin/courses/FormCurso';
import withIndexing     from 'src/HOC/withIndexing';
import withAuthorize    from 'src/HOC/withAuthorize';
import { getCursos }    from 'src/graphql/curso/getCursos';
import AppContext       from 'src/context/app/app.context';

const AdminCourses = ({ isAuthorized }) => {

    const [loadCursos] = getCursos();
    const { cursos } = useContext(AppContext);

    useEffect(() => { loadCursos() }, []);

    if( !isAuthorized ) return <CLoading />

    return (
        <div>
            <Title> Panel de administración de cursos </Title>
            <BtnModalForm
                Button={( props ) => (
                    <Button 
                        {...props}
                        variant="outlined"
                        color="primary"
                        size="large"
                        style={{ width: 200, marginBottom: 20 }}
                    > crear curso </Button>
                )}
                width={420}
                title="CREAR CURSO"
                Form={({ toggleModal }) => <FormCurso toggleModal={toggleModal}/>}
            />
            <Grid container spacing={2}>
                { cursos.map( 
                    curso => 
                    <Grid item xs={12} sm ={6} lg={4} key={curso.id_curso}>
                        <ItemCurso curso={curso}/> 
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

const Component = withAuthorize(withIndexing(AdminCourses, 'admin-courses'), ['ADMIN']);
Component.layout = HomeLayout;

export default Component; 
