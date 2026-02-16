import React, { useState } from 'react';
import { Smartphone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('Student');
    const navigate = useNavigate();

    return (
        // Responsive Wrapper: Centered card on desktop, full-screen on mobile
        <div className="min-h-screen bg-[#050810] text-white font-sans flex items-center justify-center p-0 md:p-6 relative overflow-hidden">

            {/* --- BACKGROUND AMBIENT GLOWS --- */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* --- MAIN CONTAINER --- */}
            <div className="w-full max-w-[450px] min-h-screen md:min-h-fit md:bg-white/5 md:backdrop-blur-3xl md:border md:border-white/10 md:rounded-[3rem] p-8 md:p-10 flex flex-col relative z-10 shadow-2xl">

                {/* --- EXACT LOGO RECREATION --- */}
                <header className="flex flex-col items-center mb-10">
                    <div className="flex items-center mb-12 select-none">
                        {/* The White Pill containing VLM */}
                        <div className="bg-[#eef7ff] px-4 py-1 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-black font-black text-xl tracking-tight">
                                VLM
                            </span>
                        </div>

                        {/* The Academy text outside the pill */}
                        <span className="text-[#5b96e1] font-bold text-xl ml-2 tracking-tight">
                            Academy
                        </span>
                    </div>

                    <h1 className="mt-10 text-2xl md:text-3xl font-bold text-center leading-tight tracking-tight">
                        Learning Never Sleeps <br />
                        <span className="text-blue-400">at VLM Academy</span>
                    </h1>
                </header>

                {/* --- ROLE SELECTOR (TABS) --- */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex mb-8">
                    {['Student', 'Parent', 'Teacher'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setRole(item)}
                            className={`flex-1 py-3 rounded-full text-[13px] font-bold transition-all duration-500 tracking-wide ${role === item
                                    ? 'bg-[#2563eb] shadow-[0_0_25px_rgba(37,99,235,0.6)] text-white scale-105'
                                    : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* --- PHONE INPUT WITH INTEGRATED SEND OTP BUTTON --- */}
                <div className="relative mb-8">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center p-1.5 focus-within:border-blue-500/50 transition-all shadow-inner">
                        <div className="pl-5 text-gray-400">
                            <Smartphone size={20} />
                        </div>
                        <input
                            type="tel"
                            placeholder="Mobile Number (+91)"
                            className="bg-transparent border-none focus:ring-0 flex-1 px-4 text-sm font-medium placeholder:text-gray-600 outline-none w-full"
                        />
                        {/* The "Send OTP" Button inside the input bar */}
                        <button className="bg-[#2563eb] hover:bg-blue-500 text-white px-6 py-4 rounded-[2.2rem] text-[13px] font-black shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95 whitespace-nowrap">
                            Send OTP
                        </button>
                    </div>
                </div>

                {/* --- DIVIDER --- */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-800"></div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Or continue with</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-800"></div>
                </div>

                {/* --- GOOGLE SIGN IN --- */}
                <button className="bg-white/5 backdrop-blur-md border border-white/10 w-full py-4 rounded-[2.2rem] flex items-center justify-center gap-3 active:scale-[0.98] transition-all hover:bg-white/10 border-white/20">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    <span className="text-sm font-bold text-gray-200 uppercase tracking-widest text-[12px]">Sign in with Google</span>
                </button>

                {/* --- FOOTER --- */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-sm font-medium text-gray-500 tracking-wide">
                        New here? <button onClick={() => navigate('/signup')} className="text-blue-500 font-black hover:underline ml-1">Sign up</button>
                    </p>
                </div>
            </div>

            {/* --- RESPONSIVE CSS HACK --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 768px) {
          input { font-size: 16px !important; } /* Prevents iOS auto-zoom */
        }
        ::placeholder {
          letter-spacing: 0px;
        }
      `}} />
        </div>
    );
};

export default Login;