import React, { useState, useEffect } from "react";
import {
  Search,
  SlidersHorizontal,
  Bell,
  Flame,
  Bookmark,
  ChevronRight,
  Sun,
  Moon,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
// --- IMPORT FLOATING NAV ---
import FloatingNav from '../../../components/Bottombar/Bottombar'; 

// --- 1. THEME LOGIC ---
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "light"; 
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    if (theme === "dark") {
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

const StudentDashboard = () => {
  const { theme, toggleTheme } = useTheme();
  // const navigate = useNavigate(); // Uncomment if using router

  // Data for multiple cards
  const courses = [
    {
      title: "Thermodynamics",
      mission: "Mission: Thermodynamics Trial",
      reward: "Reward: 120 XP",
      category: "Heat Mastery Arena",
      coins: "850",
      players: "7,830",
      image: "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2024/01/09162453/thermodynamics-2-1.png",
    },
    {
      title: "Organic Chemistry",
      mission: "Mission: Carbon Bonding",
      reward: "Reward: 150 XP",
      category: "Molecular Lab",
      coins: "920",
      players: "5,120",
      image: "https://i.ytimg.com/vi/B_ketdzJtY8/maxresdefault.jpg",
    },
    {
      title: "Quantum Physics",
      mission: "Mission: Particle Wave Duel",
      reward: "Reward: 200 XP",
      category: "Atomic Universe",
      coins: "1,100",
      players: "3,450",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Calculus III",
      mission: "Mission: Derivative Rush",
      reward: "Reward: 180 XP",
      category: "Maths Dimension",
      coins: "750",
      players: "6,200",
      image: "https://i.ytimg.com/vi/2_21erD-nBg/maxresdefault.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0d14] text-gray-900 dark:text-white font-sans pb-24 transition-colors duration-300">
      
      {/* 1. Top Status Bar (Themed) */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white/80 dark:bg-[#0a0d14]/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-transparent"
      >
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#111721] px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span className="text-xs font-bold text-gray-700 dark:text-white">6 Day Streak</span>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:brightness-110 text-white shadow-sm">
            <span className="bg-yellow-400 w-2 h-2 rounded-sm"></span> Class 12
          </div>
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:brightness-110 text-white shadow-sm">
            💰 1,240
          </div>
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 text-white cursor-pointer hover:brightness-110 shadow-sm">
            💎 12
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 2. Header (Avatar, Theme Toggle & Welcome) */}
        <motion.div variants={itemVariants} className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh"
                alt="Profile"
                className="w-16 h-16 rounded-2xl border-2 border-yellow-500 p-0.5 shadow-md bg-white dark:bg-transparent"
              />
              <div className="absolute -bottom-2 -right-1 bg-yellow-500 text-black text-[10px] font-black px-1.5 rounded-md border-2 border-white dark:border-[#0a0d14]">
                Level 5
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 font-bold text-lg">
                <span className="text-xl">🌟</span> Welcome Back,
              </div>
              <h1 className="text-2xl font-black tracking-tight leading-tight text-gray-900 dark:text-white">
                Explorer Harsh!
              </h1>
              <div className="text-[10px] text-[#3abef9] font-bold mt-1 uppercase tracking-wider">
                320 / 500 XP
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* THEME TOGGLE BUTTON */}
            <motion.button 
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={toggleTheme}
              className="p-3 bg-white dark:bg-[#111721] rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#3abef9] shadow-sm hover:shadow-md transition-all"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="bg-white dark:bg-[#111721] p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
            >
              <Bell className="w-6 h-6 text-[#3abef9]" />
            </motion.button>
          </div>
        </motion.div>

        {/* 3. Search Bar */}
        <motion.div variants={itemVariants} className="mt-6 flex gap-3">
          <div className="relative flex-1 group">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3abef9] transition-colors" />
            <input
              type="text"
              placeholder="Search for missions, courses..."
              className="w-full bg-white dark:bg-[#111721] border border-gray-200 dark:border-[#3abef9] text-gray-900 dark:text-white py-4 pl-12 pr-4 rounded-2xl font-semibold placeholder:text-gray-400 outline-none shadow-sm focus:shadow-lg focus:shadow-blue-500/10 dark:shadow-[0_0_20px_rgba(58,190,249,0.3)] transition-all"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3abef9] p-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all"
          >
            <SlidersHorizontal className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>

        {/* 4. Daily Rewards Card */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 relative overflow-hidden bg-gradient-to-r from-[#3abef9] via-[#4cc9f0] to-[#219ebc] rounded-[32px] p-6 min-h-[180px] cursor-pointer group shadow-xl shadow-blue-500/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-black italic tracking-tighter text-white">
                Daily Rewards Section
              </h2>
              <div className="bg-black/20 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1 border border-white/20">
                ⌛ (2h 14m left)
              </div>
            </div>
            <p className="mt-2 text-sm font-bold text-white/90 max-w-[200px] leading-snug">
              Solve 5 MCQ today and win 50 XP
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-yellow-400 text-black px-6 py-2.5 rounded-xl font-black text-sm shadow-lg border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 transition-all"
            >
              Start Quest
            </motion.button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-6 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </motion.div>

        {/* 5. New Worlds to Unlock */}
        <SectionHeader title="New Worlds to Unlock" />
        <motion.div variants={itemVariants} className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {[
            "Science",
            "Arts & Humanities",
            "Commerce",
            "Maths",
            "Social Science",
          ].map((item, i) => (
            <button
              key={i}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all active:scale-95 ${
                i === 1
                  ? "text-gray-900 dark:text-white border-b-2 border-[#3abef9] dark:border-white"
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        {/* 6. Popular Courses Section */}
        <SectionHeader title="Popular Courses" />
        <motion.div variants={itemVariants} className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
          {["All", "Physics", "Chemistry", "Arts", "Biology", "Maths"].map(
            (tag, i) => (
              <button
                key={i}
                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                  i === 1
                    ? "bg-[#3abef9] text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-[#111721] text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {tag}
              </button>
            ),
          )}
        </motion.div>

        {/* 7. Course Cards Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </motion.div>

        {/* 8. Ask a Teacher Instantly */}
        <SectionHeader title="👩‍🏫 Ask a Teacher Instantly" />
        <motion.div variants={itemVariants} className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2 pb-10">
          {[
            { name: "Jiya", img: "https://i.pravatar.cc/150?u=jiya" },
            { name: "Aman", img: "https://i.pravatar.cc/150?u=aman" },
            { name: "Rahul.J", img: "https://i.pravatar.cc/150?u=rahul" },
            { name: "Manav", img: "https://i.pravatar.cc/150?u=manav" },
            { name: "Sara", img: "https://i.pravatar.cc/150?u=sara" },
            { name: "Mike", img: "https://i.pravatar.cc/150?u=mike" },
          ].map((teacher, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 flex-shrink-0 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={teacher.img}
                  className="w-20 h-20 rounded-[24px] object-cover border-2 border-white dark:border-transparent group-hover:border-[#3abef9] transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:shadow-blue-500/20 group-hover:scale-105"
                  alt={teacher.name}
                />
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-[#0a0d14] rounded-full"></div>
              </div>
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {teacher.name}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* --- ADDED FLOATING NAV HERE --- */}
      <FloatingNav />
      
    </div>
  );
};

// Reusable Section Header Component
const SectionHeader = ({ title }) => (
  <motion.div variants={itemVariants} className="flex items-center justify-between mt-10 mb-5">
    <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">{title}</h3>
    <button className="text-[10px] font-black uppercase flex items-center gap-1 text-gray-400 hover:text-[#3abef9] transition-colors cursor-pointer group">
      SEE ALL{" "}
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

// Course Card Component
const CourseCard = ({
  title,
  mission,
  reward,
  category,
  coins,
  players,
  image,
}) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-[#111721] rounded-[32px] overflow-hidden border border-gray-100 dark:border-[#3abef9] transition-all shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(58,190,249,0.15)] cursor-pointer group"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        alt={title}
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 font-black px-4 py-1.5 text-xs rounded-lg shadow-sm">
        {title}
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest">
          {category}
        </span>
        <span className="text-[10px] font-bold text-[#3abef9] uppercase">
          {reward}
        </span>
        <Bookmark className="w-5 h-5 text-gray-300 dark:text-[#3abef9] fill-none hover:fill-[#3abef9] transition-all cursor-pointer" />
      </div>
      <h4 className="text-lg font-black leading-tight mb-4 text-gray-900 dark:text-white group-hover:text-[#3abef9] transition-colors">
        {mission}
      </h4>
      <div className="flex items-center gap-5 text-xs font-bold text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="text-base">🪙</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-500">{coins} Coins</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-base text-[#3abef9]">👥</span>{" "}
          <span>{players} Adventurers</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default StudentDashboard;