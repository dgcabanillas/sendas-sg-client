import {
    LOGIN,
    LOGOUT,
} from './auth.types';

const authReducer = (state, action) => {
    switch( action.type ) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                userdata: null,
            };
        default:
            return state;
    }
}

export default authReducer;