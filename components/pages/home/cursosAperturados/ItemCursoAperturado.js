import React, { useContext } from 'react'
import { 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Divider, 
    Typography, 
    Button, 
    CardActions 
} from '@material-ui/core';
import { 
    ExitToApp, 
    InsertDriveFileOutlined 
} from '@material-ui/icons';
import CCard from 'components/customized/CCard';
import moment from 'moment';
import RouterContext from 'src/context/router/router.context';

const auxImage = "/images/aux-image-course.jpg";

const ItemCursoAperturado = ({ cursoAperturado }) => {

    const {
        id_curso_aperturado,
        periodo,
        descripcion,
        fecha_inicio,
        imagen,
        pdf,

        curso,
    } = cursoAperturado;

    const { gotoOpenedCourse } = useContext(RouterContext);

    return (
        <CCard style={{ padding: 10 }} fullheight>
            <CardActionArea
                href={ pdf || '#'}
                target='_blank'
            >
                <CardMedia
                    component="img"
                    alt={ curso.curso }
                    height="160"
                    image={ imagen || auxImage }
                    title={ curso.curso }
                    style={{ borderRadius: 10 }}
                />
            </CardActionArea>

            <CardContent>
                <Typography variant="h5" color="textSecondary" align="center">
                    <b>{ periodo }</b>
                </Typography> 
                <Typography variant="body1" color="textSecondary" align="center">
                    <b>{ curso.categoria.categoria }</b>
                </Typography> 
                <Typography variant="h6" color="textPrimary" align="center">
                    <b>{ curso.curso }</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    { descripcion }
                </Typography>
                { 
                    /*profesores.length > 0 &&
                    <>  
                        <CustomDivider />

                        <Typography variant="body2" color="textSecondary">
                            <b>Dirigido por:</b>
                        </Typography>
                        { profesores.map(
                            profesor =>
                            <Link 
                                component="button"
                                variant="body2"
                                onClick={() => gotoPerfil(profesor.id_usuario)}
                                key={profesor.id_usuario} 
                                style={{margin: '2px 16px'}}
                                align="left"
                            >
                                <Typography variant="body2" color="textSecondary">
                                    {`${profesor.nombre} ${profesor.apellido}`}
                                </Typography>
                            </Link>
                        )}
                    </>*/
                }
                
                <div style={{height: 5}} />

                <Typography variant="body2" color="textSecondary">
                    <b>Inicio del curso:</b>
                    {" " + moment(fecha_inicio,"YYYY-MM-DD").locale('es').format("D MMMM YYYY")}
                </Typography>
            </CardContent>

            <CardActions style={{justifyContent: 'flex-end'}}>
                {   
                    pdf &&
                    <>
                        <Button
                            variant="text"
                            color="primary"
                            startIcon={<InsertDriveFileOutlined />}
                            href={cursoAperturado.pdf}
                            target='_blank'
                        >
                            ver pdf
                        </Button>
                        <Divider orientation="vertical" />
                    </>
                }

                <Button 
                    variant="text" 
                    color="primary"
                    endIcon={<ExitToApp />}
                    onClick={() => gotoOpenedCourse(id_curso_aperturado)}
                >
                    ir al curso
                </Button>
            </CardActions>
        </CCard>
    )
}

export default ItemCursoAperturado;
