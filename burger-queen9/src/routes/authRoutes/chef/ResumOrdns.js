import { useState } from "react"
//import { OrderCard } from "./menucard"



export const ResumOrdns = ({productos}) => {
    
    const [preparar, setPreparar] = useState({items:[]})

    const handelItems = (item) => {
        setPreparar({...preparar, items:[...preparar.items,item]})
    }

    return (
        <>
        {productos.map(p => (
            <>
            <button onClick={() => {handelItems(p)}} key={p.id}>
             <div className="card" key={p.id}>
                            <div className="card-body" id='cardResum'>
                                <h5 className="card-title">Orden:
                                    <p className='text-end'>#{p.id}</p>
                                </h5>
                                <p>{p.qty}</p>
                                <p className="card-text">Hora de entrada:{p.dataEntry}</p>
                                <span>Timer: 00:00 hrs </span>
                                <div className='text-end'>
                                    <a className="btn" id="finishedOrder">Preparar</a>
                                </div>
                            </div>
                        </div>
                        </button>
            </>
        ))}

            {preparar.items.map((item, index) => (
            <>
              <div className="card">
                <h5 className="card-header" id="cardHeader">#{item.id} </h5>
                <ul className="list-group list-group-flush">
                <span>{item.products.qty}</span>
                <p>{item.products.product}</p>
                </ul>

                </div>
            
          </>
            ))}
        
        </>
    )
}