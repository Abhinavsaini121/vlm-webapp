import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  ChevronRight, 
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import loginMobileBg from "../../assets/loginmobilebg.png"; 

// Google Icon Component
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.52 12.29C23.52 11.43 23.44 10.71 23.3 10H12V14.51H18.5C18.21 15.99 17.26 17.96 15.29 19.33L15.27 19.49L18.84 22.21L19.08 22.24C21.31 20.21 22.6 17.2 22.6 13.59L22.56 12.25L23.52 12.29Z" fill="#4285F4"/>
    <path d="M12 24C15.24 24 17.96 22.92 19.98 21.05L16.42 18.29C15.32 19.02 13.84 19.52 12 19.52C8.84 19.52 6.16 17.38 5.2 14.53L5.04 14.54L1.35 17.34L1.29 17.49C3.33 21.46 7.42 24 12 24Z" fill="#34A853"/>
    <path d="M5.2 14.53C4.94 13.78 4.8 12.94 4.8 12.09C4.8 11.23 4.94 10.42 5.18 9.64L5.17 9.48L1.47 6.66L1.4 6.72C0.5 8.35 0 10.18 0 12.09C0 14 0.5 15.83 1.4 17.47L5.2 14.53Z" fill="#FBBC05"/>
    <path d="M12 4.65C14.34 4.65 15.93 5.66 16.82 6.51L20.07 3.25C17.96 1.28 15.24 0.18 12 0.18C7.42 0.18 3.33 2.72 1.29 6.7L5.06 9.61C6.06 6.75 8.79 4.65 12 4.65Z" fill="#EA4335"/>
  </svg>
);

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Teacher');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // --- NEON STYLE ---
  const neonStyle = "border-[1.5px] border-[#82baff] bg-[#192d4b]/40 shadow-[inset_0_0_18px_rgba(84,155,255,0.7),0_0_12px_rgba(84,155,255,0.3)] text-white";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleNext = () => {
    // 1. Basic Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill in all fields.");
        return;
    }

    // 2. Password Match Validation
    if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
    }

    // 3. Terms Validation
    if (!agreed) {
        setError("Please agree to the Terms & Conditions.");
        return;
    }

    // 4. Role Based Routing
    if (role === 'Teacher') {
        navigate('/upload-docs'); 
    } else if (role === 'Student') {
        navigate('/createProfile'); 
    } else {
        navigate('/parent-dashboard'); 
    }
  };

  return (
    <div className="min-h-screen h-screen w-full bg-[#090C15] text-white font-sans flex overflow-hidden">
      
      {/* --- LEFT SECTION (DESKTOP VISUALS) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-[45%] relative flex-col justify-between p-12 bg-[#050810] border-r border-white/5 relative overflow-hidden"
      >
         {/* Abstract Glows */}
         <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

         {/* Branding */}
         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#eef7ff] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-black font-black text-sm tracking-tight">VLM</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Academy</span>
            </div>
            
            <h1 className="text-5xl font-black leading-tight mb-4">
               Join the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fa8ff] to-[#82baff]">Explorers.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
               Create your account to unlock world-class learning resources and connect with top mentors.
            </p>
         </div>

         {/* Decorative Floating Elements */}
         <div className="relative z-10 w-full h-64 flex items-center justify-center">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute top-10 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400"></div>
                   <div>
                      <div className="w-20 h-2 bg-white/20 rounded-full mb-1"></div>
                      <div className="w-12 h-2 bg-white/10 rounded-full"></div>
                   </div>
                </div>
             </motion.div>
         </div>
      </motion.div>

      {/* --- RIGHT SECTION (FORM) --- */}
      <div 
        className="w-full lg:w-[55%] h-full relative flex flex-col items-center p-0 lg:p-8 overflow-y-auto overflow-x-hidden"
        style={{
            backgroundImage: window.innerWidth < 1024 ? `url(${loginMobileBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' // Helps keeps bg static
        }}
      >
        {/* --- FULL SCREEN OVERLAY (FIXED) --- */}
        {/* This ensures the black tint covers the whole mobile screen from top to bottom */}
        <div className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

        <div className="w-full max-w-[420px] relative z-10 px-6 pb-10 lg:px-0 lg:pb-0 flex flex-col justify-start lg:justify-center min-h-screen lg:min-h-0">
            
            {/* Header */}
            {/* Added mt-12 for Mobile Top Margin */}
            <header className="flex flex-col items-center mb-6 mt-10 lg:mt-0">
                {/* --- MOBILE LOGO --- */}
                <div className="lg:hidden flex items-center gap-2 mb-4 select-none">
                    <div className="bg-[#eef7ff] w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
                        <span className="text-black font-black text-sm tracking-tight">VLM</span>
                    </div>
                    <span className="text-[#5b96e1] font-bold text-xl tracking-tight">Academy</span>
                </div>

                <h2 className="text-2xl font-bold text-center">Create Account</h2>
                <p className="text-xs text-gray-400 mt-1">Sign up to get started with VLM</p>
            </header>

            {/* Role Tabs */}
            <div className="bg-gray-800/50 backdrop-blur-md border border-white/5 p-1 rounded-full flex mb-6">
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

            {/* FORM FIELDS */}
            <div className="space-y-4">
                {/* Name */}
                <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all">
                    <User size={18} className="text-gray-400" />
                    <input name="name" onChange={handleInputChange} type="text" placeholder="Name" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
                </div>

                {/* Email */}
                <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all">
                    <Mail size={18} className="text-gray-400" />
                    <input name="email" onChange={handleInputChange} type="text" placeholder="Email / phone number" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
                </div>

                {/* Password */}
                <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all relative">
                    <Lock size={18} className="text-gray-400" />
                    <input name="password" onChange={handleInputChange} type="password" placeholder="Password" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
                </div>

                {/* Confirm Password */}
                <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all relative">
                    <Lock size={18} className="text-gray-400" />
                    <input name="confirmPassword" onChange={handleInputChange} type="password" placeholder="Confirm Password" className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" />
                </div>
            </div>

            {/* Error Message Display */}
            <AnimatePresence>
                {error && (
                    <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-400 text-xs font-bold mt-2 ml-2"
                    >
                        * {error}
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Terms Checkbox */}
            <div className="mt-6 flex items-center gap-3 cursor-pointer select-none" onClick={() => setAgreed(!agreed)}>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${agreed ? 'bg-[#5fa8ff] border-[#5fa8ff]' : 'border-gray-500 bg-transparent'}`}>
                    {agreed && <Check size={12} className="text-black stroke-[3]" />}
                </div>
                <p className="text-xs font-bold text-gray-300">Agree to Terms & Conditions</p>
            </div>

            {/* Sign Up Button */}
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className={`mt-6 w-full py-4 rounded-[1.2rem] text-[13px] font-black transition-all flex items-center justify-center gap-2 uppercase tracking-wider ${neonStyle}`}
            >
                {role === 'Teacher' ? 'Next Step' : 'Create Account'} <ChevronRight size={18} />
            </motion.button>

            {/* Socials */}
            <div className="mt-8 text-center">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Or Continue With</p>
                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <GoogleIcon />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-black">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.56-2.09-.48-3.08.35-1.04.86-2.17.94-3.1.95-.71.02-1.3-.23-1.74-.69-3.83-4.14-3.19-10.87 1.41-12.7 1.88-.74 3.25-.13 4.29.3 1.05.41 1.95.34 3.01-.13 1.63-.69 3.04-.54 4.39.06.87.38 1.54.91 2 1.45-3.69 1.86-3.07 6.64 1.48 8.35-.45 1.15-1.05 2.29-1.93 3.17l.01-.01c-.13.14-.3.26-.47.41-.16.14-.32.28-.48.42l-.24.18-.32.25c-.06.05-.12.1-.18.14zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                    </button>
                </div>
            </div>

            {/* Login Link */}
            <div className="mt-8 text-center pb-8 md:pb-0">
                <p className="text-xs text-gray-400 font-medium">
                    Already have an Account? <button onClick={() => navigate('/login')} className="text-[#5fa8ff] font-bold hover:underline uppercase tracking-wide ml-1">Sign In</button>
                </p>
            </div>
            
        </div>
      </div>

      {/* iOS Input Fix */}
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