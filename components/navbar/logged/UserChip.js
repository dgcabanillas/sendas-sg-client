import React, { useContext } from 'react';
import { Avatar, Chip, Hidden } from '@material-ui/core';
import AuthContext   from 'src/context/auth/auth.context';
import RouterContext from 'src/context/router/router.context';

const UserChip = () => {
    const { user } = useContext(AuthContext);
    const { gotoProfile } = useContext(RouterContext);

    if ( !user ) {
        return (
            <Chip avatar={<Avatar>N</Avatar>} label="Nobody" />
        )
    }

    const avatar = user.imagen ? 
        <Avatar alt={`${user.nombre} ${user.apellido}`} src={user.imagen} />
        :
        <Avatar><b>{user.nombre[0]}</b></Avatar>

    return (
        <>
        <Hidden xsDown>
            <Chip
                avatar={avatar}
                label={ user.nombre + " " + user.apellido }
                variant="outlined"
                color="primary"
                style={{fontWeight: '600', fontSize: '0.82rem'}}
                onClick={() => {gotoProfile(user.id_usuario)}}
            />
        </Hidden>
        <Hidden smUp>
            { avatar }
        </Hidden>
        </>
    )
}

export default UserChip
