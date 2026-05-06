import { motion } from "framer-motion";

export const SplashScreen = () => {
  const panelTransition = { 
    duration: 1, 
    ease: "linear", 
  };

  return (<>
    <div className="fixed inset-0 z-100 overflow-hidden flex flex-col">
      
      {/* TOP PANEL */}
      <motion.div
        initial={{ y: 0 }} exit={{ y: "-100%" }} transition={panelTransition}
        className="relative flex flex-1 items-end justify-center overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-white font-Heading font-extrabold text-4xl md:text-9xl translate-y-1/2">
          MAJID KHAN
        </motion.h1>
      </motion.div>

      {/* BOTTOM PANEL */}
      <motion.div
        initial={{ y: 0 }} exit={{ y: "100%" }} transition={panelTransition}
        className="relative flex-1  flex items-start justify-center overflow-hidden"
      >
        {/* Same text but hidden - handles the split look perfectly */}
        <h1 className="text-white font-Heading font-extrabold text-4xl md:text-9xl -translate-y-1/2" >
          MAJID KHAN
        </h1>
      </motion.div>

    </div>
  </>)}