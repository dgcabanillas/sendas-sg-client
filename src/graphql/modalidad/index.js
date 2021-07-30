import { gql } from "@apollo/client";

export const MODALIDADES = gql`
    query __modalidades__ {
        modalidades {
            id_modalidad
            modalidad
        }
    }
`;