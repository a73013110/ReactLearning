import React from 'react'
import { useParams } from 'umi'

export default function id() {
    const params = useParams();
    
    return (
        <div>{params.id}</div>
    )
}
