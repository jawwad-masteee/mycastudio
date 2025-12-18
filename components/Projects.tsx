import React, { useRef, useLayoutEffect, useState } from 'react';
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

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // State for dynamic animation values
  const [layout, setLayout] = useState({
    finalX: 0,           // Distance to scroll to center the CTA
    bgScaleKeyframes: [1, 1] as number[],
    contentScaleKeyframes: [1, 1] as number[],
    isMobile: false
  });

  useLayoutEffect(() => {
    const calculateGeometry = () => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const lastCard = container.lastElementChild as HTMLElement;
      
      if (!lastCard) return;

      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;
      const cardW = lastCard.offsetWidth;
      const cardH = lastCard.offsetHeight;
      const isMobile = viewportW < 768;

      // 1. Calculate Horizontal Scroll to EXACT CENTER
      // Distance to center = (TotalScrollWidth - CardWidth/2) - (ViewportWidth/2)
      // This ensures the center of the card hits the center of the viewport
      const totalWidth = container.scrollWidth;
      const centerOfLastCard = totalWidth - (cardW / 2);
      const shiftNeeded = Math.max(0, centerOfLastCard - (viewportW / 2));
      
      // 2. Calculate Desktop Zoom Physics
      // Max scale required for the background to cover the viewport
      const scaleX = viewportW / cardW;
      const scaleY = viewportH / cardH;
      const maxScale = Math.max(scaleX, scaleY) * 1.05; // +5% buffer

      // 3. Define Keyframes based on Device
      let bgScaleKeyframes: number[];
      let contentScaleKeyframes: number[];

      if (isMobile) {
        // MOBILE: NO ZOOM.
        // Scale stays at 1. The card effectively "locks" in place because translation stops
        // while the parent scroll container continues moving through the pin duration.
        bgScaleKeyframes = [1, 1, 1];
        contentScaleKeyframes = [1, 1, 1];
      } else {
        // DESKTOP: CINEMATIC ZOOM
        // We want the text to stop scaling partway through to avoid becoming huge.
        // Timeline: 0% (Start Zoom) -> 40% (Text Max Size) -> 100% (Full Screen Bg)
        
        const targetTextVisualScale = 1.25; // Max text growth ~25%
        
        // Calculate intermediate scale of background at 40% progress of the zoom phase
        const zoomPhaseProgress = 0.4;
        const midBgScale = 1 + (maxScale - 1) * zoomPhaseProgress;

        // Keyframes for Background Scale [Start, Mid, End]
        bgScaleKeyframes = [1, midBgScale, maxScale];

        // Keyframes for Content Scale (Inverse scaling to achieve target visual size)
        // formula: childScale = targetVisualScale / parentScale
        contentScaleKeyframes = [
          1,                                  // Start: 1x visual
          targetTextVisualScale / midBgScale, // Mid: 1.25x visual
          targetTextVisualScale / maxScale    // End: 1.25x visual (clamped)
        ];
      }

      setLayout({
        finalX: -shiftNeeded,
        bgScaleKeyframes,
        contentScaleKeyframes,
        isMobile
      });
    };

    calculateGeometry();
    
    // Debounced resize handler to prevent thrashing
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculateGeometry, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // TIMELINE DEFINITION
  // 0% -> 75%: Horizontal Scroll
  // 75% -> 100%: Effect Phase (Zoom on Desktop, Lock on Mobile)

  // Horizontal Movement
  const x = useTransform(scrollYProgress, [0, 0.75], [0, layout.finalX]);
  
  // Background Scale
  // Desktop: 1 -> mid -> max
  // Mobile: 1 -> 1 -> 1
  const containerScale = useTransform(
    scrollYProgress, 
    [0.75, 0.85, 1], 
    layout.bgScaleKeyframes
  );
  
  // Content Inverse Scale
  const contentScaleVal = useTransform(
    scrollYProgress, 
    [0.75, 0.85, 1], 
    layout.contentScaleKeyframes
  );

  // Intro Opacity
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section 
      id="projects-section" 
      ref={targetRef} 
      // Fixed height to ensure stability on mobile browsers (Root Cause Fix)
      className="relative h-[450vh] bg-myca-bg z-20"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
            ref={scrollContainerRef}
            style={{ x }} 
            className="flex gap-6 md:gap-24 pl-6 md:pl-24 items-center w-max"
        >
          
          {/* Intro Card */}
          <motion.div 
            style={{ opacity: introOpacity }}
            className="flex flex-col justify-center min-w-[85vw] md:min-w-[400px] flex-shrink-0 pr-12 md:pr-0"
          >
             <h2 className="text-6xl md:text-8xl font-editorial text-myca-text mb-6">
               Selected <br/> Works
             </h2>
             <p className="text-myca-text/60 max-w-xs leading-relaxed">
               A curation of spaces defined by light, texture, and silence. Each project is a bespoke narrative.
             </p>
             <div className="w-24 h-[1px] bg-myca-text mt-8"></div>
          </motion.div>

          {/* Project Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Final CTA Card - Responds to Zoom */}
          <ProjectCTACard scale={containerScale} contentScale={contentScaleVal} />

        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[45vw] overflow-hidden bg-myca-sep cursor-none md:cursor-pointer flex-shrink-0 z-10">
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

interface CTACardProps {
    scale: MotionValue<number>;
    contentScale: MotionValue<number>;
}

const ProjectCTACard: React.FC<CTACardProps> = ({ scale, contentScale }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      style={{ scale }}
      className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[45vw] overflow-hidden bg-[#111111] flex-shrink-0 cursor-pointer flex flex-col items-center justify-center text-center p-8 md:p-12 transition-colors duration-500 origin-center z-30"
      onClick={() => navigate('/portfolio')}
    >
      {/* Decorative Border - Fades out on Zoom for cleanliness */}
      <motion.div 
        style={{ opacity: contentScale }}
        className="absolute inset-6 border border-white/10 group-hover:border-myca-accent/60 transition-colors duration-700 pointer-events-none" 
      />
      
      {/* Content Container - Uses Inverse Scaling to stay readable */}
      <motion.div 
        style={{ scale: contentScale }}
        className="relative z-10 w-full flex flex-col items-center justify-center"
      >
        <motion.h3 
          className="text-4xl md:text-6xl font-editorial text-white mb-6 whitespace-normal leading-tight"
        >
            Explore More <br/>
            <span className="italic text-myca-accent">of Our Work</span>
        </motion.h3>
        
        <motion.p 
          className="text-white/60 font-light leading-relaxed mb-10 max-w-xs md:max-w-md text-sm md:text-base"
        >
            Discover complete project stories and immersive interior experiences.
        </motion.p>
        
        <motion.button 
          className="px-10 py-4 border border-white/30 text-white uppercase tracking-[0.2em] text-xs transition-all duration-300 group-hover:bg-white group-hover:text-myca-text group-hover:border-white whitespace-nowrap"
        >
            View Full Portfolio
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Projects;