import React from 'react'
import withAuthorize from 'src/HOC/withAuthorize';
import HomeLayout from 'components/layout/HomeLayout';
import CLoading from 'components/customized/CLoading';

const AdminHome = ({ isAuthorized }) => {

    if( !isAuthorized ) return <CLoading />

    return (
        <div>
            admin
        </div>
    )
}

const Component = withAuthorize(AdminHome, ['ADMIN']);
Component.layout = HomeLayout;

export default Component;
