import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import HomeLayout   from 'components/layout/HomeLayout';
import Areas        from 'components/pages/admin/config/areas/Areas';
import Categorias   from 'components/pages/admin/config/categorias/Categorias';
import EstadosCivil from 'components/pages/admin/config/estadosCivil/EstadosCivil';
import CLoading     from 'components/customized/CLoading';
import withAuthorize    from 'src/HOC/withAuthorize';
import withIndexing     from 'src/HOC/withIndexing';
import AppContext       from 'src/context/app/app.context';
import { getAreas }         from 'src/graphql/area/getAreas';
import { getCategorias }    from 'src/graphql/categoria/getCategorias';
import { getEstadosCivil }  from 'src/graphql/estadoCivil/getEstadosCivil';

const AdminData = ({ isAuthorized }) => {

    const [ __loadAreas ] = getAreas();
    const [ __loadCategorias ] = getCategorias();
    const [ __loadEstadosCivil ] = getEstadosCivil();

    const { areas, categorias, estadosCivil } = useContext(AppContext);

    useEffect(() => {
        __loadAreas();
        __loadCategorias();
        __loadEstadosCivil();
    }, []);

    if( !isAuthorized ) return <CLoading />

    return (
        <Grid container spacing={3} style={{ overflowY: 'auto' }}>
            <Grid item xs={12} sm={6} lg={4}>
                <Areas areas={areas} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <Categorias categorias={categorias} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <EstadosCivil estadosCivil={estadosCivil} />
            </Grid>
        </Grid>
    )
}

const Component = withAuthorize(withIndexing(AdminData, 'admin-data'), ['ADMIN'])
Component.layout = HomeLayout;

export default Component;
