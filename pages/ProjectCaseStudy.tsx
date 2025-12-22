import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects } from './Portfolio';
import { Project } from '../types';

const ProjectCaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-myca-bg">
        <div className="text-center">
             <h1 className="text-4xl font-editorial mb-4">Project Not Found</h1>
             <button onClick={() => navigate('/portfolio')} className="underline text-sm uppercase tracking-widest">Return to Portfolio</button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-myca-bg min-h-screen text-myca-text font-sans relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={containerRef}
    >
      {/* RETURN TO PROJECTS BUTTON */}
      <div className="fixed top-24 left-6 z-50 md:left-12">
        <motion.button 
             onClick={() => navigate('/portfolio')}
             className="group relative px-6 py-2 border border-black text-black overflow-hidden hover:text-white transition-colors duration-500 bg-white shadow-sm"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
           >
               <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
               <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">← Return to Projects</span>
        </motion.button>
      </div>

      {/* 1. HERO SLIDER SECTION (Strictly unchanged behavior, strictly expanding) */}
      <HeroSlider project={project} />

      {/* 2. PROJECT DESCRIPTION – PART 1 */}
      <section className="px-6 md:px-24 pt-32 pb-16 max-w-5xl mx-auto text-center md:text-left">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-10%" }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="md:w-3/4"
          >
             <h2 className="text-3xl md:text-5xl font-editorial leading-tight mb-8">
                {project.description}
             </h2>
          </motion.div>
      </section>

      {/* 3. PROJECT DESCRIPTION – PART 2 */}
      <section className="px-6 md:px-24 pb-32 max-w-5xl mx-auto text-center md:text-left">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="md:w-2/3 ml-auto"
          >
             <p className="text-lg md:text-xl font-light text-myca-text/70 leading-relaxed">
                {project.descriptionPart2}
             </p>
          </motion.div>
      </section>

      {/* 4. CHALLENGES & 5. SOLUTION */}
      <section className="px-6 md:px-24 pb-32 max-w-7xl mx-auto border-t border-myca-ui/30 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
             {/* CHALLENGES */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <span className="text-xs uppercase tracking-[0.2em] text-myca-accent mb-6 block">The Challenge</span>
                <p className="text-myca-text/80 font-light leading-relaxed text-lg md:text-xl">
                   {project.challenge || "Balancing the need for privacy with the desire for openness. The site constraints demanded a vertical approach, yet the client desired a grounded, horizontal living experience."}
                </p>
             </motion.div>

             {/* SOLUTION */}
             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
             >
                <span className="text-xs uppercase tracking-[0.2em] text-myca-accent mb-6 block">The Solution</span>
                <p className="text-myca-text/80 font-light leading-relaxed text-lg md:text-xl">
                   {project.solution || "We dissolved the boundaries between interior and exterior using continuous flooring materials and floor-to-ceiling glazing. Structural elements were hidden to emphasize the flow of space."}
                </p>
             </motion.div>
          </div>
      </section>

      {/* 6. PROJECT SPECIFICATIONS */}
      <section className="bg-[#F9F8F6] border-t border-myca-ui/30 py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
              <motion.div 
                 className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ staggerChildren: 0.1, duration: 0.8 }}
              >
                  <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-myca-text/40">Project Type</span>
                      <span className="font-editorial text-lg md:text-xl">{project.category}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-myca-text/40">Location</span>
                      <span className="font-editorial text-lg md:text-xl">{project.location}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-myca-text/40">Services</span>
                      <div className="flex flex-col">
                        {project.services?.map((s, i) => (
                            <span key={i} className="font-editorial text-lg md:text-xl leading-snug">{s}</span>
                        )) || <span className="font-editorial text-lg md:text-xl">Architecture</span>}
                      </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-myca-text/40">Year</span>
                      <span className="font-editorial text-lg md:text-xl">{project.year}</span>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* 7. FINAL CTA (MANDATORY) */}
      <section className="py-40 bg-myca-bg flex flex-col items-center justify-center text-center px-6 relative border-t border-myca-ui/30">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative z-10"
          >
             <h2 className="text-4xl md:text-6xl font-editorial mb-8 text-myca-text leading-tight">
               Every space begins <br/> with a question.
             </h2>
             <p className="text-xl md:text-2xl font-light text-myca-text/60 italic mb-16">
                Let's design yours.
             </p>
             <button 
                onClick={() => navigate('/contact')}
                className="group relative px-10 py-4 border border-black text-black overflow-hidden hover:text-white transition-colors duration-500 inline-block"
             >
                <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Start a Conversation</span>
             </button>
          </motion.div>
      </section>

    </motion.div>
  );
};

const HeroSlider: React.FC<{ project: Project }> = ({ project }) => {
    // If gallery exists, use it, otherwise fallback to main image
    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative w-screen h-[90vh] md:h-screen overflow-hidden bg-black">
            {/* Images */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                     {/* 
                        CRITICAL ANIMATION LOGIC:
                        We only apply layoutId to the *first* image in the slider sequence initially.
                        This allows Framer Motion to seamlessly "expand" the image from the Modal/Card
                        into this full-screen view. 
                     */}
                    {currentIndex === 0 ? (
                         <motion.img 
                            layoutId={`project-image-main-${project.id}`}
                            src={images[currentIndex]} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-70"
                        />
                    ) : (
                        <img 
                            src={images[currentIndex]} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-70"
                        />
                    )}
                   
                    <div className="absolute inset-0 bg-black/10" /> {/* Subtle Overlay */}
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay - Editorial Alignment */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-24 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex items-center gap-4 text-white/60">
                            <span className="text-xs md:text-sm uppercase tracking-[0.2em]">
                                {project.category}
                            </span>
                            <span className="w-8 h-[1px] bg-white/40"></span>
                            <span className="text-xs md:text-sm uppercase tracking-[0.2em]">
                                {project.year}
                            </span>
                        </div>
                        
                        <h1 className="text-6xl md:text-9xl font-editorial text-white leading-[0.9] tracking-tight">
                            {project.title}
                        </h1>
                        
                        <p className="text-white/80 font-light text-lg md:text-xl font-sans mt-2">
                            {project.location}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Slider Controls (Desktop Hover / Mobile Always) */}
            <div className="absolute inset-0 z-30 flex items-center justify-between px-4 md:px-12 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <button onClick={prevSlide} className="p-4 text-white hover:text-myca-accent transition-colors">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={nextSlide} className="p-4 text-white hover:text-myca-accent transition-colors">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4 pointer-events-auto">
                {images.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-500 rounded-full border border-white/50 ${idx === currentIndex ? 'bg-white w-3 h-3' : 'bg-transparent w-2 h-2 hover:bg-white/30'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCaseStudy;