import React from 'react'
import { gql, useMutation } from '@apollo/client'

export default function Create(props) {
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

    const nameRef = React.createRef()
    const posterRef = React.createRef()
    const priceRef = React.createRef()

    return (
        <div>
            <p>名字<input type="text" ref={nameRef} /></p>
            <p>海報<input type="text" ref={posterRef} /></p>
            <p>價格<input type="number" ref={priceRef} /></p>
            <button onClick={() => {
                createFilm({
                    variables: {
                        input: {
                            name: nameRef.current.value,
                            poster: posterRef.current.value,
                            price: Number(priceRef.current.value)
                        }
                    }
                }).then(res => {
                    props.refetch()
                })
            }}>add</button>
        </div>
    )
}
