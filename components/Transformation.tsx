import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Transformation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-myca-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Caption */}
        <div className="absolute top-12 z-30 text-center mix-blend-difference text-white">
             <h2 className="text-4xl md:text-6xl font-editorial mb-4">The Transformation</h2>
             <p className="text-sm uppercase tracking-widest opacity-80">Scroll to Reveal</p>
        </div>

        <div className="relative w-full h-full md:w-[90vw] md:h-[85vh] overflow-hidden bg-black">
             {/* BEFORE IMAGE (Bottom Layer) */}
             <motion.img 
                src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=2000&auto=format&fit=crop" 
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-80"
                style={{ scale }}
             />

             {/* AFTER IMAGE (Top Layer) */}
             <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{ opacity }}
             >
                <img 
                    src="https://images.unsplash.com/photo-1600210491892-db9735d66056?q=80&w=2000&auto=format&fit=crop"
                    alt="After Transformation"
                    className="w-full h-full object-cover"
                />
             </motion.div>

             {/* Central Message Overlay */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <motion.div 
                   className="text-center text-white"
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                >
                   <h3 className="text-2xl md:text-4xl font-light italic bg-black/30 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
                      "We don’t add more. <br className="md:hidden" /> We remove what doesn’t belong."
                   </h3>
                </motion.div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;