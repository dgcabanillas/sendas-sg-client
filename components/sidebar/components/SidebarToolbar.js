import React from 'react';
import { makeStyles, Hidden, Toolbar } from '@material-ui/core';
import MenuButton   from 'components/customized/MenuButton';
import Logo         from 'components/customized/Logo';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

const SidebarToolbar = () => {
    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}> 
            <Hidden mdUp> 
                <MenuButton />
            </Hidden>
            <Logo />
        </Toolbar>
    )
}

export default SidebarToolbar;
