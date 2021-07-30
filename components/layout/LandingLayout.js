import React from 'react';
import MainLayout from 'components/layout/MainLayout';
import Navbar     from 'components/navbar/Navbar';

const LandingLayout = ( props ) => {
    const { children } = props;

    return (
        <MainLayout>
            <Navbar landing/>
            { children }
        </MainLayout>
    )
}

export default LandingLayout;
