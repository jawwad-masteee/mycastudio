import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

export const allProjects: Project[] = [
  {
    id: 1,
    title: "The Silent Villa",
    category: "Private Residence",
    location: "Da Nang, Vietnam",
    year: "2023",
    slug: "the-silent-villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
    ],
    client: "Private Client",
    services: ["Architecture", "Interior Design", "Landscape Strategy"],
    description: "A sanctuary of stone and light, designed to frame the ocean views while maintaining absolute privacy. The palette is reductive, allowing nature to take center stage.",
    descriptionPart2: "We approached this project with a philosophy of reduction. By stripping away the non-essential, we allowed the fundamental elements of light, space, and material to shape the experience. The result is not just a building, but a vessel for living.",
    challenge: "The client requested a home that felt like a monastery for modern life—completely secluded from the bustling tourist street nearby, yet open to the expansive ocean horizon.",
    solution: "We utilized a fortress-like stone façade for the street-facing elevation, creating a complete sound and visual barrier. Inside, the architecture unfolds into a series of open pavilions that dissolve into the landscape."
  },
  {
    id: 2,
    title: "Azure Coast Hotel",
    category: "Hospitality",
    location: "Nha Trang, Vietnam",
    year: "2022",
    slug: "azure-coast-hotel",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
    ],
    client: "Azure Hospitality Group",
    services: ["Interior Design", "Branding", "Art Curation"],
    description: "A boutique hotel experience where the boundaries between indoor and outdoor dissolve. Featuring local limestone and reclaimed teak wood.",
    descriptionPart2: "The design language speaks of the coast without resorting to clichés. We engaged with the salt air, the harsh sun, and the cool breeze to create an environment that feels intrinsically connected to its location.",
    challenge: "Redefining luxury hospitality in a saturated market. The goal was to move away from gold-plated opulence towards a grounded, textural luxury.",
    solution: "We prioritized local craftsmanship, sourcing 80% of materials within a 100km radius. The result is a space that feels deeply rooted in its context."
  },
  {
    id: 3,
    title: "Kyoto Tea House",
    category: "Restaurant",
    location: "Kyoto, Japan",
    year: "2023",
    slug: "kyoto-tea-house",
    image: "https://images.unsplash.com/photo-1590333299762-59838045354e?q=80&w=1600&auto=format&fit=crop",
    gallery: [
        "https://images.unsplash.com/photo-1590333299762-59838045354e?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
    ],
    client: "Uji Tea Co.",
    services: ["Interior Design", "Lighting Design"],
    description: "A modern interpretation of the traditional Chashitsu. Dark woods, washi paper, and controlled lighting create an intimate atmosphere for conversation.",
    descriptionPart2: "The interplay of shadow and light is central to the experience. We created a space where time seems to slow down, allowing the ritual of tea to take precedence over the rush of the city outside.",
    challenge: "Balancing strict heritage preservation rules with a desire for contemporary functionality and flow.",
    solution: "Using traditional joinery techniques (Kigumi) to create modern, modular seating arrangements that respect the building's structural integrity."
  },
  {
    id: 4,
    title: "Urban Sanctuary",
    category: "Apartment",
    location: "Ho Chi Minh City",
    year: "2024",
    slug: "urban-sanctuary",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    gallery: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1600&auto=format&fit=crop"
    ],
    client: "Private Client",
    services: ["Interior Design", "Custom Furniture"],
    description: "A high-rise refuge from the chaotic city below. Sound-absorbing materials and a monochromatic beige palette induce an immediate sense of calm.",
    descriptionPart2: "We wanted to create a tactile silence. Every surface, from the boucle sofa to the limestone floors, was chosen to dampen sound and soften the visual noise of urban living.",
    challenge: "The original layout was fragmented and dark. The client wanted an open, fluid space that could host gatherings but also offer privacy.",
    solution: "We removed non-structural walls and used floor-to-ceiling linen curtains to create flexible zones. The light palette maximizes the natural light."
  },
    {
    id: 5,
    title: "Maison de Pierre",
    category: "Restoration",
    location: "Dalat, Vietnam",
    year: "2021",
    slug: "maison-de-pierre",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop"
    ],
    client: "Heritage Trust",
    services: ["Restoration", "Architecture"],
    description: "Restoring a French colonial villa with respectful modern interventions. The dialogue between old and new is articulated through steel and glass additions.",
    descriptionPart2: "The history of the building was not erased but highlighted. We cleaned the original stone but left the scars of time, juxtaposing them with the precision of modern steel and glass.",
    challenge: "Preserving the crumbling colonial facade while making the home livable for a modern family.",
    solution: "A steel and glass box was inserted into the rear of the structure, housing the kitchen and dining areas, leaving the original stone structure untouched."
  },
];

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();
  const whatsappUrl = "https://wa.me/84938639805?text=" + encodeURIComponent("Hello MYCA Studio, I’m interested in discussing an interior design project. I would love to understand your process and explore how we can work together.");

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
                         {/* IMPORTANT: We use layoutId here to match the destination page's hero image */}
                         <motion.img 
                           layoutId={`project-image-main-${project.id}`}
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
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if(project.slug) {
                                        navigate(`/portfolio/${project.slug}`);
                                    }
                                }}
                                className="text-xs uppercase tracking-widest border-b border-myca-text pb-1 hover:text-myca-accent hover:border-myca-accent transition-colors"
                            >
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
        <h3 className="text-3xl md:text-5xl font-editorial mb-4">Interested in working with MYCA?</h3>
        <p className="text-myca-text/60 mb-8 max-w-lg mx-auto leading-relaxed">Let’s discuss your project and explore how thoughtful design can shape your space.</p>
        <motion.a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-myca-text border border-myca-text hover:bg-myca-text hover:text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Start a Conversation
        </motion.a>
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
        layoutId={`project-image-main-${project.id}`}
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