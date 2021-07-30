import { gql } from "@apollo/client";

export const CURSO_APERTURADO = gql`
    query __cursoAperturado__ ($id_curso_aperturado: Int!) {
        cursoAperturado (id_curso_aperturado: $id_curso_aperturado) {
            id_curso_aperturado
            periodo
            descripcion
            fecha_inicio
            fecha_fin
            imagen
            pdf
            estado
            curso {
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
            modalidad {
                id_modalidad
                modalidad
            }
            precios_matricula {
                id_precio
                descripcion
                descuento
                tipo_descuento
                activo
                monto {
                    id_monto
                    monto
                    moneda {
                        id_moneda
                        codigo
                        moneda
                        simbolo
                    }
                }
            }
            modulos {
                id_modulo
                modulo
                nro_modulo
                fecha_inicio
                fecha_fin
                precios_modulo {
                    id_precio
                    descripcion
                    descuento
                    tipo_descuento
                    activo
                    monto {
                        id_monto
                        monto
                        moneda {
                            id_moneda
                            codigo
                            moneda
                            simbolo
                        }
                    }
                }
            }
            profesores {
                id_usuario
                nombre
                apellido
                imagen
            }
            matriculas {
                id_matricula
                alumno {
                    id_usuario
                }
                curso {
                    id_curso_aperturado
                }
            }
        }
    }
`;

export const CURSOS_APERTURADOS = gql`
    query __cursosAperturados__ {
        cursosAperturados {
            id_curso_aperturado
            periodo
            descripcion
            fecha_inicio
            fecha_fin
            imagen
            pdf
            estado
            curso {
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
            modalidad {
                id_modalidad
                modalidad
            }
        }
    }
`;

/*
export const CREAR_CURSO_APERTURADO = gql`
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

export const EDITAR_CURSO_APERTURADO = gql`
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

export const BORRAR_CURSO_APERTURADO = gql`
    mutation __borrarCurso__ ($id_curso: ID!) {
        borrarCurso(id_curso: $id_curso) 
    }
`;
*/