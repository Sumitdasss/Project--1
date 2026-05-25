
import {  useState } from "react";
import {Data2} from "../Data/Datafour";
import Producetwo from "./Producetwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Product1 from "./Product1";
import Product2 from "./Product2";
import Banner from "./Banner";
import Bannertwo from "./Bannertwo";
import Bannerthree from "./Bannerthree";
import RetroLoader from "./Loading";
import Chat from "./Chatbox";
import AdminChat from "./Adminchart";




const SlickSlider = Slider.default ? Slider.default : Slider;

const Produtc = () => {


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
     const [Product ]=useState(Data2);







  return (
    <>
   
    
    <Banner/>
    <Chat/>
    <AdminChat/>
    <Bannertwo/>
    <div className="max-w-[1440px] mx-auto mt-[50px]">
      <p className="text-[40px] font-bold text-[#262626] pb-7">New Arrivals</p>
    <div className=' justify-between'>
      <SlickSlider {...settings}>{
        Product.map(p=>(
         <Producetwo key={p.id}  Product={p} />
        ))
    }
    </SlickSlider></div>
    </div>
   <Product1/>
   <Bannerthree/>
   <Product2/>
    </>
  )
}

export default Produtc