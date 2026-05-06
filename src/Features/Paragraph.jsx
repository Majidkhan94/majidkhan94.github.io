import { motion } from "framer-motion"
export const Paragraph = ({ text, className }) => {
  return (
    <>
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className={`${className} text-ParaColor font-Paragraph text-sm md:text-base tracking-wider px-5`}>
      {text}
    </motion.p>

    </>)}
