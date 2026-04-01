import React from 'react'
import img1 from'/src/assets/couch 1.png'
import img2 from'/src/assets/product-1.png'
import img3 from'/src/assets/product-3.png'
const Bannertwo = () => {
  return (
     <div className='max-w-[1440px] mx-auto px-4 py-10'>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
  
    <div  className=" bg-[#35736E]/50 h-[683px] flex flex-col  pl-[62px] ">
        <img src={img1} alt="Couch 1" />
      <p className='text-[40px] font-bold text-[#262626]'>Shofa Sale</p>
      <div className="flex items-center gap-x-3">
        <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
        <p className='text-[40px] font-bold text-[#262626]'>30%</p>
        <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all Shofa!</p>
      </div>
      <div>
        <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4 hover:bg-black transition-all'>
          Shop Now
        </button>
      </div>
    </div>

   
    <div className="flex flex-col gap-6">
      
  
      <div 
       
        className=" h-[330px] flex justify-between  pl-[30px] bg-[#A3A380]"
      >
        <div className="mt-16">
        <p className='text-[40px] font-bold text-[#262626]'>Nordic Chair Sale</p>
        <div className="flex items-center gap-x-3">
          <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
          <p className='text-[40px] font-bold text-[#262626]'>70%</p>
          <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all Nordic Chair!</p>
        </div>
        <div>
          <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
        </div>
        </div>
        <div className="flex items-center justify-center mr-[30px]">
            <img src={img2} alt="product-1" />
        </div>
      </div>

   
      <div 
        // style={{ backgroundImage: `url(${bannerImgthree})` }}
        className=" h-[330px]  flex justify-between  pl-[30px] bg-[#FF8B5A]"
      >
       <div className="mt-16">
        <p className='text-[40px] font-bold text-[#262626]'>Furniture Offer</p>
        <div className="flex items-center gap-x-3">
          <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
          <p className='text-[40px] font-bold text-[#262626]'>50%</p>
          <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all furniture items!</p>
        </div>
        <div>
          <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
        </div>
        </div>
        <div className="flex items-center justify-center mr-[30px]">
             <img src={img3} alt="product-3" />
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Bannertwo