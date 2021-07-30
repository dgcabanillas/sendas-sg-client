import React from 'react';
import MenuItem from './MenuItem';
import SidebarToolbar from './SidebarToolbar';
import SidebarContainer from './SidebarContainer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    menu: {
        overflowY: 'auto',
        padding: theme.spacing(2),
        flexGrow: 1,
    },
    box: {
        [theme.breakpoints.up('md')]: {
            width: theme.drawerWidth,
            flexShrink: 0,
        },
    },
}));
const Menu = ({ children }) => {
    const classes = useStyles();
    return ( 
        <div className={classes.menuContainer}>
            <nav className={classes.menu}>
                { children }
            </nav>
        </div> 
    );
}
const Box = ({ children }) => {
    const classes = useStyles();
    return ( <div className={classes.box}>{ children }</div> );
}

export {
    MenuItem,
    SidebarToolbar,
    SidebarContainer,
    Menu,
    Box,
}