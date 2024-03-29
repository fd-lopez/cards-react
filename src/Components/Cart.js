import React, { useReducer } from "react";
import { cartInitialState } from "./cartReducer";
import { cartReducer } from "./cartReducer";
import ItemCart from "./itemCart";
import Products from "./products";
import { TYPES } from "./actions";
import Title from "./Title"
import cartImg from "./image/carrito-de-compras.png"

const Cart = () =>{
    
    //useReducer para manejar las acciones
    const [state, dispatch]=useReducer(cartReducer, cartInitialState)
    //Para mapear productos:
    const {products, cart}=state
    //funciones manejadoras de acciones
    
const addToCart=(id)=>{dispatch({type:TYPES.ADD_TO_CART, payload:id})};//agregar al carrito

const deleteFromCart=(id, deleteAll)=>{
    if (deleteAll){
        dispatch({type:TYPES.REMOVE_ALL_ITEM, payload:id});
    }else{
        dispatch({type:TYPES.REMOVE_ITEM, payload:id})
    }
};//Borrar del carrito con booleano

const clearCart=()=>{dispatch({type:TYPES.CLEAR_CART})};//Limpiar carrito, reseteo

    return(
        <div>
            <img style={{height:75}} src={cartImg} alt="/"></img>
            {/*mapeo de productos agregados*/}
            <div>
                {cart.map(item=><ItemCart key={item.id} data={item} deleteFromCart={deleteFromCart}/>)}
            </div>
            <button onClick={clearCart}>Clear Cart</button>
            <Title title="Nuevos lanzamientos"/>
            {/*mapeo de productos para agregar*/}
            <div>
                {products.map((product)=><Products key={product.id} data={product} addToCart={addToCart}/>)}
            </div>
            
        </div>
    )
}
export default Cart;