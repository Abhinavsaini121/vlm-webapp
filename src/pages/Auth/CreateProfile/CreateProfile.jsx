import React, { useState } from 'react';
import { 
  User, 
  School, 
  Phone, 
  MapPin, 
  Hash, 
  Ticket, 
  Camera, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Assets (Using same background logic as previous screens)
import loginMobileBg from "../../../assets/loginmobilebg.png"; 

const CreateProfile = () => {
  const navigate = useNavigate();
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    parentName: '',
    parentMobile: '',
    city: '',
    username: '',
    referralCode: ''
  });

  // --- NEON BUTTON STYLE (From Previous Code) ---
  const neonStyle = "border-[1.5px] border-[#82baff] bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] shadow-[0_0_20px_rgba(84,155,255,0.4)] text-white";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // Navigate to Dashboard or Next Step
    console.log(formData);
    navigate('/class'); 
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
               Build Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fa8ff] to-[#82baff]">Hero Profile.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
               Tell us a bit about yourself to personalize your learning experience.
            </p>
         </div>

         {/* Decorative Floating Element */}
         <div className="relative z-10 w-full h-64 flex items-center justify-center">
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative"
             >
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] p-1 shadow-2xl shadow-blue-500/30">
                   <div className="w-full h-full rounded-full bg-[#090C15] flex items-center justify-center overflow-hidden">
                      <User size={64} className="text-gray-600" />
                   </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white text-blue-600 px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2">
                   <span className="text-xl">🚀</span> Explorer
                </div>
             </motion.div>
         </div>
      </motion.div>

      {/* --- RIGHT SECTION (FORM) --- */}
      <div 
        className="w-full lg:w-[55%] h-full relative flex flex-col items-center p-0 overflow-y-auto overflow-x-hidden"
        style={{
            backgroundImage: window.innerWidth < 1024 ? `url(${loginMobileBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
      >
        {/* Full Screen Overlay for Mobile */}
        <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

        <div className="w-full max-w-[450px] relative z-10 px-6 py-10 lg:px-8 lg:py-0 flex flex-col justify-start lg:justify-center min-h-screen lg:min-h-0">
            
            {/* Header */}
            <header className="flex flex-col items-center mb-8 mt-4 lg:mt-0">
                <h2 className="text-2xl font-bold text-center">Create Your Hero Profile</h2>
                <p className="text-xs text-gray-400 mt-1">Complete your profile to continue</p>
            </header>

            {/* Avatar Upload (Clickable) */}
            <div className="flex justify-center mb-8">
                <div className="relative cursor-pointer group">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] p-[3px] shadow-lg shadow-blue-500/20">
                        <div className="w-full h-full rounded-full bg-[#1a202c] flex items-center justify-center overflow-hidden border-4 border-[#090C15]">
                            <User size={48} className="text-white" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-4 border-[#090C15] text-blue-600 group-hover:scale-110 transition-transform">
                        <Camera size={16} strokeWidth={3} />
                    </div>
                </div>
            </div>

            {/* FORM FIELDS */}
            <div className="space-y-4 w-full">
                
                {/* Full Name */}
                <InputGroup icon={<User size={18} />} placeholder="Full Name" name="fullName" onChange={handleInputChange} />

                {/* School Name (Optional) */}
                <InputGroup icon={<School size={18} />} placeholder="School Name (Optional)" name="schoolName" onChange={handleInputChange} />

                {/* Parent Name */}
                <InputGroup icon={<User size={18} />} placeholder="Parent Name" name="parentName" onChange={handleInputChange} />

                {/* Parent Mobile */}
                <InputGroup icon={<Phone size={18} />} placeholder="Parent Mobile Number" name="parentMobile" onChange={handleInputChange} type="tel" />

                {/* City */}
                <InputGroup icon={<MapPin size={18} />} placeholder="City" name="city" onChange={handleInputChange} />

                {/* Username */}
                <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all relative">
                    <Hash size={18} className="text-gray-400" />
                    <input 
                        name="username" 
                        onChange={handleInputChange} 
                        type="text" 
                        placeholder="Username = Mobile Number Only" 
                        className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" 
                    />
                    <div className="hidden sm:block absolute right-3 text-[9px] bg-white/10 px-2 py-1 rounded text-gray-400">Auto-filled</div>
                </div>

                {/* Referral Code */}
                <InputGroup icon={<Ticket size={18} />} placeholder="Referral Code (Optional)" name="referralCode" onChange={handleInputChange} />
                
            </div>

            {/* Continue Button */}
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContinue}
                className={`mt-8 w-full py-4 rounded-full text-[14px] font-black transition-all flex items-center justify-center gap-2 uppercase tracking-wider ${neonStyle}`}
            >
                Continue <div className="bg-white text-blue-500 rounded-full p-1"><ArrowRight size={16} strokeWidth={3} /></div>
            </motion.button>

            {/* Sign In Link */}
            <div className="mt-8 text-center pb-8 lg:pb-0">
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

// Reusable Input Component to keep code clean
const InputGroup = ({ icon, placeholder, name, type = "text", onChange }) => (
    <div className="bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center p-3.5 pl-5 focus-within:border-[#82baff]/50 focus-within:bg-gray-800/80 transition-all">
        <span className="text-gray-400">{icon}</span>
        <input 
            name={name} 
            onChange={onChange} 
            type={type} 
            placeholder={placeholder} 
            className="bg-transparent border-none focus:ring-0 flex-1 px-3 text-sm font-medium placeholder:text-gray-500 text-white outline-none w-full" 
        />
    </div>
);

export default CreateProfile;