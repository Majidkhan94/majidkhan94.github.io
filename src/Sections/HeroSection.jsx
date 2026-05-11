import { Heading } from "../Features/Heading.jsx"
import { Paragraph } from "../Features/Paragraph.jsx"
import { Button } from "../Features/Button.jsx"
import { easeIn, motion } from "framer-motion"

export const HeroSection = () => {

const HeroSectionData = 
  [
    {
      HeroSectionHeading: "Full Stack Developer",
      HeroSectionParagraph: "Building high-quality web applications using ASP.NET Core and MERN stack. Focused on clean code and seamless user experiences that solve real-world problems."
    }
  ]

  return(<>
  <section className='flex flex-col-reverse md:flex-row w-full h-screen pl-0 md:pl-30 '>

        {HeroSectionData.map((item, index)=>{
          return(
          <div key={index} className='flex flex-1 flex-col gap-6 justify-center text-center md:text-left'>
            <div> <Heading text={item.HeroSectionHeading} /> </div>
            <div className='w-full md:w-140'> <Paragraph text={item.HeroSectionParagraph} /> </div>

            <div>
              <Button to={"/Projects"} text={"View Projects"}/>
              <Button to={"/Contactus"} text={"Contact Us"}/>
            </div>
          </div>)
        })}
    
    <div className="flex flex-1 justify-center">
        <motion.img
          src="../HeroImage.png"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}/>
    </div>
  
  </section>
  </>)}