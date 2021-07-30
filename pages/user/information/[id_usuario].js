import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProfile } from 'src/graphql/user/getProfile';
import HomeLayout   from 'components/layout/HomeLayout';
import ButtonReturn from 'components/customized/ButtonReturn';
import CTypography  from 'components/customized/CTypography';
import CLoading     from 'components/customized/CLoading';
import CCard        from 'components/customized/CCard';
import AppContext   from 'src/context/app/app.context';
import withIndexing from 'src/HOC/withIndexing';


const UserProfile = () => {
    const router = useRouter();
    const { profile } = useContext(AppContext);
    const [getProfileCallback] = getProfile();

    useEffect(() => {
        if( router?.query?.id_usuario ) {
            getProfileCallback({variables: { id_usuario: router.query.id_usuario }});
        }
    }, [router]);

    if ( !profile ) return <CLoading />

    console.log( profile );

    return (
        <div>
            <ButtonReturn />
            <CCard>
                <CTypography
                    variant="subtitle1"
                    colortext="main"
                    style={{ fontWeight: 500, fontSize: '1.1rem', marginBottom: 5 }}
                > 
                    Información de usuario
                </CTypography>
                <CTypography
                    variant="h4"
                    component="h3"
                    colortext="semibold"
                    style={{ fontWeight: 600, fontSize: '1.6rem' }}
                > 
                    {`${profile.nombre} ${profile.apellido}`}
                </CTypography>
            </CCard>
        </div>
    )
}

const Component = withIndexing(UserProfile, 'user-profile')
Component.layout = HomeLayout;

export default Component;
