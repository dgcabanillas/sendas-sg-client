import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { mergeArrays } from 'src/util/helpers';

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    cursos: {
                        merge ( existing = [], incoming ) {
                            return mergeArrays( existing, incoming, 'id_curso' );
                        }
                    }
                }
            }
        }
    }),
    link: new HttpLink({
        uri: process.env.API_URL,
        fetch,
    })
});

export default client;