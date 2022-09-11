import React from 'react'
import { ApolloProvider, gql, ApolloClient, InMemoryCache, useQuery } from '@apollo/client'
import Query from './components/Query';
import Create from './components/Add';
import { toJS } from 'mobx';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

export default function App() {
    let fetch = null

    return (
        <ApolloProvider client={client}>
            <div>
                <Create refetch={() => {
                    fetch()
                }} />
                <Query fetch={(refetch) => {
                    fetch = refetch
                    // console.log(fetch)
                }} />
            </div>
        </ApolloProvider>
    )
}
