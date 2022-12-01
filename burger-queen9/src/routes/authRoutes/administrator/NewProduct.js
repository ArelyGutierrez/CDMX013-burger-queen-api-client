export const NewP = ()=>{
    return (
        <div className="new">
            <div  class= 'row' id='container'>
                <h3>Ingresa nuevo producto</h3>
                <div class='row'>
                     <label class='col'> Nombre del producto:
                          <input class='inputsize' type='text' name='name' />
                     </label>
                     <label class='col'> Precio:
                          <input class='inputsize' type='number' name='name' />
                     </label>
                </div>
                <div class="containerbuttons">
                     <button className="buttons" id='cancel'>Cancelar</button>
                     <button className="buttons" id='acept'>Aceptar</button>
                </div>
            </div>
        </div>

    )
}