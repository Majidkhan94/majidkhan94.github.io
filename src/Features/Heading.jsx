import { motion } from "framer-motion";

export const MainHeading = ({text, className}) => {
  return(<>
  <motion.h1 
  initial={}
  whileInView={}
  
  
  
  className={`text-[#181818] w-full hover:text-BottomBorder cursor-pointer font-bebas text-6xl md:text-9xl font-semibold  tracking-wider animate-slide-BottomtoTop  ${className}`}>
  {text}
  </motion.h1>
  </>)}


    <motion.h1
      initial={{ opacity: 0, x: -100 }} // Shuruat yahan se
      whileInView={{ opacity: 1, x: 0 }} // Jab scroll karke nazar aaye
      viewport={{ once: true, amount: 0.5 }} // Sirf ek baar ho, jab 50% nazar aaye
      transition={{ duration: 0.8 }}
      className="text-GoldColor text-9xl font-bebas"
    >
      Majid Khan
    </motion.h1>
  );
};














export const CardHeading = ({text, className}) => {
  return(<>
<h1 className={`text-GoldColor text-2xl md:text-2xl font-semibold font-bebas tracking-widest  ${className}`}>
{text}
</h1>


  </>)}