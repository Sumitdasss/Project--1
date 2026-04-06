import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Feturch/CartProvider'; 
import { Data2 } from '../Data/Datafour';
import { Data } from '../Data/Data';
import { Data3 } from '../Data/Datatwo';
import { Data4 } from '../Data/Datathree';
import { FaShoppingCart } from 'react-icons/fa';
import RetroLoader from './Loading';

const ProductDetails = () => {
  const { id } = useParams();
  
 const { dispatch } = useContext(CartContext);

  const allProducts = useMemo(() => [...Data2, ...Data, ...Data3, ...Data4], []);
  const product = allProducts.find((item) => Number(item.id) === Number(id));

  if (!product) return <div className="text-center py-20">Product not found!</div>;

  
  const handleAddToCart = () => {
    dispatch({
      type: "Add",
      Product: product 
    });
   
    console.log("Product added to cart");
  };

 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [isLoading, setIsLoading] = useState(true);
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2122);
    return () => clearTimeout(timer);
  }, []);



if (isLoading) {
    return <RetroLoader />; 
  }


  return (
    <div className="max-w-[1440px] mx-auto py-20 px-4">
      <div className="flex  md:row gap-10">
    
        <div className="w-full md:w-1/2 bg-[#F5F5F3] p-10 flex justify-center">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="max-h-[500px] object-contain" 
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{product.title }</h1>
          <p className="text-2xl font-bold text-[#262626]">${product.price}</p>
          <p className="text-[#767676]">{product.description}</p>
          
          <div className="flex flex-col gap-2">
            <p className="font-bold">Color: <span className="font-normal">{product.color}</span></p>
            <p className="font-bold">Category: <span className="font-normal">{product.category}</span></p>
          </div>

     
          <button 
            onClick={handleAddToCart}
            className="w-[200px] h-[50px] bg-black text-white font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all uppercase"
          >
            Add to Cart <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;