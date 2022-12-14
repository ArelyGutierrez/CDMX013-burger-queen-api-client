export const Dinner =()=>{
    return (
        <>
<main className="mainOrderWaiter">
            <section className="menuSection">

                 <section class="menu">
                    {/* <article className="product"><h4>Hamburguesas</h4><h4>$10</h4></article> */}
                    <article className="product"><h4>Hamburguesa simple</h4><h4>$10</h4></article>
                    <article className="product"><h4>Hamburguesa doble</h4><h4>$15</h4></article>
                    <article className="product"><h4>Papas fritas</h4><h4>$5</h4></article>
                    <article className="product"><h4>Aros de cebolla</h4><h4>$5</h4></article>
                    <article className="product"><h4>Agua 500ml</h4><h4>$5</h4></article>
                    <article className="product"><h4>Agua 750ml</h4><h4>$7</h4></article>
                    <article className="product"><h4>Bebida/gaseosa 500ml</h4><h4>$7</h4></article>
                    <article className="product"><h4>Bebida/gaseosa 750ml</h4><h4>$10</h4></article>
                    <article></article>
                </section> 

            </section>

            <section className="orderitems">
                <div className="headerOrder"><h4>Orden:</h4><p>Hora de orden:</p></div>
                
                <div className="totalOrder"><h4>TOTAL:</h4><h4>➡$500</h4></div>
            </section>

</main>

            <div className="confirmOrden">
                <button className="confirmOrdenButton">Agregar orden</button>
            </div>
        </>
    )

}