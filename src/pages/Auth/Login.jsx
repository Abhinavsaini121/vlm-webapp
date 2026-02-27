import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';

const Login = () => {
    const [role, setRole] = useState('Student');
    const [mobile, setMobile] = useState('');

    const handleSendOTP = (e) => {
        e.preventDefault();
        console.log("Sending OTP to:", mobile, "as", role);
        // Add OTP logic here
    };

    return (
        /* 
           BACKGROUND IMAGE IMPLEMENTATION:
           Replace '/path/to/your/bg-asset.jpg' with the actual path to your asset.
           I've added a fallback dark color so you can see the UI structure immediately.
        */
        <div 
            className="min-h-screen flex items-center justify-center p-4 font-sans text-white bg-[#090C15]"
            style={{
                backgroundImage: `url('src/assets/loginbg.png')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="w-full max-w-[400px] flex flex-col items-center">
                
                {/* --- LOGO --- */}
                <div className="flex items-center mb-6 mt-10">
                    <div className="bg-white px-3 py-1 rounded-full flex items-center justify-center">
                        <span className="text-black font-extrabold text-[17px] tracking-tight">VLM</span>
                    </div>
                    <span className="text-[#4A90E2] font-semibold text-xl ml-2 tracking-tight">Academy</span>
                </div>

                {/* --- HEADING --- */}
                <h1 className="text-[26px] font-bold text-center leading-[1.3] mb-10 tracking-tight">
                    Learning Never Sleeps <br />
                    <span className="text-[#4A90E2]">at VLM Academy</span>
                </h1>

                {/* --- ROLE SELECTOR TABS --- */}
                <div className="w-full bg-[#161B26] p-1.5 rounded-full flex mb-8 border border-white/5 shadow-inner">
                    {['Student', 'Parent', 'Teacher'].map((item) => {
                        const isActive = role === item;
                        return (
                            <button
                                key={item}
                                onClick={() => setRole(item)}
                                className={`flex-1 py-3 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                                    isActive 
                                    ? 'bg-[#2764D9] text-white shadow-[0_0_25px_0px_rgba(39,100,217,0.55)]' 
                                    : 'text-gray-400 hover:text-gray-200 bg-transparent'
                                }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>

                {/* --- INPUT & OTP ROW --- */}
                <div className="w-full bg-[#161B26] rounded-full p-1.5 flex items-center border border-white/5 mb-8">
                    <div className="flex items-center flex-1 pl-4 pr-2">
                        <Smartphone className="text-gray-500 mr-2.5" size={18} />
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="Mobile Number (+91)"
                            className="bg-transparent border-none focus:ring-0 w-full text-[13px] font-medium outline-none placeholder-gray-500 text-white"
                        />
                    </div>
                    <button 
                        onClick={handleSendOTP}
                        className="bg-[#2764D9] hover:bg-[#1d53b8] text-white py-3 px-6 rounded-full text-[13px] font-semibold transition-all shadow-[0_0_25px_0px_rgba(39,100,217,0.55)] whitespace-nowrap"
                    >
                        Send OTP
                    </button>
                </div>

                {/* --- DIVIDER --- */}
                <div className="w-full flex items-center gap-4 mb-8">
                    <div className="h-[1px] flex-1 bg-gray-800"></div>
                    <span className="text-[12px] text-gray-400">Or continue with</span>
                    <div className="h-[1px] flex-1 bg-gray-800"></div>
                </div>

                {/* --- GOOGLE BUTTON --- */}
                <button 
                    className="w-full bg-[#161B26] hover:bg-[#1f2636] border border-white/5 py-3.5 rounded-full flex items-center justify-center gap-3 transition-colors mb-10"
                >
                    <img 
                        src="https://www.svgrepo.com/show/475656/google-color.svg" 
                        alt="Google" 
                        className="w-5 h-5" 
                    />
                    <span className="text-[14px] font-medium text-white">Sign in with Google</span>
                </button>

                {/* --- FOOTER --- */}
                <div className="mt-auto pb-6">
                    <p className="text-[13px] text-gray-400">
                        New here? <button className="text-[#4A90E2] font-semibold hover:underline ml-1 cursor-pointer">Sign up</button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;