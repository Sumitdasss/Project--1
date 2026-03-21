import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const Price = ({onFilter}) => {
  const [isOpen, setIsOpen] = useState(true);
 

  return (
    <div className="w-[300px]">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer py-4"
      >
        <h3 className="text-[20px] font-bold text-[#262626]">Shop by Price</h3>
        <FaCaretUp className={`transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`} />
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <ul className="flex flex-col">
      <li onClick={() => onFilter([10, 50], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">10-50$</li>
      <li  onClick={() => onFilter([100,150], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">100-150$</li>
      <li onClick={() => onFilter([150,200], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">150-200$</li>
      <li onClick={() => onFilter([200, 350], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">200-350$</li>
      <li onClick={() => onFilter([350, 600], "price")}  className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">350-600$</li>
      <li onClick={() => onFilter([600, 1000], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">600-1000$</li>
      <li onClick={() => onFilter([1000, 2000], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">1000-2000$</li>
      <li onClick={() => onFilter([2000, 3000], "price")} className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300">2000-4000$</li>
        
        </ul>
      </div>
    </div>
  );
};

export default Price