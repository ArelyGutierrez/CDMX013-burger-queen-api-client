import { CardItemsB } from "./CardItemsB"

export const ItemFilter = ({ products }) => {
    return (
        <>
            {products.map(product => (
                <CardItemsB
                    type={product.type}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            ))
            }

        </>
    )
}