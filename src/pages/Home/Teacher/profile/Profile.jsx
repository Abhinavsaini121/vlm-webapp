import React from 'react';
import FloatingNav from '../../../../components/Bottombar/Bottombar'; 
import { 
  ChevronLeft, Edit3, Settings, ShieldCheck, 
  Award, BookOpen, Users, LogOut, ChevronRight, HelpCircle
} from 'lucide-react';

const ProfileHome = () => {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-white font-sans pb-24">
      {/* --- HEADER --- */}
      <header className="p-4 flex items-center justify-between">
        <button className="p-2 bg-[#1a1a1c] rounded-xl text-gray-400 border border-gray-800">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-lg font-black tracking-tight uppercase">Teacher Profile</h1>
        <button className="p-2 bg-[#1a1a1c] rounded-xl text-purple-500 border border-gray-800">
          <Settings size={20} />
        </button>
      </header>

      <div className="px-6 pt-4 pb-8 flex flex-col items-center">
        {/* Profile Avatar with Neon Glow */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-600 to-[#4ade80] p-[3px] shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <div className="w-full h-full rounded-full bg-[#1a1a1c] overflow-hidden flex items-center justify-center">
               <span className="text-3xl font-black">PS</span>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-[#4ade80] p-1.5 rounded-full border-4 border-[#0f0f10]">
             <ShieldCheck size={16} className="text-black" />
          </div>
        </div>

        <h2 className="mt-4 text-xl font-black">Priya Sharma</h2>
        <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mt-1">Senior Physics Faculty</p>
        
        {/* Badges / Expertise */}
        <div className="flex gap-2 mt-4">
           <span className="bg-[#1a1a1c] border border-gray-800 px-3 py-1 rounded-full text-[10px] font-bold text-gray-400 italic">"Simplifying the Complex"</span>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="px-6 grid grid-cols-3 gap-3">
        <ProfileStat icon={<Award size={16}/>} label="Exp." value="8 Yrs" />
        <ProfileStat icon={<BookOpen size={16}/>} label="Classes" value="450+" />
        <ProfileStat icon={<Users size={16}/>} label="Students" value="12k" />
      </div>

      {/* --- MENU LIST --- */}
      <div className="mt-8 px-6 space-y-2">
        <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] ml-2 mb-4">Account Settings</h3>
        
        <ProfileMenuLink icon={<User size={18}/>} label="Personal Information" />
        <ProfileMenuLink icon={<ShieldCheck size={18} className="text-[#4ade80]"/>} label="KYC & Documents" isVerified={true} />
        <ProfileMenuLink icon={<HelpCircle size={18}/>} label="Help & Support" />
        
        <button className="w-full flex items-center justify-between p-5 bg-[#1a1a1c]/40 rounded-3xl mt-6 border border-red-900/20 text-red-500">
          <div className="flex items-center gap-4 font-black text-xs uppercase tracking-widest">
            <LogOut size={18} /> Logout Session
          </div>
        </button>
      </div>
      <FloatingNav />
    </div>
  );
};

const ProfileStat = ({ icon, label, value }) => (
  <div className="bg-[#1a1a1c] border border-gray-800 p-4 rounded-3xl text-center">
    <div className="text-purple-500 flex justify-center mb-1">{icon}</div>
    <p className="text-base font-black text-white leading-tight">{value}</p>
    <p className="text-[9px] text-gray-500 font-bold uppercase mt-1">{label}</p>
  </div>
);

const ProfileMenuLink = ({ icon, label, isVerified }) => (
  <button className="w-full flex items-center justify-between p-5 bg-[#1a1a1c] rounded-3xl border border-gray-800/50 active:bg-gray-800 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-gray-400">{icon}</div>
      <span className="text-xs font-bold text-gray-200">{label}</span>
    </div>
    <div className="flex items-center gap-2">
       {isVerified && <span className="text-[8px] font-black text-[#4ade80] uppercase tracking-tighter">Verified</span>}
       <ChevronRight size={16} className="text-gray-700" />
    </div>
  </button>
);

const User = ({size, className}) => <div className={className}><Users size={size}/></div>;

export default ProfileHome;