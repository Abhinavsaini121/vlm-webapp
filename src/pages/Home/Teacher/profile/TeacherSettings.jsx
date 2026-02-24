import React from 'react';
import { 
  ChevronLeft, Bell, Lock, Globe, 
  MessageCircle, Info, FileText, CheckCircle2
} from 'lucide-react';

const TeacherSettings = () => {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-white font-sans">
      <header className="p-4 flex items-center gap-4 border-b border-gray-800">
        <button className="p-2 bg-[#1a1a1c] rounded-xl text-gray-400"><ChevronLeft size={20}/></button>
        <h1 className="text-lg font-black tracking-tight">System Settings</h1>
      </header>

      <div className="p-6 space-y-8">
        {/* Verification Status Banner */}
        <div className="bg-[#15231a] border border-[#23422e] p-5 rounded-[2.5rem] flex items-center justify-between shadow-[0_0_20px_rgba(74,222,128,0.05)]">
           <div className="flex items-center gap-4">
              <div className="bg-[#4ade80]/10 p-3 rounded-2xl">
                 <CheckCircle2 size={24} className="text-[#4ade80]" />
              </div>
              <div>
                 <h4 className="text-sm font-black text-white">Application Status</h4>
                 <p className="text-[10px] text-[#4ade80] font-bold uppercase tracking-widest mt-1">Full Access Approved</p>
              </div>
           </div>
           <Info size={16} className="text-gray-600" />
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] ml-2">Notifications</h3>
          <SettingToggle icon={<Bell size={18}/>} label="Push Notifications" active={true} />
          <SettingToggle icon={<MessageCircle size={18}/>} label="Live Doubt Alerts" active={true} />
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] ml-2">Privacy & Legals</h3>
          <SettingsLink icon={<Lock size={18}/>} label="Privacy Policy" />
          <SettingsLink icon={<FileText size={18}/>} label="Terms of Service" />
          <SettingsLink icon={<Globe size={18}/>} label="App Language" value="English" />
        </div>

        <div className="pt-10 flex flex-col items-center gap-2 opacity-30">
           <p className="text-[10px] font-black uppercase tracking-[0.5em]">EduTeacher v2.4.0</p>
           <p className="text-[8px] font-bold">Made with ❤️ for Indian Teachers</p>
        </div>
      </div>
    </div>
  );
};

const SettingToggle = ({ icon, label, active }) => (
  <div className="flex items-center justify-between p-5 bg-[#1a1a1c] rounded-3xl border border-gray-800/50">
    <div className="flex items-center gap-4">
      <div className="text-purple-500">{icon}</div>
      <span className="text-xs font-bold text-gray-200">{label}</span>
    </div>
    <div className={`w-12 h-6 rounded-full relative transition-all duration-300 ${active ? 'bg-[#4ade80]' : 'bg-gray-700'}`}>
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${active ? 'left-7' : 'left-1'}`} />
    </div>
  </div>
);

const SettingsLink = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-5 bg-[#1a1a1c] rounded-3xl border border-gray-800/50">
    <div className="flex items-center gap-4">
      <div className="text-gray-400">{icon}</div>
      <span className="text-xs font-bold text-gray-200">{label}</span>
    </div>
    {value && <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">{value}</span>}
  </div>
);

export default TeacherSettings;