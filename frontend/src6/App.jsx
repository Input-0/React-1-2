import {useSelector,useDispatch} from "react-redux"
import { increment,decreemnt,customValue } from "./slice/counterSlice";
import { useNavigate } from "react-router-dom";

const App = () => {
  let count = useSelector((state) => state.counter.count)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  return (
    <div>
      <h1>{count} </h1>
      <button onClick={() =>dispatch(increment())}>+</button>
      <button onClick={() =>dispatch(decreemnt())}>-</button>
      <button onClick={() =>dispatch(customValue(20))}>-</button>
      <button onClick={navigate("/")}>click</button>
    </div>



  )
};

export default App;
