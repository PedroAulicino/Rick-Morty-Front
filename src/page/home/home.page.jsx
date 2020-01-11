import React, { useState, useEffect } from "react";
import CardComponent from '../../components/card.component'
import API from '../../services/api'





export default () => {
    const [chacters, setChacters] = useState([])
    const [first, setFirst] = useState(0)

    const fetchUser = async () => {
        const user = await API().get("character")
        console.log('aui')
        setChacters(user.data.results)
    }
    useEffect(() => {
        fetchUser()
    }, [first])

    return <div>
        {chacters.map(data => <CardComponent key={data.id} image={data.image} name={data.name} ></CardComponent>)}
    </div>
}