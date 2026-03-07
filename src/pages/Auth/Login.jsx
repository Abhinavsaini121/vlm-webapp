import React, { useState } from 'react';
import { Smartphone, Lock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import loginMobileBg from "../../assets/loginmobilebg.png";
// import loginBg from "../../assets/loginbg.png"; // Not needed for split layout

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('Student');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // --- NEON INNER GLOW STYLE ---
    const neonStyle = "border-[1.5px] border-[#82baff] bg-[#192d4b]/40 shadow-[inset_0_0_18px_rgba(84,155,255,0.7),0_0_12px_rgba(84,155,255,0.3)] text-white";

    const handleLogin = (e) => {
        e.preventDefault();
        const mobileRegex = /^[6-9]\d{9}$/;

        if (!mobileRegex.test(mobile)) {
            setError("Please enter valid Number!");
            return;
        }
        if (password.length < 4) {
            setError("Create strong password");
            return;
        }

        setError("");
        localStorage.setItem('userRole', role);
        console.log("Role Saved:", role);

        if (role === 'Student') navigate('/student-dashboard');
        else if (role === 'Teacher') navigate('/teacher-dashboard');
        else navigate('/parent-dashboard');
    };

    return (
        <div className="min-h-screen h-screen w-full bg-[#090C15] text-white font-sans flex overflow-hidden">
            
            {/* --- LEFT SECTION (DESKTOP VISUALS) --- */}
            {/* Hidden on mobile, takes 45% width on desktop */}
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
                       Welcome <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fa8ff] to-[#82baff]">Back!</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                       Continue your journey of excellence with India's most advanced learning platform.
                    </p>
                 </div>

                 {/* Decorative Elements */}
                 <div className="relative z-10 w-full h-64 flex items-center justify-center">
                     <motion.div 
                       animate={{ scale: [1, 1.05, 1] }}
                       transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                       className="w-full max-w-xs p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl"
                     >
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                <Lock size={20} />
                            </div>
                            <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">Secure</div>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full mb-2">
                            <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                     </motion.div>
                 </div>
            </motion.div>

            {/* --- RIGHT SECTION (FORM) --- */}
            {/* Full width on mobile, 55% on desktop */}
            <div 
                className="w-full lg:w-[55%] h-full relative flex flex-col items-center justify-center p-0 sm:p-8 overflow-y-auto"
                style={{
                    // Mobile BG Only
                    backgroundImage: window.innerWidth < 1024 ? `url(${loginMobileBg})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Mobile Overlay */}
                <div className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-[450px] relative z-10 p-6 sm:p-8 md:bg-transparent lg:bg-transparent bg-black/20 backdrop-blur-md rounded-[2.5rem] md:rounded-none md:shadow-none shadow-2xl"
                >
                    {/* Header */}
                    <header className="flex flex-col items-center mb-10">
                         {/* Mobile Logo Only */}
                        <div className="lg:hidden flex items-center mb-4 select-none">
                            <div className="bg-[#eef7ff] px-4 py-1 rounded-full flex items-center justify-center shadow-sm">
                                <span className="text-black font-black text-xl tracking-tight">VLM</span>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-center leading-tight tracking-tight mb-2">
                            Login Account
                        </h2>
                        <p className="text-gray-400 text-sm">Sign in to continue to your dashboard</p>
                    </header>

                    {/* Role Tabs */}
                    <div className="bg-gray-800/50 backdrop-blur-md border border-white/5 p-1.5 rounded-full flex mb-8 relative">
                        {['Student', 'Parent', 'Teacher'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setRole(item)}
                                className={`flex-1 py-3 rounded-full text-[13px] font-bold transition-colors duration-200 relative z-10 ${role === item ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                            >
                                {item}
                                {role === item && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute inset-0 rounded-full -z-10 ${neonStyle}`}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-4 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-colors">
                            <Smartphone className="text-gray-400 mr-3" size={20} />
                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                placeholder="Mobile Number"
                                className="bg-transparent border-none focus:ring-0 flex-1 text-sm font-medium outline-none placeholder-gray-500 text-white w-full"
                            />
                        </div>

                        <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-4 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-colors">
                            <Lock className="text-gray-400 mr-3" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className="bg-transparent border-none focus:ring-0 flex-1 text-sm font-medium outline-none placeholder-gray-500 text-white w-full"
                            />
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-red-400 text-xs font-bold ml-2"
                                >
                                    {error}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className={`w-full py-4 mt-4 rounded-2xl text-[14px] font-black transition-all flex items-center justify-center gap-2 uppercase tracking-wide ${neonStyle}`}
                        >
                            LOGIN AS {role.toUpperCase()} <ChevronRight size={18} />
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-700"></div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Or</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-700"></div>
                    </div>

                    {/* Google Sign In */}
                    <button className="bg-gray-800/50 backdrop-blur-md border border-white/10 w-full py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors hover:bg-white/10 active:scale-[0.99]">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        <span className="text-xs font-bold text-gray-200 uppercase tracking-widest">Sign in with Google</span>
                    </button>

                    {/* Footer */}
                    <div className="mt-8 text-center pb-4 md:pb-0">
                        <p className="text-sm font-medium text-gray-400">
                            New here? <button onClick={() => navigate('/signup')} className="text-[#5fa8ff] font-black hover:underline ml-1">Sign up</button>
                        </p>
                    </div>
                </motion.div>
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

export default Login;