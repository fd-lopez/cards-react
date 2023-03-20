//función manejadora
import { TYPES } from "./actions";
import { listProducts } from "./listProducts";

//varible del estado inicial. Cart arranca vacío + productos disponibles
export const cartInitialState={
    products:[...listProducts],
    cart:[]
};

//función reductora
//(estado anterior a que se ejecute la función, acciones)
export function cartReducer(state, action){
    switch (action.type){
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload[0],
                cart: action.payload[1]
            }
        }
        case TYPES.ADD_TO_CART:{
            //producto que sea igual al producto que están pasando por payload.
            const newItem=state.products.find((product)=>product.id===action.payload);
            //Preguntar si ese item ya está en el carrito: 
            let itemInCart=state.cart.find((item)=>item.id===newItem.id);
            //una vez encontrado el producto, lo agrego al array cart:[]
            //dejo productos del carrito, agrego el nuevo.
            //con operador ternario:
            return itemInCart?{...state, cart: state.cart.map((item)=>item.id===newItem.id?{...item, quantity:item.quantity+1}:item),}:{...state, cart:[...state.cart, {...newItem, quantity:1}],};
        }
        case TYPES.REMOVE_ITEM:{
            const itemDelete=state.cart.find((item)=>item.id===action.payload);
            return itemDelete.quantity>1?{...state, cart:state.cart.map((item)=>item.id===action.payload?{...item, quantity:item.quantity-1}:item,)}:{...state, cart:state.cart.filter((item)=>item.id!==action.payload)};
        }
        case TYPES.REMOVE_ALL_ITEM:{
            return {
                ...state, cart:state.cart.filter(item=>item.id!==action.payload),
            };
        }
        case TYPES.CLEAR_CART:{
            //Retorno estado inicial, vuelve a 0:
            return cartInitialState;
        }
        default: break;
    }
}