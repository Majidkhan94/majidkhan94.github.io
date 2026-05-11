import { useState, useEffect } from "react";
import { HashRouter } from 'react-router-dom';
import { Routing } from "../src/Routing/Routing.jsx";
import { SplashScreen } from "./Components/SplashScreen.jsx";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {
  
  const [loading, setLoading] = useState(() => {
    const currentHash = window.location.hash;
    return currentHash === "" || currentHash === "#/" || currentHash === "#";
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <main className="h-screen relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HashRouter>
              <Routing />
            </HashRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};