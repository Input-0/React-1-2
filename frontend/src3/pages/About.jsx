import {useNavigate} from "react-router-dom";

const About = () => {
 let navigate =  useNavigate()
  return (
    <div>
      <h1>about</h1>
      <button onClick={() => navigate("/")}>click</button>
    </div>
  );
};

export default About;
