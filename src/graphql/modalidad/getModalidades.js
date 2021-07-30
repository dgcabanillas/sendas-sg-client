import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { MODALIDADES } from 'src/graphql/modalidad';
import AppContext from 'src/context/app/app.context';

export const getModalidades = () => {

    const [callback, { data, error, loading }] = useLazyQuery( MODALIDADES );
    const { setModalidades } = useContext( AppContext );

    useEffect(() => {
        if( data?.modalidades ) {
            setModalidades( data.modalidades );
        }
    }, [data])

    return [callback, { error, loading }];
}
