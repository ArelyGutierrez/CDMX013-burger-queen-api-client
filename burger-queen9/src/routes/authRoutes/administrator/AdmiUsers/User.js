import { NavBar } from '../NavBar'
import { NewU } from "./NewUser";
import { ConsumeUserAPI } from "./MAPIUser";
export const AdminUsersView = ()=>{
    return (
        <div>
        <NavBar />
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="buttonGreen"> + Agregar Usuario </button>
                    <table id='menu' className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Eliminar</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Id-Usuario</th>
                            <th scope="col">Cargo</th>
                            </tr>
                        </thead>
                            <ConsumeUserAPI />
                    </table>
            </div>
        </div>
            <NewU />
    </div>
    )
}