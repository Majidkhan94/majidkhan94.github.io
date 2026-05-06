import { motion } from "framer-motion";

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













export const CardHeading = ({text, className}) => {
  return(<>
<h1 className={`text-GoldColor text-2xl md:text-2xl font-semibold font-bebas tracking-widest  ${className}`}>
{text}
</h1>


  </>)}