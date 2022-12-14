import { NavBar } from "../NavBar";
import { NewP } from "./NewProduct";
import { ConsumeAPI } from "./MAPI";
export const AdminMainView = ()=>{
    return (
        <div>
            <NavBar />
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="buttonGreen"> + Agregar desayuno </button>
                        <table id='menu' className="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Eliminar</th>
                                <th scope="col">Ver</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">id</th>
                                </tr>
                            </thead>
                                <ConsumeAPI />
                        </table>
                </div>
            </div>
                <NewP />
        </div>
    )
}