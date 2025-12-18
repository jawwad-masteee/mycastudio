import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Philosophy from '../components/Philosophy';
import { TimelineEvent } from '../types';

const timeline: TimelineEvent[] = [
  { year: "2018", title: "The Foundation", description: "Exploring the intersection of minimalism and Vietnamese heritage." },
  { year: "2020", title: "Global Perspective", description: "Collaborations with architects in Tokyo and Copenhagen shape the studio's ethos." },
  { year: "2023", title: "MYCA Established", description: "Formally launching as a dedicated studio for luxury residential & hospitality." },
  { year: "2024", title: "Digital Expansion", description: "Launching a fully remote design consultancy for international clientele." },
];

const About: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-myca-bg"
    >
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-myca-bg/20 z-10" />
             <motion.img 
                style={{ scale }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
                alt="Studio Atmosphere"
                className="w-full h-full object-cover opacity-30 grayscale"
             />
        </div>
        
        <div className="relative z-20 max-w-4xl text-center">
            <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-8xl font-editorial mb-8 text-myca-text"
            >
                About MYCA
            </motion.h1>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl md:text-2xl font-light leading-relaxed text-myca-text/70"
            >
                A contemporary interior design studio crafting emotionally resonant spaces through precision, storytelling, and global collaboration.
            </motion.p>
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <motion.div 
                className="w-full md:w-1/2 relative aspect-[3/4]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 border border-myca-accent/30 translate-x-4 translate-y-4" />
                <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
                    alt="Jennie - Founder" 
                    className="w-full h-full object-cover filter brightness-110 contrast-90"
                />
            </motion.div>

            <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <h4 className="text-xs uppercase tracking-[0.2em] text-myca-accent mb-4">Founder & Lead Designer</h4>
                <h2 className="text-4xl md:text-6xl font-editorial mb-8">Jennie</h2>
                <div className="space-y-6 text-myca-text/70 font-light leading-relaxed text-lg">
                    <p>
                        Jennie is the creative force behind MYCA STUDIO — a designer driven by emotion, precision, and a deep understanding of space. 
                    </p>
                    <p>
                        Her work reflects a belief that interiors are not merely functional environments, but living narratives shaped by light, proportion, and human experience. 
                        With a background that bridges technical architecture and artistic curation, she brings a calm, rigorous eye to every project.
                    </p>
                    <p>
                        "I believe design is an act of empathy. We don't just build rooms; we build the backdrop for life's most intimate moments."
                    </p>
                </div>
                <div className="mt-12">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 opacity-50" />
                </div>
            </motion.div>
        </div>
      </section>

      {/* 3. Timeline Section */}
      <section className="py-32 bg-myca-sep/30 px-6 md:px-24">
         <div className="max-w-4xl mx-auto">
             <h2 className="text-center text-4xl font-editorial mb-20">The Journey</h2>
             
             <div className="relative border-l border-myca-ui/50 ml-6 md:ml-0 space-y-16">
                 {timeline.map((event, index) => (
                     <motion.div 
                        key={index} 
                        className="relative pl-12 md:pl-24"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                     >
                         <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-myca-accent rounded-full outline outline-4 outline-myca-bg" />
                         <span className="text-xs font-bold tracking-widest text-myca-accent mb-2 block">{event.year}</span>
                         <h3 className="text-2xl font-editorial mb-2">{event.title}</h3>
                         <p className="text-myca-text/60 font-light">{event.description}</p>
                     </motion.div>
                 ))}
             </div>
         </div>
      </section>

      {/* 4. Philosophy Reuse */}
      <Philosophy />

      {/* 5. CTA */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-myca-bg">
          <motion.h2 
            className="text-4xl md:text-6xl font-editorial mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
              Explore how philosophy <br/> transforms into space.
          </motion.h2>
          <button 
            onClick={() => navigate('/portfolio')}
            className="group relative px-12 py-4 border border-myca-text text-myca-text overflow-hidden hover:text-white transition-colors duration-500"
          >
              <div className="absolute inset-0 bg-myca-text translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 uppercase tracking-widest text-sm">View Portfolio</span>
          </button>
      </section>
    </motion.div>
  );
};

export default About;