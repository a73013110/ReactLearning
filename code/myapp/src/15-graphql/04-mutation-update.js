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
                <Update></Update>
            </div>
        </ApolloProvider>
    )
}

function Update() {
    // const [id, setId] = useState("631d8d89c32eb2611044b817")
    const query = gql`
        mutation ($id: String!, $input: FilmInput){
            updateFilm(id: $id, input: $input) {
                id,
                name,
                price
            }
        }
    `;
    const [updateFilm, { data, loading, error }] = useMutation(query)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({console.log(error)}</p>;

    return (
        <div>
            <button onClick={() => {
                console.log(data)
                updateFilm({
                    variables: {
                        id: "631dd14d890ac91b142f9d2a",
                        input: {
                            name: "333",
                            poster: "http://333",
                            price: 30
                        }
                    }
                })
            }}>update</button>
        </div>
    )
}
