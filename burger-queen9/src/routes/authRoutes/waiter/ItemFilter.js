import { useState } from "react"
import { Link } from "react-router-dom"
import { CardItemsB } from "./CardItemsB"
// import iconDelete from './images/iconDelete.png'


export const ItemFilter = ({ products }) => {
    const [comanda, setComanda] = useState({ items: [] })

    const handleAddItem = (item) => {
        setComanda({ ...comanda, items: [...comanda.items, item] })
    }
    return (
        <>
            <section className="menuSection">        
            {products.map(product => (
               
                <button onClick={() => { handleAddItem(product) }} className="product">
                    <CardItemsB
                        type={product.type}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                </button> 
            ))}
            </section>

            <section className="orderitems">
                <div className="headerOrder"><h4>Orden:</h4><p>Hora de orden:</p></div>

                {comanda.items.map(item => (
                    <>
                        <div className="description">
                            <p id="comanda">{item.name}</p><p id="comandaPrice">{item.price}</p>
                        </div>
                    </>
                ))}


                <div className="totalOrder"><h4>TOTAL:</h4><h4>➡$500</h4></div>
           

            <div className="confirmOrden">
                <button className="confirmOrdenButton"><Link to="/waiter">Agregar orden</Link></button>
            </div>
            </section>
        </>
    )
}