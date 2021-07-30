import { gql } from "@apollo/client";

export const CATEGORIAS = gql`
    query __categorias__ {
        categorias {
            id_categoria
            categoria
        }
    }
`;