import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CURSOS_APERTURADOS } from 'src/graphql/cursoAperturado';
import AppContext from 'src/context/app/app.context';

export const getCursosAperturados = () => {

    const [callback, { data, error, loading }] = useLazyQuery( CURSOS_APERTURADOS );
    const { setCursosAperturados } = useContext( AppContext );

    useEffect(() => {
        if( data?.cursosAperturados ) {
            setCursosAperturados( data.cursosAperturados );
        }
    }, [data])

    return [callback, { error, loading }];
}
