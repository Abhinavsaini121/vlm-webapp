import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Wallet as WalletIcon, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownLeft 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

  // Mock Transactions Data
  const transactions = [
    {
      id: 1,
      title: "Reward Converted",
      date: "TODAY",
      amount: "+5,000",
      type: "credit",
    },
    {
      id: 2,
      title: "Course: Physics Masterclass",
      date: "SEP 28, 2023",
      amount: "-200",
      type: "debit",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-10 selection:bg-[#3abef9]/30 overflow-x-hidden">
      
     <div className="pt-10 px-6 sm:px-10 flex items-center justify-between w-full relative">
  
  {/* Back Button */}
  <motion.button 
    whileTap={{ scale: 0.9 }}
    onClick={() => navigate(-1)}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-white/20 transition-all"
  >
    <ArrowLeft size={24} strokeWidth={2.5} />
  </motion.button>

  {/* Center Wallet Title */}
  <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
    <WalletIcon size={22} className="text-[#3abef9]" />
    <span className="text-lg font-black">Wallet</span>
  </div>

  {/* Right Side Spacer */}
  <div className="w-12 h-12"></div>

</div>

      {/* Main Content Container (Kept max-w-2xl for better readability on desktop) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-6 mt-10 space-y-8"
      >
        
        {/* 2. Main Balance Card */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#3abef9]/20 rounded-[45px] p-10 flex flex-col items-center border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#3abef9]/10 rounded-full blur-[80px]"></div>
          
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6 backdrop-blur-md">
            <WalletIcon size={32} className="text-[#3abef9]" />
          </div>

          <h2 className="text-6xl font-black tracking-tighter text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            ₹850.00
          </h2>
          <p className="text-gray-400 text-xs font-black uppercase tracking-[4px] mt-4 opacity-70 text-center">
            Available Balance
          </p>
        </motion.div>

        {/* 3. Info Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#111721] rounded-[30px] p-6 border border-white/5 shadow-xl"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center px-2">
               <span className="text-sm font-bold text-gray-300">Earned Reward :</span>
               <span className="text-sm font-black text-[#3abef9]">1240 Points</span>
            </div>
            <div className="h-[1px] bg-white/5 w-full"></div>
            <div className="px-2">
               <p className="text-xs font-bold text-gray-400 leading-relaxed">
                 <span className="text-white font-black">Usage info :</span> Wallet balance can be used for up to 30% of course fees
               </p>
            </div>
          </div>
        </motion.div>

        {/* 4. Action Buttons */}
        <motion.div variants={itemVariants} className="space-y-4 pt-2">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#3abef9] to-[#2F80FF] py-6 rounded-[25px] font-black text-lg tracking-wider uppercase shadow-[0_15px_30px_rgba(58,190,249,0.3)]"
          >
            Use for Course Purchase
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#111721] border border-[#3abef9]/30 py-6 rounded-[25px] font-black text-sm tracking-[2px] uppercase text-[#3abef9] hover:bg-[#1a2333] transition-all"
          >
            Emergency Advance Recharge
          </motion.button>
        </motion.div>

        {/* 5. Transactions Section */}
        <motion.div variants={itemVariants} className="space-y-6 pt-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[3px]">Recent Transactions</h3>
            <button 
  onClick={() => navigate("/Viewall")}
  className="text-[10px] font-black text-[#3abef9] uppercase flex items-center gap-1 hover:underline"
>
  View All <ChevronRight size={14} />
</button>
          </div>

          <div className="space-y-4 pb-10">
            {transactions.map((tx) => (
              <motion.div 
                key={tx.id}
                whileHover={{ x: 5 }}
                className="bg-[#111721] rounded-[28px] p-5 flex items-center justify-between border border-white/5 hover:border-[#3abef9]/20 transition-all shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${tx.type === 'credit' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                    {tx.type === 'credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight">{tx.title}</h4>
                    <p className="text-[9px] font-bold text-gray-500 mt-0.5">{tx.date}</p>
                  </div>
                </div>
                <span className={`text-lg font-black tracking-tighter ${tx.type === 'credit' ? 'text-[#22c55e]' : 'text-red-500'}`}>
                  {tx.amount}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Decorative Glow */}
      <div className="fixed -bottom-40 -left-40 w-[500px] h-[500px] bg-[#3abef9]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default Wallet;