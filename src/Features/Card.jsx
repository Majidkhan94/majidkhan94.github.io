import { CardHeading } from "./Heading.jsx";
import { Paragraph } from "./Paragraph.jsx";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Card = ({CardHeadingText, ParagraphText, className}) =>{
  
  return(<>
    
    <motion.div

      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${className} flex flex-col gap-2 bg-LightColor p-6 rounded-lg border border-transparent 
                hover:border-ParaColor/20 hover:-translate-y-2 hover:scale-[1.02] 
                transition-all duration-1000 linear cursor-pointer`}>
    <CardHeading text={CardHeadingText}/>
    <Paragraph text={ParagraphText}/>
    
    </motion.div>
    </>)}


export const Projectcard = ({ProjectHeadingText, ProjectParagraphText, className, src, to}) =>{
  
  const ProjectNavLink = motion(NavLink);

  return(<>
    
    <ProjectNavLink
      to = {to}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${className} flex flex-col p-5 cursor-pointer grayscale-100 hover:grayscale-0`}>
    <img src={src} className="rounded-lg"></img>
    <CardHeading text={ProjectHeadingText} className={"pt-2"}/>
    <Paragraph text={ProjectParagraphText}/>
    


    </ProjectNavLink>
    </>)}

