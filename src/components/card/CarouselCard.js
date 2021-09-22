import React from "react";
import "./styleCousel.css"
import { BsStarFill } from 'react-icons/bs';
import vector from "../../assets/images/Vector.png"


export const CarouselCard = ({src})=>{
    return(
        <>
        <div className="carrer-main">
              <div className="star-img-div">
                 <img src={src} className="star-img"/>
              </div>
            <div className="content">
            <img src={vector} className="vector"/>
               <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem.
               </p>
            <div>
              <div className="stars">
                  <div>
                    <h6 className="Smith">
                        Amanda Smith
                    </h6>
                    <p  className="sub-title">
                        CEO , Behance
                    </p>
                  </div>
              <div className="star-icon">
                <BsStarFill color="#FFDE55"/>
                <BsStarFill color="#FFDE55"/>
                <BsStarFill color="#FFDE55"/>
                <BsStarFill color="#FFDE55"/>
                <BsStarFill color="#FFDE55"/>
              </div>
              </div>
            </div>
            </div>
          </div>
          </>
    )
}