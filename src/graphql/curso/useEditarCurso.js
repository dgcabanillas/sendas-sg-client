import { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import { EDITAR_CURSO, CURSOS } from './index';
import { getGraphQLError } from 'src/util/helpers';
import AppContext from 'src/context/app/app.context';

export const useEditarCurso = () => {

    const { enqueueSnackbar } = useSnackbar();  
    const { curso, setCurso } = useContext(AppContext);
    const [errors, setErrors] = useState({});
    const [callback, { loading }] = useMutation(EDITAR_CURSO, {
        update( cache, { data: { editarCurso: nuevo }} ) {
            if( curso && nuevo.id_curso == curso.id_curso ) {
                setCurso( nuevo );
            }
            const query = cache.readQuery({ query: CURSOS });
            if( query ) {
                const { cursos } = query;
                cache.writeQuery({
                    query: CURSOS,
                    data: {
                        cursos: [...cursos.map( item => item.id_curso === nuevo.id_curso ? nuevo : item )]
                    }
                })
            }
        }
    });

    const action = async ( values, closeModal ) => {
        try {
            await callback({ variables: values });
            Swal.fire(
                '¡Curso editado!',
                'Se han actualizado los datos del curso.',
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