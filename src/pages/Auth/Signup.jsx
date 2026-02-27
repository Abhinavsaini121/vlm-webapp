import React, { useState } from 'react';
import { User, Calendar, Smartphone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/Bottombar/ProgressBar'; // Import the shared component

const Signup = () => {
  const [role, setRole] = useState('Teacher'); // Defaulted to teacher for testing
  const [gender, setGender] = useState('Male');
  const navigate = useNavigate();

  // --- NEON INNER GLOW STYLE ---
  const neonStyle = "border-[1.5px] border-[#82baff] bg-[#192d4b]/40 shadow-[inset_0_0_18px_rgba(84,155,255,0.7),0_0_12px_rgba(84,155,255,0.3)] text-white";

  const handleNext = () => {
    if (role === 'Teacher') {
      navigate('/upload-docs'); // Route to step 2
    } else {
      console.log("Submit Student/Parent form");
    }
  };

  return (
    /* --- RESPONSIVE BACKGROUND IMAGE SETUP --- */
    <div className="min-h-screen text-white font-sans flex items-center justify-center p-0 md:p-6 relative overflow-hidden bg-[#090C15] bg-cover bg-center bg-no-repeat 
            bg-[url('src/assets/loginmobilebg.png')] 
            md:bg-[url('src/assets/loginbg.png')]"
    >

      {/* Background Blobs (Kept for subtle blend, pointer-events-none ensures no scroll interference) */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* --- MAIN CONTAINER (COMPACT TO PREVENT SCROLL) --- */}
      <div className="w-full max-w-[450px] h-full sm:h-auto min-h-screen sm:min-h-fit md:bg-gray-900/40 md:backdrop-blur-xl md:border md:border-white/10 md:rounded-[2.5rem] p-5 sm:p-8 flex flex-col justify-center relative z-10 shadow-2xl bg-black/20 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* Progress Bar */}
        <div className="mb-2">
          {role === 'Teacher' && <ProgressBar currentStep={1} />}
        </div>

        {/* --- LOGO & HEADER --- */}
        <header className="flex flex-col items-center mb-5 mt-2">
          <div className="flex items-center select-none">
            <div className="bg-[#eef7ff] px-3 py-1 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-black font-black text-lg tracking-tight uppercase">VLM</span>
            </div>
            <span className="text-[#5fa8ff] font-bold text-lg ml-2 tracking-tight">Academy</span>
          </div>
          <h1 className="mt-4 text-xl sm:text-2xl font-bold text-center leading-tight">
            Join the Future of <br /><span className="text-[#5fa8ff]">VLM Academy</span>
          </h1>
        </header>

        {/* --- ROLE SELECTOR TABS --- */}
        <div className="bg-gray-800/50 backdrop-blur-md border border-white/5 p-1 rounded-full flex mb-5">
          {['Student', 'Parent', 'Teacher'].map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`flex-1 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${role === item
                ? neonStyle
                : 'text-gray-400 hover:text-gray-200 border-[1.5px] border-transparent bg-transparent'
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* --- FORM FIELDS (COMPACT SPACING) --- */}
        <div className="space-y-3">
          {/* Full Name */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3 sm:p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all">
            <User size={18} className="text-gray-400" />
            <input type="text" placeholder="Full Name" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
          </div>

          {/* DOB */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3 sm:p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all">
            <Calendar size={18} className="text-gray-400" />
            <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder="Date of Birth" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
          </div>

          {/* Mobile Number */}
          <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3 sm:p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all">
            <Smartphone size={18} className="text-gray-400" />
            <input type="tel" placeholder="Mobile Number (+91)" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
          </div>

          {/* Gender Selector */}
          <div className="space-y-1.5 px-1 mt-1">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Gender</label>
            <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 p-1 rounded-2xl flex">
              {['Male', 'Female', 'Other'].map((item) => (
                <button
                  key={item}
                  onClick={() => setGender(item)}
                  className={`flex-1 py-2 rounded-xl text-[12px] font-bold transition-all duration-300 ${gender === item ? 'bg-white/10 text-[#5fa8ff] shadow-sm' : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- SUBMIT BUTTON (WITH NEON GLOW) --- */}
        <button
          onClick={handleNext}
          className={`mt-6 w-full py-3.5 sm:py-4 rounded-[1.2rem] text-[13px] font-black transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wider ${neonStyle}`}
        >
          {role === 'Teacher' ? 'Next Step' : 'Create Account'} <ChevronRight size={18} />
        </button>

      </div>

      {/* iOS Text Scaling Fix */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
            input { font-size: 16px !important; }
        }
        `}} />
    </div>
  );
};

export default Signup;