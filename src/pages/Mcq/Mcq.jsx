import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowLeft,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Mcq = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("C");
  const [timeLeft, setTimeLeft] = useState(30);
  const [showModal, setShowModal] = useState(false);

  const totalTime = 30;

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowModal(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleRestart = () => {
    setTimeLeft(30);
    setSelectedOption(null);
    setShowModal(false);
  };

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (timeLeft / totalTime) * circumference;

  const options = [
    { id: "A", text: "Dehradun" },
    { id: "B", text: "Mumbai" },
    { id: "C", text: "Delhi" },
    { id: "D", text: "Hydrabad" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans p-4 sm:p-8 flex flex-col items-center overflow-hidden relative">

      {/* 🔹 BACK BUTTON TOP LEFT */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 w-16 h-16 rounded-full bg-[#4b4f55] flex items-center justify-center shadow-lg z-50"
      >
        <ArrowLeft size={28} color="white" />
      </motion.button>

      {/* 🔹 COINS RIGHT SIDE */}
      <div className="absolute top-8 right-8">
        <div className="bg-gradient-to-r from-[#3abef9] to-[#2F80FF] px-6 py-2.5 rounded-2xl text-xs font-black shadow-[0_0_20px_rgba(58,190,249,0.3)]">
          💰 1,240 COINS
        </div>
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-lg mt-24 bg-[#111721] rounded-[50px] overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative"
      >
        {/* HEADER */}
        <div className="bg-gradient-to-b from-[#3abef9]/40 via-[#3abef9]/5 to-transparent pt-12 pb-10 flex flex-col items-center px-6">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter mb-1 uppercase italic">
            Daily MCQ Challenge
          </h1>

          <p className="text-[10px] font-black opacity-60 tracking-[4px] mb-12 uppercase">
            Today's Topic: Geography
          </p>

          {/* TIMER */}
          <div className="relative w-44 h-44 flex items-center justify-center">

            <div
              className={`absolute inset-4 rounded-full blur-2xl transition-colors duration-500 ${
                timeLeft < 6 ? "bg-red-500/20" : "bg-[#3abef9]/10"
              }`}
            ></div>

            <svg
              className="absolute w-full h-full -rotate-90 overflow-visible"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="10"
                fill="transparent"
              />

              <motion.circle
                cx="80"
                cy="80"
                r={radius}
                stroke={timeLeft < 6 ? "#ef4444" : "#3abef9"}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: "linear" }}
                strokeLinecap="round"
              />
            </svg>

            <div className="relative flex flex-col items-center justify-center z-10">
              <motion.span
                key={timeLeft}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-4xl font-black ${
                  timeLeft < 6 ? "text-red-500" : "text-white"
                }`}
              >
                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </motion.span>

              <span className="text-[10px] font-black text-gray-500 tracking-widest mt-[-4px]">
                SECONDS
              </span>
            </div>
          </div>
        </div>

        {/* QUESTION */}
        <div className="px-6 sm:px-10 pb-12 flex flex-col items-center">

          <div className="h-[1px] bg-white/5 w-full mb-10"></div>

          <h2 className="text-xl sm:text-2xl font-black text-center mb-10">
            What is the capital of India?
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            {options.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedOption(option.id)}
                className={`relative px-4 py-5 rounded-[22px] border-2 flex items-center gap-3 transition-all duration-300 ${
                  selectedOption === option.id
                    ? "border-[#22c55e] bg-[#22c55e]/10"
                    : "border-gray-800 bg-[#1a212e]/50"
                }`}
              >
                <span className="text-[10px] font-black text-gray-500">
                  {option.id}
                </span>

                <span className="text-sm font-bold">{option.text}</span>

                {selectedOption === option.id && (
                  <CheckCircle2
                    size={18}
                    className="text-[#22c55e] ml-auto"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* POPUP */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0d14]/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-sm bg-[#111721] rounded-[40px] border border-white/10 p-10 flex flex-col items-center text-center"
            >
              <AlertCircle size={60} className="text-red-500 mb-6" />

              <h3 className="text-3xl font-black mb-2">
                TIME'S UP!
              </h3>

              <div className="w-full space-y-3 mt-6">

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRestart}
                  className="w-full bg-[#3abef9] py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} />
                  RESTART QUESTION
                </motion.button>

                <button
                  onClick={() => navigate(-1)}
                  className="w-full bg-white/5 py-4 rounded-2xl font-black text-sm text-gray-400"
                >
                  EXIT CHALLENGE
                </button>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mcq;