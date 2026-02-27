import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Liveteacher = () => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // States to store selected values
  const [selections, setSelections] = useState({
    stream: "",
    subject: "",
    language: "",
    gender: "",
    state: "",
  });

  // Options Data
  const optionsData = {
    stream: ["Science", "Commerce", "Arts", "Vocational"],
    subject: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
    language: ["English", "Hindi", "Marathi", "Sanskrit"],
    gender: ["No Preference", "Male", "Female"],
    state: ["Maharashtra", "Delhi", "Karnataka", "Gujarat", "Tamil Nadu"],
  };

  const handleSelect = (field, value) => {
    setSelections({ ...selections, [field]: value });
    setOpenDropdown(null); // Close after selection
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-32 selection:bg-[#3abef9]/30">
      {/* 1. Header */}
      <div className="flex items-center gap-4 px-6 pt-10 pb-8 max-w-2xl mx-auto">
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
          <ArrowLeft size={30} strokeWidth={2.5} />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl">🧙‍♂️</span>
          <h1 className="text-xl font-black tracking-tight leading-tight">
            Ask a Teacher Instantly"
          </h1>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="max-w-2xl mx-auto px-6 space-y-5"
      >
        {/* 2. Functional Dropdowns */}
        <motion.div variants={itemVariants} className="space-y-4">
          <CustomDropdown
            label="Select Stream"
            field="stream"
            options={optionsData.stream}
            selected={selections.stream}
            isOpen={openDropdown === "stream"}
            toggle={() =>
              setOpenDropdown(openDropdown === "stream" ? null : "stream")
            }
            onSelect={handleSelect}
          />
          <CustomDropdown
            label="Select Subject"
            field="subject"
            options={optionsData.subject}
            selected={selections.subject}
            isOpen={openDropdown === "subject"}
            toggle={() =>
              setOpenDropdown(openDropdown === "subject" ? null : "subject")
            }
            onSelect={handleSelect}
          />
          <CustomDropdown
            label="Language"
            field="language"
            options={optionsData.language}
            selected={selections.language}
            isOpen={openDropdown === "language"}
            toggle={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
            onSelect={handleSelect}
          />
          <CustomDropdown
            label="Gender Preference"
            field="gender"
            options={optionsData.gender}
            selected={selections.gender}
            isOpen={openDropdown === "gender"}
            toggle={() =>
              setOpenDropdown(openDropdown === "gender" ? null : "gender")
            }
            onSelect={handleSelect}
          />
          <CustomDropdown
            label="State Preference"
            field="state"
            options={optionsData.state}
            selected={selections.state}
            isOpen={openDropdown === "state"}
            toggle={() =>
              setOpenDropdown(openDropdown === "state" ? null : "state")
            }
            onSelect={handleSelect}
          />
        </motion.div>

        {/* 3. Title Input */}
        <motion.div variants={itemVariants} className="space-y-2 pt-2">
          <h3 className="text-lg font-black ml-1 tracking-tight">Title</h3>
          <div className="border-2 border-[#3abef9] rounded-xl bg-[#111721] overflow-hidden focus-within:shadow-[0_0_15px_rgba(58,190,249,0.3)] transition-all">
            <input
              type="text"
              placeholder="Thermodynamics"
              className="w-full bg-transparent px-5 py-4 text-sm font-bold placeholder:text-gray-600 focus:outline-none"
            />
          </div>
        </motion.div>

        {/* 4. Description Area */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h3 className="text-lg font-black ml-1 tracking-tight">
            Description
          </h3>
          <div className="border-2 border-[#3abef9] rounded-xl bg-[#111721] min-h-[160px] p-5 focus-within:shadow-[0_0_15px_rgba(58,190,249,0.3)] transition-all">
            <textarea
              placeholder="Explanation of filler concepts with practical insights."
              className="w-full bg-transparent h-full text-sm font-bold placeholder:text-gray-600 focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </motion.div>

        {/* 5. Submit Button */}
        <motion.div variants={itemVariants} className="pt-6">
          <button className="w-full bg-gradient-to-r from-[#2F80FF] to-[#3abef9] py-5 rounded-full font-black text-xl text-white shadow-[0_10px_30px_rgba(58,190,249,0.3)] hover:brightness-110 active:scale-95 transition-all">
            Continue
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- Custom Reusable Dropdown Component ---
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
      {/* Selection Box */}
      <div
        onClick={toggle}
        className={`border-2 rounded-xl bg-[#111721] flex items-center justify-between px-5 py-4 cursor-pointer transition-all ${
          isOpen ? "border-white shadow-lg" : "border-[#3abef9]"
        }`}
      >
        <span
          className={`text-sm font-bold ${selected ? "text-white" : "text-gray-500"}`}
        >
          {selected || label}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} className="text-[#3abef9]" strokeWidth={3} />
        </motion.div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#1a2333] border border-white/10 rounded-2xl mt-2 overflow-hidden z-[100] shadow-2xl"
          >
            <div className="max-h-60 overflow-y-auto no-scrollbar py-2">
              {options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() => onSelect(field, opt)}
                  className="flex items-center justify-between px-6 py-4 hover:bg-[#3abef9] hover:text-white transition-all cursor-pointer group"
                >
                  <span className="text-sm font-bold">{opt}</span>
                  {selected === opt && (
                    <Check
                      size={16}
                      className="text-[#3abef9] group-hover:text-white"
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
