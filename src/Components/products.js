import React from "react";

const Products=(props)=>{
    const {data, addToCart}=props;
    return(
        <div>
            <h4>{data.title}</h4>
            <img src={data.img}></img>
            <h5>${data.price}</h5>
            <button onClick={()=>addToCart(id)} >Add</button>
        </div>
    );
}
export default Products;