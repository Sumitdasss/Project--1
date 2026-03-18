
import { useState } from "react";
import Data from "../../Data.json"
import Producetwo from "./Producetwo";
const Produtc = () => {
   
     const [Product  ]=useState(Data.Product);
  return (
    <div className="max-w-[1440px] mx-auto mt-[50px]">
    <div className='flex justify-between'>{
        Product.map(p=>(
         <Producetwo key={p.id}  Product={p} />
        ))
    }</div>
    </div>
  )
}

export default Produtc