import { gql } from "@apollo/client";

export const CURSO = gql`
    query __curso__ ($id_curso: ID!) {
        curso (id_curso: $id_curso) {
            id_curso
            curso
            fecha_creacion
            area {
                id_area
                area
            }
            categoria {
                id_categoria
                categoria
            }
        }
    }
`;

export const CURSOS = gql`
    query __cursos__ {
        cursos {
            id_curso
            curso
            fecha_creacion
            area {
                id_area
                area
            }
            categoria {
                id_categoria
                categoria
            }
        }
    }
`;

export const CREAR_CURSO = gql`
    mutation __crearCurso__ (
        $id_curso: ID!
        $curso: String!
        $id_area: Int!
        $id_categoria: Int!
    ) {
        crearCurso (
            id_curso: $id_curso
            curso: $curso
            id_area: $id_area
            id_categoria: $id_categoria
        ) {
            id_curso
            curso
            area {
                id_area
                area
            }
            categoria {
                id_categoria
                categoria
            }
        }
    }
`;

export const EDITAR_CURSO = gql`
    mutation __editarCurso__ (
        $id_curso:ID!
        $curso:String!
        $id_area:Int!
        $id_categoria:Int!
    ) {
        editarCurso (
            id_curso: $id_curso
            curso: $curso
            id_area: $id_area
            id_categoria: $id_categoria
        ) {
            id_curso
            curso
            area {
                id_area
                area
            }
            categoria {
                id_categoria
                categoria
            }
        }
    }
`;

export const BORRAR_CURSO = gql`
    mutation __borrarCurso__ ($id_curso: ID!) {
        borrarCurso(id_curso: $id_curso) 
    }
`;