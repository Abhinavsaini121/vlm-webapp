import React from "react";
import { motion } from "framer-motion";
import { Settings, ArrowLeft, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Maintenance = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc] overflow-hidden flex items-center justify-center font-sans text-slate-800">
      
      {/* --- BACKGROUND ANIMATION (Soft Aurora Blobs) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Blob 1 - Soft Blue */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"
        />
        
        {/* Blob 2 - Soft Rose/Purple */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.4, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-400/20 rounded-full blur-[120px]"
        />

        {/* Blob 3 - Cyan (Center Accent) */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-300/10 rounded-full blur-[100px]"
        />
      </div>

      {/* --- GRID PATTERN (Subtle) --- */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      {/* --- MAIN CARD --- */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-6 max-w-md w-full bg-white/60 backdrop-blur-2xl border border-white/50 p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] text-center"
      >
        
        {/* Animated Icons Container */}
        <div className="flex justify-center mb-8 relative h-24 items-center">
            {/* Background Glow behind icons */}
            <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute text-indigo-500"
            >
              <Settings size={80} strokeWidth={1} className="drop-shadow-sm" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute text-rose-400 mt-10 ml-10 bg-white/80 rounded-full p-1 shadow-sm"
            >
              <Settings size={44} strokeWidth={1.5} />
            </motion.div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          We're Improving.
        </h1>
        <p className="text-slate-500 mb-8 text-base font-medium leading-relaxed">
          The system is currently undergoing scheduled maintenance to bring you new features.
        </p>

        {/* Stylish Progress Bar */}
        <div className="relative w-full h-3 bg-slate-200/60 rounded-full mb-3 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
          ></motion.div>
          
          {/* Shimmer Effect on Bar */}
          <motion.div
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
          />
        </div>
        
        <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider mb-8">
          <span className="flex items-center gap-1">
             <RefreshCcw size={10} className="animate-spin" /> Optimizing
          </span>
          <span>75%</span>
        </div>

        {/* Modern Button */}
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all duration-300 shadow-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Return Home
        </motion.button>
        
      </motion.div>
      
      {/* Footer / Copyright (Optional decoration) */}
      <div className="absolute bottom-6 text-slate-400 text-xs font-medium opacity-60">
        System ID: 2901-AX • Maintenance Mode
      </div>

    </div>
  );
};

export default Maintenance;