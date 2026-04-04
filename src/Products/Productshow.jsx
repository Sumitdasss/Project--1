import { useMemo, useState } from "react";
import{Data2} from "../Data/Datafour"
import{ Data } from "../Data/Data";
import { Data3 } from "../Data/Datatwo";
import { Data4 } from "../Data/Datathree";
import Productitem from "./Productitem";
import Recomanded from "../Rocommanded/Recomanded";
import Catigori from "../Slidebar/Catygori/Catigori";
import Price from "../Slidebar/Price/Price";
import Color from "../Slidebar/Color/Color";

import { IoGrid } from "react-icons/io5";
import { FaCaretUp, FaThList } from "react-icons/fa";

const Productshow = () => {

  const allProducts = useMemo(() => {
    return [...Data3, ...Data4, ...Data,...Data2];
  }, []); 
  const [products] = useState(allProducts); 
  const [filteredProducts, setFilteredProducts] = useState(allProducts); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [viewType, setViewType] = useState('grid'); 

  
  const [isRotated, setIsRotated] = useState(false);
  const [isShowRotated, setIsShowRotated] = useState(false);


  const handleMouseDownSort = () => setIsRotated(!isRotated);
  const handleChangeSort = () => setIsRotated(false);
  const handleBlurSort = () => setIsRotated(false);

 
  const handleMouseDownShow = () => setIsShowRotated(!isShowRotated);
  const handleChangeShow = () => setIsShowRotated(false);
  const handleBlurShow = () => setIsShowRotated(false);

  const itemsPerPage = 12; 

  const handleFilter = (filterValue, type) => {
    let updatedList = products;
    if (type === "category") updatedList = products.filter((p) => p.category === filterValue);
    else if (type === "brand") updatedList = products.filter((p) => p.brand === filterValue);
    else if (type === "price") {
      const min = filterValue[0];
      const max = filterValue[1];
      updatedList = products.filter((p) => p.price >= min && p.price <= max);
    } 
    else if (type === "color") updatedList = products.filter((p) => p.color === filterValue);

    setFilteredProducts(updatedList);
    setCurrentPage(1);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentProducts = filteredProducts.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) { pages.push(i); }

  return (
    <div className="max-w-[1440px] mx-auto mt-[50px] px-4 mb-20">
      <div className="flex flex-col md:flex-row gap-10">
        
      
        <div className="w-full md:w-[250px] shrink-0">
          <Catigori item={products} onFilter={handleFilter} />
          <Recomanded item={products} onFilter={handleFilter} />
          <Color item={products} onFilter={handleFilter}/>
          <Price onFilter={handleFilter} />
          <button 
            onClick={() => setFilteredProducts(products)}
            className="mt-5 text-sm font-bold text-red-500 hover:underline"
          >
            Reset Filters
          </button>
        </div>

      
        <div className="flex-1 ml-6">
          
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 mb-8 border-b border-[#F0F0F0]">
            
           
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setViewType('grid')}
                className={`w-10 h-10 flex items-center justify-center border transition-all ${viewType === 'grid' ? 'bg-black text-white border-black' : 'bg-white text-[#737373] border-gray-200'}`}
              >
                <IoGrid size={20}/>
              </button>
              <button 
                onClick={() => setViewType('list')}
                className={`w-10 h-10 flex items-center justify-center border transition-all ${viewType === 'list' ? 'bg-black text-white border-black' : 'bg-white text-[#737373] border-gray-200'}`}
              >
                <FaThList size={20} />
              </button>
            </div>

          
            <div className="flex flex-wrap items-center gap-6">
              
              
              <div className="flex items-center gap-4">
                <span className="text-[#767676] font-semibold">Sort by:</span>
                <div className="relative w-[150px] md:w-[200px]">
                  <select 
                    onMouseDown={handleMouseDownSort} 
                    onInput={handleChangeSort}        
                    onBlur={handleBlurSort}           
                    className="w-full appearance-none cursor-pointer px-4 py-2 border border-[#F0F0F0] rounded bg-white shadow-sm focus:outline-none font-bold text-[#262626]"
                  >
                    <option value="featured">Featured</option>
                    <option value="best">Best Sellers</option>
                    <option value="new">New Arrival</option>
                    <option value="low-high">Price: Low to High</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                    <FaCaretUp className={`transition-transform duration-300 ${isRotated ? "rotate-0" : "rotate-180"}`} />
                  </div>
                </div>
              </div>

           
              <div className="flex items-center gap-4">
                <span className="text-[#767676] font-semibold">Show:</span>
                <div className="relative w-[80px] md:w-[100px]">
                  <select 
                    onMouseDown={handleMouseDownShow} 
                    onInput={handleChangeShow}        
                    onBlur={handleBlurShow}           
                    className="w-full appearance-none cursor-pointer px-4 py-2 border border-[#F0F0F0] rounded bg-white shadow-sm focus:outline-none font-bold text-[#262626]"
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  
                    <FaCaretUp className={`transition-transform duration-300 ${isShowRotated ? "rotate-0" : "rotate-180"}`} />
                  </div>
                </div>
              </div>

            </div>
          </div>

         
          <div className={`transition-all duration-500 ${
            viewType === 'grid' 
            ? "grid grid-cols-1 ml-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10" 
            : "flex flex-col gap-y-6"
          }`}>
            {currentProducts.length > 0 ? (
              currentProducts.map((p) => (
                <Productitem 
                  key={p.id} 
                  item={p} 
                  viewType={viewType}
                />
              ))
            ) : (
              <p className="text-xl font-bold col-span-full text-center py-10">No products found!</p>
            )}
          </div>

     
          <div className="flex gap-2 mt-12 justify-center">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 border transition-all ${
                  currentPage === page ? "bg-black text-white border-black" : "bg-white text-black border-gray-200 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Productshow;