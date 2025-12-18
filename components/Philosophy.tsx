import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Precision",
    description: "Every detail matters. We believe in the power of millimeter-perfect design.",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" // Simple diamond stack
  },
  {
    title: "Creativity",
    description: "Pushing boundaries to create environments that inspire and evoke emotion.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield/Abstract
  },
  {
    title: "Trust",
    description: "Transparent collaboration is the foundation of every successful narrative.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" // Circle info (abstracted)
  },
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-myca-bg text-myca-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mb-24 items-end justify-between">
           <h2 className="text-5xl md:text-7xl font-editorial leading-none">
             Studio <br /> Philosophy
           </h2>
           <div className="w-full md:w-64 h-[1px] bg-myca-ui mt-8 md:mt-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="mb-8 relative w-16 h-16">
                 {/* Abstract Icon Drawing SVG */}
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-myca-accent">
                   <motion.path
                     d={value.iconPath}
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 1.5, ease: "easeInOut" }}
                   />
                 </svg>
              </div>
              <h3 className="text-2xl font-editorial mb-4 group-hover:text-myca-accent transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-myca-text/70 leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;