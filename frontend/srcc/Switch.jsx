import React from "react";

const Switch = ({val,setVal}) => {
  return (
    <button onClick={() =>setVal(!val)}>switch</button>
  )
};

export default Switch;
