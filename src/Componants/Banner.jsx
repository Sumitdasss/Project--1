import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Iconone } from './pages/Icons/Iconone';
import Icontwo from './pages/Icons/Icontwo';
import Iconthree from './pages/Icons/Iconthree';
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

beforeChange: (prev, next) => {
    setDotActive(next);
  },

 appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        top: "55%",
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
    <div className="flex  flex-col items-center gap-2 cursor-pointer group">
      <span
        className={`text-[16px] font-medium ml-6  transition-all duration-300 ${
          i === dotActive ? "text-black" : "text-gray-400"
        }`}
      >
        0{i + 1}
      </span>
      
      <div
        className={`w-[3px] h-[30px] -mt-8 ml-15  transition-all duration-300 ${
          i === dotActive ? "bg-black" : "bg-gray-200"
        }`}
      ></div>
    </div>
  ),

  }; 

  
  return (
    <>
    <SlickSlider {...settings}>
      <div className="">
    <div className='bg-[url(/src/assets/Image.jpg)] bg-cover bg-no-repeat bg-center h-[600px]'>


<div className="max-w-[1440px] mx-auto ">
  <div className="ml-[170px]">
  <p className='text-[50px] font-bold text-[#262626] pt-[170px]'>Final Offer</p>
  <div className="flex items-center gap-x-3 ">

    <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
    <p className='text-[60px] font-bold text-[#262626]'>50%</p>
    <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all furniture items!</p>
  </div>


  <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
  </div>
</div>

    </div>
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

    </div>
   
      <div className="">
    <div className='bg-[url(/src/assets/Image.jpg)] bg-cover bg-no-repeat bg-center h-[600px]'>


<div className="max-w-[1440px] mx-auto ">
  <div className="ml-[170px]">
  <p className='text-[50px] font-bold text-[#262626] pt-[170px]'>Final Offer</p>
  <div className="flex items-center gap-x-3 ">

    <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
    <p className='text-[60px] font-bold text-[#262626]'>50%</p>
    <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all furniture items!</p>
  </div>


  <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
  </div>
</div>

    </div>
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

    </div>
   
      <div className="">
    <div className='bg-[url(/src/assets/Image.jpg)] bg-cover bg-no-repeat bg-center h-[600px]'>


<div className="max-w-[1440px] mx-auto ">
  <div className="ml-[170px]">
  <p className='text-[50px] font-bold text-[#262626] pt-[170px]'>Final Offer</p>
  <div className="flex items-center gap-x-3 ">

    <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
    <p className='text-[60px] font-bold text-[#262626]'>50%</p>
    <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all furniture items!</p>
  </div>


  <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
  </div>
</div>

    </div>
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

    </div>
   
      <div className="">
    <div className='bg-[url(/src/assets/Image.jpg)] bg-cover bg-no-repeat bg-center h-[600px]'>


<div className="max-w-[1440px] mx-auto ">
  <div className="ml-[170px]">
  <p className='text-[50px] font-bold text-[#262626] pt-[170px]'>Final Offer</p>
  <div className="flex items-center gap-x-3 ">

    <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
    <p className='text-[60px] font-bold text-[#262626]'>50%</p>
    <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all furniture items!</p>
  </div>


  <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
  </div>
</div>

    </div>
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

    </div>
   
      <div className="">
    <div className='bg-[url(/src/assets/Image.jpg)] bg-cover bg-no-repeat bg-center h-[600px]'>


<div className="max-w-[1440px] mx-auto ">
  <div className="ml-[170px]">
  <p className='text-[50px] font-bold text-[#262626] pt-[170px]'>Final Offer</p>
  <div className="flex items-center gap-x-3 ">

    <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
    <p className='text-[60px] font-bold text-[#262626]'>50%</p>
    <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all furniture items!</p>
  </div>


  <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
  </div>
</div>

    </div>
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

    </div>
   
    </SlickSlider>
    </>
  )
}

export default Banner