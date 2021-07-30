import { makeStyles } from '@material-ui/core';
import React from 'react';
import MainLayout from './MainLayout';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(5, 0),
    }
}));

const AuthLayout = ({ children }) => {
    const classes = useStyles();

    return (
        // <MainLayout /*background='url("/images/main-bg-6.jpg")'*/>
        <MainLayout background='url("/images/auth-bg-2.jpg")'>
            <div className={classes.root}>
                { children }
            </div>
        </MainLayout>
    )
}

export default AuthLayout;
