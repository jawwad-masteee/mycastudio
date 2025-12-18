import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full flex flex-col items-center justify-center bg-myca-bg px-6 text-center"
    >
      <h1 className="text-5xl md:text-8xl font-editorial mb-6 text-myca-text/20 select-none">
        {title}
      </h1>
      <p className="text-myca-text/60 uppercase tracking-widest text-sm mb-8">
        Coming Soon
      </p>
      <NavLink to="/" className="text-myca-accent hover:text-myca-text transition-colors underline underline-offset-4">
        Return Home
      </NavLink>
    </motion.div>
  );
};

export default ComingSoon;