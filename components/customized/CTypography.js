import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: { color: theme.text.main },
    dark: { color: theme.text.dark },
    light: { color: theme.text.light },
    semibold: { color: theme.text.semibold },
}));

const CTypography = ({ children, className, colortext, ...other }) => {
    const classes = useStyles();
    return (
        <Typography 
            { ...other }
            className={clsx(className, {[classes[colortext]]: colortext})}
        >
            { children }
        </Typography>
    )
}

CTypography.propTypes = {
    colortext: PropTypes.string,
}

export default CTypography;
