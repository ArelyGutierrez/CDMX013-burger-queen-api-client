
import { NavBar } from "./NavBar";
import { NewP } from "./NewProduct";

export const AdminMainView = ()=>{
    return (
        <div>
            <NavBar />
            <div class="row">
                <div class="col">
                <button class='buttonGreen' > + Agregar desayuno </button>
                <ul class='ulmenu'>
                    <li className="elementList">1</li>
                    <li className="elementList">2</li>
                    <li className="elementList">3</li>
                </ul>
                </div>
            <div class="col">
            <button class='buttonGreen'> + Agregar  Comida / Cena </button>
                <ul class='ulmenu'>
                    <li className="elementList">1</li>
                    <li className="elementList">2</li>
                    <li className="elementList">3</li>
                </ul>
            </div>
            </div>
           <NewP />
            </div>

    )
}