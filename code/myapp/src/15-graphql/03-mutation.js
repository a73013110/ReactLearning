import React, { useState } from 'react'
import { ApolloProvider, gql, ApolloClient, InMemoryCache, useMutation } from '@apollo/client'

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Create></Create>
            </div>
        </ApolloProvider>
    )
}

function Create() {
    // const [id, setId] = useState("631d8d89c32eb2611044b817")
    const query = gql`
        mutation createFilm($input: FilmInput){
            createFilm(input: $input) {
                id,
                name,
                price
            }
        }
    `;
    const [createFilm, { data, loading, error }] = useMutation(query)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({console.log(error)}</p>;

    return (
        <div>
            <button onClick={() => {
                console.log(data)
                createFilm({
                    variables: {
                        input: {
                            name: "333",
                            poster: "http://333",
                            price: 30
                        }
                    }
                })
            }}>add</button>
        </div>
    )
}
