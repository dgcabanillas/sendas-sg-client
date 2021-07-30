import React, { useContext } from 'react';
import { makeStyles, Hidden, Drawer } from '@material-ui/core';
import MenuContext      from 'src/context/menu/menu.context';
import SidebarToolbar   from './SidebarToolbar';
import { Box, Menu }    from '.';

const useStyles = makeStyles((theme) => ({
    drawer: {
        border: 'none',
        width: theme.drawerWidth,
        [theme.breakpoints.up('md')]: {
            background: theme.background.main,
        }
    },
}));

const SidebarContainer = ({ children }) => {

    const classes = useStyles();
    const { open, toggleMenu } = useContext(MenuContext);

    return (
        <>
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor='left'
                    open={open}
                    onClose={toggleMenu}
                    ModalProps={{ keepMounted: true }}
                    classes={{ paper: classes.drawer }}
                >
                    <SidebarToolbar />
                    <Menu>{ children }</Menu>
                </Drawer>
            </Hidden>

            <Hidden smDown implementation="css">
                <Box>
                    <Drawer
                        classes={{ paper: classes.drawer }}
                        variant="permanent"
                        open
                    >
                        <SidebarToolbar />
                        <Menu>{ children }</Menu>
                    </Drawer>
                </Box>
            </Hidden>
        </>
    )
}

export default SidebarContainer;
