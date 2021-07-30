import React, { useReducer } from 'react';
import MenuContext from './menu.context';
import MenuReducer from './menu.reducer';

import {
    OPEN_MENU,
    CLOSE_MENU,
    TOGGLE_MENU,
    SET_SIDEBAR_INDEX,
} from './menu.types';

const MenuState = props => {
    
    const initialState = {
        open: false,
        sidebarIndex: '',
    };

    const [state, dispatch] = useReducer( MenuReducer, initialState );

    const openMenu = () => { dispatch({ type: OPEN_MENU }) }
    const closeMenu = () => { dispatch({ type: CLOSE_MENU }) }
    const toggleMenu = () => { dispatch({ type: TOGGLE_MENU }) }
    const setSidebarIndex = (index) => { dispatch({ type: SET_SIDEBAR_INDEX, payload: index })}

    return (
        <MenuContext.Provider
            value={{
                open: state.open,
                sidebarIndex: state.sidebarIndex,
                openMenu,
                closeMenu,
                toggleMenu,
                setSidebarIndex,
            }}
        >
            { props.children }
        </MenuContext.Provider>
    )
}

export default MenuState;