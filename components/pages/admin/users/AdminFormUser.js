import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AppContext from 'src/context/app/app.context';
import CTextField   from 'components/customized/CTextField';
import SubmitButton from 'components/customized/SubmitButton';
import CLoading     from 'components/customized/CLoading';
import CSelect      from 'components/customized/CSelect';

import { useRegisterByAdmin } from 'src/graphql/user/useRegisterByAdmin';

import { DBUsuario } from 'src/util/fake-database';
import { Grid } from '@material-ui/core';

const AdminFormUser = ( props ) => {

    const { toggleModal } = props;

    const [registrar, { errors, loading }] = useRegisterByAdmin();

    const formik = useFormik({
        initialValues: {
            nombre:     '',
            apellido:   '',
            email:      '',
            dni:        '',
            rol:        DBUsuario.roles[0],
            telefono_celular: '',
        },
        validationSchema: Yup.object({
            nombre:     Yup.string().required('El nombre no puede ser vacío'),
            apellido:   Yup.string().required('El apellido no puede ser vacío'),
            email:      Yup.string()
                            .email('Ingrese un correo válido.')
                            .required('El correo no puede ser vacío'),
            dni:        Yup.string()
                            .min(8, 'Al menos 8 carácteres')
                            .max(20, 'Como máximo 20 carácteres')
                            .required('Documento de identidad no puede ser vacío'),
            telefono_celular:   Yup.string()
                                    .min(8, 'Al menos 7 carácteres')
                                    .max(20, 'Como máximo 20 carácteres'),
        }),
        onSubmit: ( args ) => { registrar(args, toggleModal); }
    })

    const handleChange = (e) => {
        formik.handleChange (e);
        errors[e.target.name] = '';
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <CTextField 
                        name='email'
                        label="Correo electrónico"
                        value={formik.values.email}
                        onChange={handleChange}
                        errorText={formik.errors.email || errors.email || null }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CTextField 
                        name='nombre'
                        label="Nombre"
                        value={formik.values.nombre}
                        onChange={handleChange}
                        errorText={formik.errors.nombre || errors.nombre || null }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CTextField 
                        name='apellido'
                        label="Apellido"
                        value={formik.values.apellido}
                        onChange={handleChange}
                        errorText={formik.errors.apellido || errors.apellido || null }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CTextField 
                        name='dni'
                        label="Documento de identidad"
                        value={formik.values.dni}
                        onChange={handleChange}
                        errorText={formik.errors.dni || errors.dni || null }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CTextField 
                        name='telefono_celular'
                        label="Número de celular"
                        value={formik.values.telefono_celular}
                        onChange={handleChange}
                        errorText={formik.errors.telefono_celular || errors.telefono_celular || null }
                    />
                </Grid>
                <Grid item xs={12}>
                    <CSelect
                        name="rol"
                        label="Area del curso"
                        value={formik.values.rol}
                        items={DBUsuario.roles}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SubmitButton text="crear" disabled={loading} variant="outlined"/>
                </Grid>
            </Grid>
        </form>
    )
}

export default AdminFormUser
