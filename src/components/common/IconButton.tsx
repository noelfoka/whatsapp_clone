import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  handleFunction: () => void;
  isActive?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({icon, handleFunction, isActive}) => {
  return ( 
    <button className={`w-8 h-8 rounded-full hover:bg-gray-800 ${isActive ? "bg-gray-800" : "bg-transparent"}`} onClick={handleFunction}>
      {icon}
    </button>
   );
}
 
export default IconButton;