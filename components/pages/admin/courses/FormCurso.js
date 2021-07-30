import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppContext from 'src/context/app/app.context';
import CTextField from 'components/customized/CTextField';
import SubmitButton from 'components/customized/SubmitButton';
import CLoading from 'components/customized/CLoading';
import CSelect from 'components/customized/CSelect';
import { useCrearCurso } from 'src/graphql/curso/useCrearCurso';
import { useEditarCurso } from 'src/graphql/curso/useEditarCurso';

const FormCurso = ( props ) => {

    const { curso, toggleModal } = props;
    const { categorias, areas } = useContext(AppContext);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [crearCurso, { errors: createErrors, loading: creating }] = useCrearCurso();
    const [editarCurso, { errors: editErrors, loading: editing }] = useEditarCurso();

    useEffect(() => { setErrors({ ...createErrors, ...editErrors})}, [createErrors, editErrors])
    useEffect(() => { setLoading(creating || editing)}, [creating, editing])

    const formik = useFormik({
        initialValues: {
            id_curso:       curso?.id_curso || '',
            curso:          curso?.curso || '',
            id_categoria:   curso?.categoria.id_categoria || 1,
            id_area:        curso?.area.id_area || 1,
        },
        validationSchema: Yup.object({
            id_curso: Yup.string().required('El código del curso no puede ser vacío'),
            curso:    Yup.string().required('El nombre del curso no puede ser vacío'),
        }),
        onSubmit: ( args ) => {
            if ( curso ) {
                args = { ...args, id_curso: curso.id_curso };
                editarCurso( args, toggleModal );
            } else {
                crearCurso( args, toggleModal );
            }
        }
    })
    
    const handleChange = (e) => {
        formik.handleChange (e);
        errors[e.target.name] = '';
    }

    const text = curso ? "editar" : "crear";

    if( categorias && areas && categorias.length * areas.length === 0 ) return <CLoading /> 

    return (
        <form onSubmit={formik.handleSubmit}>
            <CTextField 
                name='id_curso'
                label="Código del curso"
                value={formik.values.id_curso}
                onChange={handleChange}
                disabled={!!curso}
                errorText={formik.errors.id_curso || errors.id_curso || null }
            />
            <CTextField 
                name='curso'
                label="Nombre del curso"
                value={formik.values.curso}
                onChange={handleChange}
                errorText={formik.errors.curso || errors.curso || null }
            />
            <CSelect
                name="id_area"
                label="Area del curso"
                value={formik.values.id_area}
                items={areas}
                id="id_area"
                text="area"
                onChange={handleChange}
            />
            <CSelect
                name="id_categoria"
                label="Categoría del curso"
                value={formik.values.id_categoria}
                items={categorias}
                id="id_categoria"
                text="categoria"
                onChange={handleChange}
            />
            <SubmitButton text={text} disabled={loading} variant="outlined"/>
        </form>
    )
}

export default FormCurso
