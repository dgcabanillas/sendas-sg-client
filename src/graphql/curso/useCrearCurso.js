import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import { CREAR_CURSO, CURSOS } from './index';
import { getGraphQLError } from 'src/util/helpers';
import { useState } from 'react';

export const useCrearCurso = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState({});
    const [callback, { loading }] = useMutation(CREAR_CURSO, {
        update( cache, { data: { crearCurso: nuevo }} ) {
            const { cursos } = cache.readQuery({ query: CURSOS });
            cache.writeQuery({
                query: CURSOS,
                data: {
                    cursos: [nuevo, ...cursos]
                }
            })
        }
    });

    const action = async ( values, closeModal ) => {
        try {
            await callback({ variables: values });
            Swal.fire(
                '¡Curso creado!',
                'Se ha creado el curso correctamente.',
                'success'
            ).then(({ isConfirmed }) => { isConfirmed && ( closeModal() )});
        } catch (e) {
            const err = getGraphQLError(e);
            if( err ) {
                setErrors( err );
            } else {
                enqueueSnackbar( 'Algo salió mal.', { variant: 'error' })
            }
        }
    }

    return [action, { errors, loading }];
}

