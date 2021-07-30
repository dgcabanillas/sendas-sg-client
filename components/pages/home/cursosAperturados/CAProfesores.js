import React, { useContext } from 'react';
import { ArrowRightAlt } from '@material-ui/icons';
import { CardActionArea, CardMedia } from '@material-ui/core';
import CCard         from 'components/customized/CCard';
import CTypography   from 'components/customized/CTypography';
import RouterContext from 'src/context/router/router.context';

const CAProfesores = ({ cursoAperturado }) => {

    const { profesores } = cursoAperturado;
    const { gotoProfile } = useContext(RouterContext)

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
            > Profesores </CTypography>

            {
                (!profesores || profesores.length === 0 ) ? <>
                    <CCard>
                        <CTypography 
                            component="h3"
                            variant="h6"
                            colortext="dark"
                        > No hay profesores para mostrar </CTypography>
                    </CCard>
                </> : <> { 
                    profesores.map( 
                        profesor => 
                        <CCard 
                            key={profesor.id_usuario}
                            style={{ 
                                marginBottom: '1rem',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >   
                            <CardActionArea
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'row',
                                }}
                                onClick={() => gotoProfile(profesor.id_usuario)}
                            >
                                <CardMedia
                                    ccomponent="img"
                                    alt={ `${profesor.nombre} ${profesor.apellido}` }
                                    image={ profesor.imagen }
                                    title={ `${profesor.nombre} ${profesor.apellido}` }
                                    style={{ borderRadius: 5, width: 40, height: 40, marginRight: 10 }}
                                />
                                
                                <CTypography 
                                    component="h3"
                                    variant="h6"
                                    colortext="dark"
                                >{ `${profesor.nombre} ${profesor.apellido}` }</CTypography>

                                <div style={{flexGrow: 1}}/>
                            
                                <CTypography
                                    variant="button"
                                    color="primary"
                                    style={{display: 'flex', alignItems: 'center'}}
                                >
                                    ver perfil
                                    <ArrowRightAlt />
                                </CTypography>
                            </CardActionArea>
                        </CCard>
                    )
                }</>
            }

            
        </div>
    )
}

export default CAProfesores;
