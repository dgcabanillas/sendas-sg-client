import React, { forwardRef, useState } from 'react';
import { IconButton, makeStyles, Menu } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    menu: {
        '& .MuiList-padding': {
            padding: 0,
        }
    }
}));

const SpreadMenu = forwardRef(( props, ref ) => {

    const { children, icon, id } = props;
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null) };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls={`custom-menu${ id && `-${id}`}`}
                aria-haspopup="true"
                onClick={handleClick}
                color="primary"
            >
                { icon }
            </IconButton>
            <Menu
                id={`custom-menu${ id && `-${id}`}`}
                keepMounted
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={clsx(classes.menu)}
                ref={ref}
            >{ children }</Menu>
        </div>
    )
})

SpreadMenu.defaultProps = {
    id:   '',
    icon: <MoreVertIcon />,
}

SpreadMenu.propTypes = {
    id:   PropTypes.string,
    icon: PropTypes.node,
}

export default SpreadMenu
