import { CardHeading } from "../Features/Heading.jsx";
import { Paragraph } from "../Features/Paragraph.jsx";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ProjectApi } from "../Apis/ProjectApi.js";
import { Seperator } from "../Features/Seperator.jsx";


const ProjectNavLink = motion(NavLink);

export const Projects = ({ProjectsData})=>{
  return (<>
  
  
  
  




      <section className='flex w-full flex-wrap gap-y-4 p-10'>
    <Seperator Lefttext={"Projects"} Righttext={"View More"} to={"/Projects"} />
      {ProjectsData.map((item, index)=>{
        return(
        <div key={index} className='w-1/3'>
           <ProjectNavLink
      to = {item.ProjectUrl}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col p-5 cursor-pointer grayscale-100 hover:grayscale-0`}>
    <img src={item.ProjectImage} className="rounded-lg"></img>
    <CardHeading text={item.ProjectHeading} className={"pt-2"}/>
    <Paragraph text={item.ProjectParagraph}/>
    
    </ProjectNavLink>
          </div>
        )})}


      </section>







  
  </>)}
