import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CURSO } from 'src/graphql/curso';
import AppContext from 'src/context/app/app.context';

export const getCurso = () => {

    const [callback, { data, error, loading }] = useLazyQuery( CURSO );
    const { setCurso } = useContext( AppContext );

    const action = ( id_curso ) => {
        callback({variables: { id_curso }})
    }

    useEffect(() => {
        if( data?.curso ) {
            setCurso( data.curso );
        }
    }, [data])

    return [action, { error, loading }];
}
