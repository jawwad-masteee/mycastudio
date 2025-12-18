import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Journal', path: '/blog' },
  { label: 'Contact', path: '/contact' },
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
        {/* Logo */}
        <NavLink to="/" className="z-50 group">
          <span className="text-2xl font-sans tracking-widest font-bold">MYCA</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
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
              {item.isComingSoon && (
                <span className="absolute -top-3 -right-6 text-[8px] text-myca-accent uppercase tracking-wider">
                  Soon
                </span>
              )}
              {/* Hover Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-myca-accent transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
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
                    {item.isComingSoon && <span className="text-xs ml-4 text-myca-ui align-top font-sans">SOON</span>}
                  </NavLink>
                </motion.div>
              ))}
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