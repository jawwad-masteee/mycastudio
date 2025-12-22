import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    step: "01",
    title: "Discover Your Style",
    headline: "Understanding how you want to live and feel in your space.",
    body: "We begin by learning your lifestyle, preferences, and spatial needs through a guided questionnaire and personal discussion. This step helps us understand your taste, rhythm, and the emotional atmosphere you want your space to carry.",
    bg: "bg-[#F9F8F6]" 
  },
  {
    id: 2,
    step: "02",
    title: "Spatial Strategy",
    headline: "Turning ideas into a clear architectural direction.",
    body: "We develop layout strategies, zoning, and circulation plans that balance functionality with calm aesthetics. Every decision is guided by proportion, light, and movement within the space.",
    bg: "bg-[#EFE9E3]"
  },
  {
    id: 3,
    step: "03",
    title: "Design Reveal",
    headline: "Seeing your space before it exists.",
    body: "Within two weeks, we present a complete design vision including mood boards, materials, lighting concepts, and realistic 3D renders. This gives you clarity, confidence, and excitement before execution begins.",
    bg: "bg-[#E8E2DB]"
  },
  {
    id: 4,
    step: "04",
    title: "Transformation & Guidance",
    headline: "From concept to lived experience.",
    body: "We support you through the transformation phase, ensuring the final outcome stays true to the original vision. The result is a space that feels intentional, balanced, and timeless.",
    bg: "bg-[#D9CFC7]"
  }
];

const ProcessJourney: React.FC = () => {
  return (
    <section className="relative">
      {steps.map((step) => (
        <ProcessStep key={step.id} data={step} />
      ))}
    </section>
  );
};

const ProcessStep: React.FC<{ data: typeof steps[0] }> = ({ data }) => {
  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center p-6 md:p-24 sticky top-0 ${data.bg} transition-colors duration-700`}>
      <motion.div 
        className="max-w-4xl text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="mb-8 overflow-hidden">
             <motion.span 
                className="text-8xl md:text-[10rem] font-editorial text-myca-text/5 block leading-none"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, ease: "circOut" }}
             >
                {data.step}
             </motion.span>
        </div>
        
        <h3 className="text-xs uppercase tracking-[0.3em] text-myca-accent mb-6">{data.title}</h3>
        
        <h2 className="text-3xl md:text-5xl font-editorial text-myca-text mb-8 leading-tight">
          {data.headline}
        </h2>
        
        <div className="w-12 h-[1px] bg-myca-text mx-auto mb-8" />
        
        <p className="text-myca-text/70 font-light text-lg leading-relaxed max-w-xl mx-auto">
          {data.body}
        </p>
      </motion.div>
      
      {/* Abstract Background Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
             className="absolute -right-20 top-1/2 w-[40vw] h-[40vw] rounded-full border border-white/20"
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2 }}
          />
      </div>
    </div>
  );
};

export default ProcessJourney;