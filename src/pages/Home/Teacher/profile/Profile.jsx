import React from 'react';
import FloatingNav from '../../../../components/Bottombar/Bottombar'; 
import { 
  ChevronLeft, Settings, ShieldCheck, 
  Award, BookOpen, Users, LogOut, 
  ChevronRight, HelpCircle, User 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-6 flex items-center justify-between sticky top-0 z-30 bg-gray-50/80 dark:bg-[#0f0f10]/80 backdrop-blur-md">
        <button className="p-2.5 bg-white dark:bg-[#1a1a1c] rounded-xl text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 shadow-sm hover:scale-105 transition-all">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-lg font-black tracking-tight uppercase text-gray-800 dark:text-white">Teacher Profile</h1>
        <button className="p-2.5 bg-white dark:bg-[#1a1a1c] rounded-xl text-purple-600 dark:text-purple-500 border border-gray-200 dark:border-gray-800 shadow-sm hover:scale-105 transition-all">
          <Settings size={20} />
        </button>
      </header>

      <div className="px-6 pt-2 pb-8 flex flex-col items-center">
        {/* Profile Avatar with Neon Glow */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 to-[#4ade80] p-[3px] shadow-xl shadow-purple-500/20">
            <div className="w-full h-full rounded-full bg-white dark:bg-[#1a1a1c] overflow-hidden flex items-center justify-center border-4 border-white dark:border-[#1a1a1c]">
               <span className="text-3xl font-black text-gray-800 dark:text-white">PS</span>
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
        
        {/* Badges / Expertise */}
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

      {/* --- STATS GRID --- */}
      <div className="px-6 grid grid-cols-3 gap-3">
        <ProfileStat icon={<Award size={18}/>} label="Exp." value="8 Yrs" delay={0.3} />
        <ProfileStat icon={<BookOpen size={18}/>} label="Classes" value="450+" delay={0.4} />
        <ProfileStat icon={<Users size={18}/>} label="Students" value="12k" delay={0.5} />
      </div>

      {/* --- MENU LIST --- */}
      <div className="mt-8 px-6 space-y-3">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2 mb-2">Account Settings</h3>
        
        <ProfileMenuLink icon={<User size={20}/>} label="Personal Information" />
        <ProfileMenuLink icon={<ShieldCheck size={20} className="text-emerald-500 dark:text-[#4ade80]"/>} label="KYC & Documents" isVerified={true} />
        <ProfileMenuLink icon={<HelpCircle size={20}/>} label="Help & Support" />
        
        <button className="w-full flex items-center justify-between p-5 bg-red-50 dark:bg-[#1a1a1c]/40 rounded-3xl mt-6 border border-red-200 dark:border-red-900/30 text-red-500 active:scale-95 transition-transform">
          <div className="flex items-center gap-4 font-black text-xs uppercase tracking-widest">
            <LogOut size={18} /> Logout Session
          </div>
        </button>
      </div>

      <FloatingNav />
    </div>
  );
};

// --- HELPER COMPONENTS ---

const ProfileStat = ({ icon, label, value, delay }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: delay }}
    className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 p-4 rounded-3xl text-center shadow-sm dark:shadow-none"
  >
    <div className="text-purple-600 dark:text-purple-500 flex justify-center mb-2">{icon}</div>
    <p className="text-base font-black text-gray-900 dark:text-white leading-tight">{value}</p>
    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{label}</p>
  </motion.div>
);

const ProfileMenuLink = ({ icon, label, isVerified }) => (
  <button className="w-full flex items-center justify-between p-5 bg-white dark:bg-[#1a1a1c] rounded-3xl border border-gray-200 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-800 transition-all shadow-sm dark:shadow-none group">
    <div className="flex items-center gap-4">
      <div className="text-gray-400 group-hover:text-purple-500 transition-colors">{icon}</div>
      <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{label}</span>
    </div>
    <div className="flex items-center gap-2">
       {isVerified && <span className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-[#4ade80] px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter">Verified</span>}
       <ChevronRight size={16} className="text-gray-300 dark:text-gray-700" />
    </div>
  </button>
);

export default ProfileHome;