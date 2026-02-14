import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
// Assuming these paths are correct for your project
import onboard1 from '../../assets/onboard images/onboard1.svg';
import onboard2 from '../../assets/onboard images/onboard2.svg';
import onboard3 from '../../assets/onboard images/onboard3.svg';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

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
      title: "Performance visualization",
      description: "Check Your Performance and Track Your Education",
      image: onboard3,
    }
  ];

  const handleNext = () => {
    if (currentStep < slides.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      window.location.href = "/login"; 
    }
  };

  const handleSkip = () => {
    window.location.href = "/login";
  };

  return (
    // h-screen fixes height to viewport (no scroll). overflow-hidden cuts off anything extra.
    <div className="h-screen w-full bg-[#000000] text-white font-sans flex flex-col overflow-hidden">
      
      {/* --- TOP HEADER (Fixed Height) --- */}
      <header className="flex justify-end px-8 py-6 h-20 items-center shrink-0">
        <button 
          onClick={handleSkip}
          className="text-white 0 text-sm font-bold tracking-widest uppercase active:text-white transition-colors"
        >
          Skip
        </button>
      </header>

      {/* --- MAIN CONTENT (Takes remaining space) --- */}
      <main className="flex-1 flex flex-col items-center justify-between w-full px-8">
        
        {/* 1. Image Section: Grows to fill space, centers image */}
        <div className="flex-1 w-full flex items-center justify-center p-4">
          <div key={currentStep} className="relative w-full h-full max-h-[350px] animate-in fade-in zoom-in duration-500 flex items-center justify-center">
            <img 
              src={slides[currentStep].image} 
              alt={slides[currentStep].title}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* 2. Text Section: Fixed height container to prevent jumping ("Same Place") */}
        <div className="w-full text-center h-32 flex flex-col justify-start items-center space-y-3 shrink-0 mb-4">
          <h2 className="text-3xl font-black tracking-tight leading-tight">
            {slides[currentStep].title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-xs mx-auto">
            {slides[currentStep].description}
          </p>
        </div>

      </main>

      {/* --- BOTTOM FOOTER (Fixed Height) --- */}
      <footer className="px-8 py-8 h-24 flex justify-between items-center bg-black shrink-0">
        
        {/* Step Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentStep === index 
                ? 'w-8 bg-purple-600' 
                : 'w-2 bg-white'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button 
          onClick={handleNext}
          className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.4)] active:scale-90 transition-all"
        >
          <ArrowRight size={24} strokeWidth={2.5} />
        </button>

      </footer>

      {/* Styles for Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default Onboarding;