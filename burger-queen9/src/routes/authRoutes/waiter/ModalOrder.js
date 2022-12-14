
//////////falta modificar a waitaer

export const NewP = ()=>{
    return (
        <div className="modal fade" id="exampleModal"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" id="container">
                <h3>Ingresa nuevo producto</h3>
                <div className='row'>
                     <label className='col'> Nombre del producto:
                          <input className='inputsize' type='text' name='name' />
                     </label>
                     <label className='col'> Precio:
                          <input className='inputsize' type='number' name='name' />
                     </label>
                </div>
                <div className="containerbuttons">
                     <button className="btn btn-secondary" data-bs-dismiss="modal" id='cancel'>Cancelar</button>
                     <button className="btn btn-primary" id='acept'>Aceptar</button>
                </div>
            </div>
            </div>
        </div>
    )
}