import { useEffect, useState } from "react"
import Axios from   "axios";
import { ItemFilter } from "./ItemFilter";

export const APIwaiter=()=>{
    const [items, setItems]=useState([])
    //se ejecuta cuando cargue el componente
    useEffect(()=>{
        //hacer la consulta a la api
        Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/product')
        .then(response => {
            const information = response.data
            console.log(information)
            setItems(information)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    return(
        <ItemFilter products={items}/>
    ) 
}

export const TypeFilter = () =>{
    return(
        <>
        {APIwaiter.filter((item)=>
        item.type==='comida'
        )}
        </>
    )
}