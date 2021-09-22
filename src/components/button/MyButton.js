import React from "react"
import { BsArrowRight } from 'react-icons/bs';
import "./styleButton.css"

export const MyButton = ({title, icon, bg, color})=>{
    return(
         <button className="Button" style={{background:bg, color:color, marginBottom: '15px'}}>
           {title}
          {
            icon ?
             <BsArrowRight />
             : null
          }
         </button>
    )
}