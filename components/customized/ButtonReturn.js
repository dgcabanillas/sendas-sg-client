import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { KeyboardReturn } from '@material-ui/icons';
import RouterContext from 'src/context/router/router.context';

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.text.light,
        marginBottom: 5,
    }
}));

const ButtonReturn = () => {
    const classes = useStyles();

    const { gotoPreviousPage } = useContext(RouterContext);

    return (
        <Button
            startIcon={<KeyboardReturn />}
            className={classes.button}
            onClick={gotoPreviousPage}
        >
            regresar
        </Button>
    )
}

export default ButtonReturn;
