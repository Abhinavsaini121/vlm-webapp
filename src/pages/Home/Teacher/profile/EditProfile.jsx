import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Camera, 
  User, 
  Award, 
  BookOpen, 
  Briefcase, 
  Globe, 
  Save, 
  Plus, 
  X,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  // State for Subject Chips
  const [subjects, setSubjects] = useState(['Physics', 'IIT-JEE Math', 'Quantum Mechanics']);
  const [newSubject, setNewSubject] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const addSubject = () => {
    if (newSubject.trim() && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject]);
      setNewSubject("");
    }
  };

  const removeSubject = (sub) => {
    setSubjects(subjects.filter(s => s !== sub));
  };

  const handleSave = () => {
    console.log("Saving changes...");
    // Dummy route to profile after save
    navigate('/TeacherProfile');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-36 overflow-x-hidden transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-white/10 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Edit Profile</h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 text-[10px] font-black text-emerald-600 dark:text-[#4ade80] bg-emerald-100 dark:bg-[#15231a] px-3 py-1.5 rounded-full border border-emerald-200 dark:border-[#23422e] uppercase tracking-widest shadow-sm"
        >
           <ShieldCheck size={12} /> Verified
        </motion.div>
      </header>

      <div className="p-6 space-y-10">
        
        {/* --- AVATAR UPLOAD SECTION --- */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col items-center"
        >
          <div className="relative group cursor-pointer">
            <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] p-[3px] shadow-xl shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full rounded-[2.3rem] bg-white dark:bg-[#1a2233] flex items-center justify-center overflow-hidden relative">
                 {/* Image Placeholder Updated */}
                 <span className="text-4xl font-black text-gray-800 dark:text-white">PS</span>
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <button className="absolute -bottom-2 -right-2 bg-white dark:bg-[#1a2233] text-[#2F80FF] dark:text-[#56CCF2] border border-gray-200 dark:border-white/10 p-3 rounded-2xl shadow-xl active:scale-90 hover:scale-105 transition-all">
              <Camera size={20} strokeWidth={2.5} />
            </button>
          </div>
          <p className="mt-6 text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-[0.3em]">Profile Identity</p>
        </motion.div>

        {/* --- FORM FIELDS --- */}
        <div className="space-y-6">
          
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <InputWrapper label="Full Name" icon={<User size={18}/>}>
               <input type="text" defaultValue="Priya Sharma" className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all" />
            </InputWrapper>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <InputWrapper label="Professional Title" icon={<Award size={18}/>}>
               <input type="text" defaultValue="Senior Physics Faculty" className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all" />
            </InputWrapper>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-4">
            <InputWrapper label="Experience" icon={<Briefcase size={18}/>}>
               <input type="text" defaultValue="8+ Years" className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-left text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all" />
            </InputWrapper>
            <InputWrapper label="Language" icon={<Globe size={18}/>}>
               <input type="text" defaultValue="English, Hindi" className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-left text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all" />
            </InputWrapper>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <InputWrapper label="Biography" icon={<BookOpen size={18}/>}>
               <textarea 
                 rows="4" 
                 className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all resize-none leading-relaxed pt-4"
                 defaultValue="I specialize in simplifying complex Quantum Mechanics for IIT-JEE aspirants. Passionate about conceptual teaching and student growth."
               />
               <div className="flex justify-end mt-1">
                  <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">124 / 300 Characters</span>
               </div>
            </InputWrapper>
          </motion.div>

          {/* --- SUBJECT SPECIALIZATION (CHIPS) --- */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-3">
             <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-1">Subject Specialization</label>
             <div className="flex flex-wrap gap-2 mb-3">
                {subjects.map((sub) => (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                    key={sub} 
                    className="flex items-center gap-2 bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-[#2F80FF]/30 px-4 py-2 rounded-xl shadow-sm dark:shadow-none"
                  >
                    <span className="text-xs font-bold text-[#2F80FF] dark:text-[#56CCF2]">{sub}</span>
                    <button onClick={() => removeSubject(sub)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <X size={14} />
                    </button>
                  </motion.div>
                ))}
             </div>
             <div className="relative">
                <input 
                  type="text" 
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  placeholder="Add new subject..." 
                  className="w-full bg-white/50 dark:bg-[#1a2233]/50 border border-gray-300 dark:border-gray-700 border-dashed rounded-[1.2rem] p-4 pr-12 text-sm text-gray-700 dark:text-gray-400 italic focus:outline-none focus:border-[#2F80FF] transition-all"
                />
                <button 
                  onClick={addSubject}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] rounded-xl text-white shadow-lg shadow-blue-500/30 active:scale-90 hover:scale-105 transition-all"
                >
                  <Plus size={18} />
                </button>
             </div>
          </motion.div>

        </div>

        {/* --- VISIBILITY TOGGLE --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 p-6 rounded-[2rem] flex items-center justify-between shadow-sm cursor-pointer"
          onClick={() => setIsPublic(!isPublic)}
        >
           <div>
              <h4 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-tight">Public Profile</h4>
              <p className="text-[10px] text-gray-500 font-medium">Show your profile in student discovery</p>
           </div>
           <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isPublic ? 'bg-[#2F80FF] shadow-[0_0_15px_rgba(47,128,255,0.3)]' : 'bg-gray-300 dark:bg-gray-700'}`}>
              <motion.div 
                layout
                initial={false}
                animate={{ x: isPublic ? 24 : 0 }}
                className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"
              ></motion.div>
           </div>
        </motion.div>

      </div>

      {/* --- FIXED SAVE BUTTON --- */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 via-gray-50 dark:from-[#0b0f1a] dark:via-[#0b0f1a] to-transparent z-30 pointer-events-none"
      >
        <button 
          onClick={handleSave}
          className="w-full pointer-events-auto bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30 active:scale-95 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
        >
           <Save size={18} strokeWidth={2.5} /> Save Changes
        </button>
      </motion.div>

    </div>
  ); 
};

// Helper Input Wrapper - Updated for Dark/Light Mode
const InputWrapper = ({ label, icon, children }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
       <span className="text-[#2F80FF] dark:text-[#56CCF2]">{icon}</span> {label}
    </label>
    {children}
  </div>
);

export default EditProfile;