import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CATEGORIAS } from 'src/graphql/categoria';
import AppContext from 'src/context/app/app.context';

export const getCategorias = () => {

    const [callback, { data, error, loading }] = useLazyQuery( CATEGORIAS );
    const { setCategorias } = useContext( AppContext );

    useEffect(() => {
        if( data?.categorias ) {
            setCategorias( data.categorias );
        }
    }, [data])

    return [callback, { error, loading }];
}
