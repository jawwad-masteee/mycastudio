import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const archetypes = [
  {
    id: 1,
    category: "Boutique Hospitality",
    title: "Cafés & Restaurants",
    description: "Spaces that serve more than coffee. We design atmospheric culinary environments where texture, acoustics, and lighting turn a visit into a ritual.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Wellness & Recovery",
    title: "Sauna, Onsen & Spas",
    description: "Sanctuaries for the body and mind. We utilize natural stone, steam-resistant woods, and silent visual languages to deepen the state of relaxation.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Movement & Form",
    title: "Fitness & Yoga Studios",
    description: "Physical spaces for physical discipline. We strip away distraction to create balanced, breathable environments that focus on the human form.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Private Sanctuaries",
    title: "Luxury Residences",
    description: "The backdrop of your life. We craft homes that reflect your rhythm—places of intimacy, warmth, and enduring material beauty.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1600&auto=format&fit=crop"
  }
];

const ClientArchetypes: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9F8F6] to-[#FAE2B4] py-24 md:py-40">
      <div className="px-6 md:px-24 mb-24 md:mb-40">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl md:text-8xl font-editorial leading-none mb-8"
         >
           Who We <br/> Design For?
         </motion.h2>
         <div className="w-full h-[1px] bg-myca-ui" />
      </div>

      <div className="flex flex-col gap-0">
        {archetypes.map((item, index) => (
          <ArchetypeItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const ArchetypeItem: React.FC<{ item: typeof archetypes[0], index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="min-h-[90vh] flex flex-col md:flex-row justify-center sticky top-0 bg-gradient-to-br from-[#F9F8F6] to-[#FAE2B4] border-b border-myca-ui/30 overflow-hidden">
      
      {/* Text Side */}
      <div className={`w-full md:w-1/2 p-6 md:p-24 flex flex-col justify-center order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <motion.div style={{ opacity }}>
           <span className="text-xs uppercase tracking-[0.2em] text-myca-accent mb-4 block">
             0{index + 1} — {item.category}
           </span>
           <h3 className="text-4xl md:text-6xl font-editorial mb-8 leading-tight">
             {item.title}
           </h3>
           <p className="text-lg font-light text-myca-text/70 leading-relaxed max-w-md">
             {item.description}
           </p>
        </motion.div>
      </div>

      {/* Image Side - Fixed desktop visibility by ensuring height stretch */}
      <div className={`w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
         <motion.div 
            style={{ y }}
            className="w-full h-[120%] absolute top-[-10%] left-0"
         >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover filter saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-myca-bg/10 mix-blend-multiply" />
         </motion.div>
      </div>

    </div>
  );
};

export default ClientArchetypes;