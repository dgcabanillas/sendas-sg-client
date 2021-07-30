import React, { useContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import RouterContext from './router.context';
import RouterReducer from './router.reducer';

import { SET_TARGET_PATH } from './router.types';

import AuthContext from 'src/context/auth/auth.context';

const RouterState = ( props ) => {
    const router = useRouter();

    const initialState = {
        targetPath: '/home',
    };

    /*
        HOME:                       () => '/',
        INGRESAR:                   () => '/auth/login',
        REGISTRAR:                  () => '/auth/registrar',
        EN_PROCESO:                 () => '/en-proceso',

        CREAR_CURSO:                ()   => '/courses/create',
        CURSO_APERTURADO:           (id) => `/courses/information/${id}`,

        USER_ACCOUNT:               (id) => `/user/account/${id}`,
        INFORMACION_USUARIO:        (id) => `/user/information/${id}`,
        ALL_USERS:                  ()   => '/users/all',

        FACTURACION:                (id) => `/billing/${id}`,
        VALIDAR_VOUCHERS:           ()   => '/vouchers/validate',
    */

    const [state, dispatch] = useReducer( RouterReducer, initialState );
    const { user } = useContext(AuthContext);

    const setTargetPath     = (path) => { dispatch({type: SET_TARGET_PATH, payload: path}) }
    const gotoPreviousPage  = () => { router.back() }

    const gotoLanding   = ()    => { router.push('/') } 
    const gotoLogin     = ()    => { if(!user) router.push('/auth/login') }
    const gotoRecover   = ()    => { if(!user) router.push('/auth/recover') } 
    const gotoRegister  = ()    => { if(!user) router.push('/auth/register') }
    const gotoHome      = ()    => { router.push('/home') }
    const gotoProfile   = (id)  => { router.push(`/user/information/${id}`) }
    const gotoTargetPath = ()   => { router.push(state.targetPath) }

    // admin routes
    const gotoAdminHome      = () => { if(user?.rol == 'ADMIN') router.push('/admin') }
    const gotoAdminUsers     = () => { if(user?.rol == 'ADMIN') router.push('/admin/users') }
    const gotoAdminCourses   = () => { if(user?.rol == 'ADMIN') router.push('/admin/courses') }
    const gotoAdminData      = () => { if(user?.rol == 'ADMIN') router.push('/admin/data') }
    const gotoAdminCourse    = (id) => { if(user?.rol == 'ADMIN') router.push(`/admin/course/${id}`) }

    // courses routes
    const gotoOpenedCourse = (id) => { router.push(`/home/opened-course/${id}`) }

    return (
        <RouterContext.Provider
            value={{
                targetPath: state.targetPath,
                setTargetPath,
                gotoPreviousPage,

                gotoLanding,
                gotoLogin,
                gotoRecover,
                gotoRegister,
                gotoHome,
                gotoProfile,
                gotoTargetPath,

                gotoAdminHome,
                gotoAdminUsers,
                gotoAdminCourses,
                gotoAdminData,
                gotoAdminCourse,

                gotoOpenedCourse,
            }}
        >
            { props.children }    
        </RouterContext.Provider>
    )
}

export default RouterState;
