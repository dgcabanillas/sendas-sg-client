import { gql } from "@apollo/client";

export const MATRICULAR_EN_CURSO = gql`
    mutation __matricularEnCurso__ (
        $id_curso_aperturado: Int!
        $id_usuario:          String!
        $id_precio:           Int!
    ) {
        matricularEnCurso (
            id_curso_aperturado: $id_curso_aperturado
            id_usuario:          $id_usuario
            id_precio:           $id_precio
        ) {
            id_matricula
            alumno {
                id_usuario
            }
            curso {
                id_curso_aperturado
            }
        }
    }
`;