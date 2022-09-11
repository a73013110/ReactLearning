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
                <Delete></Delete>
            </div>
        </ApolloProvider>
    )
}

function Delete() {
    // const [id, setId] = useState("631d8d89c32eb2611044b817")
    const query = gql`
        mutation ($id: String!){
            deleteFilm(id: $id)
        }
    `;
    const [deleteFilm, { data, loading, error }] = useMutation(query)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({console.log(error)}</p>;

    return (
        <div>
            <button onClick={() => {
                deleteFilm({
                    variables: {
                        id: "631dd40d890ac91b142f9d35"
                    }
                }).then(res => {
                    console.log(res)
                })
            }}>del</button>
        </div>
    )
}
