import React from 'react'
import { useState } from "react";
import Data from "../../Data.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Productthree from './Productthree';
const SlickSlider = Slider.default ? Slider.default : Slider;
const Product1 = () => {
    const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,           
  autoplaySpeed: 2000,      
  pauseOnHover: true,     
  cssEase: "linear",

beforeChange: (prev, next) => {
    setDotActive(next);
  },

  appendDots: (dots) => (
    <div style={{
        position: "absolute",
        top: "50%",    
        left: "-60px",  
        transform: "translateY(-50%)",
        width: "30px"
      }}>
      <ul className="m-0 p-0 "> {dots} </ul>
    </div>
  ),

  customPaging: (i) => (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
     
      <span className={`text-[16px] font-medium transition-all duration-300 ${
        i === dotActive ? "" : "text-gray-400"
      }`}>
        0{i + 1}
      </span>
      
      
      <div className={`w-[3px] -mt-8 ml-7 h-[30px] transition-all duration-300 ${
        i === dotActive ? "bg-black" : "bg-gray-200"
      }`}></div>
    </div>
  ),

  }; 
     const [Product2 ]=useState(Data.Product2);
  return (
     <div className="max-w-[1440px] mx-auto mt-[50px]">
    <div className=' justify-between'>
      <SlickSlider {...settings}>{
        Product2.map(p=>(
         <Productthree key={p.id}  Product2={p} />
        ))
    }
    </SlickSlider></div>
    </div>
  )
}

export default Product1