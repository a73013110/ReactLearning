import axios from 'axios'
import React, { useEffect } from 'react'

export default function Commingsoon() {
    useEffect(() => {
        axios({
            url:"/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=F6812C901C9C11EDABA1E3CF9445FF11557745DA670F42469F6CEA04C65E7E7D&optimus_risk_level=71&optimus_code=10",
            headers:{
                "content-type": "application/json; charset=utf-8"
            }
        }).then(res => {
            console.log(res.data)
        })
    })

    return (
        <div>Commingsoon</div>
    )
}
