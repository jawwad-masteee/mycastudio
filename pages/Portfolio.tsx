import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

const allProjects: Project[] = [
  {
    id: 1,
    title: "The Silent Villa",
    category: "Private Residence",
    location: "Da Nang, Vietnam",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    description: "A sanctuary of stone and light, designed to frame the ocean views while maintaining absolute privacy. The palette is reductive, allowing nature to take center stage."
  },
  {
    id: 2,
    title: "Azure Coast Hotel",
    category: "Hospitality",
    location: "Nha Trang, Vietnam",
    year: "2022",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    description: "A boutique hotel experience where the boundaries between indoor and outdoor dissolve. Featuring local limestone and reclaimed teak wood."
  },
  {
    id: 3,
    title: "Kyoto Tea House",
    category: "Restaurant",
    location: "Kyoto, Japan",
    year: "2023",
    image: "https://images.unsplash.com/photo-1590333299762-59838045354e?q=80&w=1600&auto=format&fit=crop",
    description: "A modern interpretation of the traditional Chashitsu. Dark woods, washi paper, and controlled lighting create an intimate atmosphere for conversation."
  },
  {
    id: 4,
    title: "Urban Sanctuary",
    category: "Apartment",
    location: "Ho Chi Minh City",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    description: "A high-rise refuge from the chaotic city below. Sound-absorbing materials and a monochromatic beige palette induce an immediate sense of calm."
  },
    {
    id: 5,
    title: "Maison de Pierre",
    category: "Restoration",
    location: "Dalat, Vietnam",
    year: "2021",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    description: "Restoring a French colonial villa with respectful modern interventions. The dialogue between old and new is articulated through steel and glass additions."
  },
];

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-myca-bg min-h-screen pt-32 pb-20"
    >
      {/* Header */}
      <div className="px-6 md:px-24 mb-24">
        <motion.h1 
          className="text-6xl md:text-9xl font-editorial mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Selected <span className="italic font-light">Works</span>
        </motion.h1>
        <motion.p 
          className="max-w-xl text-myca-text/60 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A curated collection of spatial narratives across hospitality, residential, and commercial design. Each project is a bespoke response to context and client.
        </motion.p>
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-0">
        {allProjects.map((project, index) => (
          <ProjectItem 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={() => setSelectedId(project.id)}
          />
        ))}
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-myca-bg/95 backdrop-blur-md p-4 md:p-12 overflow-y-auto"
            onClick={() => setSelectedId(null)}
          >
             {/* Close Button */}
             <button className="absolute top-6 right-6 md:top-12 md:right-12 text-myca-text hover:text-myca-accent z-50">
               <span className="uppercase tracking-widest text-sm">Close [x]</span>
             </button>

             {/* Modal Content */}
             <motion.div 
               layoutId={`project-container-${selectedId}`}
               className="bg-white w-full max-w-6xl overflow-hidden shadow-2xl relative"
               onClick={(e) => e.stopPropagation()}
             >
               {(() => {
                 const project = allProjects.find(p => p.id === selectedId);
                 if (!project) return null;
                 return (
                   <div className="flex flex-col md:flex-row h-full md:h-[80vh]">
                      <div className="w-full md:w-2/3 h-[50vh] md:h-full">
                         <motion.img 
                           layoutId={`project-image-${project.id}`}
                           src={project.image} 
                           className="w-full h-full object-cover" 
                         />
                      </div>
                      <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-myca-bg">
                         <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.3 }}
                         >
                            <span className="text-xs uppercase tracking-widest text-myca-accent mb-4 block">
                                {project.category} — {project.year}
                            </span>
                            <h2 className="text-4xl font-editorial mb-6">{project.title}</h2>
                            <p className="text-sm font-bold text-myca-text/40 mb-8 uppercase tracking-wide">{project.location}</p>
                            <div className="w-12 h-[1px] bg-myca-text mb-8" />
                            <p className="text-myca-text/70 leading-relaxed font-light mb-12">
                                {project.description}
                            </p>
                            <button className="text-xs uppercase tracking-widest border-b border-myca-text pb-1 hover:text-myca-accent hover:border-myca-accent transition-colors">
                                View Full Case Study
                            </button>
                         </motion.div>
                      </div>
                   </div>
                 );
               })()}
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <div className="py-32 text-center bg-white">
        <h3 className="text-2xl font-editorial mb-4">Interested in our process?</h3>
        <p className="text-myca-text/60 mb-8">Read about the ideas behind the designs.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="text-myca-accent hover:text-myca-text uppercase tracking-widest text-sm underline underline-offset-4 transition-colors"
        >
          Read the Journal
        </button>
      </div>
    </motion.div>
  );
};

const ProjectItem: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  return (
    <motion.div 
      className="group relative w-full h-[60vh] md:h-[80vh] overflow-hidden cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <motion.img 
        layoutId={`project-image-${project.id}`}
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-100"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

      {/* Floating Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 flex flex-col md:flex-row md:items-end justify-between text-white z-10">
         <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
             <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-4 opacity-70">
                 {String(index + 1).padStart(2, '0')} / {project.category}
             </p>
             <h2 className="text-5xl md:text-8xl font-editorial leading-none group-hover:text-myca-accent transition-colors duration-300">
                 {project.title}
             </h2>
         </div>
         
         <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
             <span className="inline-block px-6 py-3 border border-white/30 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm">
                 Explore Project
             </span>
         </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;