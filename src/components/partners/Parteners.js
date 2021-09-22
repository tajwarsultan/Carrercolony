import React from "react"
import {Main, Img} from "./PartenersStyle"
import mastercard from "../../assets/images/mastercard.png"
import dropbox from "../../assets/images/dropbox.png"
import google from "../../assets/images/google.png"
import microsoft from "../../assets/images/microsoft.png"



export const Parteners = ()=>{
    return(
        <Main>
                <Img  alt="" src={mastercard}/>
                <Img  alt="" src={dropbox}/>
                <Img  alt="" src={google}/>
                <Img  alt="" src={microsoft}/>
        </Main>
    )
}