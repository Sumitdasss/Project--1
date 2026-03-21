import React from 'react';
import bannerImg from '../assets/12.jpg'; // সঠিক রিলেটিভ পাথ দিন

function Bannertwo() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className="flex justify-between">
        {/* ইনলাইন স্টাইলে ইমেজটি বসান এবং একটি width (যেমন w-full বা w-[500px]) দিন */}
        <div 
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="bg-center bg-cover bg-no-repeat h-[200px] w-full"
        >
        </div>
        
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Bannertwo;