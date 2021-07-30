import { gql } from "@apollo/client";

export const AREAS = gql`
    query __areas__ {
        areas {
            id_area
            area
        }
    }
`;