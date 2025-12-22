import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Philosophy from '../components/Philosophy';

const servicesList = [
    {
        title: "Space Planning & Spatial Strategy",
        description: "We design clear layouts and circulation strategies that balance functionality with calm aesthetics, ensuring every square meter serves a purpose."
    },
    {
        title: "Interior Design & Concept Development",
        description: "From materials and lighting to color and texture, we develop cohesive interior concepts that feel composed, timeless, and emotionally grounded."
    },
    {
        title: "Custom Furniture & Built-In Design",
        description: "We design bespoke furniture and built-ins that integrate seamlessly with the architecture, creating spaces that feel intentional and refined."
    },
    {
        title: "3D Visualization & Design Coordination",
        description: "Photorealistic visualizations and design coordination that bring clarity, confidence, and alignment before execution begins."
    }
];

const About: React.FC = () => {
    const navigate = useNavigate();

    // Animation variants for the architectural feel
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    const rightColVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-myca-bg min-h-screen pt-32 pb-0"
        >
            {/* 1. HERO SECTION (80vw Width, 80vh Height) */}
            <div className="w-[90vw] md:w-[80vw] mx-auto min-h-[80vh] flex flex-col mb-24 md:mb-32">

                {/* ROW 1: "ABOUT" (30% approx visual weight) */}
                <div className="w-full md:h-[25%] flex items-end mb-4 md:mb-8">
                    <motion.h1
                        variants={textVariants}
                        className="text-[15vw] md:text-[9rem] lg:text-[11rem] leading-[0.8] font-bold font-editorial text-myca-text tracking-tighter"
                    >
                        ABOUT
                    </motion.h1>
                </div>

                {/* ROW 2: GRID COLUMNS (70% height) */}
                <div className="flex flex-col md:flex-row w-full md:h-[75%] gap-8 md:gap-12">

                    {/* COL 1: "US" + Text (20% Width) */}
                    <div className="w-full md:w-[20%] flex flex-col">
                        <motion.h1
                            variants={textVariants}
                            className="text-[15vw] md:text-[9rem] lg:text-[11rem] leading-[0.8] font-bold font-editorial text-myca-text tracking-tighter mb-8 md:mb-12"
                        >
                            US
                        </motion.h1>

                        <div className="flex flex-col gap-6 mt-auto pb-4">
                            <motion.h3
                                variants={textVariants}
                                className="text-sm font-medium text-myca-text/80 font-sans leading-tight max-w-[200px]"
                            >
                                Luxurious Interior and Industrial Design
                            </motion.h3>

                            <motion.p
                                variants={textVariants}
                                className="text-sm font-light text-myca-text/60 leading-relaxed max-w-[200px]"
                            >
                                Modern Elegance: Designs featuring clean lines, neutral palettes, and high-quality materials.
                            </motion.p>
                        </div>
                    </div>

                    {/* COL 2: MAIN IMAGE (50% Width - Visual Anchor) */}
                    <motion.div
                        variants={imageVariants}
                        className="w-full md:w-[50%] h-[50vh] md:h-auto min-h-[400px] relative rounded-[2rem] overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
                            alt="MYCA Signature Interior"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* COL 3: PHILOSOPHY PREVIEW (30% Width) */}
                    <div className="w-full md:w-[30%] flex flex-col h-full">
                        <motion.div
                            variants={rightColVariants}
                            className="w-full h-[250px] md:h-[40%] rounded-[2rem] overflow-hidden mb-8 md:mb-auto"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop"
                                alt="Detail"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div variants={rightColVariants} className="mt-auto pb-4 pl-2">
                            <h2 className="text-3xl md:text-4xl font-editorial font-bold mb-4">Our Philosophy</h2>
                            <p className="text-sm font-light text-myca-text/70 leading-relaxed">
                                At MYCA STUDIO, we believe in creating luxurious, personalized environments that reflect our clients' tastes and lifestyles.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* 2. BLANK TRANSITION SECTION (80vw width, 70vh height) */}
            <section className="w-[90vw] md:w-[80vw] h-[50vh] md:h-[70vh] bg-[#F2F2F2] mx-auto rounded-[2rem] mb-32" />

            {/* 3. SERVICES SECTION (REFINED) */}
            <section className="w-[90vw] md:w-[80vw] mx-auto min-h-[60vh] md:h-[70vh] flex flex-col md:flex-row mb-32 md:items-center">

                {/* Left Column (45%) */}
                <div className="w-full md:w-[45%] h-full flex flex-col justify-center pr-0 md:pr-12 md:py-0">
                    {/* Text Block */}
                    <div className="mb-8 md:mb-8">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-7xl md:text-8xl font-editorial font-bold text-myca-text mb-6 md:mb-8"
                        >
                            Our Services
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-xl md:text-2xl text-myca-text/70 font-sans font-normal leading-relaxed max-w-xl"
                        >
                            We support interior projects from early spatial thinking to final visualization.<br />
                            Our services focus on clarity, balance, and thoughtful execution — ensuring every space feels intentional, calm, and enduring.
                        </motion.p>
                    </div>

                    {/* Square Image - Increased Size (~55%) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative w-full md:w-[55%] aspect-square rounded-[1.5rem] overflow-hidden md:mt-6"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop"
                            alt="Services Aesthetic"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Right Column (55%) */}
                <div className="w-full md:w-[55%] h-full flex flex-col justify-center mt-12 md:mt-0 pl-0 md:pl-16 gap-6 md:gap-6">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                            className="flex flex-col justify-center pl-5"
                        >
                            <h3 className="text-3xl md:text-4xl font-editorial font-bold text-myca-text mb-2">
                                {service.title}
                            </h3>
                            <p className="text-xl md:text-2xl text-myca-text/70 font-sans font-light leading-relaxed max-w-xl">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </section>

            {/* 4. PHILOSOPHY (EXISTING - REUSED COMPONENT) */}
            <Philosophy />

            {/* 5. CTA (EXISTING) */}
            <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-myca-bg border-t border-myca-ui/30">
                <motion.h2
                    className="text-4xl md:text-6xl font-editorial mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Explore how philosophy <br /> transforms into space.
                </motion.h2>
                <button
                    onClick={() => navigate('/portfolio')}
                    className="group relative px-12 py-4 border border-myca-text text-myca-text overflow-hidden hover:text-white transition-colors duration-500"
                >
                    <div className="absolute inset-0 bg-myca-text translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                    <span className="relative z-10 uppercase tracking-widest text-sm">View Portfolio</span>
                </button>
            </section>

        </motion.div>
    );
};

export default About;