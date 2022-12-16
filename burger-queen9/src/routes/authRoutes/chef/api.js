import Axios from 'axios'
import { useState, useEffect } from 'react'
import { ResumOrdns } from './ResumOrdns'


export const ConsumirApi = () => {
    const [productos, setProductos] = useState([])
        useEffect(() => {
            Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/order')
            .then(response => {
                setProductos(response.data)
            })
        })
        return (
            <ResumOrdns productos={productos} key={productos.id}/>
        )
}