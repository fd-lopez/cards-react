import React from "react";

const Products=({data, addToCart})=>{
    const {id, title, img, price}=data;
    return(
        <div>
            <h4>{title}</h4>
            <img src={img} alt="/"></img>
            <h5>${price}</h5>
            <button onClick={()=>addToCart(id)} >Add</button>
        </div>
    );
}
export default Products;