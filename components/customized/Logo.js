import React, { useContext } from 'react'
import { makeStyles, Button} from '@material-ui/core';
import RouterContext from 'src/context/router/router.context';

const useStyles = makeStyles(theme => ({
    root: {
        '& img': {
            width: 180,
        }
    }
}));

const Logo = () => {
    const classes = useStyles();
    const { gotoHome } = useContext(RouterContext);

    return (
        <Button
            className={classes.root}
            onClick={gotoHome}
            size="small"
        >
            <img src='/images/logo-sendas.png' />
        </Button>
    )
}

export default Logo;
