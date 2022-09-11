import React from 'react'
import { gql, useMutation } from '@apollo/client'

export default function Delete(props) {
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
                        id: props.id
                    }
                }).then(res => {
                    console.log(res)
                    props.fetch()
                })
            }}>del</button>
        </div>
    )
}
