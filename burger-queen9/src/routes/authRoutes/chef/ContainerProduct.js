import { OrderCard } from "./menucard"
export const TarjetaProductos = ({productos}) => {
    return (
      <>
      {productos.map(p => (
        <>
        <br/>
        <OrderCard
        id= {p.id}
        products={p.products}
        userid={p.userid}
        dateEntry={p.dateEntry}
        />
        <br/>
        </>
      )
      )}
      </>
    )
}