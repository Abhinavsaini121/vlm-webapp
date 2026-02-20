import React, { useEffect, useState } from 'react';
import FloatingNav from '../../../../components/Bottombar/Bottombar'; 
import { 
  ChevronLeft, Settings, ShieldCheck, 
  Award, BookOpen, Users, LogOut, 
  ChevronRight, Wallet, LifeBuoy, 
  TrendingUp, MessageSquare, Edit3
} from 'lucide-react';
import { motion, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- 1. NUMBER COUNTER COMPONENT ---
const Counter = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
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

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const menuItems = [
    { icon: <Wallet size={20} />, label: "Wallet", path: "/earnings", verified: false },
    { icon: <ShieldCheck size={20} className="text-emerald-500" />, label: "KYC & Documents", path: "/kyc", verified: true },
    { icon: <LifeBuoy size={20} />, label: "Help & Support", path: "/support", verified: false },
    { icon: <TrendingUp size={20} />, label: "Performance", path: "/performance", verified: false },
    { icon: <MessageSquare size={20} />, label: "Feedback", path: "/feedback", verified: false },
  ];

  return (
    // Changed: Background to #0b0f1a
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      {/* Changed: Background to #0b0f1a/80 */}
      <header className="p-6 flex items-center justify-between sticky top-0 z-30 bg-gray-50/80 dark:bg-[#0b0f1a]/80 backdrop-blur-md">
        <button 
          onClick={() => navigate(-1)} 
          // Changed: Card BG to #1a2233
          className="p-2.5 bg-white dark:bg-[#1a2233] rounded-xl text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 shadow-sm hover:scale-105 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-lg font-black tracking-tight uppercase text-gray-800 dark:text-white">Teacher Profile</h1>
        <button 
          onClick={() => handleNavigation('/settings')}
          // Changed: Text color to Blue (#2F80FF)
          className="p-2.5 bg-white dark:bg-[#1a2233] rounded-xl text-[#2F80FF] dark:text-[#56CCF2] border border-gray-200 dark:border-white/10 shadow-sm hover:scale-105 transition-all"
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
          {/* Changed: Gradient to Blue/Cyan, Shadow to Blue */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] p-[3px] shadow-xl shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            {/* Changed: Inner BG to #1a2233, Border to #0b0f1a */}
            <div className="w-full h-full rounded-full bg-white dark:bg-[#1a2233] overflow-hidden flex items-center justify-center border-4 border-white dark:border-[#0b0f1a] relative">
               {/* Image Placeholder */}
               <span className="text-3xl font-black text-gray-800 dark:text-white">PS</span>
               
               {/* Hover Overlay Icon */}
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 size={24} className="text-white" />
               </div>
            </div>
          </div>
          {/* Changed: Badge border color */}
          <div className="absolute bottom-1 right-1 bg-[#4ade80] p-1.5 rounded-full border-4 border-gray-50 dark:border-[#0b0f1a]">
             <ShieldCheck size={16} className="text-black" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mt-4"
        >
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Abhinav Saini</h2>
            {/* Changed: Text color to Cyan/Blue */}
            <p className="text-xs text-[#2F80FF] dark:text-[#56CCF2] font-bold uppercase tracking-widest mt-1">Senior Physics Faculty</p>
        </motion.div>
        
        {/* Badges */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 mt-4"
        >
           {/* Changed: BG to #1a2233 */}
           <span className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 px-4 py-1.5 rounded-full text-[11px] font-bold text-gray-500 dark:text-gray-400 italic shadow-sm">
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
          // Changed: Dark mode BG to #1a2233/40
          className="w-full flex items-center justify-between p-5 bg-red-50 dark:bg-[#1a2233]/40 rounded-3xl mt-6 border border-red-200 dark:border-red-900/30 text-red-500 active:scale-95 transition-transform"
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
    // Changed: BG to #1a2233, Icon color to Blue
    className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 p-4 rounded-3xl text-center shadow-sm dark:shadow-none transition-all"
  >
    <div className="text-[#2F80FF] dark:text-[#56CCF2] flex justify-center mb-2">{icon}</div>
    <div className="text-base font-black text-gray-900 dark:text-white leading-tight">
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
    // Changed: BG to #1a2233, Hover text to Blue
    className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#1a2233] rounded-3xl border border-gray-200 dark:border-white/10 active:bg-gray-50 dark:active:bg-gray-800 transition-all shadow-sm dark:shadow-none group hover:border-blue-200 dark:hover:border-[#2F80FF]/30"
  >
    <div className="flex items-center gap-4">
      {/* Changed: Hover text to Blue */}
      <div className="text-gray-400 group-hover:text-[#2F80FF] transition-colors group-hover:scale-110 duration-200">{icon}</div>
      <span className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:translate-x-1 transition-transform">{label}</span>
    </div>
    <div className="flex items-center gap-2">
       {/* Kept Emerald for verified as it matches Wallet logic */}
       {isVerified && <span className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-[#4ade80] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter">Verified</span>}
       {/* Changed: Hover text to Blue */}
       <ChevronRight size={16} className="text-gray-300 dark:text-gray-700 group-hover:text-[#2F80FF]" />
    </div>
  </motion.button>
);

export default ProfileHome;