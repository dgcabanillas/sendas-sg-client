import React, { useEffect } from 'react';
import { Button, CardContent } from '@material-ui/core';
import { useMatricularEnCurso } from 'src/graphql/matriculaCurso/useMatricularEnCurso';
import CTypography  from 'components/customized/CTypography';
import PrecioMatricula from './PrecioMatricula';

const CAInformacion = ({ cursoAperturado }) => {

    const { 
        estado,
        curso,
        precios_matricula,
        matriculado,
    } = cursoAperturado;

    const [matricular] = useMatricularEnCurso()

    useEffect(() => {
        console.log( cursoAperturado );
    }, [])

    return (
        <CardContent>
            <CTypography
                component="h1"
                variant="h4"
                style={{ 
                    fontWeight: 500,
                    fontSize: '1.55rem',
                }}
                colortext="semibold"
            >
                { curso.curso }
            </CTypography>

            { precios_matricula.length > 0 && <PrecioMatricula precios_matricula={precios_matricula}/> }
            
            <Button 
                size="large" 
                color="primary"
                variant="outlined"
                style={{ margin: '5px 0', width: 200 }}
                disabled={matriculado}
                onClick={matricular}
            > matricular </Button>
        </CardContent>
    )
}

export default CAInformacion;
