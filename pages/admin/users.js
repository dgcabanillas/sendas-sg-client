import React from 'react';
import { Button } from '@material-ui/core';
import HomeLayout       from 'components/layout/HomeLayout';
import Example          from 'components/customized/Table/Example';
import Title            from 'components/customized/Title';
import CLoading         from 'components/customized/CLoading';
import BtnModalForm     from 'components/customized/BtnModalForm';
import withIndexing     from 'src/HOC/withIndexing';
import withAuthorize    from 'src/HOC/withAuthorize';
import AdminFormUser    from 'components/pages/admin/users/AdminFormUser';
import TableUsers       from 'components/pages/admin/users/TableUsers';

const AdminUsers = ({ isAuthorized }) => {

    if( !isAuthorized ) return <CLoading />

    return (
        <div>
            <Title> Gestión de usuarios </Title>
            <BtnModalForm
                Button={( props ) => (
                    <Button 
                        {...props}
                        variant="outlined"
                        color="primary"
                        size="large"
                        style={{ width: 200, marginBottom: 20 }}
                    > crear usuario </Button>
                )}
                width={600}
                title="CREAR USUARIO"
                Form={({ toggleModal }) => <AdminFormUser toggleModal={toggleModal}/>}
            />

            <div>
                {/*<TableUsers users={[]}/>*/}
                <Example />
            </div>
        </div>
    )
}

const Component = withAuthorize(withIndexing(AdminUsers, 'admin-users'), ['ADMIN']);
Component.layout = HomeLayout;

export default Component;