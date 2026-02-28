import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import your images
import onboard1 from '../../assets/onboard images/onboard1.svg';
import onboard2 from '../../assets/onboard images/onboard2.svg';
import onboard3 from '../../assets/onboard images/onboard3.svg';

import bgGlowImage from '../../assets/onboard images/bgGlow.svg';

const slides = [
  {
    id: 1,
    title: "Online Learning",
    description: "We Provide Classes Online Classes and Pre Recorded Leactures.!",
    image: onboard1,
  },
  {
    id: 2,
    title: "Learn Anytime",
    description: "Booked or Save the Lectures for Future",
    image: onboard2,
  },
  {
    id: 3,
    title: "Performance Tracking",
    description: "Check Your Performance and Track Your Education",
    image: onboard3,
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  // --- 🚀 PERFORMANCE FIX: PRELOAD IMAGES ---
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/login'); 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.2 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }
  };

  return (
    <div className="h-[100dvh] w-full bg-[#050810] text-white font-sans flex flex-col overflow-hidden relative">
      
      <img src={bgGlowImage} alt="glow" className="absolute top-0 right-0 w-[400px] opacity-80 pointer-events-none z-0 mix-blend-screen" />
      
      {/* Subtle center-bottom glow to highlight the text gently */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#3b82f6]/10 blur-[100px] pointer-events-none z-0" />

      {/* ========================================= */}

      {/* --- SKIP BUTTON --- */}
      <header className="flex justify-end px-6 pt-12 pb-4 z-10 relative">
        <button 
          onClick={() => navigate('/login')}
          className="text-white font-semibold text-sm tracking-wide hover:text-gray-300 transition-colors"
        >
          Skip
        </button>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col items-center justify-center w-full relative z-10 -mt-8">
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentStep}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center justify-center w-full px-6"
          >
            
            {/* 1. Image Section */}
            <div className="w-full h-[320px] md:h-[400px] flex items-center justify-center mb-8 relative">
              <img 
                src={slides[currentStep].image} 
                alt={slides[currentStep].title}
                className="w-full h-full object-contain"
                loading="eager" 
              />
            </div>

            {/* 2. Text Section */}
            <div className="text-center space-y-3 max-w-[300px] mx-auto">
              <motion.h2 
                variants={textVariants}
                className="text-2xl font-bold tracking-wide text-white drop-shadow-md"
              >
                {slides[currentStep].title}
              </motion.h2>
              
              <motion.p 
                variants={textVariants}
                className="text-gray-300 text-sm font-normal leading-relaxed"
              >
                {slides[currentStep].description}
              </motion.p>
            </div>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- BOTTOM CONTROLS --- */}
      <footer className="px-8 pb-12 pt-4 w-full flex justify-between items-center z-10 relative">
        
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <motion.div 
              key={index}
              animate={{
                width: currentStep === index ? 24 : 8,
                backgroundColor: currentStep === index ? '#4ea8de' : '#ffffff',
                opacity: currentStep === index ? 1 : 0.6
              }}
              className="h-2 rounded-full transition-all duration-300"
            />
          ))}
        </div>

        {/* Next Circular Blue Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="flex items-center justify-center w-14 h-14 bg-[#3b82f6] text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500 transition-all"
        >
          <ArrowRight size={24} strokeWidth={2.5} />
        </motion.button>

      </footer>
    </div>
  );
};

export default Onboarding;