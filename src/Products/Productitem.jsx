import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

import { useContext } from "react";
import { CartContext } from "../Feturch/CartProvider";

const Productitem = ({item}) => {
    const {dispatch}=useContext(CartContext)
  if (!item) return null; 
  return (
    <div className="max-w-[370px] bg-white h-[520px] group relative cursor-pointer mb-10 shadow-2xl">
          <div className="relative overflow-hidden ">
        <img 
      src={item.images[0]} 
      alt={item.title}
      className="w-full h-[250px] object-contain"
    />
            
            <div className="absolute top-5 left-5 bg-[#262626] text-white text-[14px] font-bold px-8 py-2">
              New
            </div>
    
            <div className="absolute bottom-[-150px] left-0 w-full bg-white p-6 transition-all duration-500 group-hover:bottom-0">
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-end gap-4 text-[#767676] hover:text-[#262626] hover:font-bold duration-300">
                  Add to Wish List <FaHeart className="text-black" />
                </li>
                <li className="flex items-center justify-end gap-4 text-[#767676] hover:text-[#262626] hover:font-bold duration-300">
                  Compare <TfiReload className="text-black font-bold" />
                </li>
                <button onClick={()=>dispatch({type:"Add", item: item})}  className="flex items-center justify-end gap-4 text-[#262626] font-bold duration-300">
                  Add to Cart <FaShoppingCart className="text-black" />
                </button>
              </ul>
            </div>
          </div>
    <div className="">
          <div className=" flex justify-between items-center p-2">
            <div>
              <h3 className="text-[18px] font-bold text-[#262626]">{item.title}</h3>
              <p className="text-[#767676] text-[16px] mt-2">{item.color}</p>
            </div>
            <div className="text-right">
              <p className="text-[16px] text-[#262626] font-bold">${item.price}</p>
              <p className="text-[#767676] text-[14px] line-through">
                {item.discountPercentage}% Off
              </p>
            </div>
          </div>
          <p className="text-[16px] text-[#262626] pl-2 font-medium">Status: <span className="text-green-500">{item.availabilityStatus}</span>  : {item.stock} Itemleft</p>
          <p className="text-[16px] text-[#767676] pl-2 font-medium">Rating:<span className="text-yellow-500"> {item.rating}</span></p>
          <p className="text-[16px] text-[#767676] pl-2 font-medium">Warranty:<span className="text-blue-500"> {item.warrantyInformation}</span></p>
          <p className="text-[16px] text-[#767676] pl-2 font-medium">Shipping:<span className="text-blue-500"> {item.shippingInformation}</span></p>
          </div>
        </div>
  )
}

export default Productitem