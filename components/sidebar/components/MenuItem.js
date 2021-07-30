import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; 
import { 
    List,
    Collapse,
    ListItem, 
    ListItemIcon,
    ListItemText,
    makeStyles,
    useTheme,
} from '@material-ui/core';
import {
    ExpandMore,
    FiberManualRecord as DefaultIcon,
} from '@material-ui/icons';
import MenuContext from 'src/context/menu/menu.context';
import AuthContext from 'src/context/auth/auth.context';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 5,
        paddingTop: '.3rem',
        paddingBottom: '.3rem',

        '& .MuiListItemIcon-root': {
            minWidth: 0,
            padding: 8,
            borderRadius: '.5rem',
            marginRight: 10,
            marginLeft: 5,
            color: theme.text.light,
            '& .MuiSvgIcon-root': {
                fontSize: '.5rem',
            }
        },
        '& .MuiListItemText-root': {
            '& .MuiTypography-root': { 
                color: theme.text.light,
                fontWeight: 400,
            }
        },
        '& > .MuiSvgIcon-root': {
            color: theme.text.light,
            fontSize: '1.1rem',
        },

        '&.sb-item': {
            paddingTop: '.8rem',
            paddingBottom: '.8rem',
            '& .MuiListItemIcon-root': {
                background: 'white',
                boxShadow: theme.text.iconshadow,
                color: theme.text.semibold,
                marginLeft: 0,
                '& .MuiSvgIcon-root': {
                    fontSize: '1rem',
                }
            },
            '& .MuiListItemText-root': {
                '& .MuiTypography-root': { 
                    color: theme.text.main,
                }
            },
        },
        '&.MuiListItem-root': {
            // on select
            '&.Mui-selected': {
                background: 'none',
                '& .MuiListItemIcon-root': {
                    color: theme.text.main,
                    marginLeft: 4,
                    '& .MuiSvgIcon-root': {
                        fontSize: '.7rem',
                    }
                },
                '& .MuiListItemText-root': {
                    '& .MuiTypography-root': { 
                        color: theme.text.semibold,
                        fontWeight: 600,
                    }
                },
                '&.sb-item': {
                    background: 'white',
                    boxShadow: theme.text.shadow,
                    '& .MuiListItemIcon-root': {
                        color: 'white',
                        background: theme.palette.primary.main,
                        boxShadow: 'none',
                        marginLeft: 0,
                    },
                    '& .MuiListItemText-root': {
                        '& .MuiTypography-root': { 
                            color: theme.text.semibold,
                            fontWeight: 600,
                        }
                    },
                },
            }
        },
    },
    expand: ({ open }) => ({
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: theme.transitions.create(['transform']),
    })
}));

const MenuItem = ( props ) => {

    const { sidebarIndex } = useContext(MenuContext);
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const {
        icon,
        text,
        index,
        children,
        onClick,
        subitem,
        roles
    } = props;

    const hasitem = !!children;
    const classes = useStyles({ subitem, open });  

    useEffect(() => {
        if( sidebarIndex && index && sidebarIndex.indexOf(index) == 0 ) {
            setOpen( true );
        }
    }, [sidebarIndex, index])

    if( roles && !roles.includes( user?.rol || '' ) ) return null;

    return (
        <>
            <ListItem 
                button 
                onClick={hasitem ? (() => { setOpen(!open) }) : onClick} 
                selected={ sidebarIndex.indexOf(index) == 0 }
                className={clsx(
                    classes.root, 
                    subitem ? 'sb-subitem' : 'sb-item'
                )}
            >
                <ListItemIcon>{ icon }</ListItemIcon>
                <ListItemText primary={ text } />
                { hasitem && <ExpandMore className={ classes.expand }/>}
            </ListItem>

            { 
                hasitem &&
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        { children }
                    </List>
                </Collapse> 
            }
        </>
    )
}

MenuItem.defaultProps = {
    icon:       <DefaultIcon />,
    text:       'item',
    index:      '----',
    onClick:    () => {},
    subitem:    false,
}

MenuItem.propTypes = {
    icon:       PropTypes.node,
    text:       PropTypes.string,
    index:      PropTypes.string,
    onClick:    PropTypes.func,
    subitem:    PropTypes.bool,
    roles:      PropTypes.array,
}

export default MenuItem;
