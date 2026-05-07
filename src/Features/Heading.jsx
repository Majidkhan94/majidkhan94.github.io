import { easeOut, motion } from "framer-motion";

export const Heading = ({text, className}) => {
  return(<>
      <motion.h1
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className={`${className} text-white font-Heading text-3xl md:text-5xl tracking-wider `}>
      {text}
    </motion.h1>
  
 </>)}


export const BigHeading = ({text, className}) => {
return(<>

<motion.h1
  initial={{opacity:0, y: 200}}
  whileInView={{opacity:1, y: 0}}
  viewport={{once:true, amount:0.5}}
  transition={{duration:1, ease: easeOut}}
  className={`${className} text-8xl font-Heading font-bold text-LightColor -z-50`}>
{text}
</motion.h1>
</>)}

export const SubHeading = ({text, className}) => {
return(<>

<motion.h1
  initial={{opacity:0, y: 200}}
  whileInView={{opacity:1, y: 0}}
  viewport={{once:true, amount:0.5}}
  transition={{duration:1, ease: easeOut}}
  className={`${className} text-lg font-Heading text-white`}>
{text}
</motion.h1>
  </>)}

export const CardHeading = ({text, className}) => {
return(<>

<motion.h1
  initial={{opacity:0, y: 200}}
  whileInView={{opacity:1, y: 0}}
  viewport={{once:true, amount:0.5}}
  transition={{duration:1, ease: easeOut}}
  className={`${className} text-lg font-Heading text-white`}>
{text}
</motion.h1>
  </>)}