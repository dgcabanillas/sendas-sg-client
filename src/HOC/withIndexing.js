import React, { useContext, useEffect } from 'react';
import AppContext   from 'src/context/app/app.context';
import AuthContext  from 'src/context/auth/auth.context';
import MenuContext  from 'src/context/menu/menu.context';

const withIndexing = (Component, index) => {

    const WrappedComponent = ({ children, ...props }) => {
        
        const { user } = useContext(AuthContext);
        const { profile } = useContext(AppContext);
        const { setSidebarIndex } = useContext(MenuContext);

        useEffect(() => {
            if( index != 'user-profile' ) {
                setSidebarIndex(index);
            }
            return () => { setSidebarIndex('') }
        }, []);

        useEffect(() => {
            if( index == 'user-profile' && profile && user && profile.id_usuario == user.id_usuario ) {
                setSidebarIndex('user-profile');
            } 
        }, [profile, user])

        return (
            <Component {...props}>
                { children }
            </Component>
        )
    }

    return WrappedComponent;
}

export default withIndexing;