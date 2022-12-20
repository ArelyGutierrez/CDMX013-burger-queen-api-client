import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
import './NewOrder.css';
import { APIwaiter } from "./APIwaiter";
import { Time } from "../Time";


export const NewOrder = () => {

    return (
        <>
            <header class="headerWaiter"><h1 class="bqwaiter">Burguer Queen</h1>
                <div><p><Time className='time' /></p></div>
                <p>Nombre del mesero</p>
                <button type="button" class="logoutWaiter"><Link to="/">Cerrar Sesión</Link></button>
            </header>

            <button type="button" class="addOrder" value="desayuno"><Link to="/waiter/neworder">Desayuno</Link></button>
            <button type="button" class="addOrder" value="comida"><Link to="/waiter/neworder/dinner">Comida </Link></button>
            <Outlet />

<main className="mainOrderWaiter">
                            
                <APIwaiter/>  

</main>

 


            
        </>


    )
}