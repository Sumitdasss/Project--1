import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const Color = ({ item, onFilter }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!item || !Array.isArray(item)) return null;

  // Unique colors ber korar logic thik ache
  const colors = [...new Set(item.map((val) => val.color))];

  return (
    <div className="w-[300px]">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer py-4"
      >
        <h3 className="text-[20px] font-bold text-[#262626]">Shop by Color</h3>
        <FaCaretUp className={`transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`} />
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[700px]" : "max-h-0"}`}>
        <ul className="flex flex-col">
          {colors.map((colorName, index) => (
            <li 
              key={index} 
              // Ekhane "category" er bodole "color" dite hobe
              onClick={() => onFilter(colorName, "color")} 
              className="py-4 text-[#767676] text-[16px] border-b border-[#F0F0F0] hover:text-[#262626] cursor-pointer duration-300 capitalize"
            >
              {colorName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Color;