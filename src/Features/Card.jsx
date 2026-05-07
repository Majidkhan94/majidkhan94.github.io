import { CardHeading } from "./Heading.jsx";
import { Paragraph } from "./Paragraph.jsx";
import { motion } from "framer-motion";



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


