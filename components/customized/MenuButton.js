import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { 
    Menu    as MenuIcon,
    Close   as CloseIcon,
} from '@material-ui/icons';
import MenuContext from 'src/context/menu/menu.context';

const MenuButton = () => {
    const { open, openMenu, closeMenu } = useContext(MenuContext);

    return (
        <>
        {   
            open ? 
            <IconButton 
                color='primary'
                onClick={closeMenu}
            > <CloseIcon fontSize="large" /> </IconButton>
            :
            <IconButton 
                color='primary'
                onClick={openMenu}
            >  <MenuIcon fontSize="large"/> </IconButton>
        }
        </>
    )
}

export default MenuButton
