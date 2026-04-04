import React, { useContext, useState, useMemo } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import Navbar from './pages/Navbar'
import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Data2 } from '../Data/Datafour'
import { Data } from '../Data/Data'
import { Data3 } from '../Data/Datatwo'
import { Data4 } from '../Data/Datathree'
import { Link } from 'react-router-dom'
import { CartContext } from '../Feturch/CartProvider'

const Heading = () => {

  const allProducts = useMemo(() => [...Data, ...Data2, ...Data3, ...Data4],[]);

  const { cart } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
  const value = e.target.value;
  setSearchQuery(value);

  if (value.trim() === "") {
    setFilteredProducts([]); 
  } else {
   
    const searchData = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(searchData);
  }
};

  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5F3] py-8 px-4">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          
        
          <div className="relative">
            <div 
              className="flex items-center px-2 py-2 bg-white gap-1 cursor-pointer" 
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <HiBars3BottomLeft className="text-[20px]" />
              <p className="text-[17px] text-[#262626]">Shop by Category</p>
            </div>

            <div className={`absolute left-0 z-40 top-12 mt-2 w-[200px] bg-[#262626] overflow-hidden shadow-lg transition-all duration-500 ${isOpen2 ? "max-h-[320px]" : "max-h-0"}`}>
              <ul className="flex flex-col text-white/70">
                <Link to="/accessories" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Accessories</Link>
                <Link to="/banner" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Furniture</Link>
                <Link to="/" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Electronics</Link>
              </ul>
            </div>
          </div>

      
          <div className="relative w-[40%] md:w-[600px]">
            <input
              type="text"
              placeholder="Search Products"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full h-[50px] px-5 bg-white text-sm outline-none placeholder:text-[#C4C4C4]"
            />
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#262626] cursor-pointer" />

        
            {filteredProducts.length > 0 && (
              <div className="absolute left-0 z-50 top-14 w-full bg-white shadow-2xl max-h-[400px] overflow-y-auto border border-gray-100">
                {filteredProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    onClick={() => {
                      setSearchQuery(""); 
                      setFilteredProducts([]);
                    }}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                  >
                 
                    <img src={item.images[0]} alt="product" className="w-12 h-12 object-cover" />
                    <div>
                      <p className="text-sm font-bold text-[#262626]">{item.title}</p>
                      <p className="text-xs text-gray-500">${item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* User & Cart */}
          <div className="flex items-center gap-8 text-[#262626]">
            <div className="relative">
              <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <FaUser className="text-[20px]" />
                <FaCaretDown className={`text-[20px] duration-500 ${isOpen ? "rotate-180" : ""}`} />
              </div>

              <div className={`absolute right-0 z-40 top-10 mt-2 w-[150px] bg-[#262626] rounded-md overflow-hidden shadow-lg transition-all duration-500 ${isOpen ? "max-h-[270px]" : "max-h-0"}`}>
                <ul className="flex flex-col text-white/70">
                  <Link to="/profile" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Profile</Link>
                  <Link to="/login" className="px-6 py-4 border-b border-[#D8D8D8]/30 hover:text-white text-sm">Login</Link>
                </ul>
              </div>
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

export default Heading;