import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import your images
import onboard1 from '../../assets/onboard images/onboard1.svg';
import onboard2 from '../../assets/onboard images/onboard2.svg';
import onboard3 from '../../assets/onboard images/onboard3.svg';

const slides = [
  {
    id: 1,
    title: "Online Learning",
    description: "We Provide Online Classes and Pre-recorded Lectures!",
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
  // Ye background me saari images download kar lega taaki lag na ho
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

  // --- SMOOTH ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1 
      }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.2 } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }
  };

  return (
    <div className="h-screen w-full bg-[#050810] text-white font-sans flex flex-col overflow-hidden relative">
      
      {/* Background Glow Effect for Aesthetics */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* --- SKIP BUTTON --- */}
      <header className="flex justify-end px-6 py-6 z-10">
        <button 
          onClick={() => navigate('/login')}
          className="text-gray-500 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors"
        >
          Skip
        </button>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col items-center justify-center w-full relative">
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
            <div className="w-full h-[350px] md:h-[450px] flex items-center justify-center mb-8 relative">
              <img 
                src={slides[currentStep].image} 
                alt={slides[currentStep].title}
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                loading="eager" // Force immediate loading
              />
            </div>

            {/* 2. Text Section */}
            <div className="text-center space-y-3 max-w-sm mx-auto">
              <motion.h2 
                variants={textVariants}
                className="text-3xl font-black tracking-tight text-white"
              >
                {slides[currentStep].title}
              </motion.h2>
              
              <motion.p 
                variants={textVariants}
                className="text-gray-400 text-sm font-medium leading-relaxed"
              >
                {slides[currentStep].description}
              </motion.p>
            </div>

          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- BOTTOM CONTROLS --- */}
      <footer className="px-8 py-8 w-full flex justify-between items-center z-10">
        
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <motion.div 
              key={index}
              animate={{
                width: currentStep === index ? 24 : 8,
                backgroundColor: currentStep === index ? '#9333ea' : '#334155',
                opacity: currentStep === index ? 1 : 0.5
              }}
              className="h-2 rounded-full transition-all duration-300"
            />
          ))}
        </div>

        {/* Next/Finish Button */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
        >
          {currentStep === slides.length - 1 ? "Get Started" : "Next"}
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>

      </footer>
    </div>
  );
};

export default Onboarding;