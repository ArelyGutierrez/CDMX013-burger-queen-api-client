import { useState } from "react"
//import { OrderCard } from "./menucard"



export const ResumOrdns = ({productos}) => {
    
    const [preparar, setPreparar] = useState({items:[]})

    const handelItems = (item) => {
        setPreparar({...preparar, items:[...preparar.items,item]})
    }

    return (
        <>
        <div className="row col-12">
            <div className="col-4">
        {productos.map(p => (
            <>
             <div className="card col-11" key={p.id}>
                            <div className="card-body" id='cardResum'>
                                <h5 className="card-title">Orden:
                                    <p className='text-end'>#{p.id}</p>
                                </h5>
                                <p>{p.productsqty}</p>
                                <p className="card-text">Hora de entrada:{p.dataEntry}</p>
                                <span>Timer: 00:00 hrs </span>
                                <div className='text-end'>
                                <button onClick={() => {handelItems(p)}} key={p.id} className="btn" id="finishedOrder">Preparar</button>
            
                                </div>
                            </div>
                        </div>
                        <p/>
            </>
        ))}
            </div>  
            <div  className="col-8">
                <div className="container">
                <div className="row justify-content-start">
            {preparar.items.map((item, index) => (
            <>
            
                <div className="col-4">
              <div className="card">
                <h5 className="card-header" id="cardHeader">#{item.id} </h5>
                <ul className="list-group list-group-flush" key={index}>
                    {item.products.map(i => (
                        <>
                        <li key={i}>    
                <span>{i.qty}</span>
                <p>{i.product}</p>
                </li>
                        </>
                    ))}
                </ul>
                <div class="card-footer" id="cardHeader">
                  <div id="text-left">
                  <p>{item.userid}</p>
                  <span>hora de recibido:</span>
                  <inpyt type='date'>{item.dataEntry}</inpyt>
                  </div>
                  <div className="text-end">
                    <button href="#" className="btn" id="finishedOrder">Entregar</button>
                  </div>
                </div>
                </div>
                <p/>
                </div>
             
          </>
            ))}
            
             </div>
           
            </div>
            </div>
      </div>
        </>
    )
}