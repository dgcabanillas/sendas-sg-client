import React, { useReducer } from 'react';
import AppContext from './app.context';
import AppReducer from './app.reducer';

import {
    SET_PROFILE,
    SET_AREAS,
    SET_CATEGORIAS,
    SET_ESTADOS_CIVIL,
    SET_CURSOS,
    SET_CURSO,
    SET_MODALIDADES,
    SET_CURSOS_APERTURADOS,
    SET_CURSO_APERTURADO,
} from './app.types';

const AppState = props => {
    
    const initialState = {
        profile: null,
        areas: [],
        categorias: [],
        estadosCivil: [],
        cursos: [],
        curso: null,
        modalidades: [],
        cursosAperturados: [],
        cursoAperturado: null,
    };

    const [state, dispatch] = useReducer( AppReducer, initialState );

    const setProfile = (profile) => { dispatch({ type: SET_PROFILE, payload: profile }) }
    const setAreas = (areas) => { dispatch({ type: SET_AREAS, payload: areas }) }
    const setCategorias = (categorias) => { dispatch({ type: SET_CATEGORIAS, payload: categorias }) }
    const setEstadosCivil = (estadosCivil) => { dispatch({ type: SET_ESTADOS_CIVIL, payload: estadosCivil }) }
    const setCursos = (cursos) => { dispatch({ type: SET_CURSOS, payload: cursos }) }
    const setCurso = (curso) => { dispatch({ type: SET_CURSO, payload: curso }) }
    const setModalidades = (modalidades) => { dispatch({ type: SET_MODALIDADES, payload: modalidades }) }
    const setCursosAperturados = (cursosAperturados) => { dispatch({ type: SET_CURSOS_APERTURADOS, payload: cursosAperturados }) }
    const setCursoAperturado = (cursoAperturado) => { dispatch({ type: SET_CURSO_APERTURADO, payload: cursoAperturado }) }

    return (
        <AppContext.Provider
            value={{
                profile: state.profile,
                areas: state.areas,
                categorias: state.categorias,
                estadosCivil: state.estadosCivil,
                cursos: state.cursos,
                curso: state.curso,
                modalidades: state.modalidades,
                cursosAperturados: state.cursosAperturados,
                cursoAperturado: state.cursoAperturado,
                setProfile,
                setAreas,
                setCategorias,
                setEstadosCivil,
                setCursos,
                setCurso,
                setModalidades,
                setCursosAperturados,
                setCursoAperturado,
            }}
        >
            { props.children }
        </AppContext.Provider>
    )
}

export default AppState;