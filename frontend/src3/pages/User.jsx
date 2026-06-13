import { useParams } from "react-router-dom";

const User = () => {
 let {id} =  useParams()
  return id ? (
    <div>
      <h1>Welcome user, {id}</h1>
    </div>
  ):(
    <h1>User not found</h1>

  )
};

export default User;
