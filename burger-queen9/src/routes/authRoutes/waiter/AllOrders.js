import { Link } from "react-router-dom"
import './AllOrders.css';

export const WaiterMainView = () => {
    return (
    <>
       <header class="headerWaiter"><h1 class="bqwaiter">Burguer Queen</h1>
       <div><p>Fecha|hora</p></div>
       <p>Nombre del mesero</p>
       <button type="button" class="logoutWaiter"><Link to="/">Cerrar Sesión</Link></button>
       </header>
   
   
         <button type="button" class="addOrder"><Link to="/neworder">Agregar orden</Link></button>
   
         <main class="mainWaiter">
        
         <section class="orderisReady"> 
            <p class="oneOrder">Orden lista:</p>
            <article class="card"><h4 className="leftItem">No. Orden: </h4><h4 id="tableNumber">No. Mesa: </h4>
                                  <h4 className="leftItem">1###</h4><h4>####</h4>
                                  <h4 className="leftItem">➕</h4><button type="button" class="finishedOrder">Finalizar</button></article>
            <article class="card"><h4 className="leftItem">No. Orden: </h4><h4 id="tableNumber">No. Mesa: </h4>
                                  <h4 className="leftItem">2###</h4><h4>####</h4>
                                  <h4 className="leftItem">➕</h4><button type="button" class="finishedOrder">Finalizar</button></article>
            
            
        </section>
        <section class="orderInProcess">
                <p>Orden en proceso:</p>
                <article class="cardOrderInProcess"><h4 className="leftItem">No. Orden: </h4><h4 id="tableNumber">No. Mesa: </h4>
                                  <h4 className="leftItem">1###</h4><h4>####</h4>
                                  <h4 className="timer">⏰ Timer:</h4><h4>00:00 hrs.</h4>
                                  <h4 className="leftItem">➕</h4><button type="button" class="finishedOrder">Finalizar</button></article>
        </section>

        </main>
  
   </>    
    )
}