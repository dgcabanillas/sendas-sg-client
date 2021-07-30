import React from 'react';
import { Container, makeStyles, Toolbar } from '@material-ui/core';
import MainLayout       from 'components/layout/MainLayout';
import Navbar           from 'components/navbar/Navbar';
import Sidebar          from 'components/sidebar/Sidebar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flexGrow: 1,
        width: '100%',
        height: '1%',
        overflow: 'hidden',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(0, 2, 2, 2),
        }
    },
    container: {
        width: '100%',
        height: '100%',
        //border: '1px solid #00000020',
        display: 'flex',
        flexDirection: 'column',
    },
}))

const HomeLayout = ( props ) => {
    const classes = useStyles();
    const { children } = props;

    return (
        <MainLayout>
            <Navbar />
            <div className={classes.root}>
                <Toolbar />
                <div className={classes.box}>
                    <Sidebar />
                    <div className={classes.content}>
                        <Container maxWidth="lg" className={classes.container}>
                            { children }
                        </Container>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomeLayout;
