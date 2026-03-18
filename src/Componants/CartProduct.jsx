import React, { useContext } from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";

import { IoTrashBinSharp } from "react-icons/io5";
import { CartContext } from '../Feturch/CartProvider'; 

const CartProduct = ({Product}) => {
const {cart,dispatch}=useContext(CartContext)
    const Increase = (id)=>{
const Index=cart.findIndex(p =>p.id === id)
if(cart[Index].quantity<50){
    dispatch({type:"Increase",id})
}
    }
    const Decrease = (id)=>{
        const Index=cart.findIndex(p =>p.id === id)
if(cart[Index].quantity>1){
    dispatch({type:"Decrease",id})
}

    }
  return (
    <>
    <div className="flex justify-around w-full h-[151px] items-center border-t-2 border-b-2 border-black/50 mb-2">
     <button onClick={() => dispatch({ type: "Remove", id: Product.id })} class="cursor-pointer ">
            <IoTrashBinSharp/>
        </button>

        <div class="w-[80px] h-[80px] bg-white">
            <img src={Product.images[0]} 
           alt={Product.title}
           class="w-full h-full object-cover"/>
        </div>

        <div>
            <p class="  text-[20px] text-[#222222] font-semibold">{Product.title}</p>
        </div>

        <div>
            <p class="text-[#74787C] text-[16px] font-medium">
                <span class=" text-[18px] font-bold text-[#222222] ">{Product.price}</span>
            </p>
        </div>

        <div class="flex cart-item-quantity">
            <div class="w-[60px] h-[50px] border-2 border-black/50 flex justify-center items-center">
                <p class="text-[18px] text-[#222222] font-semibold number">{Product.quantity}</p>
            </div>
            <div>
                <div class="w-7 h-[25px] border-2 border-black/50 flex justify-center items-center cursor-pointer">
                    <button  id="increase-btn" onClick={()=>Increase(Product.id)} ><FaPlus/></button>
                </div>
                <div class="w-7 h-[25px] border-2 border-black/50 flex justify-center items-center cursor-pointer">
                    <button  id="decrease-btn" onClick={()=>Decrease(Product.id)}><FaMinus/></button>
                </div>
            </div>
        </div>

        <div>
            <p class="text-[18px] text-[#222222] font-semibold"></p>
        </div>
        </div>
        </>
  )
}

export default CartProduct