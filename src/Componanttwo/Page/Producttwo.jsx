import React, { useState } from 'react'
import { Data3 } from '../../Data/Datatwo'
import Productitemtwo from './Productitemtwo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Sliderslik=Slider.default?Slider.default:Slider;
const Producttwo = () => {
    const [Product6 ]=useState(Data3);

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
          Product6.map((product) => (
            <Productitemtwo key={product.id} product={product} />
          ))
        }</Sliderslik>
      </div>
    </div>
  )
}

export default Producttwo