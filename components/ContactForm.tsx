import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fields = [
    { name: 'name', label: 'Your Name', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'message', label: 'Tell us about your project', type: 'textarea' },
  ];

  return (
    <form className="w-full max-w-2xl flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <label 
            htmlFor={field.name}
            className={`absolute left-0 transition-all duration-300 pointer-events-none font-sans text-sm tracking-wide ${
              focusedField === field.name 
                ? '-top-6 text-myca-accent text-xs' 
                : 'top-2 text-myca-text/40'
            }`}
          >
            {field.label}
          </label>
          
          {field.type === 'textarea' ? (
             <textarea
               id={field.name}
               rows={4}
               onFocus={() => setFocusedField(field.name)}
               onBlur={(e) => !e.target.value && setFocusedField(null)}
               className="w-full bg-transparent border-b border-myca-ui py-2 text-myca-text focus:outline-none focus:border-myca-accent transition-colors duration-300 resize-none font-light"
             />
          ) : (
            <input
              type={field.type}
              id={field.name}
              onFocus={() => setFocusedField(field.name)}
              onBlur={(e) => !e.target.value && setFocusedField(null)}
              className="w-full bg-transparent border-b border-myca-ui py-2 text-myca-text focus:outline-none focus:border-myca-accent transition-colors duration-300 font-light"
            />
          )}
        </div>
      ))}

      <button className="group mt-8 flex items-center gap-4 text-myca-text w-fit">
        <span className="uppercase tracking-[0.2em] text-sm group-hover:text-myca-accent transition-colors duration-300">
          Send Message
        </span>
        <span className="w-12 h-[1px] bg-myca-text group-hover:w-20 group-hover:bg-myca-accent transition-all duration-300" />
      </button>
    </form>
  );
};

export default ContactForm;