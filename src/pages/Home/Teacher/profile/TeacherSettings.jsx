import React, { useState } from 'react';
import { 
  ChevronLeft, Bell, Lock, Globe, 
  MessageCircle, Info, FileText, CheckCircle2, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TeacherSettings = () => {
  const navigate = useNavigate();
  
  // States for toggles
  const [pushEnabled, setPushEnabled] = useState(true);
  const [doubtEnabled, setDoubtEnabled] = useState(true);

  const handleNavigation = (route) => {
    console.log(`Navigating to: ${route}`);
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans transition-colors duration-300 pb-10">
      
      {/* --- HEADER --- */}
      <header className="p-4 flex items-center gap-4 border-b border-gray-200 dark:border-white/10 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 transition-colors">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 bg-white dark:bg-[#1a2233] rounded-xl text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 shadow-sm hover:scale-105 transition-all"
        >
          <ChevronLeft size={20}/>
        </button>
        <h1 className="text-lg font-black tracking-tight text-gray-900 dark:text-white">System Settings</h1>
      </header>

      <div className="p-6 space-y-8">
        
        {/* --- VERIFICATION STATUS BANNER --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-emerald-50 dark:bg-[#15231a] border border-emerald-200 dark:border-[#23422e] p-5 rounded-[2.5rem] flex items-center justify-between shadow-sm dark:shadow-[0_0_20px_rgba(74,222,128,0.05)] cursor-pointer hover:scale-[1.02] transition-transform"
          onClick={() => handleNavigation('/kyc-status')}
        >
           <div className="flex items-center gap-4">
              <div className="bg-emerald-100 dark:bg-[#4ade80]/10 p-3 rounded-2xl">
                 <CheckCircle2 size={24} className="text-emerald-600 dark:text-[#4ade80]" />
              </div>
              <div>
                 <h4 className="text-sm font-black text-gray-900 dark:text-white">Application Status</h4>
                 <p className="text-[10px] text-emerald-600 dark:text-[#4ade80] font-bold uppercase tracking-widest mt-1">Full Access Approved</p>
              </div>
           </div>
           <Info size={16} className="text-gray-400 dark:text-gray-600" />
        </motion.div>

        {/* --- TOGGLES SECTION --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-600 uppercase tracking-[0.3em] ml-2">Notifications</h3>
          <SettingToggle 
            icon={<Bell size={18}/>} 
            label="Push Notifications" 
            active={pushEnabled} 
            onClick={() => setPushEnabled(!pushEnabled)} 
          />
          <SettingToggle 
            icon={<MessageCircle size={18}/>} 
            label="Live Doubt Alerts" 
            active={doubtEnabled} 
            onClick={() => setDoubtEnabled(!doubtEnabled)} 
          />
        </motion.div>

        {/* --- PRIVACY & LEGALS SECTION --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 pt-4"
        >
          <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-600 uppercase tracking-[0.3em] ml-2">Privacy & Legals</h3>
          <SettingsLink 
            icon={<Lock size={18}/>} 
            label="Privacy Policy" 
            onClick={() => handleNavigation('/privacy')} 
          />
          <SettingsLink 
            icon={<FileText size={18}/>} 
            label="Terms of Service" 
            onClick={() => handleNavigation('/terms')} 
          />
          <SettingsLink 
            icon={<Globe size={18}/>} 
            label="App Language" 
            value="English" 
            onClick={() => handleNavigation('/language')} 
          />
        </motion.div>

        {/* --- APP VERSION INFO --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-10 flex flex-col items-center gap-2 opacity-50 dark:opacity-30"
        >
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-800 dark:text-white">EduTeacher v2.4.0</p>
           <p className="text-[8px] font-bold text-gray-600 dark:text-white">Made with ❤️ for Indian Teachers</p>
        </motion.div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SettingToggle = ({ icon, label, active, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between p-5 bg-white dark:bg-[#1a2233] rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none cursor-pointer hover:border-blue-200 dark:hover:border-[#2F80FF]/30 transition-all"
  >
    <div className="flex items-center gap-4">
      {/* Updated to Blue Theme */}
      <div className="text-[#2F80FF] dark:text-[#56CCF2]">{icon}</div>
      <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{label}</span>
    </div>
    {/* Animated Toggle Switch */}
    <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${active ? 'bg-[#2F80FF] shadow-[0_0_15px_rgba(47,128,255,0.3)]' : 'bg-gray-300 dark:bg-gray-700'}`}>
      <motion.div 
        layout
        initial={false}
        animate={{ x: active ? 24 : 0 }}
        className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" 
      />
    </div>
  </div>
);

const SettingsLink = ({ icon, label, value, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between p-5 bg-white dark:bg-[#1a2233] rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none cursor-pointer group hover:border-blue-200 dark:hover:border-[#2F80FF]/30 active:scale-[0.98] transition-all"
  >
    <div className="flex items-center gap-4">
      <div className="text-gray-400 dark:text-gray-500 group-hover:text-[#2F80FF] dark:group-hover:text-[#56CCF2] transition-colors">{icon}</div>
      <span className="text-xs font-bold text-gray-800 dark:text-gray-200 group-hover:translate-x-1 transition-transform">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {value && <span className="text-[10px] font-black text-[#2F80FF] dark:text-[#56CCF2] uppercase tracking-widest">{value}</span>}
      <ChevronRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-[#2F80FF] transition-colors" />
    </div>
  </div>
);

export default TeacherSettings;