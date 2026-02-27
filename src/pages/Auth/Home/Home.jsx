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
  Star,
  Gift,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingNav from "../../../components/Bottombar/Bottombar";

// --- 1. THEME LOGIC ---
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
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
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const StudentDashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const courses = [
    {
      title: "Thermodynamics",
      subject: "Physics",
      price: "599/-",
      rating: "4.2",
      students: "7830 Std",
      image:
        "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2024/01/09162453/thermodynamics-2-1.png",
    },
    {
      title: "Chemical Kinetics",
      subject: "Chemistry",
      price: "599/-",
      rating: "4.5",
      students: "12k Std",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRReA1LZKGWmRAYcE0gi9e-gBYyD7I7HL8w&s",
    },

    {
      title: "Physics",
      subject: "Physics",
      price: "599/-",
      rating: "4.5",
      students: "12k Std",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240502160218/Physics.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0d14] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      {/* 1. Top Status Bar - Figma Styled */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white/80 dark:bg-[#0a0d14]/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-transparent"
      >
        <div className="bg-gray-100 dark:bg-[#3abef9]/20 p-2 rounded-lg border border-gray-200 dark:border-[#3abef9]/30">
          <Gift className="w-5 h-5 text-[#3abef9]" />
        </div>

        <div className="flex gap-2">
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 text-white shadow-sm">
            <span className="bg-yellow-400 w-2 h-2 rounded-sm"></span> Class 12
          </div>
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 text-white shadow-sm">
            💰 1,240
          </div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 2. Header & Premium Bar */}
        <motion.div variants={itemVariants} className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh"
                  alt="Profile"
                  className="w-16 h-16 rounded-2xl border-2 border-yellow-500 p-0.5 shadow-md bg-white dark:bg-transparent"
                />
                <div className="absolute -bottom-2 -right-1 bg-yellow-500 text-black text-[10px] font-black px-1.5 rounded-md border-2 border-white dark:border-[#0a0d14]">
                  Level 5
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 font-bold text-lg leading-none">
                  <span className="text-xl">🌟</span> Welcome Back,
                </div>
                <h1 className="text-2xl font-black tracking-tight leading-tight">
                  Explorer Harsh!
                </h1>
                <div className="text-[10px] text-[#3abef9] font-bold mt-1 uppercase">
                  320 / 500 Points
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 bg-white dark:bg-[#111721] rounded-full border border-gray-200 dark:border-gray-800"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="bg-white dark:bg-[#111721] p-3 rounded-full border border-gray-200 dark:border-gray-800">
                <Bell className="w-6 h-6 text-[#3abef9]" />
              </button>
            </div>
          </div>

          {/* Premium Trail Bar */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-5 bg-[#b45309] rounded-full flex items-center justify-between px-4 py-2 border border-yellow-600/30 shadow-lg shadow-orange-900/10"
          >
            <span className="bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
              Premium Trail
            </span>
            <span className="text-[10px] font-bold text-yellow-100 uppercase tracking-wider">
              Expires in : 2d : 14h : 32m
            </span>
          </motion.div>
        </motion.div>

        {/* 3. Search Bar */}
        <motion.div variants={itemVariants} className="mt-6 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for.."
              className="w-full bg-white dark:bg-[#111721] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-4 pl-12 pr-4 rounded-2xl font-semibold outline-none focus:border-[#3abef9] transition-all shadow-sm"
            />
          </div>
          <button className="bg-[#3abef9] p-4 rounded-2xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            <SlidersHorizontal className="w-6 h-6 text-white" />
          </button>
        </motion.div>

        {/* 4. Daily Rewards Card */}
        <motion.div
          variants={itemVariants}
          className="mt-8 relative overflow-hidden bg-gradient-to-r from-[#3abef9] via-[#4cc9f0] to-[#219ebc] rounded-[32px] p-6 min-h-[180px] group shadow-xl shadow-blue-500/10 cursor-pointer"
        >
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-black italic tracking-tighter text-white">
                Daily Rewards Section
              </h2>
              <div className="bg-black/20 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1 border border-white/20 italic">
                ⌛ (2h 14m left)
              </div>
            </div>
            <p className="mt-2 text-sm font-bold text-white max-w-[200px]">
              Solve 5 MCQ today and win 50 XP
            </p>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-xl font-black text-xs shadow-lg active:scale-95 transition-all">
              Start Quest
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 2 ? "bg-white w-5" : "bg-white/40"}`}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* 5. Popular Courses Filter */}
        <SectionHeader title="Popular Courses" />
        <motion.div
          variants={itemVariants}
          className="flex gap-3 overflow-x-auto no-scrollbar pb-4"
        >
          {["All", "Physics", "Chemistry", "Maths", "Biology", "Arts"].map(
            (tag, i) => (
              <button
                key={i}
                className={`px-8 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${i === 1 ? "bg-[#3abef9] text-white shadow-lg shadow-blue-500/30" : "bg-white dark:bg-[#111721] text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
              >
                {tag}
              </button>
            ),
          )}
        </motion.div>

        {/* 6. Course Cards Horizontal */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => navigate("/Popularcourse")}
              className="w-[280px] flex-shrink-0 bg-white dark:bg-[#111721] rounded-[32px] overflow-hidden border border-gray-100 dark:border-gray-800 group cursor-pointer shadow-sm hover:border-[#3abef9]/50 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={course.title}
                />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 text-black font-black px-3 py-1 text-[10px] shadow-lg"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                      {course.subject}
                    </span>
                    <h4 className="text-lg font-black leading-tight text-gray-900 dark:text-white mt-1 group-hover:text-[#3abef9] transition-colors">
                      {course.title}
                    </h4>
                  </div>
                  <Bookmark size={18} className="text-[#3abef9]" />
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-[#3abef9] font-black text-xl italic tracking-tighter">
                    {course.price}
                  </span>
                  <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                    <Star
                      size={12}
                      fill="#fbbf24"
                      className="text-yellow-400"
                    />{" "}
                    {course.rating}
                  </div>
                  <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
                  <span className="text-[10px] font-bold text-gray-400">
                    {course.students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 7. Live Teachers Section - FIGMA MATCH */}
        <motion.div variants={itemVariants} className="mt-10">
          <div className="flex items-center gap-2 mb-5 px-1">
            <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_12px_rgba(220,38,38,0.7)]"></div>
            <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
              Live Teachers
            </h3>
          </div>

          <div className="flex flex-wrap gap-6 pb-6">
            {[
              "https://classplusapp.com/growth/wp-content/uploads/2023/05/How-To-Become-An-Online-Tutor-Know-all-about-it-1024x684.jpg",
              "https://media.istockphoto.com/id/1312294513/photo/shot-of-a-woman-in-sari-sitting-on-a-rocking-chair-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=-L7fn5H6TtgEAyD6q3M_Z0l15BKUiQJ1XmIQYctb0sM=",
              "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1151967132.jpg?itok=enPabslE",
              "https://images.picxy.com/cache/2020/10/10/393f1f2970e85aaa997de485cc5694ea.jpg",
              "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1151967132.jpg?itok=enPabslE",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7",
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-full sm:w-[48%] lg:w-[31%] aspect-video rounded-[28px] overflow-hidden border border-white/10 shadow-2xl cursor-pointer group"
              >
                {/* Image */}
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="live session"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Live Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg animate-pulse">
                  LIVE
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-sm font-semibold tracking-wide">
                    Live Session
                  </h4>
                  <p className="text-xs opacity-80">Join Now</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 8. Ask a Teacher Instantly CTA - FIGMA MATCH */}
        <motion.div variants={itemVariants} className="mt-6 mb-12">
          <div className="bg-white dark:bg-[#111721] rounded-[40px] p-10 border border-gray-200 dark:border-white/5 flex flex-col items-center text-center gap-8 shadow-2xl relative overflow-hidden group transition-all hover:border-[#3abef9]/20">
            {/* Visual Flair */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#3abef9]/5 rounded-full blur-3xl group-hover:bg-[#3abef9]/10 transition-all duration-700"></div>

            <div className="flex items-center justify-center gap-3 text-2xl font-black tracking-tight">
              <span className="text-3xl">🧙‍♂️</span>
              <span className="text-gray-900 dark:text-white leading-tight">
                Ask a Teacher Instantly"
              </span>
            </div>

            <button
              onClick={() => navigate("/Liveteacher")}
              className="w-full sm:max-w-md bg-gradient-to-r from-[#3abef9] to-[#2F80FF] py-5 rounded-[22px] font-black text-xl text-white shadow-[0_10px_35px_rgba(58,190,249,0.3)] active:scale-95 transition-all hover:brightness-110 tracking-tight"
            >
              Search Live Teacher
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* --- FLOATING NAV --- */}
      <FloatingNav />
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-center justify-between mt-10 mb-5"
  >
    <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
      {title}
    </h3>
    <button className="text-[10px] font-black uppercase flex items-center gap-1 text-gray-400 hover:text-[#3abef9] transition-colors cursor-pointer group">
      SEE ALL{" "}
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

export default StudentDashboard;
