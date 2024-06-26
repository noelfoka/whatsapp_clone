import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  handleFunction: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({icon, handleFunction}) => {
  return ( 
    <button className="w-8 h-8 rounded-full" onClick={handleFunction}>
      {icon}
    </button>
   );
}
 
export default IconButton;