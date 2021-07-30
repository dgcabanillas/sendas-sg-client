import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation __login__ ( 
        $email:     String! 
        $password:  String!
    ) {
        login (
            email:      $email
            password:   $password
        ) {
            token
            errors {
                error
                description
            }
        }
    }
`;

export const REGISTER = gql`
    mutation __register__ (
        $nombre:     String!
        $apellido:   String!
        $email:      String!
        $password:   String!
        $dni:        String!
    ) {
        register (
            nombre:     $nombre
            apellido:   $apellido
            email:      $email
            password:   $password
            dni:        $dni
        ) {
            token
            errors {
                error
                description
            }
        }
    }
`;

export const RECOVER = gql`
    mutation __recover__ ( $email: String! ) {
        recover ( email: $email ) 
    }
`;

export const CONFIRM_ACCOUNT_FROM_LINK = gql`
    mutation __confirmAccountFromLink__ ( $token: String! ) {
        confirmAccountFromLink ( token: $token )
    }
`;

export const RESET_PASSWORD = gql`
    mutation __resetPassword__ ( 
        $token:     String!
        $password:  String!
    ) {
        resetPassword (
            token:      $token
            password:   $password
        ) {
            errors {
                error
                description
            }
        }
    }
`;

export const PROFILE = gql`
    query __profile__ ($id_usuario: String!) {
        profile (id_usuario: $id_usuario) {
            id_usuario
            email
            imagen
            fecha_registro
            dni
            nombre
            apellido
            fecha_nacimiento
            pais
            departamento
            provincia
            distrito
            direccion
            telefono_fijo
            telefono_celular
            rol
            id_genero
            id_estado_civil
        }
    }
`;

// ADMIN
export const REGISTER_BY_ADMIN = gql`
    mutation __registerByAdmin__ (
        $nombre:    String!
        $apellido:  String!
        $email:     String!
        $dni:       String!
        $rol:       String!
        $telefono_celular: String
    ) {
        registerByAdmin (
            nombre:     $nombre
            apellido:   $apellido
            email:      $email
            dni:        $dni
            rol:        $rol
            telefono_celular: $telefono_celular
        ) {
            id_usuario
            nombre
            apellido
        }
    }
`;