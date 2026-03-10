import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Copy,
  Users,
  Coins,
  Lock,
  Check,
  Instagram,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Refer = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const referralCode = "LEARN- XY78Z";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-20 overflow-x-hidden selection:bg-[#3abef9]/30">
{/* 1. TOP HEADER */}
<div className="pt-10 px-6 flex items-center w-full relative">

  {/* Back Button */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => navigate(-1)}
    className="absolute left-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all"
  >
    <ArrowLeft size={24} strokeWidth={2.5} />
  </motion.button>

  {/* Title Center */}
  <h1 className="w-full text-center text-xl font-black tracking-tight uppercase italic text-gray-200">
    Refer & Earn
  </h1>

</div>

      <div className="max-w-2xl mx-auto px-6 mt-8 space-y-10">
        {/* 2. UNIQUE CODE CARD - PREMIUM GLOW */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative border-2 border-[#3abef9] rounded-[45px] bg-[#111721] p-12 flex flex-col items-center text-center shadow-[0_0_60px_rgba(58,190,249,0.15)] overflow-hidden group"
        >
          {/* Animated Background Pulse */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#3abef9]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2F80FF]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <p className="text-gray-400 text-[11px] font-black uppercase tracking-[5px] mb-8 opacity-80">
            Unique Referral Code
          </p>

          <h2 className="text-4xl font-black tracking-[4px] mb-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {referralCode}
          </h2>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#2F80FF] to-[#3abef9] py-5 rounded-[25px] font-black text-xl tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(58,190,249,0.3)] transition-all hover:brightness-110"
          >
            {copied ? <Check size={26} strokeWidth={3} /> : <Copy size={22} />}
            {copied ? "COPIED!" : "COPY CODE"}
          </motion.button>
        </motion.div>

        {/* 3. STEP-BY-STEP FLOW SECTION */}
        <div className="flex items-center justify-between px-2 pt-6 relative">
          {/* Connection Lines (Figma Match) */}
          <div className="absolute top-8 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-[#3abef9]/50 via-gray-800 to-gray-800 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center gap-4 text-center w-1/3 group">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#111721] border-2 border-[#3abef9] shadow-[0_0_20px_rgba(58,190,249,0.3)] group-hover:scale-110 transition-transform relative">
              <Users size={32} className="text-[#3abef9]" />
              <div className="absolute inset-[-6px] border-2 border-[#3abef9] border-t-transparent rounded-full animate-spin-slow opacity-30"></div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-wider text-white">
                Friends joined
              </p>
              <p className="text-[12px] font-bold text-[#3abef9] tracking-widest">
                (2/5)
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-4 text-center w-1/3">
            <div className="flex items-center justify-center -space-x-3">
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center border-4 border-[#0a0d14] z-20 shadow-xl">
                <span className="text-2xl font-black text-white italic">₹</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-[#0a0d14] z-10 shadow-xl">
                <Coins size={24} className="text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-wider text-white">
                Reward Earned
              </p>
              <p className="text-[9px] font-bold text-gray-500 tracking-tight leading-none uppercase">
                1000 Pts / 50 Rs
              </p>
            </div>
          </div>

          {/* Step 3 (Locked State) */}
          <div className="flex flex-col items-center gap-4 text-center w-1/3 opacity-30">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Lock size={32} className="text-gray-500" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-wider">
                Unlock Bonus
              </p>
              <p className="text-[10px] font-bold text-gray-600">(Reach 5%)</p>
            </div>
          </div>
        </div>

        {/* 4. "HOW IT WORKS" GLASS BOX */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="border-2 border-[#3abef9]/20 rounded-[40px] p-10 bg-gradient-to-br from-[#111721] to-transparent backdrop-blur-md"
        >
          <h3 className="text-sm font-black mb-8 tracking-[2px] uppercase text-[#3abef9]">
            How it Works:
          </h3>
          <ul className="space-y-6">
            {[
              { id: "1", text: "Share your referral code" },
              { id: "2", text: "Friends join & start learning" },
              { id: "3", text: "Both earn exciting rewards!" },
            ].map((step, i) => (
              <li key={i} className="flex items-center gap-5 group">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#3abef9]/10 border border-[#3abef9]/30 flex items-center justify-center text-[#3abef9] font-black text-xs">
                  {step.id}
                </span>
                <span className="text-gray-300 font-bold text-base group-hover:text-white transition-colors">
                  {step.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 5. SOCIAL SHARE ACTIONS */}
        <div className="flex flex-col items-center gap-6 pt-4">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[4px]">
            Quick Share Via
          </p>
          <div className="flex justify-center gap-6 w-full">
            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={36} fill="white" className="text-white" />
            </motion.button>

            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(238,42,123,0.3)]"
            >
              <Instagram size={36} className="text-white" />
            </motion.button>

            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#3abef9] rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(58,190,249,0.3)]"
            >
              <Share2 size={32} className="text-white" strokeWidth={3} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Blur Accent */}
      <div className="fixed -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3abef9]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default Refer;
