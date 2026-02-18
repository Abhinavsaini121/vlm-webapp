import React, { useState, useEffect } from 'react';
import { 
  Bell, PlayCircle, UploadCloud, 
  CheckCircle2, MoreVertical, ArrowUpRight, 
  Moon, Sun, Star 
} from 'lucide-react';
import { motion } from 'framer-motion';
// Ensure you have react-router-dom installed: npm install react-router-dom
import { useNavigate } from 'react-router-dom'; 
import FloatingNav from '../../../../components/Bottombar/Bottombar'; 

// --- 1. REAL THEME LOGIC (Fixed & Integrated) ---
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
  const navigate = useNavigate(); // Hook for navigation

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center p-6 pb-2 sticky top-0 z-40 bg-white/80 dark:bg-[#0f0f10]/80 backdrop-blur-md border-b border-gray-100 dark:border-transparent transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        {/* --- 1. PROFILE CLICKABLE --- */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 p-[2px] cursor-pointer"
        >
          <div className="w-full h-full rounded-full bg-white dark:bg-[#1a1a1c] flex items-center justify-center">
            <span className="text-sm font-bold text-gray-800 dark:text-white">PR</span>
          </div>
        </motion.div>
        <div onClick={() => navigate('/profile')} className="cursor-pointer">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Welcome back,</p>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Priya</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* THEME TOGGLE BUTTON */}
        <motion.button 
          whileTap={{ scale: 0.9, rotate: 15 }}
          onClick={toggleTheme}
          className="p-2 bg-gray-100 dark:bg-[#1a1a1c] rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

        {/* --- 2. NOTIFICATION CLICKABLE --- */}
        <motion.div 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/notifications')}
          className="relative p-2 bg-gray-100 dark:bg-[#1a1a1c] rounded-full border border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <Bell size={20} className="text-gray-500 dark:text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a1a1c]"></span>
        </motion.div>
      </div>
    </motion.header>
  );
};

// --- MAIN SCREEN ---
const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      <Appbar theme={theme} toggleTheme={toggleTheme} />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- TOP: EARNINGS & RATING --- */}
        <motion.section variants={itemVariants} className="p-6 pt-4 space-y-4">
          
          {/* --- 3. EARNINGS SUMMARY CLICKABLE --- */}
          <div 
            onClick={() => navigate('/earnings')}
            className="bg-white dark:bg-[#1a1a1c] border border-purple-200 dark:border-purple-500/30 rounded-3xl p-6 relative overflow-hidden shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* Animated Blob */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-0 right-0 w-32 h-32 bg-purple-200 dark:bg-purple-600/10 blur-[50px]" 
            />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Earnings Summary</p>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-[#4ade80] mt-1 tracking-tight">₹45,200</h2>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-1 font-medium italic">Total This Month</p>
              </div>
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="bg-emerald-100 dark:bg-[#4ade80]/10 p-2 rounded-lg"
              >
                <ArrowUpRight size={20} className="text-emerald-600 dark:text-[#4ade80]" />
              </motion.div>
            </div>

            <div className="flex gap-8 border-t border-gray-100 dark:border-gray-800 pt-4 relative z-10">
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-1">Base Pay</p>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200 font-mono">₹35,000</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-1 font-mono">Bonus</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-[#4ade80]">₹10,200</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-700 dark:text-white">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- MIDDLE: QUICK ACTIONS --- */}
        <section className="px-6 space-y-3">
          <motion.h3 variants={itemVariants} className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Quick Actions</motion.h3>
          <div className="grid grid-cols-2 gap-3">
            
            {/* --- 4. GO LIVE NOW CLICKABLE --- */}
            <QuickActionButton 
              onClick={() => navigate('/live')}
              icon={<PlayCircle size={24} className="text-purple-500 dark:text-purple-400" />}
              color="bg-purple-100 dark:bg-purple-500/20"
              title="Go Live Now"
              subtitle="Start instant session"
            />
            
            {/* --- 5. UPLOAD VIDEO CLICKABLE --- */}
            <QuickActionButton 
              onClick={() => navigate('/scheduleclaas')}
              icon={<UploadCloud size={24} className="text-blue-500 dark:text-blue-400" />}
              color="bg-blue-100 dark:bg-blue-500/20"
              title="Upload Video"
              subtitle="Add recorded class"
            />
          </div>
        </section>

        {/* --- BOTTOM: TODAY'S SCHEDULE --- */}
        <section className="px-6 mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <motion.h3 variants={itemVariants} className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Today's Schedule</motion.h3>
            
            {/* --- 6. VIEW ALL CLICKABLE --- */}
            <motion.button 
              onClick={() => navigate('/schedule')}
              whileTap={{ scale: 0.95 }} 
              className="text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline"
            >
              View All
            </motion.button>
          </div>

          <div className="space-y-0 relative">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-gray-800"
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

// Updated to accept onClick prop
const QuickActionButton = ({ icon, color, title, subtitle, onClick }) => (
  <motion.button 
    onClick={onClick}
    variants={itemVariants}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 p-4 rounded-2xl flex flex-col items-start gap-3 transition-colors shadow-sm w-full"
  >
    <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center transition-colors`}>
      {icon}
    </div>
    <div className="text-left">
      <p className="font-bold text-sm text-gray-900 dark:text-white">{title}</p>
      <p className="text-[10px] text-gray-500">{subtitle}</p>
    </div>
  </motion.button>
);

const ScheduleItem = ({ time, title, status, isNext }) => (
  <motion.div variants={itemVariants} className="flex gap-4 pb-6 group relative">
    <div className="relative z-10 mt-1">
      {status === 'completed' ? (
        <CheckCircle2 size={22} className="text-emerald-500 dark:text-[#4ade80] bg-gray-50 dark:bg-[#0f0f10] rounded-full" />
      ) : (
        <div className={`w-5 h-5 rounded-full border-2 transition-colors ${isNext ? 'border-purple-500 bg-white dark:bg-[#0f0f10]' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#0f0f10]'}`}></div>
      )}
    </div>
    <motion.div 
      whileHover={{ x: 5 }}
      className={`flex-1 p-4 rounded-2xl transition-all cursor-default ${isNext ? 'bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-700 shadow-lg ring-1 ring-purple-500/20' : 'bg-transparent border border-transparent hover:bg-white/50 dark:hover:bg-[#1a1a1c]/50'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-xs font-bold uppercase tracking-tight ${status === 'completed' ? 'text-gray-400 dark:text-gray-500' : 'text-purple-600 dark:text-purple-400'}`}>
            {time}
          </p>
          <h4 className={`text-sm font-semibold mt-1 ${status === 'completed' ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-800 dark:text-gray-200'}`}>
            {title}
          </h4>
        </div>
        <MoreVertical size={16} className="text-gray-400 dark:text-gray-600 cursor-pointer" />
      </div>
    </motion.div>
  </motion.div>
);

export default Dashboard;