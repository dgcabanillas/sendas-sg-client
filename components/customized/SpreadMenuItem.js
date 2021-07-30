import React, { forwardRef } from 'react';
import { makeStyles, MenuItem, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        width: '100%', 
        padding: '0px 10px',
    }
}));

const SpreadMenuItem = forwardRef(( props, ref ) => {

    const { text, onClick, ...other } = props;
    const classes = useStyles();

    return (
        <MenuItem {...other} ref={ref} onClick={onClick}>
            <Typography variant="button" color="primary" align="center" className={classes.button}>
                <b>{ text }</b>
            </Typography>
        </MenuItem>
    )
})

export default SpreadMenuItem;
