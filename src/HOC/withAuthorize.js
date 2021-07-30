import React, { useContext, useEffect, useState } from 'react';
import AuthContext    from 'src/context/auth/auth.context';
import RouterContext  from 'src/context/router/router.context';

const withAuthorize = (Component, permits) => {

    const WrappedComponent = ({ children, ...props }) => {
        
        const { user } = useContext(AuthContext);
        const { gotoHome } = useContext(RouterContext);
        const [isAuthorized, setAuthorization] = useState(false);

        useEffect(() => {
            if( user === null ) {
                gotoHome();
            } else if( user?.rol ) {
                if( permits == user.rol || permits.includes(user.rol) ) {
                    setAuthorization(true);
                } else {
                    gotoHome();
                }
            }
        }, [user]);

        return (
            <Component {...props} isAuthorized={isAuthorized}>
                { children }
            </Component>
        )
    }

    return WrappedComponent;
}

export default withAuthorize;