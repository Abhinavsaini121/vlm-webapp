import React, { useState } from 'react';
import { Smartphone, Lock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
    const [role, setRole] = useState('Student');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    // --- Validation & Login Logic ---
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Mobile number validation (India 10 digits)
        const mobileRegex = /^[6-9]\d{9}$/;
        
        if (!mobileRegex.test(mobile)) {
            setError("Bhai, sahi 10-digit mobile number dalo!");
            return;
        }

        if (password.length < 4) {
            setError("Password thoda bada rakho (min 4 chars)");
            return;
        }

        setError("");

        // Save role to localStorage for future use
        localStorage.setItem('userRole', role);
        console.log("Role Saved:", role);

        // Navigation logic based on role
        if (role === 'Student') navigate('/student-dashboard');
        else if (role === 'Teacher') navigate('/teacher-dashboard');
        else navigate('/parent-dashboard');
    };

    return (
        <div className="min-h-screen bg-[#050810] text-white font-sans flex items-center justify-center p-0 md:p-6 relative overflow-hidden">
            
            {/* --- ANIMATED BACKGROUND GLOWS --- */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
            ></motion.div>
            <motion.div 
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"
            ></motion.div>

            {/* --- MAIN CONTAINER WITH ENTRANCE ANIMATION --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[450px] min-h-screen md:min-h-fit md:bg-white/5 md:backdrop-blur-3xl md:border md:border-white/10 md:rounded-[3rem] p-8 md:p-10 flex flex-col relative z-10 shadow-2xl"
            >

                {/* --- LOGO --- */}
                <header className="flex flex-col items-center mb-10">
                    <div className="flex items-center mb-8 select-none">
                        <div className="bg-[#eef7ff] px-4 py-1 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-black font-black text-xl tracking-tight">VLM</span>
                        </div>
                        <span className="text-[#5b96e1] font-bold text-xl ml-2 tracking-tight">Academy</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight tracking-tight">
                        Learning Never Sleeps <br />
                        <span className="text-blue-400">at VLM Academy</span>
                    </h1>
                </header>

                {/* --- ROLE SELECTOR --- */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex mb-8 relative">
                    {['Student', 'Parent', 'Teacher'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setRole(item)}
                            className={`flex-1 py-3 rounded-full text-[13px] font-bold transition-all duration-300 relative z-10 ${
                                role === item ? 'text-white' : 'text-gray-400'
                            }`}
                        >
                            {item}
                            {role === item && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#2563eb] rounded-full -z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* --- FORM FIELDS --- */}
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Mobile Input */}
                    <div className="relative">
                        <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center p-4 focus-within:border-blue-500/50 transition-all">
                            <Smartphone className="text-gray-400 mr-3" size={20} />
                            <input
                                type="tel"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                placeholder="Mobile Number"
                                className="bg-transparent border-none focus:ring-0 flex-1 text-sm font-medium outline-none"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center p-4 focus-within:border-blue-500/50 transition-all">
                            <Lock className="text-gray-400 mr-3" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className="bg-transparent border-none focus:ring-0 flex-1 text-sm font-medium outline-none"
                            />
                        </div>
                    </div>

                    {/* Error Message */}
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

                    {/* Login Button */}
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-[#2563eb] hover:bg-blue-500 text-white py-4 rounded-2xl text-sm font-black shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2"
                    >
                        LOGIN AS {role.toUpperCase()}
                        <ChevronRight size={18} />
                    </motion.button>
                </form>

                {/* --- DIVIDER --- */}
                <div className="flex items-center gap-4 my-8">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-800"></div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Or</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-800"></div>
                </div>

                {/* --- GOOGLE SIGN IN --- */}
                <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="bg-white/5 border border-white/10 w-full py-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
                >
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    <span className="text-xs font-bold text-gray-200 uppercase tracking-widest">Sign in with Google</span>
                </motion.button>

                {/* --- FOOTER --- */}
                <div className="mt-10 text-center">
                    <p className="text-sm font-medium text-gray-500">
                        New here? <button onClick={() => navigate('/signup')} className="text-blue-500 font-black hover:underline ml-1">Sign up</button>
                    </p>
                </div>
            </motion.div>

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