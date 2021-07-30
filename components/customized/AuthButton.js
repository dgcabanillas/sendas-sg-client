import React from 'react';
import clsx from 'clsx';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: 700,
        fontSize: 14,
    }
}));

const AuthButton = ( props ) => {
    const { className, children, ...other } = props;
    const classes = useStyles();

    return (
        <Button
            { ...other }
            color="primary"
            className={clsx(className, classes.root)}
        >
            { children }
        </Button>
    )
}

export default AuthButton
