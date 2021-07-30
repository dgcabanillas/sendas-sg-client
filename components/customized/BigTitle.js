import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    bigTitle: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: theme.shadows[4],
        marginTop: 10,
        '& > span': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgb(227,87,6)',
            background: 'linear-gradient(45deg, rgba(227,87,6,1) 0%, rgba(241,17,17,1) 50%, rgba(252,182,69,1) 100%)'
        },
        '& > div': {
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: theme.spacing(4),
            position: 'relative',
            zIndex: 2,
        }
    }
}));

const BigTitle = ( props ) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.bigTitle}>
            <span></span>
            {/*<img src="/images/bigtitle-bg.jpeg" alt="background titulo de página"/>*/}
            <div>
                { children }
            </div>
        </div>
    )
}

export default BigTitle;
