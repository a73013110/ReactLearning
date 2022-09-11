import { gql, useQuery } from '@apollo/client'

import Del from './Del'

export default function Query(props) {
    const query = gql`
        query {
            getNowPlayingList {
                id,
                name,
                price
            }
        }
    `;

    const { loading, error, data, refetch } = useQuery(query)
    props.fetch(refetch)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {console.log(data)}
            {
                data.getNowPlayingList.map(item => <div key={item.id} style={{ border: "1px solid black", padding: "20px" }}>
                    <div>名稱：{item.name}</div>
                    <div>價格：{item.price}</div>
                    <Del id={item.id} fetch={() => {
                        refetch()
                    }} />
                </div>)
            }
        </div>
    )
}
