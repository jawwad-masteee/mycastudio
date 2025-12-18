import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-myca-bg pt-32 pb-20 px-6 md:px-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Column: Info */}
        <div className="flex flex-col gap-12">
          <div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-editorial mb-6"
            >
              Contact
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-light text-myca-text/70 max-w-md leading-relaxed"
            >
              We collaborate globally to shape meaningful spaces. Reach out to discuss your next project.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8 mt-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-myca-text/40 mb-2">General Inquiries</h4>
              <a href="mailto:myca.desstudio@gmail.com" className="text-xl font-editorial hover:text-myca-accent transition-colors">
                myca.desstudio@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-myca-text/40 mb-2">WhatsApp / Phone</h4>
              <a href="tel:+84938639805" className="text-xl font-editorial hover:text-myca-accent transition-colors">
                +84 938 639 805
              </a>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-myca-text/40 mb-2">Studio</h4>
              <p className="text-myca-text/70 font-light">
                Hanoi, Vietnam<br/>
                Available Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-myca-sep"
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;