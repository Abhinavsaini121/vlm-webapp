import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import your images
import onboard1 from '../../assets/onboard images/onboard1.svg';
import onboard2 from '../../assets/onboard images/onboard2.svg';
import onboard3 from '../../assets/onboard images/onboard3.svg';

// --- HELPER COMPONENT: Handles Image Loading & Fitting ---
const ImageWithLoader = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 1. Loader (Shows only when image is NOT loaded) */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-2xl animate-pulse">
            <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
        </div>
      )}

      {/* 2. The Image (Hidden until loaded to prevent glitches) */}
      <img 
        src={src} 
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`
          max-w-full max-h-full object-contain drop-shadow-2xl transition-opacity duration-500
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ filter: 'drop-shadow(0px 10px 20px rgba(139, 92, 246, 0.2))' }} 
      />
    </div>
  );
};

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      title: "Online Learning",
      description: "We Provide Online Classes and Pre-recorded Lectures!",
      image: onboard1,
    },
    {
      title: "Learn from Anytime",
      description: "Booked or Save the Lectures for Future",
      image: onboard2,
    },
    {
      title: "Performance Visualization",
      description: "Check Your Performance and Track Your Education",
      image: onboard3,
    }
  ];

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/login'); 
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  // Animation Variants
  const slideVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="h-screen w-full bg-[#000000] text-white font-sans flex flex-col overflow-hidden">
      
      {/* --- HEADER --- */}
      <header className="flex justify-end px-8 py-6 h-20 items-center shrink-0 z-10">
        <button 
          onClick={handleSkip}
          className="text-gray-400 text-sm font-bold tracking-widest uppercase hover:text-white transition-colors"
        >
          Skip
        </button>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 relative">
        
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentStep}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center w-full h-full justify-evenly"
          >
            
            {/* 1. Image Section (Responsive Height) */}
            {/* Creates a flexible box that takes up 45-50% of the screen height */}
            <div className="w-full h-[45vh] flex items-center justify-center p-2">
              <ImageWithLoader 
                src={slides[currentStep].image} 
                alt={slides[currentStep].title} 
              />
            </div>

            {/* 2. Text Section */}
            <div className="w-full text-center flex flex-col items-center space-y-4 px-4">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white"
              >
                {slides[currentStep].title}
              </motion.h2>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-xs mx-auto"
              >
                {slides[currentStep].description}
              </motion.p>
            </div>

          </motion.div>
        </AnimatePresence>

      </main>

      {/* --- FOOTER --- */}
      <footer className="px-8 py-8 h-24 flex justify-between items-center shrink-0 z-10">
        
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{
                width: currentStep === index ? 32 : 8,
                backgroundColor: currentStep === index ? '#9333ea' : '#ffffff'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-2 rounded-full cursor-pointer"
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:bg-purple-500 transition-colors"
        >
          <ArrowRight size={24} strokeWidth={2.5} />
        </motion.button>

      </footer>
    </div>
  );
};

export default Onboarding;