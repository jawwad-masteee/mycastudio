import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';
import { useNavigate } from 'react-router-dom';

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Architecture of Silence",
    excerpt: "In a world of noise, how do we design spaces that encourage quiet introspection? Exploring the use of negative space and acoustic materiality.",
    date: "October 12, 2024",
    category: "Philosophy",
    slug: "architecture-of-silence",
    author: "Linh Nguyen",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop",
    content: [
      "Silence is not merely the absence of sound; it is an active presence, a material that can be shaped, carved, and inhabited. In our practice, we treat silence as a structural element, as vital as concrete or timber. It is the pause between notes that gives music its rhythm; similarly, it is the void between walls that gives architecture its breath.",
      "The modern world is defined by saturation—of information, visual stimuli, and acoustic noise. The role of the architect, therefore, shifts from creator of spectacle to curator of sanctuary. We design not for the eye alone, but for the nervous system.",
      "Acoustic privacy is achieved not just through insulation, but through spatial layering. We use transitional zones—vestibules, courtyards, and corridors—to create a decompression sequence as one enters a home. The transition from the chaotic street to the inner sanctum is a ritual of shedding the external world.",
      "Materiality plays a crucial role. Hard, reflective surfaces amplify noise and tension. We favor porous, textured materials—raw linen, unfinished wood, honed limestone—that absorb sound and soften the quality of light. These materials age gracefully, acquiring a patina that speaks of time and use, further grounding the inhabitant in the present moment.",
      "Ultimately, the architecture of silence is about creating a backdrop for life. It is about designing spaces that do not demand attention, but rather allow the mind to wander, to rest, and to return to itself."
    ]
  },
  {
    id: 2,
    title: "Light as a Building Material",
    excerpt: "Why we treat natural light not as an afterthought, but as the primary structural element of our interiors.",
    date: "September 28, 2024",
    category: "Design Process",
    slug: "light-building-material",
    author: "Amélie Laurent",
    image: "https://images.unsplash.com/photo-1585368305367-73d8a94625d8?q=80&w=1000&auto=format&fit=crop",
    content: [
      "Light is the most ephemeral yet most powerful material in our palette. It defines volume, reveals texture, and dictates the emotional tempo of a space. We do not design a room and then add windows; we sculpt the light first, and build the walls to contain it.",
      "We differentiate between 'active' light and 'passive' light. Active light is direct, dynamic, and creates strong shadows—it is the morning sun hitting a breakfast table. Passive light is diffuse, reflected, and atmospheric—it is the soft glow of a northern exposure or light filtered through a linen curtain.",
      "Shadow is the partner of light. Without shadow, a space feels flat and clinical. We embrace deep shadows to create depth and mystery. A corner left in darkness can be as compelling as one bathed in light.",
      "Our process involves extensive solar studies. We model how light moves through a space across the seasons. We position apertures not just for views, but to capture specific moments of light—a shaft of sun at 4 PM, a wash of moonlight on a staircase.",
      "To build with light is to build with time. It connects the interior to the circadian rhythm of the natural world, grounding us in the passage of the day."
    ]
  },
  {
    id: 3,
    title: "Sourcing Imperfection",
    excerpt: "The beauty of Wabi-Sabi in modern luxury. Why we choose reclaimed wood and textured stone over polished synthetics.",
    date: "August 15, 2024",
    category: "Materials",
    slug: "sourcing-imperfection",
    author: "Linh Nguyen",
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=1000&auto=format&fit=crop",
    content: [
        "Perfection is static; imperfection is alive. In a culture obsessed with the pristine and the new, we find luxury in the worn, the weathered, and the handmade. This is the essence of Wabi-Sabi—finding beauty in the incomplete and the impermanent.",
        "We prioritize materials that show their history. Reclaimed timber with knots and saw marks tells a story of its previous life. Stone with veins and fissures speaks of geological time. These 'flaws' are not defects to be hidden, but character to be celebrated.",
        "There is a tactile richness to imperfect materials that synthetics cannot replicate. Your hand instinctively wants to touch a rough-hewn beam or a hand-troweled plaster wall. This tactile engagement creates a deeper emotional connection to the space.",
        "Sourcing these materials requires patience and a network of trusted artisans. We look for craftsmen who understand the material's nature and work with it, rather than forcing it into submission.",
        "True luxury is not about flawlessness; it is about authenticity. A space built with honest, imperfect materials feels warm, human, and timeless."
    ]
  },
  {
    id: 4,
    title: "The Future of Remote Design",
    excerpt: "How MYCA STUDIO manages global luxury projects from Hanoi using digital twins and VR walkthroughs.",
    date: "July 02, 2024",
    category: "Studio",
    slug: "future-remote-design",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop",
    content: [
        "Geography is no longer a constraint for design. At MYCA STUDIO, we operate globally, managing high-end residential and hospitality projects across continents from our base in Hanoi. The key is a rigorous digital workflow that bridges the physical distance.",
        "We utilize 'Digital Twins'—exact virtual replicas of the project site. This allows us to test every detail, from the layout of furniture to the fall of light, before a single brick is laid. Clients can walk through their future homes in Virtual Reality, experiencing the scale and atmosphere in 1:1 ratio.",
        "Communication is structured and visual. We use cloud-based project management tools to keep contractors, artisans, and clients in sync. Regular video site visits and detailed documentation ensure that the design intent is executed with precision.",
        "However, technology does not replace the human touch. We partner with local executive architects and craftsmen on the ground who understand the local regulations and materials. This hybrid model combines global design vision with local expertise.",
        "Remote design allows us to bring a fresh perspective to a location. We are not bound by local trends, but bring a unique synthesis of Vietnamese craft and international modernism to every project."
    ]
  }
];

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-myca-bg min-h-screen pt-32 pb-20 px-6 md:px-24"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-editorial mb-6">Blogs</h1>
        <p className="text-myca-text/60 text-lg md:text-xl max-w-2xl font-light">
           Insights, ideas, and inspirations from the MYCA STUDIO design process. 
           Exploring the narrative behind space.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Featured Post - STATIC */}
        <motion.div 
            className="group relative w-full aspect-[16/9] md:aspect-[21/9] mb-24 overflow-hidden cursor-pointer bg-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => navigate(`/blog/${posts[0].slug}`)}
        >
            <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
            />
            
            {/* Left Bottom Content */}
            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 text-white">
                <span className="text-xs uppercase tracking-[0.2em] mb-4 block text-myca-accent">{posts[0].category}</span>
                <h2 className="text-4xl md:text-6xl font-editorial mb-6 leading-tight group-hover:underline decoration-1 underline-offset-8 decoration-myca-accent/50">
                    {posts[0].title}
                </h2>
                <p className="text-lg md:text-xl font-light opacity-90 mb-8 line-clamp-2">
                    {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest">
                    <span>Read Article</span>
                    <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-300" />
                </div>
            </div>

            {/* NEW: Right Bottom Metadata (Static for this featured post) */}
            <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 text-white text-right hidden md:block">
              <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-sans">
                <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-50 text-[10px]">Written by</span>
                    <span>Linh Nguyen</span>
                </div>
                {/* Vertical Divider */}
                <div className="h-8 w-[1px] bg-white/30" />
                <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-50 text-[10px]">Published on</span>
                    <span>22 Dec 2025</span>
                </div>
              </div>
            </div>
        </motion.div>

        {/* Article List - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {posts.slice(1).map((post, index) => (
                <motion.div 
                    key={post.id}
                    className={`group cursor-pointer flex flex-col gap-6 ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                >
                    <div className="overflow-hidden aspect-[4/3] w-full relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-baseline border-b border-myca-ui pb-4 mb-4">
                            <span className="text-xs uppercase tracking-widest text-myca-accent">{post.category}</span>
                            <span className="text-xs text-myca-text/40 font-sans">{post.date}</span>
                        </div>
                        <h3 className="text-3xl font-editorial mb-4 group-hover:text-myca-accent transition-colors duration-300">
                            {post.title}
                        </h3>
                        <p className="text-myca-text/60 font-light leading-relaxed mb-6">
                            {post.excerpt}
                        </p>
                        <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover:border-myca-text transition-all">
                            Read More
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;