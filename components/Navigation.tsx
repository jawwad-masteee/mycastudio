import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blog' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 flex justify-between items-center ${
          isScrolled ? 'bg-myca-bg/90 backdrop-blur-sm border-b border-myca-ui' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Left: Logo */}
        <NavLink to="/" className="z-50 group flex-shrink-0">
          <span className="text-2xl font-sans tracking-widest font-bold text-myca-text">MYCA</span>
        </NavLink>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 lg:gap-12 items-center">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-myca-text font-medium' : 'text-myca-text/60 hover:text-myca-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {/* Hover Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-myca-text transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden md:flex flex-shrink-0">
            <NavLink to="/contact">
               <motion.div 
                 className="group relative px-8 py-3 border border-black text-black overflow-hidden hover:text-white transition-colors duration-500"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.3 }}
               >
                   <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                   <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Contact Us</span>
               </motion.div>
            </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50 flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <motion.span
            animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 6 : 0 }}
            className="w-8 h-[1px] bg-black block"
          />
          <motion.span
            animate={{ opacity: isMobileOpen ? 0 : 1 }}
            className="w-8 h-[1px] bg-black block"
          />
          <motion.span
            animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -6 : 0 }}
            className="w-8 h-[1px] bg-black block"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: 'circOut' }}
            className="fixed inset-0 z-30 bg-myca-bg flex flex-col justify-center px-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className="text-4xl font-editorial text-myca-text hover:text-myca-accent transition-colors block"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              {/* Mobile Contact Link */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + navItems.length * 0.1 }}
              >
                  <NavLink
                    to="/contact"
                    className="text-4xl font-editorial text-myca-text hover:text-myca-accent transition-colors block"
                  >
                    Contact
                  </NavLink>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-16 text-myca-text/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p>Hanoi, Vietnam</p>
              <p>+84 938 639 805</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;