export const OrderCard = ({id, userid, dataEntry, product, qty}) => {
    return (
      <>
        <div className="col-6 p-4">
              <div className="card">
                <h5 className="card-header" id="cardHeader">#{id} </h5>
                <ul className="list-group list-group-flush">
                      <li className="list-group-item" id="items">{qty}{product}
                    <input className="form-check-input" type="checkbox" id="inputf"/>
                    
                 </li>
                </ul>
                <div class="card-footer" id="cardHeader">
                  <div id="text-left">
                  <p>{userid}</p>
                  <span>hora de recibido:</span>
                  <inpyt type='date'>{dataEntry}</inpyt>
                  </div>
                  <div className="text-end">
                    <button href="#" className="btn" id="finishedOrder">Entregar</button>
                  </div>
                </div>
              </div>
              </div>
      </>
    )
  }

  /* <OrderCard
            key={index}
            id={item.id}
            userid={item.userid}
            dataEntry={item.dataEntry}
            products={item.products.products}*/