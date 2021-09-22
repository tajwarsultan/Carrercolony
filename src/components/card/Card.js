import React from "react";
import "./CardStyle.css"
import { BsCursorFill } from 'react-icons/bs';

export const Card = ({src, title, subTitle})=>{
    return(
        <div className="cardContainer">
            <h2 className="H2">
                {title}
            </h2>
            <h1 className="H1">
                {subTitle}
            </h1>
            <div className="a">
            <img src={src} className="cardImg"/>
             <div class="overlay">
                 <div className="overlay-icon">
                   <BsCursorFill size="50" className="icon"/>
                 </div>
             </div>
            </div>
        </div>
    )
}