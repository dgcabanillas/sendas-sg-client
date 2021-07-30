import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core';
import BtnModalForm from 'components/customized/BtnModalForm';
import { ArrowForwardIos } from '@material-ui/icons';
import RouterContext from 'src/context/router/router.context';
import FormCurso from './FormCurso';
import { useBorrarCurso } from 'src/graphql/curso/useBorrarCurso';
import CCard from 'components/customized/CCard';

const ItemCurso = ({ curso }) => {

    const { gotoAdminCourse } = useContext(RouterContext);
    const [borrarCurso, { loading: borrandoCurso }] = useBorrarCurso();

    return (
        <CCard fullheight>
            <CardContent>
                <Typography variant="subtitle2" component="h2">
                    {curso.id_curso}
                </Typography>
                <Typography variant="h5" component="h1" style={{fontWeight: 600}}>
                    {curso.curso}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {curso.categoria.categoria}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {curso.area.area}
                </Typography>
            </CardContent>
            <div style={{flexGrow: 1}}/>
            
            <CardActions>
                <BtnModalForm 
                    Button={( props ) => (
                        <Button 
                            {...props}
                            variant="outlined"
                            color="primary"
                            size="small"
                        > editar </Button>
                    )}
                    width={420}
                    title="EDITAR CURSO"
                    Form={({ toggleModal }) => <FormCurso curso={curso} toggleModal={toggleModal}/>}
                />
                <Button 
                    color="secondary"
                    onClick={() => {borrarCurso(curso.id_curso)}}
                    disabled={borrandoCurso}
                > Eliminar </Button>
                <div style={{flexGrow: 1}}/>
                <IconButton 
                    color="primary"
                    onClick={() => {gotoAdminCourse(curso.id_curso)}}
                >  
                    <ArrowForwardIos />
                </IconButton>
            </CardActions>
        </CCard>
    )
}

ItemCurso.propTypes = {
    curso: PropTypes.object.isRequired,
}

export default ItemCurso;
