import React from "react";

const Input = ({lText,iType,phold,className,...rest}) => {
  return (
    <label className="flex flex-col">
        <span className="font-serif font-light tracking-widest text-gray-800">{lText} :</span>
        <input type={iType}  placeholder={phold}  className={`border border-2 border-gray-400  rounded-md outline-none ${className}`} {...rest}/>
    </label>
  )
};

export default Input;
