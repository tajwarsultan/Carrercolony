import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {CarouselCard} from "../card/CarouselCard"
import "./StyleCarrer.css"
import circle from "../../assets/images/cirlce.png"
import circle2 from "../../assets/images/circle2.png"
import circle3 from "../../assets/images/circle3.png"

export const Carrercolony = ()=>{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    return(
      <>
         <h1 className="services-heading">Most Popular Services</h1>
              <Carousel responsive={responsive} showDots={true} dotListClass="custom-dot-list-style">
                 <div><CarouselCard src={circle}/></div>
                 <div><CarouselCard src={circle2}/></div>
                 <div><CarouselCard src={circle3}/></div>
                 <div><CarouselCard src={circle2}/></div>
                 <div><CarouselCard src={circle3}/></div>
           </Carousel>

      </>
    )
}