import React, { useState, useEffect } from 'react';
import { 
  Bell, PlayCircle, UploadCloud, 
  CheckCircle2, MoreVertical, ArrowUpRight, 
  Moon, Sun, Star 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import FloatingNav from '../../../../components/Bottombar/Bottombar'; 

// --- 1. REAL THEME LOGIC ---
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "light"; 
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    if (theme === "dark") {
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

// --- COMPONENT: APPBAR ---
const Appbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // STROKE: Added subtle bottom border
      className="flex justify-between items-center p-6 pb-2 sticky top-0 z-40 bg-white/80 dark:bg-[#0b0f1a]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5 transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        {/* --- 1. PROFILE CLICKABLE --- */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/TeacherProfile')}
          // GRADIENT & SHADOW: Added glow to profile ring
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] p-[2px] cursor-pointer shadow-[0_0_15px_rgba(47,128,255,0.3)]"
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-[#1a2233] flex items-center justify-center">
            <span className="text-sm font-bold text-gray-800 dark:text-white">AS</span>
          </div>
        </motion.div>
        <div onClick={() => navigate('/profile')} className="cursor-pointer">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Welcome back,</p>
          <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Abhinav Saini</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* THEME TOGGLE BUTTON */}
        <motion.button 
          whileTap={{ scale: 0.9, rotate: 15 }}
          onClick={toggleTheme}
          // STROKE: Added border
          className="p-2 bg-gray-100 dark:bg-[#1a2233] rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-[#2F80FF] transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* --- 2. NOTIFICATION CLICKABLE --- */}
        <motion.div 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/notifications')}
          // STROKE: Added border
          className="relative p-2 bg-gray-100 dark:bg-[#1a2233] rounded-full border border-gray-200 dark:border-white/10 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <Bell size={20} className="text-gray-500 dark:text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2233] shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
        </motion.div>
      </div>
    </motion.header>
  );
};

