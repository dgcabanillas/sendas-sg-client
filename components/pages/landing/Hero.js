import React, { useContext } from 'react';
import { makeStyles, Paper, Typography, Button } from '@material-ui/core';
import RouterContext from 'src/context/router/router.context';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        //backgroundImage: 'url(/images/main-bg-6.jpg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 500,
        maxWidth: '90%',
    }
}));

const Hero = () => {
    const classes = useStyles();
    const { gotoHome } = useContext(RouterContext);

    return (
        <Paper className={classes.root} square>
            <img src='/images/logo-sendas.png' alt="sendas" className={classes.logo}/>
            <Typography variant="h4" color="initial" align="center">
                <b>Formando nuevos profesionales</b>
            </Typography>
            <Button 
                color="primary" 
                variant="outlined" 
                style={{
                    //background: 'rgba(0 0 0 /60%)', 
                    marginTop: 20
                }}
                onClick={gotoHome}
                size="large"
            >
                <b>ir a la plataforma</b>
            </Button>
        </Paper>
    )
}

export default Hero;
