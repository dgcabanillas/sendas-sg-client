import {
    SET_ADMIN_MODE,
} from './admin.types';

const adminReducer = (state, action) => {
    switch( action.type ) {
        case SET_ADMIN_MODE:
            return {
                ...state,
                adminmode: action.payload,
            };
        default:
            return state;
    }
}

export default adminReducer;