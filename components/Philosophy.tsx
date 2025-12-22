import React, { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

const values = [
  {
    title: "Precision",
    description: "Every detail matters. We believe in the power of millimeter-perfect design.",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"
  },
  {
    title: "Creativity",
    description: "Pushing boundaries to create environments that inspire and evoke emotion.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  },
  {
    title: "Trust",
    description: "Transparent collaboration is the foundation of every successful narrative.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"
  },
];

const Philosophy: React.FC = () => {
  // Animation logic for marquee interaction
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(-50); // Starts at -50% to allow Left->Right movement towards 0%
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((t, delta) => {
    // Normal duration: 30s for 50% distance traversal
    // Speed = 50% / 30s = ~1.666% per second
    const baseSpeed = 50 / 30; 
    const speedMultiplier = isHovered ? 0.5 : 1; // Slow down to 50% speed on hover
    
    // delta is in ms, convert to seconds
    const moveBy = baseSpeed * (delta / 1000) * speedMultiplier;

    // Moving from -50% towards 0% (Left to Right visual flow)
    let newX = baseX.get() + moveBy;
    
    // Wrap around logic: Once we reach 0%, reset to -50% for seamless loop
    if (newX >= 0) {
      newX = -50;
    }
    
    baseX.set(newX);
  });

  return (
    <section className="h-screen w-full flex flex-col bg-myca-bg text-myca-text relative overflow-hidden">
      
      {/* TOP CONTENT: Takes remaining height */}
      <div className="flex-1 w-full px-6 md:px-24 flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-center">
             
             {/* Header */}
             <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-6 md:mb-16 shrink-0 text-center md:text-left">
                 <h2 className="text-4xl md:text-7xl font-editorial leading-none">
                    Studio <br/> Philosophy
                 </h2>
                 {/* Decorative Line */}
                 <div className="w-full md:w-64 h-[1px] bg-myca-ui mt-4 md:mt-0 md:mb-2" />
             </div>

             {/* Values Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 shrink-0">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="mb-3 md:mb-6 relative w-10 h-10 md:w-16 md:h-16">
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-myca-accent">
                         <motion.path
                           d={value.iconPath}
                           initial={{ pathLength: 0 }}
                           whileInView={{ pathLength: 1 }}
                           transition={{ duration: 1.5, ease: "easeInOut" }}
                         />
                       </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-editorial mb-2 md:mb-4 group-hover:text-myca-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-myca-text/70 leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
             </div>
        </div>
      </div>

      {/* BOTTOM STRIP: 20-25vh */}
      <div className="h-[20vh] md:h-[25vh] bg-myca-accent w-full flex items-center overflow-hidden shrink-0 relative z-20">
         <motion.div 
            className="flex whitespace-nowrap cursor-default"
            style={{ x }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            onTouchCancel={() => setIsHovered(false)}
         >
             {/* Repeat content to ensure loop coverage */}
             {[...Array(6)].map((_, i) => (
                 <div key={i} className="flex items-center">
                    <span className="text-black font-bold font-sans uppercase text-[5vh] md:text-[10vh] tracking-widest px-4 md:px-12 select-none">
                        PLANNING
                    </span>
                    <span className="text-black font-bold text-[5vh] md:text-[10vh] opacity-50 select-none">•</span>
                    <span className="text-black font-bold font-sans uppercase text-[5vh] md:text-[10vh] tracking-widest px-4 md:px-12 select-none">
                        DESIGNING
                    </span>
                    <span className="text-black font-bold text-[5vh] md:text-[10vh] opacity-50 select-none">•</span>
                    <span className="text-black font-bold font-sans uppercase text-[5vh] md:text-[10vh] tracking-widest px-4 md:px-12 select-none">
                        CRAFTSMANSHIP
                    </span>
                    <span className="text-black font-bold text-[5vh] md:text-[10vh] opacity-50 select-none">•</span>
                 </div>
             ))}
         </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;