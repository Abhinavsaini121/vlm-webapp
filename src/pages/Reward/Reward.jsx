import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Reward = () => {
  const navigate = useNavigate();
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // Reward Cards Data
  const rewardCards = [
    {
      id: 1,
      topLabel: "Daily MCQ",
      mainTitle: "Daily MCQ",
      badge: "1100 Coins",
      icon: "https://cdn-icons-png.flaticon.com/512/3407/3407024.png", // Checklist icon
    },
    {
      id: 2,
      topLabel: "Spin & Win",
      mainTitle: "Spin & Win",
      badge: "Spin & Win",
      icon: "https://cdn-icons-png.flaticon.com/512/4603/4603565.png", // Fortune wheel icon
    },
    {
      id: 3,
      topLabel: "Referral",
      mainTitle: "Referral",
      badge: "Gift Points",
      icon: "https://cdn-icons-png.flaticon.com/512/1169/1169950.png", // Gift referral icon
    },
    {
      id: 4,
      topLabel: "Wallet",
      mainTitle: "wallet",
      badge: "Cashback",
      icon: "https://cdn-icons-png.flaticon.com/512/855/855279.png", // Wallet icon
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans flex flex-col items-center py-16 px-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/10"
      >
        <ArrowLeft size={26} />
      </button>
      {/* 1. Header Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-2">
          Your Reward Hub
        </h1>
        <p className="text-gray-400 text-lg font-medium tracking-wide italic">
          Your Primary Dashboard
        </p>
      </motion.div>

      {/* 2. Rewards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-6xl"
      >
        {rewardCards.map((card) => (
          <motion.div
  key={card.id}
  onClick={() => {
    if (card.mainTitle === "Spin & Win") {
      navigate("/spin");
    }
  }}
  variants={cardVariants}
  whileHover={{ y: -8, scale: 1.02 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-br from-[#4cc9f0] to-[#2F80FF] rounded-[40px] p-6 flex flex-col items-center justify-between aspect-square lg:aspect-[4/5] shadow-[0_20px_40px_rgba(76,201,240,0.3)] cursor-pointer group relative overflow-hidden"
>
            {/* Glossy Overlay Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Icon Section with Rings */}
            <div className="relative mt-2">
              {/* Golden/White Ring Decoration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm relative">
                <div className="w-[85%] h-[85%] rounded-full border border-white/10"></div>

                {/* Real Icon Image */}
                <img
                  src={card.icon}
                  alt={card.mainTitle}
                  className="w-12 h-12 sm:w-16 sm:h-16 absolute z-10 drop-shadow-xl"
                />

                {/* Badge on Icon */}
                <div className="absolute -top-1 -right-2 bg-white text-[8px] sm:text-[10px] font-black text-[#2F80FF] px-2 py-0.5 rounded-full shadow-lg border border-white/50 whitespace-nowrap">
                  {card.badge}
                </div>
              </div>
            </div>

            {/* Titles Section */}
            <div className="text-center mb-2">
              <span className="text-[10px] font-black uppercase text-white/70 tracking-tighter mb-1 block">
                {card.topLabel}
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-white">
                {card.mainTitle}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 3. Bottom Decoration (Optional Blur) */}
      <div className="fixed -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default Reward;
