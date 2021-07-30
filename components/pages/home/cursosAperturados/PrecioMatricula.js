import React from 'react'
import { Refresh } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import CTypography from 'components/customized/CTypography';
import { formatNumber, procesarPrecio } from 'src/util/helpers';
import useIterar from 'src/hooks/useIterar';

const PrecioMatricula = ({ precios_matricula }) => {

    const { item, nextItem, maxIndex } = useIterar( precios_matricula );

    if( !item ) return null;

    const { monto, descuento, tipo_descuento } = item;
    const { precioMostrar, precioEsconder } = procesarPrecio( monto.monto, descuento, tipo_descuento );

    return (
        <div>
            <CTypography
                colortext="main"
                variant="h6"
                style={{
                    fontWeight: 500,
                    marginTop: 15,
                }}
            > Matrícula </CTypography>

            <CTypography
                colortext="semibold"
                variant="h4"
                style={{
                    fontWeight: 600,
                }}
            >   
                { 
                    precioEsconder> 0 &&
                    <CTypography 
                        variant="caption"
                        colortext="light"
                        style={{
                            paddingRight: 10,
                            fontSize: "1.3rem",
                            textDecoration: 'line-through',
                        }}
                    >
                        { item.monto.moneda.simbolo + " " + formatNumber(precioEsconder, 2) }
                    </CTypography>                
                }

                { item.monto.moneda.simbolo + " " + formatNumber(precioMostrar, 2) }
                <CTypography 
                    variant="caption"
                    colortext="light"
                    style={{
                        paddingLeft: 10,
                        fontSize: "1rem",
                    }}
                >
                    { item.monto.moneda.codigo }
                </CTypography>
                { 
                    maxIndex > 0 && 
                    <IconButton 
                        onClick={nextItem}
                    >
                        <Refresh fontSize="small"/>
                    </IconButton>
                }
            </CTypography>
            
        </div>
        
    )
}

export default PrecioMatricula
