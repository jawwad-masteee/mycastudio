import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

const projects: Project[] = [
  {
    id: 1,
    title: "The Silent Villa",
    category: "Private Residence",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Azure Coast Hotel",
    category: "Hospitality",
    year: "2022",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Kyoto Tea House",
    category: "Restaurant",
    year: "2023",
    image: "https://images.unsplash.com/photo-1590333299762-59838045354e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Urban Sanctuary",
    category: "Apartment",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
  },
];

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted transform range to accommodate the extra CTA card
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-88%"]);

  return (
    <section id="projects-section" ref={targetRef} className="relative h-[300vh] bg-myca-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 pl-6 md:pl-24">
          
          {/* Intro Card */}
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
             <h2 className="text-6xl md:text-8xl font-editorial text-myca-text mb-6">
               Selected <br/> Works
             </h2>
             <p className="text-myca-text/60 max-w-xs leading-relaxed">
               A curation of spaces defined by light, texture, and silence. Each project is a bespoke narrative.
             </p>
             <div className="w-24 h-[1px] bg-myca-text mt-8"></div>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Final CTA Card */}
          <ProjectCTACard />

        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[45vw] overflow-hidden bg-myca-sep cursor-none md:cursor-pointer flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content info */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="overflow-hidden mb-2">
          <p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.category} — {project.year}
          </p>
        </div>
        <h3 className="text-3xl md:text-5xl font-editorial opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const ProjectCTACard: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[45vw] overflow-hidden bg-myca-text flex-shrink-0 cursor-pointer flex flex-col items-center justify-center text-center p-8 md:p-12 transition-colors duration-500 hover:bg-[#111111]"
      onClick={() => navigate('/portfolio')}
    >
      {/* Decorative Border */}
      <div className="absolute inset-6 border border-white/10 group-hover:border-myca-accent/60 transition-colors duration-700" />
      
      <motion.div 
        className="relative z-10 max-w-lg flex flex-col items-center"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.h3 
          className="text-4xl md:text-6xl font-editorial text-white mb-6"
          variants={{
            rest: { y: 0 },
            hover: { y: -5 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
            Explore More <br/>
            <span className="italic text-myca-accent">of Our Work</span>
        </motion.h3>
        
        <motion.p 
          className="text-white/60 font-light leading-relaxed mb-10 max-w-xs"
          variants={{
            rest: { opacity: 0.6 },
            hover: { opacity: 0.9 }
          }}
        >
            Discover complete project stories and immersive interior experiences.
        </motion.p>
        
        <motion.button 
          className="px-10 py-4 border border-white/30 text-white uppercase tracking-[0.2em] text-xs transition-all duration-300 group-hover:bg-white group-hover:text-myca-text group-hover:border-white"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 }
          }}
        >
            View Full Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Projects;