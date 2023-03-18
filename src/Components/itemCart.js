//listado de compras
const ItemCart=({data, deleteFromCart})=>{
    const {id, title, price, quantity}=data;
    return(
        <div>
            <h5>
                {title} - ${price} - {quantity}u - Subtotal: ${price*quantity}
            </h5>
            <button onClick={()=>deleteFromCart(id, false)} >Eliminar uno</button>
            <button onClick={()=>deleteFromCart(id, true)} >Eliminar todo</button>
        </div>
    );
}
export default ItemCart;