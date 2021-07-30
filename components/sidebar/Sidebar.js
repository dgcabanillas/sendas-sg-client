import React, { useContext } from 'react';
import { List } from '@material-ui/core';
import { 
    HomeRounded     as HouseIcon,
    LibraryBooks    as CoursesIcon,
    Person          as UserIcon, 
    Dashboard       as DashboardIcon,
} from '@material-ui/icons';
import { 
    MenuItem, 
    SidebarContainer
} from './components';
import RouterContext    from 'src/context/router/router.context';
import AuthContext      from 'src/context/auth/auth.context';

const Sidebar = () => {

    const { user } = useContext(AuthContext);
    const { 
        gotoHome, 
        gotoLanding, 
        gotoProfile, 
        gotoAdminHome, 
        gotoAdminUsers, 
        gotoAdminCourses, 
        gotoAdminData,
    } = useContext(RouterContext);

    if( !user ) return null;

    return (
        <SidebarContainer>
            <List disablePadding>
                <MenuItem 
                    text="Inicio"
                    icon={<HouseIcon />}
                    onClick={gotoHome}
                    index='home'
                />
                <MenuItem 
                    text="Perfil de Usuario"
                    icon={<UserIcon />}
                    onClick={() => gotoProfile(user.id_usuario)}
                    index="user-profile"
                />


                <MenuItem
                    text="Administrador"
                    icon={<DashboardIcon />}
                    index="admin"
                    roles={['ADMIN']}
                >
                    <MenuItem 
                        text="Gestión de usuarios"
                        onClick={gotoAdminUsers}
                        index="admin-users"
                        subitem
                    />

                    <MenuItem 
                        text="Administrar cursos"
                        onClick={gotoAdminCourses}
                        index="admin-courses"
                        subitem
                    />
                    <MenuItem 
                        text="Configurar opciones"
                        onClick={gotoAdminData}
                        index="admin-data"
                        subitem
                    />
                </MenuItem>

            </List>
        </SidebarContainer>
    )
}

export default Sidebar;
