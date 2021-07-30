import { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import AppContext from 'src/context/app/app.context';
import AuthContext from 'src/context/auth/auth.context';
import { CURSO_APERTURADO } from 'src/graphql/cursoAperturado';

export const getCursoAperturado = () => {

    const [callback, { data, error, loading }] = useLazyQuery( CURSO_APERTURADO );
    const { setCursoAperturado } = useContext( AppContext );
    const { user } = useContext( AuthContext );

    const action = ( id_curso_aperturado ) => {
        callback({variables: { id_curso_aperturado }})
    }

    useEffect(() => {
        if( data?.cursoAperturado ) {
            const curso = { ...data.cursoAperturado };
            curso.matriculado = false;
            if( user ) {
                const lista_matriculados = curso.matriculas.reduce(
                    (lista, matricula) => 
                    [...lista, matricula.alumno.id_usuario]
                ,[])
                curso.matriculado = lista_matriculados.includes(user.id_usuario)
            }
            setCursoAperturado( curso );
        }
    }, [data])

    return [action, { error, loading }];
}
