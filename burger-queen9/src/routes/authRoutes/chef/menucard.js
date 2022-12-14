export const OrderCard = ({producs,id,userid, dateEntry}) => {
    return (
      <>
        <div className="col-6 p-4">
              <div className="card">
                <h5 className="card-header" id="cardHeader">#{id} </h5>
                <ul className="list-group list-group-flush">
                      <li className="list-group-item" id="items">
                    <input className="form-check-input" type="checkbox" id="inputf"/>
                    2 cafe con leche
                 </li>
                  <li className="list-group-item" id="items">
                    <input className="form-check-input" type="checkbox" id="inputf"/>
                    1 sandwich jamon con queso
                   </li>
                  <li className="list-group-item" id="items">
                    <input className="form-check-input" type="checkbox" id="inputf"/>
                    1 aros de cebolla
                    </li>
                </ul>
                <div class="card-footer" id="cardHeader">
                  <div id="text-left">
                  <p>{userid}</p>
                  <span>hora de recibido:</span>
                  <inpyt type='date'>{dateEntry}</inpyt>
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