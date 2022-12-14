import  Axios  from "axios";
import { useState, useEffect } from "react";
import { IterUser } from "./ConsumeUserAPI";
export const ConsumeUserAPI = () => {
    const [ OneUser, setOneProduct] = useState([])
    useEffect(()=>{
        Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/auth')
        .then(response =>{
            setOneProduct(response.data)
        })
    })
    return(
        <IterUser users={OneUser} />
    )
}