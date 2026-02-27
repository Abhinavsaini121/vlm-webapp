import React from 'react';
import { ChevronLeft, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ApplicationStatus = () => {
  const navigate = useNavigate();

  return (
    // h-screen and overflow-hidden prevent scrolling
    <div className="h-screen overflow-hidden bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans flex flex-col transition-colors duration-300 relative">
      
      {/* --- BACKGROUND GLOW EFFECT --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/20 dark:bg-[#4ade80]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* --- HEADER --- */}
      <header className="p-6 flex items-center gap-4 z-20">
        <button 
          onClick={() => navigate(-1)}
          className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Status</h1>
      </header>

      {/* --- CENTERED CONTENT (ANIMATED) --- */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 z-10 -mt-10">
        
        {/* Animated Badge Container */}
        <div className="relative flex items-center justify-center mb-10">
          
          {/* Pulsing Rings Behind */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 border border-emerald-400/40 dark:border-[#4ade80]/30 rounded-full"
          />
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-32 h-32 border border-emerald-400/20 dark:border-[#4ade80]/10 rounded-full"
          />

          {/* Main Shield Background */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-28 h-28 bg-gradient-to-tr from-emerald-400 to-emerald-300 dark:from-emerald-600 dark:to-[#4ade80] rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-4 border-gray-50 dark:border-[#0b0f1a] z-10"
          >
            {/* Animated SVG Checkmark */}
            <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <motion.polyline 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                points="20 6 9 17 4 12" 
              />
            </svg>

            {/* Sparkle Badges Floating Around */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}
              className="absolute -top-3 -right-3 bg-white dark:bg-[#1a2233] p-1.5 rounded-full border border-gray-100 dark:border-gray-800 text-yellow-500 shadow-sm"
            >
              <Sparkles size={16} fill="currentColor" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1 }}
              className="absolute -bottom-2 -left-2 bg-white dark:bg-[#1a2233] p-2 rounded-full border border-gray-100 dark:border-gray-800 text-[#2F80FF] shadow-sm"
            >
              <ShieldCheck size={18} />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1 rounded-full mb-2">
             <Check size={14} className="text-emerald-600 dark:text-[#4ade80]" strokeWidth={3} />
             <span className="text-[10px] font-black text-emerald-600 dark:text-[#4ade80] uppercase tracking-widest">System Approved</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Your Profile is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-[#4ade80] dark:to-emerald-300">
              Verified!
            </span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium max-w-[260px] mx-auto leading-relaxed mt-2">
            You have full access to EduTeacher. You can now upload videos, host live classes, and start earning.
          </p>
        </motion.div>

      </div>

      {/* --- BOTTOM ACTION BUTTON --- */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="p-6 pb-10"
      >
        <button 
          onClick={() => navigate('/teacher-dashboard')}
          className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
        >
           Start Creating 
           <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </div>
  );
};

export default ApplicationStatus;