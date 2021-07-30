import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ESTADOS_CIVIL } from 'src/graphql/estadoCivil';
import AppContext from 'src/context/app/app.context';

export const getEstadosCivil = () => {

    const [callback, { data, error, loading }] = useLazyQuery( ESTADOS_CIVIL );
    const { setEstadosCivil } = useContext( AppContext );

    useEffect(() => {
        if( data?.estadosCivil ) {
            setEstadosCivil( data.estadosCivil );
        }
    }, [data])

    return [callback, { error, loading }];
}
