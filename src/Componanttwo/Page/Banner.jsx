import React, { useState } from 'react'
import  img1 from'/src/assets/couch 1.png'
import Button from '../../Componants/Button'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Iconone } from '../../Componants/pages/Icons/Iconone';
import Icontwo from '../../Componants/pages/Icons/Icontwo';
import Iconthree from '../../Componants/pages/Icons/Iconthree';
import Bannertwo from './Bannertwo';

import Productone from './Productone';


const SlickSlider = Slider.default ? Slider.default : Slider;

const Banner = () => {
const [dotActive, setDotActive] = useState(0);
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           
  autoplaySpeed: 3000,      
  pauseOnHover: true,     
  cssEase: "linear",

  beforeChange:(prve,next)=>{
    setDotActive(next)
  },
appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "250px", 
        transform: "translateY(-50%)",
        width: "30px",
        zIndex: "10" 
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <span
        className={`text-[16px] font-medium ml-6 transition-all duration-300 ${
          i === dotActive ? "text-black" : "text-green-900"
        }`}
      >
        0{i + 1}
      </span>
      <div
        className={`w-[3px] h-[30px] -mt-8 ml-15 transition-all duration-300 ${
          i === dotActive ? "bg-black" : "bg-gray-200"
        }`}
      ></div>
    </div>
  ),

};

  return (
    <div className="">
    <SlickSlider {...settings}>
    <div className='bg-[#A3A380] h-[700px] '>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between ">
<div className="mt-[70px] pl-[180px]">
    <p className='text-[54px] font-bold text-white leading-16 pt-[170px]'>Modern Interior <br></br>
Design Studio</p>
<div className="flex items-center gap-x-3 mt-10">
<Button text={"Shop Now"} className={"py-3 px-5 text-[17px] font-medium text-[#262626]  bg-[#D6CE93] rounded-[50px] cursor-pointer inline-block"}/>
<Button text={"Explore"} className={"py-3 px-6 border-2 text-[17px] font-medium text-white  border-white/29 inline-block cursor-pointer rounded-[50px]"}/>
</div>
</div>
<div className="mt-[60px]">
    <img src={img1} alt="Couch 1"/>
</div>
        
        </div>
        </div>
        </div>
    <div className='bg-[#A3A380] h-[700px] '>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between ">
<div className="mt-[70px] pl-[180px]">
    <p className='text-[54px] font-bold text-white leading-16 pt-[170px]'>Modern Interior <br></br>
Design Studio</p>
<div className="flex items-center gap-x-3 mt-10">
<Button text={"Shop Now"} className={"py-3 px-5 text-[17px] font-medium text-[#262626]  bg-[#D6CE93] rounded-[50px] cursor-pointer inline-block"}/>
<Button text={"Explore"} className={"py-3 px-6 border-2 text-[17px] font-medium text-white  border-white/29 inline-block cursor-pointer rounded-[50px]"}/>
</div>
</div>
<div className="mt-[60px]">
    <img src={img1} alt="Couch 1"/>
</div>
        
        </div>
        </div>
        </div>
    <div className='bg-[#A3A380] h-[700px] '>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between ">
<div className="mt-[70px] pl-[180px]">
    <p className='text-[54px] font-bold text-white leading-16 pt-[170px]'>Modern Interior <br></br>
Design Studio</p>
<div className="flex items-center gap-x-3 mt-10">
<Button text={"Shop Now"} className={"py-3 px-5 text-[17px] font-medium text-[#262626]  bg-[#D6CE93] rounded-[50px] cursor-pointer inline-block"}/>
<Button text={"Explore"} className={"py-3 px-6 border-2 text-[17px] font-medium text-white  border-white/29 inline-block cursor-pointer rounded-[50px]"}/>
</div>
</div>
<div className="mt-[60px]">
    <img src={img1} alt="Couch 1"/>
</div>
        
        </div>
        </div>
        </div>
    <div className='bg-[#A3A380] h-[700px] '>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between ">
<div className="mt-[70px] pl-[180px]">
    <p className='text-[54px] font-bold text-white leading-16 pt-[170px]'>Modern Interior <br></br>
Design Studio</p>
<div className="flex items-center gap-x-3 mt-10">
<Button text={"Shop Now"} className={"py-3 px-5 text-[17px] font-medium text-[#262626]  bg-[#D6CE93] rounded-[50px] cursor-pointer inline-block"}/>
<Button text={"Explore"} className={"py-3 px-6 border-2 text-[17px] font-medium text-white  border-white/29 inline-block cursor-pointer rounded-[50px]"}/>
</div>
</div>
<div className="mt-[60px]">
    <img src={img1} alt="Couch 1"/>
</div>
        
        </div>
        </div>
        </div>
    <div className='bg-[#A3A380] h-[700px] '>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between ">
<div className="mt-[70px] pl-[180px]">
    <p className='text-[54px] font-bold text-white leading-16 pt-[170px]'>Modern Interior <br></br>
Design Studio</p>
<div className="flex items-center gap-x-3 mt-10">
<Button text={"Shop Now"} className={"py-3 px-5 text-[17px] font-medium text-[#262626]  bg-[#D6CE93] rounded-[50px] cursor-pointer inline-block"}/>
<Button text={"Explore"} className={"py-3 px-6 border-2 text-[17px] font-medium text-white  border-white/29 inline-block cursor-pointer rounded-[50px]"}/>
</div>
</div>
<div className="mt-[60px]">
    <img src={img1} alt="Couch 1"/>
</div>
        
        </div>
        </div>
        </div>
    <div className='bg-[#A3A380] h-[700px] '>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between ">
<div className="mt-[70px] pl-[180px]">
    <p className='text-[54px] font-bold text-white leading-16 pt-[170px]'>Modern Interior <br></br>
Design Studio</p>
<div className="flex items-center gap-x-3 mt-10">
<Button text={"Shop Now"} className={"py-3 px-5 text-[17px] font-medium text-[#262626]  bg-[#D6CE93] rounded-[50px] cursor-pointer inline-block"}/>
<Button text={"Explore"} className={"py-3 px-6 border-2 text-[17px] font-medium text-white  border-white/29 inline-block cursor-pointer rounded-[50px]"}/>
</div>
</div>
<div className="mt-[60px]">
    <img src={img1} alt="Couch 1"/>
</div>
        
        </div>
        </div>
        </div>

   
        </SlickSlider>

         <div className="border-t-3 border-b-3 border-[#F0F0F0]">
<div className="max-w-[1440px] mx-auto   ">
<div className="flex items-center justify-between  h-[100px]">
  <div className="flex items-center">
    <Iconone/>
    <p className='text-[20px] font-normal text-[#6D6D6D] pl-[15px]'>Two years warranty</p>
  </div>
  <div className="flex items-center">
    <Icontwo/>
    <p className='text-[20px] font-normal text-[#6D6D6D] pl-[15px]'>Free shipping</p>
  </div>
  <div className="flex items-center">
    <Iconthree/>
    <p className='text-[20px] font-normal text-[#6D6D6D] pl-[15px]'>Return policy in 30 days</p>
  </div>
  
</div>

</div>
</div>
 <Bannertwo/>
<Productone/>

        </div>
       
  )
}

export default Banner