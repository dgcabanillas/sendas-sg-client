import React, { useReducer } from 'react';
import AdminContext from './admin.context';
import AdminReducer from './admin.reducer';

import { 
    SET_ADMIN_MODE,
} from './admin.types';

const AdminState = props => {
    
    const initialState = {
        adminmode: false,
    };

    const [state, dispatch] = useReducer( AdminReducer, initialState );

    const setAdminmode = (adminmode) => { dispatch({ type: SET_ADMIN_MODE, payload: adminmode }) }

    return (
        <AdminContext.Provider
            value={{
                adminmode: state.adminmode,
                setAdminmode,
            }}
        >
            { props.children }
        </AdminContext.Provider>
    )
}

export default AdminState;