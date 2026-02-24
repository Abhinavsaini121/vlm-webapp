import React, { useState } from 'react';
import { User, Calendar, Smartphone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/Bottombar/ProgressBar'; // Import the shared component

const Signup = () => {
  const [role, setRole] = useState('Teacher'); // Defaulted to teacher for testing
  const [gender, setGender] = useState('Male');
  const navigate = useNavigate();

  const handleNext = () => {
    if (role === 'Teacher') {
      navigate('/upload-docs'); // Route to step 2
    } else {
      console.log("Submit Student/Parent form");
    }
  };

  return (
    <div className="min-h-screen bg-[#050810] text-white font-sans flex items-center justify-center p-0 md:p-6 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[480px] min-h-screen md:min-h-fit md:bg-white/5 md:backdrop-blur-3xl md:border md:border-white/10 md:rounded-[3rem] p-8 md:p-10 flex flex-col relative z-10 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {role === 'Teacher' && <ProgressBar currentStep={1} />}

        <header className="flex flex-col items-center mb-8">
          <div className="flex items-center select-none">
            <div className="bg-[#eef7ff] px-4 py-1 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-black font-black text-xl tracking-tight uppercase">VLM</span>
            </div>
            <span className="text-[#5b96e1] font-bold text-xl ml-2 tracking-tight">Academy</span>
          </div>
          <h1 className="mt-8 text-2xl md:text-3xl font-bold text-center leading-tight">
            Join the Future of <br /><span className="text-blue-400">VLM Academy</span>
          </h1>
        </header>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full flex mb-8">
          {['Student', 'Parent', 'Teacher'].map((item) => (
            <button
              key={item}
              onClick={() => setRole(item)}
              className={`flex-1 py-2.5 rounded-full text-[12px] font-bold transition-all duration-300 ${
                role === item ? 'bg-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.5)] text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center p-4 pl-6 focus-within:border-blue-500/50 transition-all">
            <User size={18} className="text-gray-500" />
            <input type="text" placeholder="Full Name" className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-medium placeholder:text-gray-600 outline-none w-full" />
          </div>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center p-4 pl-6 focus-within:border-blue-500/50 transition-all">
            <Calendar size={18} className="text-gray-500" />
            <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder="Date of Birth" className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-medium placeholder:text-gray-600 outline-none w-full" />
          </div>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center p-4 pl-6 focus-within:border-blue-500/50 transition-all">
            <Smartphone size={18} className="text-gray-500" />
            <input type="tel" placeholder="Mobile Number (+91)" className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-medium placeholder:text-gray-600 outline-none w-full" />
          </div>
          <div className="space-y-2 px-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Gender</label>
            <div className="bg-white/5 border border-white/10 p-1 rounded-2xl flex">
              {['Male', 'Female', 'Other'].map((item) => (
                <button
                  key={item}
                  onClick={() => setGender(item)}
                  className={`flex-1 py-2 rounded-xl text-[11px] font-black transition-all duration-300 ${
                    gender === item ? 'bg-white/10 text-blue-400 border border-white/10' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button onClick={handleNext} className="mt-10 bg-[#2563eb] hover:bg-blue-500 text-white w-full py-4 rounded-[1.8rem] text-sm font-black shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest">
          {role === 'Teacher' ? 'Next Step' : 'Create Account'} <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Signup;