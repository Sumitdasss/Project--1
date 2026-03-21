import React from 'react';



function Bannertwo() {
  return (
    <div className='max-w-[1440px] mx-auto px-4 py-10'>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
  
    <div 
     
      className="bg-center bg-cover bg-no-repeat h-[683px] flex flex-col pt-[400px]  pl-[62px] bg-[url(/src/assets/12.jpg)]"
    >
      <p className='text-[40px] font-bold text-[#262626]'>Phones Sale</p>
      <div className="flex items-center gap-x-3">
        <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
        <p className='text-[40px] font-bold text-[#262626]'>30%</p>
        <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all phones!</p>
      </div>
      <div>
        <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4 hover:bg-black transition-all'>
          Shop Now
        </button>
      </div>
    </div>

   
    <div className="flex flex-col gap-6">
      
  
      <div 
       
        className="bg-center bg-cover bg-no-repeat h-[330px] flex flex-col justify-center pl-[30px] bg-[url(/src/assets/13.png)]"
      >
        <p className='text-[40px] font-bold text-[#262626]'>Electronics Sale</p>
        <div className="flex items-center gap-x-3">
          <p className='text-[23px] font-normal text-[#6D6D6D]'>Up to</p>
          <p className='text-[40px] font-bold text-[#262626]'>70%</p>
          <p className='text-[23px] font-normal text-[#6D6D6D]'>sale for all electronics!</p>
        </div>
        <div>
          <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4'>Shop Now</button>
        </div>
      </div>

   
      <div 
        // style={{ backgroundImage: `url(${bannerImgthree})` }}
        className="bg-center bg-cover bg-no-repeat h-[330px] flex flex-col justify-center pl-[30px] bg-[url(/src/assets/14.png)]"
      >
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

    </div>
  </div>
</div>
  )
}

export default Bannertwo;