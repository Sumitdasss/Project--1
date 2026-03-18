import React, { useContext } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import Navbar from './pages/Navbar'
import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../Feturch/CartProvider'

const Heading = () => {
   const {cart}=useContext(CartContext)
  return (
   <>
     <Navbar/>
    <div className="bg-[#F5F5F3] py-8 px-4">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
      
        <div className="flex items-center gap-2 cursor-pointer text-[#262626]">
          <HiBars3BottomLeft className="text-2xl" />
          <select name="" id="" className='w-full px-4 py-2 bg-white border border-gray-300 rounded-md appearance-none outline-none cursor-pointer'>
            <option value="">Shop by Category</option>
            <option value="">2</option>
            <option value="">4</option>
          </select>
        </div>

   
        <div className="relative w-[40%] md:w-[600px]">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full h-[50px] px-5 bg-white text-sm outline-none placeholder:text-[#C4C4C4]"
          />
          <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#262626] cursor-pointer" />
        </div>

       <div className="flex items-center gap-8 text-[#262626]">
  <div className="flex items-center gap-1 cursor-pointer">
    <FaUser className="text-[20px]" />
    <FaCaretDown className="text-[20px]"/>
  </div>
 
  <Link to="/cart" className="relative cursor-pointer">
    <FaShoppingCart className="text-[25px]" />
    <span className='absolute rounded-full flex justify-center items-center -top-[10px] -right-[15px] w-[20px] h-[20px] font-medium text-white bg-[#222222]'>
      {cart.length}
    </span>
  </Link>
</div>

      </div>
    </div>
   
    </>
  )
}

export default Heading