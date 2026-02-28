import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Users, 
  MoreVertical,
  CheckCircle2,
  XCircle,
  Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ClassSchedule = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('upcoming');

  const classes = [
    {
      id: 1,
      title: "Advanced Algebra - Session 4",
      type: "Live Group",
      time: "Today, 04:30 PM",
      duration: "60 mins",
      students: 24,
      status: "upcoming"
    },
    {
      id: 2,
      title: "1:1 Doubt Clearing - Rohan M.",
      type: "Personal",
      time: "Tomorrow, 10:00 AM",
      duration: "30 mins",
      students: 1,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Trigonometry Basics",
      type: "Live Group",
      time: "24 Oct, 02:00 PM",
      duration: "45 mins",
      students: 18,
      status: "completed"
    },
    {
      id: 4,
      title: "Calculus Intro",
      type: "Live Group",
      time: "22 Oct, 11:00 AM",
      duration: "60 mins",
      students: 0,
      status: "cancelled"
    }
  ];

  const filteredClasses = classes.filter(c => c.status === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200 dark:border-white/10 flex items-center gap-4 transition-colors">
        <button 
          onClick={() => navigate(-1)}
          className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Class Schedule</h1>
      </header>

      {/* --- FILTER TABS --- */}
      <div className="p-4 z-20 relative">
        <div className="bg-white dark:bg-[#1a2233] p-1.5 rounded-2xl flex border border-gray-200 dark:border-white/10 shadow-sm relative">
          
          {/* Animated Tab Background Indicator */}
          <div className="absolute inset-y-1.5 flex w-[calc(100%-12px)] pointer-events-none">
             <motion.div 
               className="h-full bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] rounded-xl shadow-md shadow-blue-500/20"
               layout
               initial={false}
               animate={{ 
                 x: activeFilter === 'upcoming' ? '0%' : activeFilter === 'completed' ? '100%' : '200%',
                 width: '33.33%' 
               }}
               transition={{ type: "spring", stiffness: 300, damping: 25 }}
             />
          </div>

          {['upcoming', 'completed', 'cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all z-10 ${
                activeFilter === tab 
                ? 'text-white' 
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- CLASS LIST --- */}
      <div className="px-4 space-y-4 pt-2">
        <AnimatePresence mode="popLayout">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((item, index) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden relative shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Top accent bar based on status */}
                <div className={`h-1.5 w-full ${
                  item.status === 'upcoming' ? 'bg-[#56CCF2]' : 
                  item.status === 'completed' ? 'bg-[#4ade80]' : 'bg-red-500'
                }`} />
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded border ${
                        item.type === 'Personal' 
                          ? 'bg-blue-50 dark:bg-[#2F80FF]/10 text-[#2F80FF] border-blue-200 dark:border-[#2F80FF]/30' 
                          : 'bg-cyan-50 dark:bg-[#56CCF2]/10 text-cyan-600 dark:text-[#56CCF2] border-cyan-200 dark:border-[#56CCF2]/30'
                      }`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-[10px] font-bold">
                        <Timer size={12} /> {item.duration}
                      </div>
                    </div>
                    <button className="text-gray-400 dark:text-gray-600 hover:text-[#2F80FF] transition-colors"><MoreVertical size={18}/></button>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4 leading-tight">{item.title}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <CalendarIcon size={14} className="text-[#2F80FF] dark:text-[#56CCF2]" />
                      <span className="text-[11px] font-bold">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users size={14} className="text-[#2F80FF] dark:text-[#56CCF2]" />
                      <span className="text-[11px] font-bold">{item.students} Students</span>
                    </div>
                  </div>

                  {/* --- CONDITIONAL ACTIONS --- */}
                  <div className="flex gap-3 border-t border-gray-100 dark:border-gray-800/50 pt-5">
                    
                    {activeFilter === 'upcoming' && (
                      <>
                        <button className="flex-1 bg-gray-100 dark:bg-[#0b0f1a] py-3.5 rounded-2xl text-xs font-black text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                          Reschedule
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] text-white py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                          <Video size={16} strokeWidth={2.5} /> Start Class
                        </button>
                      </>
                    )}

                    {activeFilter === 'completed' && (
                      <>
                        <button className="flex-1 bg-emerald-50 dark:bg-[#15231a] border border-emerald-200 dark:border-[#23422e] text-emerald-600 dark:text-[#4ade80] py-3.5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 pointer-events-none">
                          <CheckCircle2 size={16} strokeWidth={2.5} /> Attendance Done
                        </button>
                        <button className="bg-gray-100 dark:bg-[#0b0f1a] px-6 rounded-2xl text-xs font-black text-gray-600 dark:text-gray-300 hover:text-[#2F80FF] transition-colors">
                          Details
                        </button>
                      </>
                    )}

                    {activeFilter === 'cancelled' && (
                      <div className="flex items-center justify-center w-full gap-2 text-red-500 bg-red-50 dark:bg-red-500/10 rounded-2xl text-[10px] font-black uppercase tracking-widest py-3 border border-red-200 dark:border-red-500/20">
                        <XCircle size={14} strokeWidth={2.5} /> Class was cancelled by Admin
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="py-24 flex flex-col items-center justify-center text-center opacity-50"
            >
              <div className="w-20 h-20 bg-gray-200 dark:bg-[#1a2233] rounded-full flex items-center justify-center text-gray-400 dark:text-gray-600 mb-4">
                <CalendarIcon size={32} />
              </div>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">No {activeFilter} classes found</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ClassSchedule;