import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productitem from './Productitem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Sliderslik=Slider.default?Slider.default:Slider;

const Productone = () => {
    const [allData, setAllData] = useState([]);
useEffect(()=>{
    async function allDatas() {
        let data = await axios.get("https://dummyjson.com/products/category/furniture")
        setAllData(data.data.products)
    }
    allDatas()
},[])



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
    <div className="max-w-[1440px] mx-auto ">
       <p className="text-[40px] font-bold text-[#262626] pb-7">New Arrivals</p>
    <div>
        <Sliderslik {...settings}>{
        allData.map((product)=>(
            <Productitem key={product.id } product={product}/>
            
       ) )}
    </Sliderslik>
    </div>

    </div>
  )
}

export default Productone