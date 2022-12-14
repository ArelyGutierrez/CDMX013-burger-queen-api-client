import  Axios  from "axios";
import { useState, useEffect } from "react";
import { IterProducts } from "./ContainerMenu";
export const ConsumeAPI = () => {
    const [ Oneproduct, setOneProduct] = useState([])
    useEffect(()=>{
        Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/product')
        .then(response =>{
            setOneProduct(response.data)
        })
    })
    return(
        <IterProducts products={Oneproduct} />
    )
}