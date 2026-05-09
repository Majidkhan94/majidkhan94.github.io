import { Routes, Route} from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Home } from "../Pages/Home"
import { Aboutus } from "../Pages/Aboutus"
import { Blog } from "../Pages/Blog"
import { Contactus } from "../Pages/Contactus"
import { Projects } from "../Pages/Projects"
import { Technicalexpertise } from "../Pages/Technicalexpertise"


export const Routing = ()=>{
  return(<>

      <Routes>
        <Route path="" element={ <Layout />}>  
        <Route path="/" element={ <Home />} />  
        <Route path="/Aboutus" element={ <Aboutus />} />  
        <Route path="/Technicalexpertise" element={ <Technicalexpertise />} />  
        <Route path="/Projects" element={ <Projects />} />  
        <Route path="/Blog" element={ <Blog />} />  
        <Route path="/Contactus" element={ <Contactus/>} />  
      </Route>
      </Routes>  

  
  
  </>)}