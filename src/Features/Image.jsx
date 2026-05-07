import { easeIn, motion } from "framer-motion"

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


export const IconImage = ({src, text, className}) =>{
    return(<>

<div className='relative group w-fit'>
  <motion.img
    initial={{ opacity: 0, y: 50 }} // 200 thora zyada hai, 50-80 smooth lagta hai
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    src={src}
    className={`${className} w-10 grayscale opacity-50 
      transition-all duration-500 ease-out
      group-hover:grayscale-0 group-hover:opacity-100 
      group-hover:scale-125 group-hover:-translate-y-2
      group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]
      cursor-pointer`}
  />
  
  {/* Tooltip: Hover pe tech ka naam dikhane ke liye */}
  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 
    bg-white text-BgColor text-[10px] font-bold px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
    {text}
  </span>
</div>

  </>)}