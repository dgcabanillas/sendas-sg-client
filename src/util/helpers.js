export const formatError = ( errArray ) => {
    if ( !errArray || errArray.length == 0 ) return {};
    const map = {}
    for(let i = 0; i < errArray.length; i++ ) {
        map[errArray[i]['error']] = errArray[i]['description'];
    }
    return map;
} 

export const getGraphQLError = ( error ) => {
    if( error
        && error.graphQLErrors 
        && error.graphQLErrors[0] 
        && error.graphQLErrors[0].extensions.exception.errors 
    ) {
        return error.graphQLErrors[0].extensions.exception.errors;
    } else {
        return null;
    }
}

export const object2array = ( object ) => {
    return Object.keys(object).map( key => object[key] );
} 

export const mergeArrays = ( existing, incoming, id ) => {
    const result = [];

    const incoming_obj = incoming.reduce( (obj, item) => {
        const key = item[id];
        if( !obj[key] ) {
            obj[key] = item;
        }
        return obj;
    }, {});

    existing.forEach( item => {
        const key = item[id];
        const value = incoming_obj[key];
        if( value ) {
            result.push( value );
            delete incoming_obj[key]
        }
    });

    return [...object2array(incoming_obj), ...result];
}

export const auxImage = "/images/aux-image-course.jpg";

export const procesarPrecio = ( precio, descuento, tipo_descuento ) => {
    if( descuento === 0 ) {
        return {
            precioMostrar: precio,
            precioEsconder: 0,
        }
    } else {
        let conDcto;
        if( tipo_descuento === 'porcentual' ) {
            conDcto = precio * (100 - descuento) / 100;
        } else {
            conDcto = precio - descuento;
        }
        return {
            precioMostrar: conDcto >= 0 ? conDcto : 0,
            precioEsconder: precio
        }
    }
}

export const formatNumber = (number, decimals = 0) => {
    if( decimals === 0 ) {
        return Math.trunc(number);
    } else {
        const D = Math.round(number*Math.pow(10, decimals));
        const d = Math.pow(10, decimals);

        let aux = (""+( D / d )).split(".");
        aux[1] = aux[1] || ""
        if(aux[1].length < decimals) {
            aux[1] += new Array(decimals - aux[1].length + 1).join("0");
        }
        return aux.join(".");
    }
} 