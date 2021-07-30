import React, { useEffect, useState } from 'react'

const useIterar = ( array ) => {

    const [index, setIndex] = useState(-1);
    const [maxIndex, setMaxIndex] = useState(-1);

    const [item, setItem] = useState(null)  

    useEffect(() => {
        setIndex( array?.length > 0 ? 0 : -1 );
        setMaxIndex( array?.length || -1 );
    }, [array])

    useEffect(() => {
        if( index > -1 ) {
            setItem( array[index] )
        }
    }, [index])

    const nextItem = () => { 
        if( index < maxIndex - 1 ) {
            setIndex( index + 1 )
        } else if ( maxIndex > 0 ) {
            setIndex( 0 )
        }
    }

    return { item, index, maxIndex, nextItem }
}

export default useIterar;
