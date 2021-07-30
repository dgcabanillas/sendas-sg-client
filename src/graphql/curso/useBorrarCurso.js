import { useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';
import { BORRAR_CURSO, CURSOS } from './index';

export const useBorrarCurso = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [callback, {error, loading}] = useMutation(BORRAR_CURSO, {
        update( cache, { data: { borrarCurso: id_curso }} ) {
            const query = cache.readQuery({ query: CURSOS });
            if( query ) {
                const { cursos } = query;
                cache.writeQuery({
                    query: CURSOS,
                    data: {
                        cursos: cursos.filter( item => item.id_curso !== id_curso )
                    }
                })
            }
        }
    });

    const action = (id_curso, goto) => {
        Swal.fire({
            title: '¿Está seguro de eliminar este curso?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'No, Cancelar'
        }).then( async (result) => {
            if( result.value ) {
                try {
                    await callback({ variables: { id_curso }});
                    Swal.fire(
                        '¡Curso eliminado!',
                        'Se ha eliminado el curso correctamente, recuerde que esta acción no se puede deshacer',
                        'success'
                    ).then(({ isConfirmed }) => { isConfirmed && goto && ( goto() )});
                } catch (e) {
                    enqueueSnackbar( 'Algo salió mal.', {variant: 'error'})
                }
            }
        })
    }

    return [action, {error, loading}];
}

