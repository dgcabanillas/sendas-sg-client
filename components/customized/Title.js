import React from 'react';
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.text.dark,
        fontWeight: 600,
        padding: theme.spacing(3, 0),
    }
}))

const Title = ({ children }) => {
    const classes = useStyles(); 

    return (
        <Typography variant="h4" className={classes.title}>
            { children }
        </Typography>
    )
}

export default Title;
