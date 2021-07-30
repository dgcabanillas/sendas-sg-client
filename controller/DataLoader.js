import React, { useContext, useEffect } from 'react';
import AuthContext from 'src/context/auth/auth.context';
import jwtDecode from 'jwt-decode';
import { getAreas } from 'src/graphql/area/getAreas';
import { getCategorias } from 'src/graphql/categoria/getCategorias';
import { getModalidades } from 'src/graphql/modalidad/getModalidades';
import { getEstadosCivil } from 'src/graphql/estadoCivil/getEstadosCivil';

const DataLoader = () => {
    const { login, logout } = useContext(AuthContext);
    const [loadEstadosCivil] = getEstadosCivil();
    const [loadModalidades] = getModalidades();
    const [loadCategorias] = getCategorias();
    const [loadAreas] = getAreas();

    useEffect(() => {
        if( localStorage ) {
            const token = localStorage.getItem('jwtToken');
            if ( token ) {
                const decodedToken = jwtDecode( token );
                if (decodedToken.exp * 1000 < Date.now()) {
                    logout();
                } else {
                    login( token );
                }
            } else {
                logout();
            }
        }

        loadAreas();
        loadCategorias();
        loadModalidades();
        loadEstadosCivil();
    }, []);

    return null;
}

export default DataLoader;
