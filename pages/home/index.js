import { Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { getCursosAperturados } from 'src/graphql/cursoAperturado/getCursosAperturados';
import HomeLayout           from 'components/layout/HomeLayout';
import Title                from 'components/customized/Title';
import ItemCursoAperturado  from 'components/pages/home/cursosAperturados/ItemCursoAperturado';
import withIndexing         from 'src/HOC/withIndexing';
import AppContext           from 'src/context/app/app.context';
import AuthContext          from 'src/context/auth/auth.context';

const Home = () => {
    const { user } = useContext(AuthContext);
    const { cursosAperturados } = useContext(AppContext);
    const [loadCursosAperturados] = getCursosAperturados();

    useEffect(() => {
        loadCursosAperturados();
    }, []);

    return (
        <div>
            <Title>
                Cursos
            </Title>
            <Grid container spacing={2}>
                { cursosAperturados.map( 
                    cursoAperturado => 
                    <Grid 
                        item xs={12} sm ={6} md={4} lg={user ? 4 : 3} 
                        key={cursoAperturado.id_curso_aperturado}
                    >
                        <ItemCursoAperturado cursoAperturado={cursoAperturado}/> 
                    </Grid>
                )}
                { cursosAperturados.map( 
                    cursoAperturado => 
                    <Grid 
                        item xs={12} sm ={6} md={4} lg={user ? 4 : 3} 
                        key={cursoAperturado.id_curso_aperturado}
                    >
                        <ItemCursoAperturado cursoAperturado={cursoAperturado}/> 
                    </Grid>
                )}
                { cursosAperturados.map( 
                    cursoAperturado => 
                    <Grid 
                        item xs={12} sm ={6} md={4} lg={user ? 4 : 3} 
                        key={cursoAperturado.id_curso_aperturado}
                    >
                        <ItemCursoAperturado cursoAperturado={cursoAperturado}/> 
                    </Grid>
                )}
                { cursosAperturados.map( 
                    cursoAperturado => 
                    <Grid 
                        item xs={12} sm ={6} md={4} lg={user ? 4 : 3} 
                        key={cursoAperturado.id_curso_aperturado}
                    >
                        <ItemCursoAperturado cursoAperturado={cursoAperturado}/> 
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

const Component = withIndexing(Home, 'home');
Component.layout = HomeLayout;

export default Component;