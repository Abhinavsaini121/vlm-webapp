import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Search,
  MoreVertical,
  Eye,
  Zap,
  Clock,
  AlertCircle,
  Plus,
  Play,
  Video,
  Radio,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FloatingNav from "../../../../components/Bottombar/Bottombar";
import { useTheme } from "../../../../hooks/useTheme";

const YourVideos = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("SHORTS");
  const [isFabOpen, setIsFabOpen] = useState(false);

  // Prevent scrolling when FAB menu is open
  useEffect(() => {
    if (isFabOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isFabOpen]);

  // Dummy Data
  const shortsData = [
    {
      id: 1,
      title: "How to solve integration in 10s",
      views: "12.4k",
      status: "LIVE",
      thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
      glow: "dark:shadow-[0_0_20px_rgba(65,234,124,0.3)] border-l-4 border-emerald-500 dark:border-[#41ea7c]",
    },
    {
      id: 2,
      title: "Physics: Why is sky blue?",
      views: "0",
      status: "PENDING",
      thumbnailUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
      glow: "dark:shadow-[0_0_15px_rgba(245,158,11,0.15)] border-l-4 border-amber-400",
    },
    {
      id: 3,
      title: "Motivation for JEE Aspirants",
      views: "0",
      status: "ISSUE",
      thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      glow: "dark:shadow-[0_0_15px_rgba(239,68,68,0.15)] border-l-4 border-red-500",
    },
  ];

  const longData = [
    {
      id: 4,
      title: "Complete Calculus: Chapter 1",
      views: "4.2k",
      status: "LIVE",
      thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
      glow: "dark:shadow-[0_0_20px_rgba(65,234,124,0.3)] border-l-4 border-emerald-500 dark:border-[#41ea7c]",
    },
    {
      id: 5,
      title: "Organic Chemistry Deep Dive",
      views: "1.1k",
      status: "LIVE",
      thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
      glow: "dark:shadow-[0_0_20px_rgba(65,234,124,0.3)] border-l-4 border-emerald-500 dark:border-[#41ea7c]",
    },
  ];

  const currentData = activeTab === "SHORTS" ? shortsData : longData;

  // Render Status Badge Logic
  const renderBadge = (status) => {
    switch (status) {
      case "LIVE":
        return (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded uppercase text-[9px] font-black tracking-widest mt-2 w-max bg-emerald-100 text-emerald-700 dark:bg-[#41ea7c]/10 dark:text-[#41ea7c]">
            <Zap size={10} className="fill-current" /> LIVE
          </div>
        );
      case "PENDING":
        return (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded uppercase text-[9px] font-black tracking-widest mt-2 w-max bg-amber-100 text-amber-700 dark:bg-[#F59E0B]/10 dark:text-[#F59E0B]">
            <Clock size={10} /> PENDING
          </div>
        );
      case "ISSUE":
        return (
          <div className="flex items-center gap-1 px-2 py-0.5 rounded uppercase text-[9px] font-black tracking-widest mt-2 w-max bg-red-100 text-red-700 dark:bg-[#EF4444]/10 dark:text-[#EF4444]">
            <AlertCircle size={10} /> ISSUE
          </div>
        );
      default:
        return null;
    }
  };

  // Dummy Action Handlers
  const handleFabAction = (route) => {
    setIsFabOpen(false);
    navigate(route);
  };

  return (
    // Replaced max-width container to allow full-width desktop rendering just like WalletHome
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white pb-32 transition-colors duration-300 relative">
      
      {/* --- HEADER --- */}
      <header className="flex justify-between items-center p-6 sticky top-0 z-30 bg-gray-50/80 dark:bg-[#0b0f1a]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-black italic tracking-wide uppercase">
            Your Videos
          </h1>
        </div>
        <button 
          onClick={() => navigate("/search")} // Dummy Search Route
          className="p-2 bg-white dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Search size={20} />
        </button>
      </header>

      {/* --- TABS --- */}
      <div className="px-6 mb-6">
        <div className="bg-white dark:bg-[#1a2233] p-1.5 rounded-[20px] flex shadow-sm dark:shadow-none border border-gray-200 dark:border-white/5">
          {["SHORTS", "LONG-FORM"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-[16px] text-[11px] font-black tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? "bg-purple-600 dark:bg-[#B026FF] shadow-md dark:shadow-[0_0_20px_rgba(176,38,255,0.4)] text-white"
                  : "text-gray-500 dark:text-[#8B95A5] hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- VIDEO LIST --- */}
      <div className="px-6 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {currentData.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => navigate(`/video/${video.id}`)} // Dummy Video Player Route
                className="bg-white dark:bg-[#111827] p-3 rounded-[24px] flex items-center gap-4 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden shrink-0 rounded-[18px] bg-gray-200 dark:bg-gray-800 ${
                    activeTab === "SHORTS" ? "w-[75px] h-[100px]" : "w-[120px] h-[80px]"
                  } ${video.glow}`}
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90 dark:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={20} className="text-white fill-white/80" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-gray-900 dark:text-white font-bold text-[14px] leading-snug line-clamp-2 pr-2">
                      {video.title}
                    </h3>
                    <button 
                      onClick={(e) => { e.stopPropagation(); /* Open Dummy Menu */ }} 
                      className="text-gray-400 dark:text-[#6B7280] hover:text-gray-900 dark:hover:text-white mt-0.5 shrink-0"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-[#8B95A5] text-[11px] font-medium mt-1.5">
                    <Eye size={12} />
                    <span>{video.views}</span>
                  </div>

                  {renderBadge(video.status)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- FAB OVERLAY BACKDROP --- */}
      <AnimatePresence>
        {isFabOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/60 dark:bg-[#0B101A]/80 backdrop-blur-sm z-40"
            onClick={() => setIsFabOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* --- FLOATING ACTION BUTTON --- */}
      {/* Positioned fixed strictly to bottom-right corner for all responsive layouts */}
      <div className="fixed bottom-28 right-6 md:bottom-12 md:right-12 z-50 flex flex-col items-end gap-4">
        
        {/* Menu Items */}
        <AnimatePresence>
          {isFabOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="flex flex-col items-end gap-5 mb-2"
            >
              {/* Create Short */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                onClick={() => handleFabAction('/create/short')}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <span className="text-white text-[11px] font-black tracking-widest uppercase bg-gray-900/80 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  Create Short
                </span>
                <button className="w-12 h-12 bg-purple-600 dark:bg-[#B026FF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(176,38,255,0.4)] group-hover:scale-105 transition-transform">
                  <Zap size={20} className="text-white fill-white" />
                </button>
              </motion.div>

              {/* Long Video */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                onClick={() => handleFabAction('/upload')}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <span className="text-white text-[11px] font-black tracking-widest uppercase bg-gray-900/80 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  Long Video
                </span>
                <button className="w-12 h-12 bg-blue-500 dark:bg-[#3B82F6] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform">
                  <Video size={20} className="text-white" />
                </button>
              </motion.div>

              {/* Go Live */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                onClick={() => handleFabAction('/live/setup')}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <span className="text-white text-[11px] font-black tracking-widest uppercase bg-gray-900/80 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  Go Live
                </span>
                <button className="w-12 h-12 bg-emerald-400 dark:bg-[#41ea7c] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(65,234,124,0.4)] group-hover:scale-105 transition-transform">
                  <Radio size={20} className="text-gray-900 dark:text-black" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsFabOpen(!isFabOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
            isFabOpen
              ? "bg-white text-gray-900 rotate-45 scale-90"
              : "bg-emerald-400 dark:bg-[#41ea7c] text-gray-900 dark:text-black shadow-[0_0_25px_rgba(65,234,124,0.4)] hover:scale-105"
          }`}
        >
          <Plus size={30} strokeWidth={2.5} />
        </button>
      </div>

      {/* Global Bottom Navigation */}
      <FloatingNav />
    </div>
  );
};

export default YourVideos;