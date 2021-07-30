import { gql } from "@apollo/client";

export const ESTADOS_CIVIL = gql`
    query __estadosCivil__ {
        estadosCivil {
            id_estado_civil
        }
    }
`;