import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: "christinmllerwe", country: "Germany", rating: 5, text: "We are very grateful for Jennie’s creative work and commitment. She delivered beautiful animations and design ideas and was always quick in responding. The quality of the drafts is truly remarkable, especially for the price." },
  { id: 2, name: "kennycaraan", country: "United States", rating: 5, text: "Amazing architect to work with. She really listened to my ideas and added smart, creative suggestions that made the whole project better." },
  { id: 3, name: "titu_r", country: "United Kingdom", rating: 5, text: "Great to work with, exceptional at getting into your concept. Attention to detail and turnaround was exactly what we were looking for." },
  { id: 4, name: "philniles123", country: "Canada", rating: 5, text: "Jennie was absolutely fantastic! Super flexible, very quick communication, and high-quality edits delivered fast and accurately." },
  { id: 5, name: "heymindconcept", country: "Canada", rating: 4, text: "Amazing experience working with Jennie. Proactive, patient, flexible, and the final result perfectly aligned with our vision." },
  { id: 6, name: "jarme732", country: "United States", rating: 5, text: "Incredible work! We are very pleased with how it came out." },
  { id: 7, name: "white_chicken20", country: "Australia", rating: 5, text: "Outstanding experience. Professionalism was exceptional and results exceeded expectations." },
  { id: 8, name: "joelmarz", country: "United States", rating: 5, text: "Professional, quick, and extremely detail-oriented. Will work again." },
  { id: 9, name: "jeff_na", country: "United States", rating: 5, text: "Great value and very responsive to changes. I will gladly use Jennie’s work again." },
  { id: 10, name: "monsieur69wick", country: "France", rating: 5, text: "Très satisfait de son travail et à l’écoute de mes demandes. Je recommande vivement !" }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1 mb-3 text-myca-accent text-xs">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ data: typeof testimonials[0] }> = ({ data }) => (
  <div className="w-[300px] md:w-[400px] bg-white p-8 flex-shrink-0 border border-myca-ui/30 shadow-sm rounded-sm mx-4 flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between mb-4">
        {/* Abstract Avatar */}
        <div className="w-10 h-10 bg-myca-sep rounded-full flex items-center justify-center text-myca-text/40 text-xs font-bold">
            {data.name.charAt(0).toUpperCase()}
        </div>
        <div className="text-right">
             <StarRating rating={data.rating} />
        </div>
      </div>
      <p className="text-myca-text/70 text-sm italic font-light leading-relaxed mb-6">
        "{data.text}"
      </p>
    </div>
    <div className="border-t border-myca-ui/20 pt-4">
      <h4 className="text-sm font-medium text-myca-text">{data.name}</h4>
      <p className="text-xs text-myca-text/40 uppercase tracking-wider">{data.country}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  // Mobile Scroll Speed Logic
  const [duration, setDuration] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      // 1.5x faster on mobile (60 / 1.5 = 40)
      setDuration(window.innerWidth < 768 ? 40 : 60);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-32 bg-myca-bg overflow-hidden relative border-t border-myca-ui/30">
      <div className="px-6 md:px-24 mb-16 flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left">
         <h2 className="text-4xl md:text-5xl font-editorial">Client Stories</h2>
         <p className="text-myca-text/50 uppercase tracking-widest text-xs mt-4 md:mt-0">Trust built across borders</p>
      </div>

      <div className="relative flex w-full">
         <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
         >
            {testimonials.map((item) => <TestimonialCard key={item.id} data={item} />)}
            {testimonials.map((item) => <TestimonialCard key={`dup-${item.id}`} data={item} />)}
         </motion.div>
      </div>
      
      {/* Fade Edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-myca-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-myca-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Testimonials;