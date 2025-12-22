import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <div 
        ref={ref} 
        className="relative h-screen w-full overflow-hidden flex bg-gradient-to-br from-[#F9F8F6] to-[#EFE9E3]"
    >
      
      {/* MOBILE BACKGROUND ANIMATION (Lines) - Only visible on mobile */}
      <div className="absolute inset-0 z-0 md:hidden overflow-hidden pointer-events-none">
        <motion.svg
            className="absolute w-[200%] h-[150%] top-[-10%] left-[-50%]"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: -20, y: 0, rotate: 0 }}
            animate={{ 
                x: [-20, 10, -20],
                y: [0, -20, 0],
                rotate: [0, 1, 0]
            }}
            transition={{ 
                duration: 18, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
        >
            {/* Soft architectural curves */}
            <path 
                d="M-200 600 C 100 400, 400 800, 1200 500" 
                stroke="#D9CFC7" 
                strokeWidth="2" 
                strokeOpacity="0.12"
            />
            <path 
                d="M-200 400 C 200 300, 500 600, 1200 300" 
                stroke="#C9B59C" 
                strokeWidth="2" 
                strokeOpacity="0.08" 
            />
        </motion.svg>
        
        {/* Secondary layer for depth - Slower */}
         <motion.svg
            className="absolute w-[180%] h-[180%] top-[10%] left-[-40%]"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ x: 0, y: 0 }}
            animate={{ 
                x: [0, -30, 0],
                y: [0, 15, 0],
            }}
            transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2 
            }}
        >
             <path 
                d="M-100 500 C 200 600, 500 300, 1100 600" 
                stroke="#D9CFC7" 
                strokeWidth="3" 
                strokeOpacity="0.06" 
            />
             <path 
                d="M-100 750 C 300 650, 600 850, 1200 700" 
                stroke="#C9B59C" 
                strokeWidth="1.5" 
                strokeOpacity="0.08" 
            />
        </motion.svg>
      </div>

      {/* LEFT SIDE: Content (Full width on mobile, 50% on desktop) */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-black leading-[1.1] mb-8 md:mb-10">
            Designing Spaces <br/>
            <span className="italic font-light text-myca-text/90">That Speak Emotion</span>
          </h1>
          
          <h2 className="text-black/70 text-lg md:text-xl font-light tracking-wide max-w-md mb-10 md:mb-14 leading-relaxed">
            Architectural & Interior Design Studio crafting immersive spatial narratives across the world.
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects-section');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 border border-black text-black overflow-hidden transition-all duration-500 hover:border-myca-accent hover:text-white"
            >
              <div className="absolute inset-0 bg-myca-accent translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 opacity-100" />
              <span className="relative z-10 font-sans tracking-widest text-sm uppercase transition-transform duration-300">
                View Selected Projects
              </span>
            </button>

            <motion.button 
              onClick={() => navigate('/contact')}
              className="group px-8 py-4 text-black relative w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="relative z-10 font-sans tracking-widest text-sm uppercase transition-colors duration-300 group-hover:text-myca-accent">
                Contact Studio
              </span>
              <span className="absolute bottom-3 left-8 right-8 h-[1px] bg-black transition-all duration-300 group-hover:bg-myca-accent" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Image (Hidden on mobile, 50% on desktop) */}
      <motion.div 
        className="hidden md:block w-1/2 h-full relative"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Minimalist Luxury Interior" 
            className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Scroll Indicator - Perfectly Centered Bottom */}
      <motion.div 
        className="absolute bottom-10 left-1/2 text-black/60 text-xs tracking-widest uppercase flex flex-col items-center gap-3 z-30 pointer-events-none"
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 } 
        }}
      >
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-8 bg-black/30" />
      </motion.div>
    </div>
  );
};

export default Hero;