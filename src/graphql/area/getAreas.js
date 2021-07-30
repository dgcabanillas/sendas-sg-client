import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { AREAS } from 'src/graphql/area';
import AppContext from 'src/context/app/app.context';

export const getAreas = () => {

    const [callback, { data, error, loading }] = useLazyQuery( AREAS );
    const { setAreas } = useContext( AppContext );

    useEffect(() => {
        if( data?.areas ) {
            setAreas( data.areas );
        }
    }, [data])

    return [callback, { error, loading }];
}
