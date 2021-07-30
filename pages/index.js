import React, { useContext, useEffect } from 'react';
import LandingLayout    from 'components/layout/LandingLayout';
import Hero             from 'components/pages/landing/Hero';   
import AuthContext      from 'src/context/auth/auth.context';
import RouterContext    from 'src/context/router/router.context';

const Landing = () => {

    const { user } = useContext(AuthContext);
    const { gotoLogin, gotoHome } = useContext(RouterContext);
    useEffect(() => { 
        gotoLogin();
        if( user ) gotoHome();
    }, [])

    return (
        <>
            <Hero />
        </>
    )
}

Landing.layout = LandingLayout;

export default Landing;
