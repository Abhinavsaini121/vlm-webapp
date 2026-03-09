import React, { useState } from 'react';
import { 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets
import loginMobileBg from "../../../assets/loginmobilebg.png"; 

const SelectClass = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(null);

  // Class Data
  const classes = [
    "Class 1", "Class 2", "Class 3", "Class 4",
    "Class 5", "Class 6", "Class 7", "Class 8",
    "Class 9", "Class 10", "Class 11", "Class 12"
  ];

  // --- NEON BUTTON STYLE ---
  // Matches the blue outline and glow from your image
  const buttonStyle = "relative group overflow-hidden rounded-full border-[2px] border-[#2F80FF] bg-[#090C15] py-4 text-center font-bold text-white shadow-[0_0_10px_rgba(47,128,255,0.3)] transition-all hover:bg-[#2F80FF] hover:shadow-[0_0_20px_rgba(47,128,255,0.6)] active:scale-95";
  
  // Selected State Style (Fill color)
  const activeStyle = "bg-[#2F80FF] shadow-[0_0_25px_rgba(47,128,255,0.8)] scale-95 border-[#56CCF2]";

  const handleSelect = (className) => {
    setSelectedClass(className);
    
    // Auto-redirect logic
    setTimeout(() => {
      // Save selection if needed: localStorage.setItem('selectedClass', className);
      navigate('/welcome'); 
    }, 400); // Small delay to show the click animation
  };

  return (
    <div className="min-h-screen h-screen w-full bg-[#090C15] text-white font-sans flex overflow-hidden">
      
      {/* --- LEFT SECTION (DESKTOP VISUALS) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-[45%] relative flex-col justify-between p-12 bg-[#050810] border-r border-white/5 relative overflow-hidden"
      >
         {/* Background Glows */}
         <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

         {/* Content */}
         <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                <GraduationCap size={28} className="text-[#56CCF2]" />
            </div>
            
            <h1 className="text-5xl font-black leading-tight mb-4">
               Unlock Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#56CCF2]">Potential.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
               Select your academic year to get a personalized curriculum tailored to your goals.
            </p>
         </div>

         {/* Decorative Element */}
         <div className="relative z-10 w-full h-64 flex items-center justify-center">
             <motion.div 
               animate={{ rotate: [0, 5, -5, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative"
             >
                <div className="w-48 h-32 bg-gradient-to-r from-[#1a2233] to-[#111827] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-[-10deg] z-10">
                    <BookOpen size={48} className="text-blue-500" />
                </div>
                <div className="absolute top-4 left-4 w-48 h-32 bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] rounded-2xl opacity-20 transform rotate-[-5deg] -z-10"></div>
             </motion.div>
         </div>
      </motion.div>


      {/* --- RIGHT SECTION (SELECTION GRID) --- */}
      <div 
        className="w-full lg:w-[55%] h-full relative flex flex-col p-0 overflow-y-auto overflow-x-hidden"
        style={{
            backgroundImage: window.innerWidth < 1024 ? `url(${loginMobileBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
      >
        {/* Mobile Dark Overlay */}
        <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

        <div className="w-full h-full relative z-10 flex flex-col px-6 py-8 lg:px-16 lg:py-12">
            
            {/* --- HEADER --- */}
            <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => navigate(-1)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <ArrowLeft size={28} className="text-white" />
                </button>
                <h2 className="text-xl font-bold tracking-wide">Select Your Learning Class</h2>
            </div>

            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">Choose Your Class</h1>
                <p className="text-gray-400 text-sm lg:text-base">
                    Choose your class to unlock <span className="text-[#56CCF2]">premium Features</span>
                </p>
            </div>

            {/* --- BUTTON GRID --- */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto w-full pb-10"
            >
                {classes.map((className, index) => (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index }}
                        onClick={() => handleSelect(className)}
                        className={`${buttonStyle} ${selectedClass === className ? activeStyle : ''}`}
                    >
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1s_infinite]"></div>
                        
                        <span className="relative z-10 text-lg tracking-wide">{className}</span>
                        
                        {/* Selected Icon */}
                        {selectedClass === className && (
                            <motion.div 
                                layoutId="sparkle"
                                className="absolute top-2 right-3 text-white"
                            >
                                <Sparkles size={14} />
                            </motion.div>
                        )}
                    </motion.button>
                ))}
            </motion.div>
        </div>
      </div>

      {/* Tailwind Custom Animation for Shimmer */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
        `}} />
    </div>
  );
};

export default SelectClass;