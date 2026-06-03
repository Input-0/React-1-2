import React, { useState } from "react";
import Switch from "./Switch";

const Bulb = ({val}) => {
   

  return <div>
    {val?<h1>light is there</h1>:<h1>no light</h1>}
    
    </div>;

};

export default Bulb;
