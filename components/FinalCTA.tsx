import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-40 px-6 bg-myca-bg text-center flex flex-col items-center justify-center min-h-[60vh] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-myca-sep rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-myca-ui rounded-full blur-[80px]" />
      </div>

      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         className="relative z-10"
      >
        <h2 className="text-5xl md:text-8xl font-editorial mb-8 text-myca-text leading-tight">
          Every space already <br/> has a story.
        </h2>
        
        <p className="text-2xl md:text-3xl font-light text-myca-text/60 italic mb-16">
           We help it speak.
        </p>

        <motion.button 
          onClick={() => navigate('/contact')}
          className="group relative px-12 py-5 border border-black text-black overflow-hidden hover:text-white transition-colors duration-500"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 text-sm uppercase tracking-[0.2em]">Begin the Conversation</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FinalCTA;