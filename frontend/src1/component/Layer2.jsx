import { usecountContext } from "../context/Countcontext";

const Layer2 = () => {
   let {count,setCount}  = usecountContext()
  return (
    <>
    <div>{count}</div>
    <button onClick={() =>setCount(count+1)}>click</button>
    </>
  );
};

export default Layer2;
