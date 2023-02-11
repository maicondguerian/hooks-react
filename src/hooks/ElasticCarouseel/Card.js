import React from "react";
import './styles.css'



const Cards = ({ src }) =>{
    return(
        <>
        <div className="card">
            <img src={src} />
            
        </div>
        
        
        </>
    )
}

export default Cards;