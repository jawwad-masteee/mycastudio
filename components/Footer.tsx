import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-myca-bg border-t border-myca-ui py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-sans font-bold tracking-widest">MYCA</h2>
          <p className="text-myca-text/60 max-w-xs text-sm leading-relaxed">
            Crafting immersive spatial narratives across the world.
            Based in Hanoi, designing globally.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-xs tracking-widest text-myca-text/40 mb-2">Sitemap</h4>
            <NavLink to="/" className="hover:text-myca-accent transition-colors duration-300">Home</NavLink>
            <NavLink to="/about" className="hover:text-myca-accent transition-colors duration-300 text-myca-text/50">About</NavLink>
            <NavLink to="/portfolio" className="hover:text-myca-accent transition-colors duration-300 text-myca-text/50">Portfolio</NavLink>
            <NavLink to="/contact" className="hover:text-myca-accent transition-colors duration-300">Contact</NavLink>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-xs tracking-widest text-myca-text/40 mb-2">Connect</h4>
            <a href="mailto:myca.desstudio@gmail.com" className="hover:text-myca-accent transition-colors duration-300">myca.desstudio@gmail.com</a>
            <a href="tel:+84938639805" className="hover:text-myca-accent transition-colors duration-300">+84 938 639 805</a>
            <span className="text-myca-text/50">Instagram</span>
            <span className="text-myca-text/50">LinkedIn</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-myca-ui/30 flex justify-between text-xs text-myca-text/30 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} MYCA STUDIO</span>
        <span>Privacy & Legal</span>
      </div>
    </footer>
  );
};

export default Footer;