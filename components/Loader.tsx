import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence of animations
    const timer1 = setTimeout(() => setStage(1), 800); // Blur to sharp
    const timer2 = setTimeout(() => setStage(2), 2000); // Line draws
    const timer3 = setTimeout(() => {
      setStage(3);
      setTimeout(onComplete, 800); // Allow fade out time
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-myca-bg"
      initial={{ opacity: 1 }}
      animate={stage === 3 ? { opacity: 0, pointerEvents: "none" } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Logo Text */}
        <motion.h1
          className="text-4xl md:text-6xl tracking-[0.2em] font-light text-myca-text font-sans"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ 
            filter: stage >= 1 ? "blur(0px)" : "blur(10px)",
            opacity: 1
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          MYCA <span className="font-semibold">STUDIO</span>
        </motion.h1>

        {/* Architectural Line */}
        <div className="relative w-64 h-[1px] mt-6 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-myca-text"
            initial={{ width: "0%" }}
            animate={{ width: stage >= 2 ? "100%" : "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;