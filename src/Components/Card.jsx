import React from "react";
import "../App.css"

function Card (props){
    return (
        <div className="card">
            <div class="container">
                <img src={props.imagen} alt=""></img>
                <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.author}</p>
                <p class="card-price">{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;