// --- MAIN SCREEN ---
const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      <Appbar theme={theme} toggleTheme={toggleTheme} />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- TOP: EARNINGS & RATING --- */}
        <motion.section variants={itemVariants} className="p-6 pt-4 space-y-4">
          
          {/* --- 3. EARNINGS SUMMARY CARD --- */}
          <div 
            onClick={() => navigate('/earnings')}
            // STYLES: Added specific Border Color & Box Shadow (Glow)
            className="bg-white dark:bg-[#1a2233] border border-blue-100 dark:border-[#2F80FF]/30 rounded-[32px] p-6 relative overflow-hidden shadow-xl shadow-blue-500/5 dark:shadow-[0_0_30px_-5px_rgba(47,128,255,0.15)] transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-[0.99] group"
          >
            {/* Animated Blob */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-0 right-0 w-40 h-40 bg-blue-200 dark:bg-[#2F80FF]/20 blur-[60px]" 
            />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-wide">Earnings Summary</p>
                {/* FONT: Tracking tight for number */}
                <h2 className="text-4xl font-black text-gray-900 dark:text-emerald-400 mt-2 tracking-tight drop-shadow-sm">₹45,200</h2>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-1 font-bold italic">Total This Month</p>
              </div>
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="bg-emerald-100 dark:bg-emerald-500/10 p-3 rounded-2xl border border-emerald-200 dark:border-emerald-500/20"
              >
                <ArrowUpRight size={24} className="text-emerald-600 dark:text-emerald-400" />
              </motion.div>
            </div>

            <div className="flex gap-8 border-t border-gray-100 dark:border-white/10 pt-5 relative z-10">
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold mb-1">Base Pay</p>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200 font-mono">₹35,000</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold mb-1">Bonus</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono shadow-emerald-500/50">₹10,200</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                  <span className="text-sm font-bold text-gray-700 dark:text-white">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- MIDDLE: QUICK ACTIONS --- */}
        <section className="px-6 space-y-4">
          <motion.h3 variants={itemVariants} className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Quick Actions</motion.h3>
          <div className="grid grid-cols-2 gap-4">
            
            <QuickActionButton 
              onClick={() => navigate('/live')}
              icon={<PlayCircle size={24} className="text-[#2F80FF] dark:text-[#56CCF2]" />}
              color="bg-blue-50 dark:bg-[#2F80FF]/10"
              title="Go Live Now"
              subtitle="Start instant session"
            />
            
            <QuickActionButton 
              onClick={() => navigate('/upload-file')}
              icon={<UploadCloud size={24} className="text-emerald-600 dark:text-emerald-400" />}
              color="bg-emerald-50 dark:bg-emerald-500/10"
              title="Upload Video"
              subtitle="Add recorded class"
            />
          </div>
        </section>

        {/* --- BOTTOM: TODAY'S SCHEDULE --- */}
        <section className="px-6 mt-8 space-y-5">
          <div className="flex justify-between items-center">
            <motion.h3 variants={itemVariants} className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Today's Schedule</motion.h3>
            
            <motion.button 
              onClick={() => navigate('/schedules')}
              whileTap={{ scale: 0.95 }} 
              className="text-xs text-[#2F80FF] dark:text-[#56CCF2] font-black tracking-wide hover:underline"
            >
              VIEW ALL
            </motion.button>
          </div>

          <div className="space-y-0 relative">
            {/* STROKE: Refined Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gray-100 dark:bg-gray-800"
            ></motion.div>

            <ScheduleItem 
              time="9:00 AM" 
              title="Algebra Class (Live)" 
              status="completed" 
            />
            <ScheduleItem 
              time="11:00 AM" 
              title="1:1 Session with Rahul" 
              status="completed" 
            />
            <ScheduleItem 
              time="2:00 PM" 
              title="Grade Assignments" 
              status="upcoming" 
              isNext={true}
            />
            <ScheduleItem 
              time="4:30 PM" 
              title="Physics Q&A Live" 
              status="upcoming" 
            />
          </div>
        </section>
      </motion.main>

      <FloatingNav />
      
    </div>
  );
};

// --- HELPER COMPONENTS ---

const QuickActionButton = ({ icon, color, title, subtitle, onClick }) => (
  <motion.button 
    onClick={onClick}
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    // STROKE & SHADOW: Added Border, Shadow on hover
    className="bg-white dark:bg-[#1a2233] border border-gray-100 dark:border-white/5 p-5 rounded-[24px] flex flex-col items-start gap-3 transition-all shadow-sm hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/30 dark:hover:border-white/10 w-full group"
  >
    <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center transition-colors group-hover:scale-110 duration-300`}>
      {icon}
    </div>
    <div className="text-left">
      <p className="font-bold text-sm text-gray-900 dark:text-white tracking-tight">{title}</p>
      <p className="text-[10px] text-gray-500 font-medium">{subtitle}</p>
    </div>
  </motion.button>
);

const ScheduleItem = ({ time, title, status, isNext }) => (
  <motion.div variants={itemVariants} className="flex gap-4 pb-6 group relative">
    <div className="relative z-10 mt-1">
      {status === 'completed' ? (
        <CheckCircle2 size={22} className="text-emerald-500 dark:text-emerald-400 bg-gray-50 dark:bg-[#0b0f1a] rounded-full ring-4 ring-gray-50 dark:ring-[#0b0f1a]" />
      ) : (
        // STROKE: Enhanced dots
        <div className={`w-5 h-5 rounded-full border-[3px] ring-4 ring-gray-50 dark:ring-[#0b0f1a] transition-colors ${isNext ? 'border-[#2F80FF] bg-white dark:bg-[#0b0f1a] shadow-[0_0_10px_rgba(47,128,255,0.5)]' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#0b0f1a]'}`}></div>
      )}
    </div>
    <motion.div 
      whileHover={{ x: 5 }}
      // STROKE & GLOW: Added specific glow for Next item
      className={`flex-1 p-4 rounded-2xl transition-all cursor-default border ${isNext ? 'bg-white dark:bg-[#1a2233] border-[#2F80FF]/20 shadow-[0_4px_20px_-5px_rgba(47,128,255,0.15)]' : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-[#1a2233]/50'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-[10px] font-black uppercase tracking-wider ${status === 'completed' ? 'text-gray-400 dark:text-gray-500' : 'text-[#2F80FF] dark:text-[#56CCF2]'}`}>
            {time}
          </p>
          <h4 className={`text-sm font-bold mt-1 tracking-tight ${status === 'completed' ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>
            {title}
          </h4>
        </div>
        <MoreVertical size={16} className="text-gray-400 dark:text-gray-600 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors" />
      </div>
    </motion.div>
  </motion.div>
);

export default Dashboard;