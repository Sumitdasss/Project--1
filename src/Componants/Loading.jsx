import React, { useState, useEffect } from 'react';

const RetroLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev <= 11 ? prev + 1 : 11));
    }, 200);

    return () => clearInterval(timer);
  }, []);

  
  const percentage = Math.round((progress / 12) * 100);

  return (
    <div className=" w-full flex flex-col justify-center items-center bg-white h-screen">
      
      <div className="flex items-center gap-4">
        <div className="w-[500px] h-[60px] border-[3px] border-[#262626]/70 p-1.5 flex gap-1.5 bg-transparent">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`h-full flex-1 transition-all duration-300
                   ${index < progress ? "bg-[#262626]" : "bg-[#262626]/50" }`}
            ></div>
          ))}
        </div>

     
        <span className="text-[24px] font-bold text-[#262626] w-[70px]">
          {percentage}%
        </span>
      </div>
      
      <p className="mt-6 text-[28px] font-bold text-[#262626] tracking-[6px] uppercase">
        Loading...
      </p>
    </div>
  );
};

export default RetroLoader;