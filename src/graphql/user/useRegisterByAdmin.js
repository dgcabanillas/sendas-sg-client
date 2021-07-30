import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import { REGISTER_BY_ADMIN } from './index';
import { getGraphQLError } from 'src/util/helpers';
import { useState } from 'react';

export const useRegisterByAdmin = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState({});
    const [callback, { loading }] = useMutation(REGISTER_BY_ADMIN, {
        /*update( cache, { data: { crearCurso: nuevo }} ) {
            const { cursos } = cache.readQuery({ query: CURSOS });
            cache.writeQuery({
                query: CURSOS,
                data: {
                    cursos: [nuevo, ...cursos]
                }
            })
        }*/
    });

    const action = async ( values, closeModal ) => {
        try {
            console.log( values );
            await callback({ variables: values });
            Swal.fire(
                '¡Usuario registrado!',
                'Se ha registrado el usuario con éxito.',
                'success'
            ).then(({ isConfirmed }) => { isConfirmed && ( closeModal() )});
        } catch (e) {
            console.log(e);
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

