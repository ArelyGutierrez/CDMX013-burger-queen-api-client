import { MenuList } from "./MenuList";
export const IterProducts = ({products}) =>{
    return(
        <>
            {
                 products.map(product => (
                    <MenuList
                    name ={product.name}
                    price={product.price}
                    type={product.type}
                    id={product.id}
                    />
                 ))
            }
        </>
    )
}