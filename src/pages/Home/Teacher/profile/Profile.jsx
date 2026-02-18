import React, { useEffect, useState } from 'react';
import FloatingNav from '../../../../components/Bottombar/Bottombar'; // Ensure this path is correct
import { 
  ChevronLeft, Settings, ShieldCheck, 
  Award, BookOpen, Users, LogOut, 
  ChevronRight, Wallet, LifeBuoy, 
  TrendingUp, MessageSquare, Edit3
} from 'lucide-react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Requires react-router-dom installed

// --- 1. NUMBER COUNTER COMPONENT (For Increasing Order Animation) ---
const Counter = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Parse the number from string (e.g., "12k" -> 12) to animate it
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    
    const controls = animate(0, numericValue, {
      duration: 1.5,
      ease: "circOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    });

    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
};

const ProfileHome = () => {
  const navigate = useNavigate();

  // --- 2. DUMMY ROUTE HANDLER ---
  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  // Menu Data for cleaner rendering and staggered animation
  const menuItems = [
    { icon: <Wallet size={20} />, label: "Wallet", path: "/earnings", verified: false },
    { icon: <ShieldCheck size={20} className="text-emerald-500" />, label: "KYC & Documents", path: "/kyc", verified: true },
    { icon: <LifeBuoy size={20} />, label: "Help & Support", path: "/support", verified: false },
    { icon: <TrendingUp size={20} />, label: "Performance", path: "/performance", verified: false },
    { icon: <MessageSquare size={20} />, label: "Feedback", path: "/feedback", verified: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-6 flex items-center justify-between sticky top-0 z-30 bg-gray-50/80 dark:bg-[#0f0f10]/80 backdrop-blur-md">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2.5 bg-white dark:bg-[#1a1a1c] rounded-xl text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 shadow-sm hover:scale-105 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-lg font-black tracking-tight uppercase text-gray-800 dark:text-white">Teacher Profile</h1>
        <button 
          onClick={() => handleNavigation('/settings')}
          className="p-2.5 bg-white dark:bg-[#1a1a1c] rounded-xl text-purple-600 dark:text-purple-500 border border-gray-200 dark:border-gray-800 shadow-sm hover:scale-105 transition-all"
        >
          <Settings size={20} />
        </button>
      </header>

      <div className="px-6 pt-2 pb-8 flex flex-col items-center">
        
        {/* --- 3. PROFILE DP (Clickable & Animated) --- */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavigation('/profile/edit')}
          className="relative cursor-pointer group"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 to-[#4ade80] p-[3px] shadow-xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
            <div className="w-full h-full rounded-full bg-white dark:bg-[#1a1a1c] overflow-hidden flex items-center justify-center border-4 border-white dark:border-[#1a1a1c] relative">
               {/* Image Placeholder */}
               <span className="text-3xl font-black text-gray-800 dark:text-white">PS</span>
               
               {/* Hover Overlay Icon */}
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 size={24} className="text-white" />
               </div>
            </div>
          </div>
          <div className="absolute bottom-1 right-1 bg-[#4ade80] p-1.5 rounded-full border-4 border-gray-50 dark:border-[#0f0f10]">
             <ShieldCheck size={16} className="text-black" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mt-4"
        >
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Priya Sharma</h2>
            <p className="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mt-1">Senior Physics Faculty</p>
        </motion.div>
        
        {/* Badges */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 mt-4"
        >
           <span className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 px-4 py-1.5 rounded-full text-[11px] font-bold text-gray-500 dark:text-gray-400 italic shadow-sm">
             "Simplifying the Complex"
           </span>
        </motion.div>
      </div>

      {/* --- 4. STATS GRID WITH INCREASING ANIMATION --- */}
      <div className="px-6 grid grid-cols-3 gap-3">
        <ProfileStat icon={<Award size={18}/>} label="Exp." rawValue="8" suffix=" Yrs" delay={0.3} />
        <ProfileStat icon={<BookOpen size={18}/>} label="Classes" rawValue="450" suffix="+" delay={0.4} />
        <ProfileStat icon={<Users size={18}/>} label="Students" rawValue="12" suffix="k" delay={0.5} />
      </div>

      {/* --- 5. MENU LIST WITH ROUTES --- */}
      <div className="mt-8 px-6 space-y-3">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2 mb-2">Account Settings</h3>
        
        {/* Render Menu Items */}
        {menuItems.map((item, index) => (
          <ProfileMenuLink 
            key={index}
            icon={item.icon} 
            label={item.label} 
            isVerified={item.verified} 
            onClick={() => handleNavigation(item.path)}
            delay={0.6 + (index * 0.1)}
          />
        ))}
        
        {/* Logout Button */}
        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          onClick={() => handleNavigation('/auth/logout')}
          className="w-full flex items-center justify-between p-5 bg-red-50 dark:bg-[#1a1a1c]/40 rounded-3xl mt-6 border border-red-200 dark:border-red-900/30 text-red-500 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-4 font-black text-xs uppercase tracking-widest">
            <LogOut size={18} /> Logout Session
          </div>
        </motion.button>
      </div>

      <FloatingNav />
    </div>
  );
};

// --- HELPER COMPONENTS ---

const ProfileStat = ({ icon, label, rawValue, suffix, delay }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: delay }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 p-4 rounded-3xl text-center shadow-sm dark:shadow-none transition-all"
  >
    <div className="text-purple-600 dark:text-purple-500 flex justify-center mb-2">{icon}</div>
    <div className="text-base font-black text-gray-900 dark:text-white leading-tight">
        {/* Uses the Counter component for animation */}
        <Counter value={rawValue} suffix={suffix} />
    </div>
    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{label}</p>
  </motion.div>
);

const ProfileMenuLink = ({ icon, label, isVerified, onClick, delay }) => (
  <motion.button 
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: delay }}
    onClick={onClick}
    className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#1a1a1c] rounded-3xl border border-gray-200 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-800 transition-all shadow-sm dark:shadow-none group hover:border-purple-200 dark:hover:border-purple-900/50"
  >
    <div className="flex items-center gap-4">
      <div className="text-gray-400 group-hover:text-purple-500 transition-colors group-hover:scale-110 duration-200">{icon}</div>
      <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:translate-x-1 transition-transform">{label}</span>
    </div>
    <div className="flex items-center gap-2">
       {isVerified && <span className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-[#4ade80] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter">Verified</span>}
       <ChevronRight size={16} className="text-gray-300 dark:text-gray-700 group-hover:text-purple-500" />
    </div>
  </motion.button>
);

export default ProfileHome;