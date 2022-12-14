import { useState } from 'react'
import './CardItemsB.css'
// import {handleItems} 
// import iconDelete from './images/iconDelete.png'
// import iconEdit from './images/iconEdit.png'

export const CardItemsB = ({ name, price, image }) => {
    const [order, setOrder] = useState({ mesero: '', mesa: '', items: [] })

    const handleAddItem = (item) => {
        setOrder({ ...order, items: [...order.items, item] })
    }
    return (
        <>
            <button onClick={() => { handleAddItem({ name }, { price }) }} className="product"><img id='menuImage' src={image} alt={name} /><h4>{name}</h4><h4>${price}</h4></button>

        </>

    )
}
