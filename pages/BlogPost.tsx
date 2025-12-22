import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { posts } from './Blog'; // Import data from Blog listing

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.slug === slug);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]); // Parallax for hero image

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-myca-bg text-myca-text">
        <div className="text-center">
            <h1 className="text-4xl font-editorial mb-4">Post not found</h1>
            <button onClick={() => navigate('/blog')} className="underline">Back to Blogs</button>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-myca-bg min-h-screen pb-32"
    >
      {/* RETURN TO BLOGS BUTTON */}
      <div className="fixed top-24 left-6 z-50 md:left-12">
        <motion.button 
             onClick={() => navigate('/blog')}
             className="group relative px-6 py-2 border border-black text-black overflow-hidden hover:text-white transition-colors duration-500 bg-white shadow-sm"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
           >
               <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
               <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">Return to Blogs</span>
        </motion.button>
      </div>

      {/* 1. HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        {/* Parallax Image */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover filter brightness-[0.85]"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-24 z-10">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
            
            {/* Title Block */}
            <div className="flex-1">
               <motion.span 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="text-xs md:text-sm uppercase tracking-[0.2em] text-myca-accent mb-6 block"
               >
                 {post.category}
               </motion.span>
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-white leading-[1.1] max-w-4xl"
               >
                 {post.title}
               </motion.h1>
            </div>

            {/* Metadata Block - Style from Ref 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.7 }}
               className="text-white text-right hidden md:block shrink-0"
            >
              <div className="flex items-center gap-8 text-xs uppercase tracking-widest font-sans">
                <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-60 text-[10px]">Written by</span>
                    <span>{post.author || "MYCA Studio"}</span>
                </div>
                {/* Vertical Divider */}
                <div className="h-10 w-[1px] bg-white/40" />
                <div className="flex flex-col gap-1 items-end">
                    <span className="opacity-60 text-[10px]">Published on</span>
                    <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. ARTICLE CONTENT */}
      <div className="px-6 md:px-24 pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto">
            {/* Intro / Excerpt */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-editorial text-myca-text leading-normal mb-16 border-l-2 border-myca-accent pl-8"
            >
                {post.excerpt}
            </motion.p>

            {/* Body Text */}
            <div className="space-y-12">
                {post.content && post.content.length > 0 ? (
                    post.content.map((paragraph, idx) => (
                        <motion.p 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-lg md:text-xl font-light text-myca-text/80 leading-relaxed font-sans"
                        >
                            {paragraph}
                        </motion.p>
                    ))
                ) : (
                    // Fallback content if no detailed content provided
                    <>
                        <p className="text-lg md:text-xl font-light text-myca-text/80 leading-relaxed font-sans">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-lg md:text-xl font-light text-myca-text/80 leading-relaxed font-sans">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </>
                )}
            </div>
            
            {/* Signature / End Marker */}
            <div className="mt-24 flex justify-center">
                <span className="text-myca-text/30 text-2xl">
                    ***
                </span>
            </div>
        </div>
      </div>

      {/* 3. NEXT/BACK NAV */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 mt-32 border-t border-myca-ui pt-12 flex justify-between items-center">
          <button 
             onClick={() => navigate('/blog')}
             className="text-sm uppercase tracking-widest text-myca-text/60 hover:text-myca-text transition-colors flex items-center gap-4"
          >
             <span>←</span> Back to Blogs
          </button>
      </div>

    </motion.article>
  );
};

export default BlogPost;