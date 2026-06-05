import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Layout from "./Layout"



const App = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element ={<About/>}/>
            <Route path="contact" element ={<Contact/>}/>
            <Route path="register" element ={<Register/>}/>
            <Route path="login" element ={<Login/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App