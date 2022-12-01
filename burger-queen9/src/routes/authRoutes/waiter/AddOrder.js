import { Link } from "react-router-dom"
import './AddOrder.css';

export const WaiterNewOrderView = () => {
    return (
        <>
            <header class="headerWaiter"><h1 class="bqwaiter">Burguer Queen</h1>
                <div><p>Fecha|hora</p></div>
                <p>Nombre del mesero</p>
                <button type="button" class="logoutWaiter"><Link to="/">Cerrar Sesión</Link></button>
            </header>

            <button type="button" class="addOrder"><Link to="/neworder">Desayuno</Link></button>
            <button type="button" class="addOrder"><Link to="/neworder">Comida </Link></button>
<main className="mainOrderWaiter">
            <section className="menuSection">
                <section class="lunchdinner">
                    <article className="product"><h4>Café americano</h4><h4>$5</h4></article>
                    <article className="product"><h4>Café con leche</h4><h4>$7</h4></article>
                    <article className="product"><h4>Sandwich de jamón y queso</h4><h4>$10</h4></article>
                    <article className="product"><h4>Jugo de frutas natural</h4><h4>$7</h4></article>
                </section>

                {/* <section class="dinnerdinner">
                    <article>Hamburguesas</article>
                    <article>Hamburguesa simple</article>
                    <article>Hamburguesa doble</article>
                    <article>Papas fritas</article>
                    <article>Aros de cebolla</article>
                    <article>Agua 500ml</article>
                    <article>Agua 750ml</article>
                    <article>Bebida/gaseosa 500ml</article>
                    <article>Bebida/gaseosa 750ml</article>
                    <article></article>
                </section> */}

            </section>

            <section className="orderitems">
                <div className="headerOrder"><h4>Orden:</h4><p>Hora de orden:</p></div>
                <div className="description"><img src="./images/iconDelete.png" alt="delete"></img><p>cantidad</p><p>description</p><p>total</p></div>
                <div className="totalOrder"><h4>TOTAL:</h4><h4> $500</h4></div>
            </section>

</main>

            <div className="confirmOrden">
                <button className="confirmOrdenButton"><Link to="/waiter">Agregar orden</Link></button>
            </div>


            
        </>


    )
}