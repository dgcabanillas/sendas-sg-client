import {
    OPEN_MENU,
    CLOSE_MENU,
    TOGGLE_MENU,
    SET_SIDEBAR_INDEX,
} from './menu.types';

const menuReducer = (state, action) => {
    switch( action.type ) {
        case OPEN_MENU:
            return {
                ...state,
                open: true,
            };
        case CLOSE_MENU:
            return {
                ...state,
                open: false,
            };
        case TOGGLE_MENU:
            return {
                ...state,
                open: !state.open,
            };
        case SET_SIDEBAR_INDEX:
            return {
                ...state,
                sidebarIndex: action.payload,
            }
        default:
            return state;
    }
}

export default menuReducer;