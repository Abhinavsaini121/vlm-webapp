import React, { useState } from 'react';
import { ArrowLeft, Globe, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChooseLanguage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('English');

  const languages = [
    { name: 'English', native: 'English', sub: 'Default' },
    { name: 'Hindi', native: 'हिंदी', sub: 'Indian' },
    { name: 'Gujarati', native: 'ગુજરાતી', sub: 'Indian' },
    { name: 'Telugu', native: 'తెలుగు', sub: 'Indian' },
    { name: 'Tamil', native: 'தமிழ்', sub: 'Indian' },
    { name: 'Kannada', native: 'ಕನ್ನಡ', sub: 'Indian' },
    { name: 'Malayalam', native: 'മലയാളം', sub: 'Indian' },
    { name: 'Marathi', native: 'मराठी', sub: 'Indian' },
    { name: 'Nepali', native: 'नेपाली', sub: 'Nepal' },
    { name: 'Urdu', native: 'اردو', sub: 'Pakistan' },
  ];

  const handleSelect = (lang) => {
    setSelected(lang);
    setTimeout(() => {
      navigate('/login');
    }, 400);
  };

  return (
    <div className="h-screen w-full bg-[#050810] text-white font-sans flex overflow-hidden">
      
      {/* --- LEFT SECTION (DESKTOP VISUALS) --- */}
      {/* Hidden on mobile, takes 45% width on desktop */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-[45%] relative flex-col justify-between p-12 bg-[#0a0f1e] border-r border-white/5"
      >
        {/* Abstract Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        </div>

        {/* Brand / Context */}
        <div className="relative z-10">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <Globe size={24} className="text-white" />
            </div>
            <h1 className="text-5xl font-black tracking-tight leading-tight mb-4">
                Global <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Learning.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                Experience education in your native tongue. Connect, learn, and grow without barriers.
            </p>
        </div>

        {/* Decorative Map/Grid */}
        <div className="relative z-10 w-full h-64 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm p-6 flex items-center justify-center">
             <div className="text-center">
                <p className="text-4xl font-bold text-blue-400 mb-1">10+</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Regional Languages</p>
             </div>
        </div>
      </motion.div>


      {/* --- RIGHT SECTION (CONTENT) --- */}
      {/* Full width on mobile, 55% on desktop */}
      <div className="w-full lg:w-[55%] flex flex-col relative h-full">
        
        {/* Mobile Glows (Hidden on desktop) */}
        <div className="lg:hidden absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <div className="p-6 md:p-8 flex items-center justify-between z-10">
           <button 
             onClick={() => navigate(-1)} 
             className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 text-gray-400 hover:text-white"
           >
             <ArrowLeft size={24} />
             <span className="hidden md:inline text-sm font-bold">Back</span>
           </button>
           
           <div className="lg:hidden">
              <Globe size={24} className="text-blue-500" />
           </div>
        </div>

        {/* Main Content Area - Centered Vertically */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10">
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-3">Choose Language</h2>
             <p className="text-gray-400 mb-8 md:mb-10 text-sm md:text-base">
               Select your preferred language to customize your experience.
             </p>

             {/* 
                 RESPONSIVE GRID:
                 - Mobile: 2 Columns
                 - Tablet/Small Laptop: 3 Columns
                 - Large Desktop: 4 Columns (Ensures no vertical scrolling)
             */}
             <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
               {languages.map((lang, idx) => (
                 <motion.button
                   key={lang.name}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.1 + idx * 0.05 }}
                   onClick={() => handleSelect(lang.name)}
                   className={`group relative p-4 rounded-2xl text-left transition-all duration-300 border active:scale-95 flex flex-col justify-between h-24 md:h-28 ${
                     selected === lang.name
                       ? 'bg-gradient-to-br from-blue-600 to-blue-500 border-transparent shadow-xl shadow-blue-500/20'
                       : 'bg-[#121826] border-white/5 hover:border-white/10 hover:bg-[#1a2130]'
                   }`}
                 >
                   {/* Selection Checkmark */}
                   {selected === lang.name && (
                     <motion.div 
                        layoutId="check"
                        className="absolute top-3 right-3 bg-white/20 p-1 rounded-full"
                     >
                        <Check size={12} className="text-white" />
                     </motion.div>
                   )}

                   <span className={`text-xs font-medium uppercase tracking-wider ${selected === lang.name ? 'text-blue-100' : 'text-gray-500 group-hover:text-gray-400'}`}>
                      {lang.native}
                   </span>
                   <span className={`text-lg md:text-xl font-bold ${selected === lang.name ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {lang.name}
                   </span>
                 </motion.button>
               ))}
             </div>
           </motion.div>
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 text-center md:text-left z-10">
          <p className="text-sm font-medium text-gray-500">
            Don’t see your language?{' '}
            <button className="text-blue-500 font-bold hover:underline transition-all">
               Request it here
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChooseLanguage;