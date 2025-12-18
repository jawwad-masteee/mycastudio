import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-myca-bg">
      
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" 
          alt="Architecture Background"
          className="w-full h-full object-cover filter brightness-[0.95] contrast-[0.9] saturate-50"
        />
      </motion.div>

      {/* Content Container - Centered vertically with safe zones */}
      <div className="relative z-20 px-6 md:px-24 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-white leading-[1.1] mb-8 md:mb-10 drop-shadow-sm">
            Designing Spaces <br/>
            <span className="italic font-light">That Speak Emotion</span>
          </h1>
          
          <h2 className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-xl mb-10 md:mb-14 leading-relaxed">
            Architectural & Interior Design Studio crafting immersive spatial narratives across the world.
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects-section');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 border border-white text-white overflow-hidden transition-all duration-500 hover:border-myca-accent"
            >
              <div className="absolute inset-0 bg-myca-accent translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 opacity-90" />
              <span className="relative z-10 font-sans tracking-widest text-sm uppercase transition-transform duration-300 group-hover:-translate-y-[2px]">
                View Selected Projects
              </span>
            </button>

            <motion.button 
              onClick={() => navigate('/contact')}
              className="group px-8 py-4 text-white relative w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="relative z-10 font-sans tracking-widest text-sm uppercase transition-colors duration-300 group-hover:text-myca-accent">
                Contact Studio
              </span>
              <span className="absolute bottom-3 left-8 right-8 h-[1px] bg-white transition-all duration-300 group-hover:bg-myca-accent" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Perfectly Centered */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 } 
        }}
      >
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-8 bg-white/40" />
      </motion.div>
    </div>
  );
};

export default Hero;