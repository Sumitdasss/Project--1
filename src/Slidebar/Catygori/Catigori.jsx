import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const Catigori = ({ item,onFilter }) => {
  const [isOpen, setIsOpen] = useState(true);
 if (!item || !Array.isArray(item)) return null;
const category = [...new Set(item.map((val) => val.category))];

  return (
    <div className="w-[300px]">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer py-4"
      >
        <h3 className="text-[20px] font-bold text-[#262626]">Shop by Category</h3>
        <FaCaretUp className={`transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`} />
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <ul className="flex flex-col">
      
          {category.map((catName, index) => (
  <li 
    key={index} 
    onClick={() => onFilter(catName, "category")} 
    className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300"
  >
    {catName}
  </li>
))}
        </ul>
      </div>
    </div>
  );
};

export default Catigori