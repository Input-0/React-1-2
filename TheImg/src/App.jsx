import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    
  )
};

export default App;
