import { useState } from "react";
import { Data as Data2 } from "../Data/Data"; 
import Productitem from "./Productitem";
import Recomanded from "../Rocommanded/Recomanded";
import Catigori from "../Slidebar/Catygori/Catigori";
import Price from "../Slidebar/Price/Price";

const Productshow = () => {
  const [products] = useState(Data2); 
  
  const [filteredProducts, setFilteredProducts] = useState(Data2); 
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 12; 

  const handleFilter = (filterValue, type) => {
    let updatedList = products;

    if (type === "category") {
      
      updatedList = products.filter((p) => p.category === filterValue); 
    } else if (type === "brand") {
      
      updatedList = products.filter((p) => p.brand === filterValue);
    } else if (type === "price") {
    
      const min = filterValue[0];
      const max = filterValue[1];
      updatedList = products.filter((p) => p.price >= min && p.price <= max);
    }

    setFilteredProducts(updatedList);
    setCurrentPage(1);
  };

  // Pagination logic ekhon filteredProducts upore kaj korbe
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentProducts = filteredProducts.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="max-w-[1440px] mx-auto mt-[50px] px-4">
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="w-full md:w-[250px] shrink-0">
        
          <Catigori item={products} onFilter={handleFilter} />
          <Recomanded item={products} onFilter={handleFilter} /> 
          <Price onFilter={handleFilter} />
          
          <button 
            onClick={() => setFilteredProducts(products)}
            className="mt-5 text-sm font-bold text-red-500 hover:underline"
          >
            Reset Filters
          </button>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 ml-7 lg:grid-cols-3 gap-x-5 gap-y-10">
          {currentProducts.length > 0 ? (
            currentProducts.map((p) => <Productitem key={p.id} item={p} />)
          ) : (
            <p className="text-xl font-bold">No products found!</p>
          )}
        </div>
      </div>

    
      <div className="flex gap-2 mt-7 justify-center">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 border ${
              currentPage === page ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Productshow;