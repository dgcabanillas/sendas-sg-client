import React, { useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { CircularProgress } from '@material-ui/core';
import { useRouter }    from 'next/router';
import AuthLayout       from 'components/layout/AuthLayout';
import FormContainer    from 'components/customized/FormContainer';
import CDivider         from 'components/customized/CDivider';
import CLink            from 'components/customized/CLink';
import FormIcon         from 'components/customized/FormIcon';
import CMessage         from 'components/customized/CMessage'
import RouterContext    from 'src/context/router/router.context';
import { useConfirmAccountFromLink }   from 'src/graphql/user/useConfirmAccountFromLink';

const ConfirmAccount = () => {

    const router = useRouter();
    const { gotoHome } = useContext(RouterContext);

    const [data, setData] = useState( null );
    const [message, setMessage] = useState('');
    const [confirmAccount, { data: success, loading }] = useConfirmAccountFromLink();

    useEffect(() => {
        if( router?.query?.token ) {
            try {
                setData(jwtDecode(router.query.token));
                confirmAccount({ variables: { token: router.query.token }});
            } catch {
                setMessage('Este enlace no es válido');
            }
        }
    }, [router]);

    useEffect(() => {
        if( success ) setMessage(`${data.nombre} ${data.apellido} gracias por verificar tu cuenta.`)
    }, [success]);

    if ( loading ) return <CircularProgress />;

    return (
        <FormContainer width={400}>
            { 
                success ? <>
                    <FormIcon path='/svg/success.svg'/>
                </> : <>
                    <FormIcon path='/svg/error.svg'/>
                </>
            }
            <CMessage text={ message }/>
            <CDivider height={12}/>
            <CLink 
                onClick={gotoHome}
                text='Ir a la página principal'
            />
        </FormContainer>
    )
}

ConfirmAccount.layout = AuthLayout;

export default ConfirmAccount;
