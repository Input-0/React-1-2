import React from "react";

const Button = ({btext,btype,className}) => {
  return (
    <button type={btype} className={`border  w-40 ${className}`}>
        {btext}
    </button>
  )
};

export default Button;
