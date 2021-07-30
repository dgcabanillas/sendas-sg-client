import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles( theme => ({
    main: {
        width: '100%',
        height: '100vh',
        background: theme.background.main,
    },
    has_bg: (props) => ({
        backgroundImage: props.background,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }),
    overlay: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const MainLayout = ( props ) => {
    const { background, children } = props;
    const classes = useStyles({ background });

    return (
        <main className={clsx(classes.main, { [classes.has_bg]: background })}>
            <div className={classes.overlay}>
                { children }
            </div>
        </main>
    )
}

export default MainLayout;
