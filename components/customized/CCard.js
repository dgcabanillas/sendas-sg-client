import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: ({ fullheight }) => ({
        display: 'flex',
        flexDirection: 'column',
        border: theme.card.border,
        ...theme.card,
        padding: '1rem',
        height: fullheight ? '100%' : 'auto',
    }),
}));

const CCard = ({ children, className, fullheight, ...other }) => {
    const classes = useStyles({ fullheight });

    return (
        <Card className={clsx(classes.root, className)} elevation={0} { ...other }>
            { children }
        </Card>
    )
}

export default CCard;
