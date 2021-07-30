import React from 'react';
import CCard        from 'components/customized/CCard';
import CTypography  from 'components/customized/CTypography';

const CAModulos = ({ cursoAperturado }) => {

    const { modulos } = cursoAperturado;

    console.log( modulos );

    const ordenados = modulos.slice().sort((a,b) => (a.nro_modulo - b.nro_modulo));
    
    return (
        <div>  
            <CTypography
                variant="h6"
                component="p"
                style={{
                    fontWeight: 700,
                    paddingLeft: 14,
                    marginBottom: 10,
                }}
                colortext="semibold"
            > Módulos </CTypography>

            { ordenados.map( 
                modulo => 
                <CCard 
                    key={modulo.id_modulo}
                    style={{ marginBottom: '1rem' }}
                >
                    <CTypography 
                        component="p"
                        variant="subtitle2"
                        colortext="main"
                    >{`Módulo ${modulo.nro_modulo}`}</CTypography>
                    <CTypography 
                        component="h3"
                        variant="h6"
                        colortext="dark"
                    >{ modulo.modulo }</CTypography>
                </CCard>
            )}
        </div>
    )
}

export default CAModulos;
