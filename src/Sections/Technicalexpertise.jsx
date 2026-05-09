import { Seperator } from "../Features/Seperator.jsx"
import { TechnicalexpertiseApi } from "../Apis/TechnicalexpertiseApi.js"
import { CardHeading } from "../Features/Heading.jsx"
import { Paragraph } from "../Features/Paragraph.jsx"
import { motion } from "framer-motion"

export const Technicalexpertise = () =>{

  return(<>
    <Seperator Lefttext={"Technical Expertise"} Righttext={"View More"} to={"/Technicalexpertise"} />

    <section className="flex gap-x-10 relative pt-15 pl-0 md:pl-20 text-white w-full h-screen justify-center items-center">

    <div className='w-full flex flex-wrap gap-15'>

    {TechnicalexpertiseApi.map((item, index)=>{
      return(
          <div key={index} className='relative w-85'>

            <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>{item.TechnicalexpertiseNumber}</span>
            
            <motion.div

      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-2 bg-LightColor p-6 rounded-lg border border-transparent 
                hover:border-ParaColor/20 hover:-translate-y-2 hover:scale-[1.02] 
                transition-all duration-1000 linear cursor-pointer`}>
    <CardHeading text={item.TechnicalexpertiseHeading}/>
    <Paragraph text={item.TechnicalexpertiseParagraph}/>
    
    </motion.div>
          
          </div>
      )})}
  </div>
</section>
  </>)}