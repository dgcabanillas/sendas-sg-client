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

const appReducer = (state, action) => {
    switch( action.type ) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case SET_AREAS:
            return {
                ...state,
                areas: action.payload,
            };
        case SET_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload,
            };
        case SET_ESTADOS_CIVIL:
            return {
                ...state,
                estadosCivil: action.payload,
            };
        case SET_CURSOS:
            return {
                ...state,
                cursos: action.payload,
            }
        case SET_CURSO:
            return {
                ...state,
                curso: action.payload,
            }
        case SET_MODALIDADES: 
            return {
                ...state,
                modalidades: action.payload,
            }
        case SET_CURSOS_APERTURADOS:
            return {
                ...state,
                cursosAperturados: action.payload,
            }
        case SET_CURSO_APERTURADO:
            return {
                ...state,
                cursoAperturado: action.payload,
            }
        default:
            return state;
    }
}

export default appReducer;