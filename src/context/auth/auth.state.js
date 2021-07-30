import React, { useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';

import {
    LOGIN,
    LOGOUT,
} from './auth.types';

const AuthState = props => {
    
    const initialState = {
        user: false,
    };

    const [state, dispatch] = useReducer( AuthReducer, initialState );

    const login = (token) => {
        localStorage.setItem('jwtToken', token);
        dispatch({
            type: LOGIN,
            payload: jwtDecode(token),
        });
    }

    const logout = () => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: LOGOUT });
    }

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                login,
                logout,
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthState;