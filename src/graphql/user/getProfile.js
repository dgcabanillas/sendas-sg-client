import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { PROFILE } from 'src/graphql/user';
import AppContext from 'src/context/app/app.context';

export const getProfile = () => {

    const [callback, { data, error, loading }] = useLazyQuery( PROFILE );
    const { setProfile } = useContext( AppContext );

    useEffect(() => {
        if( data?.profile ) {
            setProfile( data.profile );
        }
    }, [data])

    return [callback, { error, loading }];
}
