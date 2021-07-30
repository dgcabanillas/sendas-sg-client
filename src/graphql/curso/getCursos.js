import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CURSOS } from 'src/graphql/curso';
import AppContext from 'src/context/app/app.context';

export const getCursos = () => {

    const [callback, { data, error, loading }] = useLazyQuery( CURSOS );
    const { setCursos } = useContext( AppContext );

    useEffect(() => {
        if( data?.cursos ) {
            setCursos( data.cursos );
        }
    }, [data])

    return [callback, { error, loading }];
}
