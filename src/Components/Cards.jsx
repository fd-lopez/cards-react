import React from "react";
import Card from "./Card";
import "../App.css"

const cards = [
    {
        id: "card-1",
        imagen: "https://www.eternacadencia.com.ar/images/stories/virtuemart/product/resized/Animalia_SylviaMolloy%20(1)_640x640.jpg",
        title: "Animalia",
        author: "(Narrativa) de Sylvia Molloy",
        price: "$9.999"
    },
    {
        id: "card-2",
        imagen: "https://www.eternacadencia.com.ar/images/stories/virtuemart/product/resized/SoloNosotros_ClaudiaRankine_140x220-01_640x640.jpg",
        title: "Solo nosotros. Una conversación estadounidense.",
        author: "(Ensayo) de Claudia Rankine. Trad.: Cecilia Pavón",
        price: "$9.999"
    },
    {
        id: "card-3",
        imagen: "https://www.eternacadencia.com.ar/images/stories/virtuemart/product/resized/LaCamaraComoMetodo_Brizuela-Uslenghi_140x220-01_640x640.jpg",
        title: "La cámara como método. La fotografía moderna de Grete Stern y Horacio Coppola",
        author: "(Ensayo) de Natalia Brizuela y Alejandra Uslenghi (Comp.)",
        price: "$9.999"
    },
    {
        id: "card-4",
        imagen: "https://www.eternacadencia.com.ar/images/stories/virtuemart/product/resized/ElViajeDeInvierno_GeorgesPerecOulipo_140x220-01_640x640.jpg",
        title: "El viaje de invierno & sus continuaciones",
        author: "(Narrativa) de Georges Perec & Oulipo. Trad.: Eduardo Berti",
        price: "$9.999"
    }
]

function Cards (){
    return (
        <div className="container item-align-center">
            <div className="row">
                {
                    cards.map(card =>(
                <div className="col-md-3" key={card.id}>
                    <Card imagen={card.imagen} title={card.title} author={card.author} price={card.price} />
                </div>
                ))
                }
            </div>
        </div>
    )
}

export default Cards;