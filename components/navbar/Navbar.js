import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, AppBar, Toolbar, Hidden } from '@material-ui/core';
import Logged           from './logged';
import Unlogged         from './unlogged';
import MenuButton       from 'components/customized/MenuButton';
import Logo             from 'components/customized/Logo';
import AuthContext      from 'src/context/auth/auth.context';

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    landingAppbar: {
        background: 'rgba(0 0 0 / 80%)',
        //background: 'black',
    },
    toolbar: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            padding: '0 16px',
            '& > *': {
                margin: `0 4px`,
            },
        }
    },
})); 

const Navbar = ( props ) => {
    const classes = useStyles();
    const { landing } = props;
    const { user } = useContext(AuthContext);

    return (
        <AppBar
            position="fixed"
            color="transparent"
            className={clsx(
                classes.appBar, 
                { [classes.landingAppbar]: landing },
            )}
        >
            <Toolbar className={classes.toolbar} disableGutters>
                <Hidden mdUp>
                    { !landing && user && <MenuButton /> }
                </Hidden>
                <Logo />
                <div style={{ flexGrow: 1}} />
                { user ? <Logged /> : <Unlogged landing={landing}/>}
            </Toolbar>
        </AppBar>
    )
}

Navbar.defaultProps = {
    landing:            false,
}

Navbar.propTypes = {
    landing:            PropTypes.bool,
}

export default Navbar;
