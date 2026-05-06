import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import '../index.css';

const MotionNavLink = motion.create(NavLink);

export const Button = ({ text, to , className }) => {
  return (<>

<MotionNavLink
to= {to}
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.5, ease: "easeOut" }}
className={`${className} px-5 py-2 rounded-md font-semibold font-Paragraph text-base tracking-wider inline-block border border-ParaColor text-ParaColor mr-3 transition-all duration-600 linear hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[3px_3px_0px_0px_#9c9c9c] active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer `}>{text}

</MotionNavLink>

  </>)}
