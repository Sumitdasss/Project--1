import React from 'react'
import img1 from '/src/assets/22.png'
const Bannrethree = () => {
  return (
   <div className="max-w-[1440px] mx-auto ">
    <div className='bg-cover bg-center bg-no-repeat h-[370px] bg-[#262626]/10'>
        <div className="flex ">
            <div className="mt-[50px] ml-[5%]">
                <img src={img1} alt="" />
            </div>
    <div className="pt-[80px] pb-[60px]  ml-[10%]">
   <p className='text-[40px] font-bold text-[#262626]'>Shofa Sale</p>
      
        <p className='text-[17px] font-normal text-[#262626]'>Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry orem Ipsum..</p>
        
        
      
      <div>
        <button className='px-7 py-3 bg-[#262626] text-white font-medium mt-4 hover:bg-black transition-all'>
          Shop Now
        </button>
      </div>
      </div>
</div>
    </div>
    </div>
  )
}

export default Bannrethree