import React, { useState, useEffect } from "react";
import { ArrowLeft, ChevronDown, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Liveteacher = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTime, setSearchTime] = useState(20);

  // States for Inputs to handle validation
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [selections, setSelections] = useState({
    stream: "",
    subject: "",
    language: "",
    gender: "",
    state: "",
  });

  const optionsData = {
    stream: ["Science", "Commerce", "Arts", "Vocational"],
    subject: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    language: ["English", "Hindi", "Marathi", "Sanskrit"],
    gender: ["No Preference", "Male", "Female"],
    state: ["Maharashtra", "Delhi", "Karnataka", "Gujarat", "Tamil Nadu"],
  };

  // Timer logic for popup
  useEffect(() => {
    let interval;
    if (showPopup && searchTime > 0) {
      interval = setInterval(() => {
        setSearchTime((prev) => prev - 1);
      }, 1000);
    } else if (searchTime === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showPopup, searchTime]);

  const handleSelect = (field, value) => {
    setSelections({ ...selections, [field]: value });
    setOpenDropdown(null);
  };

  // --- VALIDATION LOGIC ---
  const handleContinue = () => {
    const isSelectionsComplete = Object.values(selections).every(
      (val) => val !== "",
    );
    const isInputsComplete = title.trim() !== "" && description.trim() !== "";

    if (isSelectionsComplete && isInputsComplete) {
      setSearchTime(20); // Reset timer
      setShowPopup(true);
    } else {
      alert("Opps! Please fill all fields before continuing. 😊");
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-32 selection:bg-[#3abef9]/30 relative overflow-x-hidden">
      
      {/* 1. Header Area - Fully Responsive */}
      <div className="pt-8 sm:pt-10 px-4 sm:px-10 flex items-center justify-between w-full relative mb-6 sm:mb-8">
        {/* Extreme Left Back Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-white/20 transition-all z-20"
        >
          <ArrowLeft size={22} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
        </motion.button>

        {/* Centered Heading with responsive font and padding to avoid overlap */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-8 sm:pt-10 px-12">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl shrink-0">🧙‍♂️</span>
            <h1 className="text-sm sm:text-xl font-black tracking-tight leading-tight text-center">
              Ask a Teacher Instantly
            </h1>
          </div>
        </div>

        {/* Right Spacer */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 opacity-0"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 space-y-5"
      >
        {/* Dropdowns Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          {Object.keys(optionsData).map((key) => (
            <CustomDropdown
              key={key}
              label={
                key === "stream"
                  ? "Select Stream"
                  : key === "subject"
                    ? "Select Subject"
                    : key.charAt(0).toUpperCase() + key.slice(1) + " Preference"
              }
              field={key}
              options={optionsData[key]}
              selected={selections[key]}
              isOpen={openDropdown === key}
              toggle={() => setOpenDropdown(openDropdown === key ? null : key)}
              onSelect={handleSelect}
            />
          ))}
        </motion.div>

        {/* Title Input */}
        <motion.div variants={itemVariants} className="space-y-2 pt-2">
          <h3 className="text-base sm:text-lg font-black ml-1 tracking-tight text-gray-200">
            Title
          </h3>
          <div className="border-2 border-[#3abef9] rounded-xl bg-[#111721] overflow-hidden focus-within:ring-2 ring-[#3abef9]/30 transition-all shadow-sm">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Thermodynamics"
              className="w-full bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm font-bold placeholder:text-gray-600 focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Description Area */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h3 className="text-base sm:text-lg font-black ml-1 tracking-tight text-gray-200">
            Description
          </h3>
          <div className="border-2 border-[#3abef9] rounded-xl bg-[#111721] min-h-[150px] sm:min-h-[180px] p-4 sm:p-5 transition-all shadow-sm">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explanation of filler concepts with practical insights."
              className="w-full bg-transparent h-full text-sm font-bold placeholder:text-gray-600 focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#2F80FF] to-[#3abef9] py-4 sm:py-5 rounded-full font-black text-lg sm:text-xl text-white shadow-[0_10px_30px_rgba(58,190,249,0.3)] hover:brightness-110 active:scale-95 transition-all"
          >
            Continue
          </button>
        </motion.div>
      </motion.div>

      {/* --- PREMIUM CONNECTING POPUP - FULLY RESPONSIVE --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0d14]/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[350px] sm:max-w-sm flex flex-col items-center"
            >
              {/* Modal Header Responsive */}
              <div className="w-full flex items-center justify-center relative mb-8 sm:mb-12">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-center">
                  Connecting to teacher
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute -right-2 top-0 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Main Card Responsive */}
              <div className="w-full bg-gradient-to-br from-[#244b7a] via-[#162d4d] to-[#0a0d14] rounded-[40px] sm:rounded-[50px] p-8 sm:p-10 flex flex-col items-center border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <div className="w-20 sm:w-28 h-5 sm:h-6 bg-[#22c55e] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] mb-8 sm:mb-10"></div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-6 sm:mb-8 text-center">
                  Finding Teacher
                </h3>
                <div className="bg-[#3abef9] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg border border-white/10">
                  <span className="text-white font-black text-xs sm:text-sm tracking-wide whitespace-nowrap">
                    Searching time 00:
                    {searchTime < 10 ? `0${searchTime}` : searchTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Decorative Glow Responsive */}
      <div className="fixed -bottom-40 -left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#3abef9]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
};

// Custom Dropdown Component
const CustomDropdown = ({
  label,
  field,
  options,
  selected,
  isOpen,
  toggle,
  onSelect,
}) => {
  return (
    <div className="relative">
      <div
        onClick={toggle}
        className={`border-2 rounded-xl bg-[#111721] flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer transition-all ${
          isOpen ? "border-white shadow-lg" : "border-[#3abef9]"
        }`}
      >
        <span
          className={`text-xs sm:text-sm font-bold ${selected ? "text-white" : "text-gray-500"}`}
        >
          {selected || label}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} className="text-[#3abef9] sm:w-5 sm:h-5" strokeWidth={3} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#1a2333] border border-white/10 rounded-2xl mt-2 overflow-hidden z-[100] shadow-2xl"
          >
            <div className="max-h-52 sm:max-h-60 overflow-y-auto no-scrollbar py-2">
              {options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => onSelect(field, opt)}
                  className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 hover:bg-[#3abef9] hover:text-white transition-all cursor-pointer group"
                >
                  <span className="text-xs sm:text-sm font-bold">{opt}</span>
                  {selected === opt && (
                    <Check
                      size={14}
                      className="text-[#3abef9] group-hover:text-white sm:w-4 sm:h-4"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Liveteacher;