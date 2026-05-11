import { useState, useEffect } from "react";
import { HashRouter } from 'react-router-dom';
import { Routing } from "../src/Routing/Routing.jsx";
import { SplashScreen } from "./Components/SplashScreen.jsx";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {

  const isHomePage = window.location.pathname === "/";
  const [loading, setLoading] = useState(isHomePage);

useEffect(() => {
    if (isHomePage) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isHomePage]);

  return (<>
    <main className="h-screen relative">
      <AnimatePresence mode="wait">
        {loading 
        ? ( <SplashScreen key="loader" /> )
        : (
          <motion.div
            key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
            <HashRouter>
              <Routing />
            </HashRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  </>)}