import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainOutlet from "./MainOutlet";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

 let route = createBrowserRouter([{
    path:"/",
    element:<MainOutlet/>,
    children:[
        {index:true ,element: <HomePage/>},
        {path:"/about" ,element: <About/>},
        {path:"/projects" ,element: <Projects/>},
    ]
}])

export default route