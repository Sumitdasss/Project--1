
import React, { useState } from 'react'
import { Data4 } from '../../Data/Datathree'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Productitemthree } from './Productitemthree';
const Sliderslik=Slider.default?Slider.default:Slider;
export const Productthree = () => {
 const [Product7 ]=useState(Data4);

    const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,           
  autoplaySpeed: 2000,      
  pauseOnHover: true,     
  cssEase: "linear",



};

  return (
   <div className="max-w-[1440px] mx-auto mt-[50px]">
      <p className="text-[40px] font-bold text-[#262626] pb-7">Special Offers</p>
      <div>
        <Sliderslik {...settings}>{
          Product7.map((product11) => (
            <Productitemthree key={product11.id} product11={product11} />
          ))
        }</Sliderslik>
      </div>
    </div>
  )
}
