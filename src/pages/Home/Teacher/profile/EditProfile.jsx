import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Camera, 
  Type, 
  Book, 
  Award, 
  Save, 
  Edit3,
  ShieldAlert 
} from 'lucide-react';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-[#0f0f10]/80 backdrop-blur-md p-4 flex items-center gap-4 border-b border-gray-200 dark:border-gray-800">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-100 dark:bg-[#1a1a1c] rounded-xl text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft size={20}/>
        </button>
        <h1 className="text-lg font-black tracking-tight">Edit Profile</h1>
      </header>

      <div className="p-6 space-y-8 max-w-lg mx-auto">
        
        {/* --- CHANGE PHOTO --- */}
        <div className="flex flex-col items-center">
          <div className="relative group cursor-pointer">
            <div className="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-700 flex items-center justify-center overflow-hidden shadow-lg">
               {/* Placeholder or Actual Image would go here */}
               <Camera size={32} className="text-gray-400 dark:text-gray-600" />
            </div>
            <button className="absolute bottom-1 right-1 bg-purple-600 text-white p-2.5 rounded-full border-4 border-gray-50 dark:border-[#0f0f10] hover:scale-110 transition-transform shadow-md">
               <Edit3 size={14} />
            </button>
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-500 font-bold mt-4 uppercase tracking-widest">Tap to change avatar</p>
        </div>

        {/* --- FORM INPUTS --- */}
        <div className="space-y-6">
          <InputGroup 
            icon={<Type size={16}/>} 
            label="Full Name" 
            value="Priya Sharma" 
          />
          
          <InputGroup 
            icon={<Award size={16}/>} 
            label="Professional Title" 
            value="Senior Physics Faculty" 
          />
          
          {/* Biography Textarea */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
               <Book size={16} className="text-purple-600 dark:text-purple-500" /> Biography
            </label>
            <textarea 
              rows="4"
              className="w-full bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 text-sm text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none shadow-sm placeholder:text-gray-400"
              defaultValue="Helping students master Quantum Physics for over 8 years. IIT-JEE Specialist."
            />
          </div>
        </div>

        {/* --- SECURITY NOTE --- */}
        <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-500/20 p-5 rounded-3xl flex gap-4 items-start">
           <ShieldAlert className="text-purple-500 shrink-0" size={24} />
           <div>
             <h4 className="text-[11px] font-black text-purple-700 dark:text-purple-400 uppercase tracking-widest mb-1">Security Note</h4>
             <p className="text-xs text-purple-900/70 dark:text-purple-200/50 leading-relaxed font-medium">
               Changing your registered phone number or email will require a new verification process by the Admin.
             </p>
           </div>
        </div>
      </div>

      {/* --- SAVE BUTTON --- */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white dark:from-[#0f0f10] via-white/90 dark:via-[#0f0f10]/90 to-transparent">
        <div className="max-w-lg mx-auto">
          <button className="w-full bg-gray-900 dark:bg-[#4ade80] text-white dark:text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-gray-900/20 dark:shadow-[#4ade80]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-[#45ce76]">
            <Save size={18}/> Update My Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component with Theme Classes
const InputGroup = ({ icon, label, value }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
       <span className="text-purple-600 dark:text-purple-500">{icon}</span> {label}
    </label>
    <input 
      type="text" 
      defaultValue={value}
      className="w-full bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 text-sm text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all shadow-sm"
    />
  </div>
);

export default EditProfile;