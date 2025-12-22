import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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

// Hook to detect desktop for specific animations
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isDesktop;
};

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  // State to store calculated geometry for precise centering
  const [layout, setLayout] = useState({
    targetX: "-72%", // Fallback
    scaleX: 1,
    scaleY: 1,
    isReady: false
  });

  // Calculate the exact transform needed to center the final card
  useEffect(() => {
    const calculateGeometry = () => {
      if (!ctaCardRef.current || !containerRef.current) return;

      const card = ctaCardRef.current;
      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;

      // We measure the card's offset relative to the scrolling container
      // This is robust because it ignores current transform state of the container
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;

      // Calculate the X translate value for the container to center the card
      // Target: Card Center = Viewport Center
      // (ContainerX + CardLeft + CardWidth/2) = ViewportW / 2
      const cardCenterX = cardLeft + cardWidth / 2;
      const viewportCenterX = viewportW / 2;
      const requiredTranslateX = viewportCenterX - cardCenterX;

      // Calculate Zoom Scales for Desktop
      // We want the card to fill the viewport (100vw, 100vh)
      const sX = viewportW / cardWidth;
      const sY = viewportH / cardHeight;

      setLayout({
        targetX: `${requiredTranslateX}px`,
        scaleX: sX,
        scaleY: sY,
        isReady: true
      });
    };

    calculateGeometry();
    window.addEventListener('resize', calculateGeometry);
    return () => window.removeEventListener('resize', calculateGeometry);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal Scroll Logic
  // Maps scroll progress [0, 0.75] to the calculated horizontal movement.
  // [0.75, 1] keeps the card locked in place.
  // We use the calculated 'targetX' to ensure true visual center.
  const x = useTransform(
    scrollYProgress, 
    [0, 0.75, 1], 
    ["1%", layout.targetX, layout.targetX]
  );

  return (
    <section id="projects-section" ref={targetRef} className="relative h-[450vh] bg-myca-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          ref={containerRef}
          style={{ x }} 
          className="flex gap-12 md:gap-24 pl-6 md:pl-24 items-center h-full"
        >
          
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

          {/* Final CTA Card with Zoom Logic */}
          <ProjectCTACard 
             ref={ctaCardRef} 
             progress={scrollYProgress} 
             layout={layout}
             isDesktop={isDesktop}
          />

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

interface ProjectCTACardProps {
  progress: MotionValue<number>;
  layout: { scaleX: number; scaleY: number };
  isDesktop: boolean;
}

const ProjectCTACard = React.forwardRef<HTMLDivElement, ProjectCTACardProps>(({ progress, layout, isDesktop }, ref) => {
  const navigate = useNavigate();

  // DESKTOP ZOOM LOGIC
  // Trigger ONLY when scroll progress is between 0.75 and 1.0 (The Locked Phase)
  // We use the calculated scales from the parent to ensure exact full-screen coverage.
  const scaleX = useTransform(progress, [0.75, 1], [1, isDesktop ? layout.scaleX : 1]);
  const scaleY = useTransform(progress, [0.75, 1], [1, isDesktop ? layout.scaleY : 1]);
  
  // CONTENT ANTI-DISTORTION & SCALING
  // Since we are scaling the container non-uniformly (e.g. X: 2.2, Y: 1.4), the content will distort.
  // We must counter-scale the content.
  // We also want the text to grow slightly (e.g. 1.1x or 1.2x final size) but satisfy the max-size constraint.
  const DESIRED_CONTENT_GROWTH = 1.2; 
  
  // Calculate inverse scales.
  // If container scales by 2, content must scale by 0.5 to stay same size.
  // Multiply by DESIRED_CONTENT_GROWTH to allow controlled growth.
  const contentScaleX = useTransform(progress, [0.75, 1], [1, isDesktop ? (DESIRED_CONTENT_GROWTH / layout.scaleX) : 1]);
  const contentScaleY = useTransform(progress, [0.75, 1], [1, isDesktop ? (DESIRED_CONTENT_GROWTH / layout.scaleY) : 1]);

  // Ensure z-index bumps up during zoom so it covers neighbors
  const zIndex = useTransform(progress, (v) => (v > 0.75 ? 50 : 0));

  return (
    <motion.div 
      ref={ref}
      className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[45vw] bg-myca-text flex-shrink-0 cursor-pointer flex flex-col items-center justify-center text-center p-8 md:p-12 transition-colors duration-500 hover:bg-[#111111]"
      onClick={() => navigate('/portfolio')}
      style={{
        scaleX,
        scaleY,
        zIndex,
        transformOrigin: "center center"
      }}
    >
      {/* Decorative Border - Fades out during zoom */}
      <motion.div 
        style={{ opacity: useTransform(progress, [0.75, 0.76], [1, 0]) }}
        className="absolute inset-6 border border-white/10 group-hover:border-myca-accent/60 transition-colors duration-700" 
      />
      
      {/* Content Wrapper - Applies Counter-Scaling to prevent distortion */}
      <motion.div 
        className="relative z-10 max-w-lg flex flex-col items-center"
        style={{ 
          scaleX: contentScaleX,
          scaleY: contentScaleY
        }}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.h3 
          className="text-4xl md:text-6xl font-editorial text-white mb-6 whitespace-nowrap"
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
          className="text-white/60 font-light leading-relaxed mb-10 max-w-xs text-sm md:text-base"
          variants={{
            rest: { opacity: 0.6 },
            hover: { opacity: 0.9 }
          }}
        >
            Discover complete project stories and immersive interior experiences.
        </motion.p>
        
        <motion.button 
          className="px-10 py-4 border border-white/30 text-white uppercase tracking-[0.2em] text-xs transition-all duration-300 group-hover:bg-white group-hover:text-myca-text group-hover:border-white whitespace-nowrap"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 }
          }}
        >
            View Full Portfolio
        </motion.button>
      </motion.div>
    </motion.div>
  );
});

export default Projects;