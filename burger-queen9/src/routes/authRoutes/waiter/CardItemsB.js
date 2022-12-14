import './CardItemsB.css'
export const CardItemsB=({name, price, image, type})=>{

    return(

        <article className="product"><img src={image} alt={name}/><h4>{name}</h4><h4>${price}</h4></article>
    )
}