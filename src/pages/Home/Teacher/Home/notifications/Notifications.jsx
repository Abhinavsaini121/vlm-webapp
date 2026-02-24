import React, { useState } from "react";
import {
  ChevronLeft,
  CheckCheck,
  Wallet,
  MessageSquare,
  CalendarDays,
  Zap,
  Clock,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "EARNINGS", "DOUBTS", "SCHEDULE", "SYSTEM"];

  // Dummy Notification Data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "earnings",
      title: "Earnings Credited!",
      description: "₹1,200 has been added to your wallet for today's Physics session.",
      time: "2M AGO",
      isUnread: true,
    },
    {
      id: 2,
      type: "doubt",
      title: "New Live Doubt",
      description: 'Rahul Sharma asked: "How does gravity affect light in space?"',
      time: "15M AGO",
      isUnread: true,
    },
    {
      id: 3,
      type: "schedule",
      title: "Class Starting Soon",
      description: 'Your "Advanced Calculus" session starts in 30 minutes. Get ready!',
      time: "1H AGO",
      isUnread: false,
    },
    {
      id: 4,
      type: "achievement",
      title: "Achievement Unlocked 🏆",
      description: "You hit a 4.9/5 rating this week! You are eligible for a performance bonus.",
      time: "5H AGO",
      isUnread: false,
    },
    {
      id: 5,
      type: "schedule",
      title: "Rescheduled Class",
      description: 'The Chemistry session has been moved to 5:00 PM per student request.',
      time: "1DAY AGO",
      isUnread: false,
    },
  ]);

  // Filter Logic
  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "EARNINGS" && notif.type === "earnings") return true;
    if (activeTab === "DOUBTS" && notif.type === "doubt") return true;
    if (activeTab === "SCHEDULE" && notif.type === "schedule") return true;
    if (activeTab === "SYSTEM" && notif.type === "achievement") return true;
    return false;
  });

  // Action Handlers
  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  // Helper for icons/colors
  const getIconData = (type) => {
    switch (type) {
      case "earnings":
        return {
          icon: <Wallet size={20} />,
          bg: "bg-emerald-100 dark:bg-emerald-500/10",
          text: "text-emerald-600 dark:text-emerald-400",
        };
      case "doubt":
        return {
          icon: <MessageSquare size={20} />,
          bg: "bg-blue-100 dark:bg-blue-500/10",
          text: "text-blue-600 dark:text-[#3B82F6]",
        };
      case "schedule":
        return {
          icon: <CalendarDays size={20} />,
          bg: "bg-purple-100 dark:bg-purple-500/10",
          text: "text-purple-600 dark:text-purple-400",
        };
      case "achievement":
        return {
          icon: <Zap size={20} className="fill-current" />,
          bg: "bg-yellow-100 dark:bg-yellow-500/10",
          text: "text-yellow-600 dark:text-yellow-400",
        };
      default:
        return {
          icon: <MessageSquare size={20} />,
          bg: "bg-gray-100 dark:bg-white/5",
          text: "text-gray-600 dark:text-gray-400",
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0d14] text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
      
      {/* Hide scrollbar style */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#0a0d14]/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-2 md:px-2 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-[#1a1a1c] rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-2xl tracking-tight font-bold">Notifications</h1>
          </div>
          <button 
            onClick={handleMarkAllRead}
            title="Mark all as read"
            className="p-2 text-blue-600 dark:text-[#3B82F6] bg-blue-50 dark:bg-blue-500/10 rounded-full hover:scale-110 transition-transform"
          >
            <CheckCheck size={22} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-2 py-6">
        
        {/* TABS */}
        <div className="mb-8 overflow-x-auto hide-scroll">
          <div className="flex gap-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === tab
                    ? "bg-[#3abef9] border-[#3abef9] text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-[#1a1a1c] border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#252528]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* NOTIFICATIONS GRID (Full Width Responsive) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notif) => {
                const iconData = getIconData(notif.type);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={notif.id}
                    className="bg-white dark:bg-[#1a1a1c] p-5 rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1 transition-all cursor-pointer relative group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${iconData.bg} ${iconData.text}`}>
                        {iconData.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[10px] font-black tracking-wider text-gray-400 dark:text-gray-500 uppercase flex items-center gap-1">
                            {notif.time}
                          </span>
                          {notif.isUnread && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                          )}
                        </div>
                        
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 leading-snug group-hover:text-blue-500 transition-colors">
                          {notif.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {notif.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // Empty State
              <div className="col-span-full flex flex-col items-center justify-center py-20">
                <div className="w-20 h-20 bg-gray-100 dark:bg-[#1a1a1c] rounded-full flex items-center justify-center mb-4">
                  <CheckCheck size={32} className="text-gray-300 dark:text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">All caught up!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">No new notifications in this category.</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- CLEAR BUTTON --- */}
        {notifications.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleClearAll}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-red-500 border border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
            >
              <Trash2 size={16} />
              Clear All History
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Notifications;