import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Seperator = ({ Lefttext, Righttext, to }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center w-full my-10 gap-4">
      
      {/* Left Line */}
      <div className="h-px bg-ParaColor/20 w-5 md:w-20"></div>

      {/* Left Side: Text */}
      <motion.span
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-ParaColor font-Paragraph uppercase tracking-wider text-sm md:text-base whitespace-nowrap">
        {Lefttext}
      </motion.span>

      {/*Center Line */}
      <div className="grow h-px bg-ParaColor/20"></div>

      {/* Right Side: NavLink Text */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        <NavLink to={to} 
          className="text-ParaColor font-bold font-Paragraph uppercase tracking-wider text-sm md:text-base whitespace-nowrap">
        
          {Righttext}
        </NavLink>
      </motion.div>

      {/* 5. Aakhri line (Right Text se End tak) */}
      <div className="h-px bg-ParaColor/20 w-5 md:w-20"></div>
    </motion.div>
  );
};