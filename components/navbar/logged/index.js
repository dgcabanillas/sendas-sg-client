import React, { useContext } from 'react';
import UserChip         from './UserChip';
import SpreadMenu       from 'components/customized/SpreadMenu';
import SpreadMenuItem   from 'components/customized/SpreadMenuItem';
import {
    ArrowDropDown as ArrowIcon
} from '@material-ui/icons';

import AuthContext    from 'src/context/auth/auth.context';

const Logged = () => {
    const { logout } = useContext(AuthContext);

    return (
        <>
            <UserChip />
            <SpreadMenu
                icon={<ArrowIcon fontSize="large"/>}
            >
                <SpreadMenuItem 
                    onClick={logout} 
                    text="salir" 
                />
            </SpreadMenu>
        </>
    )
}

export default Logged
