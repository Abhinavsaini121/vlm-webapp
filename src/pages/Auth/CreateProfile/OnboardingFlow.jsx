import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Wallet, 
  Landmark, 
  SmartphoneNfc, 
  ArrowRight, 
  PartyPopper,
  User,
  Star,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('UPI');
  
  // Timers
  const [offerTime, setOfferTime] = useState(294); // 4:54 in seconds
  const [trialTime, setTrialTime] = useState(259194); // 71:59:54 in seconds

  // Handle Offer Countdown
  useEffect(() => {
    if (step === 2 && offerTime > 0) {
      const timer = setInterval(() => setOfferTime(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [step, offerTime]);

  // Handle Trial Countdown
  useEffect(() => {
    if (step === 4 && trialTime > 0) {
      const timer = setInterval(() => setTrialTime(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [step, trialTime]);

  // Auto-advance Step 0 (Registration Success)
  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 2500);
      return () => clearTimeout(timer);
    }
    // Auto-redirect Step 5 (Final Congratulations)
    if (step === 5) {
      const timer = setTimeout(() => navigate('/student-dashboard'), 3500);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const nextStep = () => setStep(prev => prev + 1);
  const handleSkip = () => setStep(5); // Skip to final congratulations screen

  // Formatting utilities
  const formatOfferTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatTrialTime = (s) => {
    const hours = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Common UI Elements
  const NeonButton = ({ onClick, children, className = "" }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] shadow-[0_0_20px_rgba(47,128,255,0.4)] flex items-center justify-center gap-2 transition-all ${className}`}
    >
      {children}
    </motion.button>
  );

  const StepDots = ({ current }) => (
    <div className="flex justify-center gap-2 mt-6">
      {[0, 1, 2, 3].map(i => (
        <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#56CCF2]' : 'bg-gray-600'}`} />
      ))}
    </div>
  );

  // --- SCREEN COMPONENTS ---

  const Screen0 = () => (
    <div className="p-8 flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)] mb-6 relative">
        <ShieldCheck size={64} className="text-blue-600" />
        <Star className="absolute top-0 right-0 text-yellow-400 fill-yellow-400" size={24} />
      </div>
      <h2 className="text-2xl font-black tracking-tight text-white mb-4">Registration Successful!</h2>
      <div className="space-y-2 text-sm text-gray-300 font-medium">
        <p>Student ID: <span className="text-white font-bold">STU410504</span></p>
        <p>Class Content Activated</p>
        <p className="text-[#56CCF2]">Trial Access Enabled</p>
      </div>
      <StepDots current={0} />
    </div>
  );

  const Screen1 = () => (
    <div className="p-8">
      <h2 className="text-xl font-bold text-center text-white mb-6">Welcome to Class Demo</h2>
      <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10 flex justify-center">
        {/* Placeholder for illustration */}
        <div className="w-full h-32 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
          <User size={48} className="text-[#56CCF2]" />
        </div>
      </div>
      <div className="space-y-4 mb-8">
        {['App Explanation', 'Premium Benefits Overview', 'Reward System Details', 'Live Classes & Features'].map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check size={16} className="text-[#56CCF2]" strokeWidth={3} />
            <p className="text-sm font-medium text-gray-200">{text}</p>
          </div>
        ))}
      </div>
      <NeonButton onClick={nextStep}>Continue to Trial Offer</NeonButton>
    </div>
  );

  const Screen2 = () => (
    <div className="bg-white text-gray-900 p-8 rounded-[2.5rem] relative overflow-hidden">
      <div className="flex justify-center mb-4">
        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-200">
          Limited Time Trial Offer
        </span>
      </div>
      <h2 className="text-xl font-black text-center mb-2">Unlock 3 Days Premium Access</h2>
      <h1 className="text-5xl font-black text-center mb-6 text-blue-600">₹1</h1>
      
      <div className="space-y-3 mb-6">
        {['All Subjects Unlocked', 'Live Classes Access', 'Reward Points System', 'Doubt Solving Features', 'Premium Practice Tests'].map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check size={14} className="text-emerald-500" strokeWidth={3} />
            <p className="text-xs font-bold text-gray-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white rounded-xl py-3 text-center mb-4 font-bold text-sm flex items-center justify-center gap-2 shadow-lg">
        <Clock size={16} className="text-yellow-400"/>
        Offer expires in: {formatOfferTime(offerTime)}
      </div>

      <NeonButton onClick={nextStep}>Unlock Now for ₹1 <ArrowRight size={16}/></NeonButton>
      <p className="text-[10px] text-center mt-4 font-bold text-gray-400 flex items-center justify-center gap-1">
        <ShieldCheck size={12}/> 100% Secure Payment • Cancel Anytime
      </p>
    </div>
  );

  const Screen3 = () => (
    <div className="p-8">
      <h2 className="text-xl font-black text-center text-white mb-2">Select Payment Method</h2>
      <h3 className="text-center text-[#56CCF2] font-bold mb-6">Pay ₹1 for 3-Day Premium</h3>
      
      <div className="space-y-3 mb-8">
        {[
          { id: 'UPI', icon: <SmartphoneNfc size={20} /> },
          { id: 'Card', icon: <CreditCard size={20} /> },
          { id: 'Net Banking', icon: <Landmark size={20} /> },
          { id: 'Wallet', icon: <Wallet size={20} /> }
        ].map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedPayment(method.id)}
            className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all border-2 font-bold ${
              selectedPayment === method.id 
              ? 'bg-white text-blue-600 border-[#56CCF2] shadow-[0_0_15px_rgba(86,204,242,0.3)]' 
              : 'bg-[#1a2233] text-white border-transparent hover:border-white/10'
            }`}
          >
            <div className={selectedPayment === method.id ? 'text-blue-600' : 'text-gray-400'}>
              {method.icon}
            </div>
            {method.id}
          </button>
        ))}
      </div>

      <NeonButton onClick={nextStep}>Proceed to Pay ₹1</NeonButton>
      <p className="text-[10px] text-center mt-4 font-bold text-gray-500">100% Secure & Encrypted Payment</p>
    </div>
  );

  const Screen4 = () => (
    <div className="bg-white text-gray-900 p-8 rounded-[2.5rem] text-center relative overflow-hidden">
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
         <PartyPopper size={32} className="text-yellow-600" />
      </div>
      <h2 className="text-2xl font-black mb-3">3-Day Premium Trial Activated!</h2>
      <p className="text-xs text-gray-500 font-bold mb-8 px-4 leading-relaxed">
        All subjects of your selected class are unlocked. Enjoy premium learning.
      </p>
      
      <div className="bg-gray-900 text-white rounded-xl py-4 mb-4 font-black tracking-widest shadow-xl">
        Trial ends in: <span className="text-[#56CCF2]">{formatTrialTime(trialTime)}</span>
      </div>
      <p className="text-[10px] text-gray-400 font-bold mb-8">Expiry Date: 3/1/2026, 4:34:36 PM</p>
      
      <NeonButton onClick={nextStep}>Continue <ArrowRight size={18} className="bg-white/20 rounded-full p-0.5"/></NeonButton>
    </div>
  );

  const Screen5 = () => (
    <div className="p-8 text-center flex flex-col items-center">
      <div className="w-28 h-28 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full p-1 mb-6 shadow-2xl shadow-yellow-500/20">
         <div className="w-full h-full rounded-full bg-[#1a2233] flex items-center justify-center">
            <User size={48} className="text-white" />
         </div>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-white mb-3">Congratulations</h2>
      <p className="text-sm text-gray-400 font-medium leading-relaxed px-4">
        Your Account is Ready to Use. You will be redirected to the Home Page in a Few Seconds.
      </p>
      <StepDots current={3} />
    </div>
  );

  const screens = [<Screen0 />, <Screen1 />, <Screen2 />, <Screen3 />, <Screen4 />, <Screen5 />];

  return (
    <div className="min-h-screen w-full bg-[#050810] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Skip Button (Visible on certain steps) */}
      <AnimatePresence>
        {[1, 2, 3].includes(step) && (
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={handleSkip}
            className="absolute top-6 right-6 z-50 text-gray-400 hover:text-white font-bold text-sm transition-colors"
          >
            Skip
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Modal Wrapper */}
      <div className="w-full max-w-[420px] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`w-full rounded-[2.5rem] shadow-2xl border ${
              [2, 4].includes(step) 
              ? 'bg-transparent border-transparent' // White cards handle their own bg
              : 'bg-[#0B101A]/80 backdrop-blur-xl border-white/10' // Dark cards
            }`}
          >
            {screens[step]}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default OnboardingFlow;