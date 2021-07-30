import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        height: 300,
        marginBottom: 20,
    },
    list: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto', 
    },
    item: {
        display: 'flex',
        marginBottom: '5px',
    },
}));

export const BoxContainer = ( props ) => {

    const classes = useStyles();
    const { children, className, ...other } = props;

    return (
        <Paper className={clsx(classes.paper, className)} elevation={2} { ...other }>
            { children }
        </Paper>
    )
}

export const ListContainer = ( props ) => {
    const classes = useStyles();
    const { children, className, ...other } = props;

    return (
        <div className={clsx(classes.list, className)} { ...other }>
            { children }
        </div>
    )
}

export const ItemList = (props) => {
    const classes = useStyles();
    const { children, className, ...other } = props;

    return (
        <div className={clsx(classes.item, className)} { ...other }>
            { children }
        </div>
    )
}


