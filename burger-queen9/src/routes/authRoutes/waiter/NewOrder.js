import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
import './NewOrder.css';
import { APIwaiter } from "./APIwaiter";


export const NewOrder = () => {

    return (
        <>
            <header class="headerWaiter"><h1 class="bqwaiter">Burguer Queen</h1>
                <div><p>Fecha|hora</p></div>
                <p>Nombre del mesero</p>
                <button type="button" class="logoutWaiter"><Link to="/">Cerrar Sesión</Link></button>
            </header>

            <button type="button" class="addOrder"><Link to="/waiter/neworder">Desayuno</Link></button>
            <button type="button" class="addOrder"><Link to="/waiter/neworder/dinner">Comida </Link></button>
            <Outlet />

<main className="mainOrderWaiter">
            <section className="menuSection">
                
                <section class="dinnerdinner">
                <APIwaiter/>  

                </section>
 
            </section>

            <section className="orderitems">
                <div className="headerOrder"><h4>Orden:</h4><p>Hora de orden:</p></div>
                <div className="description"><p>❌📝</p><p>cantidad</p><p>description</p><p>total</p></div>
               
                <div className="totalOrder"><h4>TOTAL:</h4><h4>➡$500</h4></div>
            </section>

</main>

            <div className="confirmOrden">
                <button className="confirmOrdenButton"><Link to="/waiter">Agregar orden</Link></button>
            </div>


            
        </>


    )
}