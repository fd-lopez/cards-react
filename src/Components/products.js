import React from "react";

const Products=({data, addToCart})=>{
    const {id, title, img, price, author}=data;
    return(
        <div className="card">
            <img style={{height:225}} src={img} alt="/"></img>
            <h6 className="card-title">{title}</h6>
            <p>{author}</p>
            <h6>${price}</h6>
            <button onClick={()=>addToCart(id)}>Comprar</button>
        </div>
    );
}
export default Products;