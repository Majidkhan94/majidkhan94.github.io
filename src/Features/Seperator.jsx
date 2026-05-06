import { motion } from "framer-motion";

export const Seperator = ({text}) => {
  return (
    <motion.fieldset
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="border-t border-ParaColor/30 text-center my-5">
      
      <motion.legend
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-left px-2 text-ParaColor font-Paragraph uppercase tracking-[0.3em] ml-10">
        {text}
      </motion.legend>
    </motion.fieldset>
  )}