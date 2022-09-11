import React from 'react'
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
    const query = gql`
        query {
            getNowPlayingList {
                id,
                name,
                price
            }
        }
    `;

    const { loading, error, data } = useQuery(query)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {console.log(data)}
            {
                data.getNowPlayingList.map(item => <div key={item.id}>
                    <div>名稱：{item.name}</div>
                    <div>價格：{item.price}</div>
                </div>)
            }
        </div>
    )
}
