import { motion } from "framer-motion"

export const Image = ({src})=>{
  return(<>

    <motion.img
    initial = { {opacity: 0} }
    whileInView = {{opacity: 1}}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 2 }}
    src={src}>
    </motion.img>
    </>)}