import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ClientArchetypes from '../components/ClientArchetypes';
import ProcessJourney from '../components/ProcessJourney';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-myca-bg"
    >
      {/* 1. HERO (EXISTING) */}
      <Hero />

      {/* 2. WHO WE ARE (EXISTING) */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xs uppercase tracking-[0.2em] text-myca-accent mb-6">Who We Are</h3>
          <p className="text-2xl md:text-4xl font-editorial leading-tight text-myca-text mb-8">
            MYCA STUDIO is an exploration of silence, light, and material. We strip away the unnecessary to reveal the essential soul of a space.
          </p>
          <p className="text-myca-text/60 font-light leading-relaxed max-w-md mb-8">
            Operating globally with roots in Vietnam, we bring a calm, architectural precision to luxury hospitality and private residences.
          </p>
          <button 
            onClick={() => navigate('/about')}
            className="text-sm uppercase tracking-widest border-b border-myca-text pb-1 hover:text-myca-accent hover:border-myca-accent transition-colors"
          >
            Read Our Story
          </button>
        </motion.div>
        
        {/* Decorative Abstract Block */}
        <div className="flex-1 w-full flex justify-center">
          <motion.div 
            className="w-64 h-80 bg-myca-sep relative overflow-hidden"
            whileInView={{ rotate: 3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
             <div className="absolute top-0 right-0 w-full h-full border border-myca-ui transform translate-x-4 -translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop" 
               alt="Texture" 
               className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 transition-transform duration-1000"
             />
          </motion.div>
        </div>
      </section>

      {/* 3. WHO WE DESIGN FOR (NEW) */}
      <ClientArchetypes />

      {/* 4. 4-STEP PROCESS (NEW) */}
      <ProcessJourney />

      {/* 5. SELECTED WORKS (EXISTING) */}
      <Projects />

      {/* 6. TESTIMONIALS (NEW) */}
      <Testimonials />

      {/* 7. FINAL EMOTIONAL CTA (UPDATED) */}
      <FinalCTA />

    </motion.div>
  );
};

export default Home;