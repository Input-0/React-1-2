import {useState} from "react";
import Level1 from "./component/Level1";
import Bulb from "./Bulb";
import Switch from "./Switch";

const App = () => {
     let [light,setLIght] = useState(false)
  return <div>
    <Bulb val={light}/>
    <Switch val={light} setVal={setLIght}/>
    </div>;
};

export default App;
