import React, { useState } from 'react'
import { ApolloProvider, gql, ApolloClient, InMemoryCache, useQuery } from '@apollo/client'

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Query></Query>
            </div>
        </ApolloProvider>
    )
}

function Query() {
    const [id, setId] = useState("631d8d89c32eb2611044b817")
    const query = gql`
        query ($id: String!){
            getNowPlaying(id: $id) {
                id,
                name,
                price
            }
        }
    `;
    const { loading, error, data } = useQuery(query, {
        variables: {
            id: id
        }
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({console.log(error)}</p>;

    return (
        <div>
            {console.log(data)}
            <input value={id} onChange={(evt) => setId(evt.target.value)} />
            {
                data.getNowPlaying.map(item => <div key={item.id}>
                    <div>名稱：{item.name}</div>
                    <div>價格：{item.price}</div>
                </div>)
            }
        </div>
    )
}
