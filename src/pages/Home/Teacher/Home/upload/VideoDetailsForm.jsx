import React, { useState } from 'react';
import { ArrowRight, FileVideo, CheckCircle2, Globe, Lock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoDetailsForm = ({ file, videoType, onNext }) => {
  // Visibility State: 'public' | 'private' | 'scheduled'
  const [visibility, setVisibility] = useState('public');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // Schedule States
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  
  const fileSizeMB = file ? (file.size / (1024 * 1024)).toFixed(2) : "0.00";

  const handleNext = () => {
    onNext({ 
      title, 
      description, 
      visibility, 
      scheduleDate: visibility === 'scheduled' ? scheduleDate : null, 
      scheduleTime: visibility === 'scheduled' ? scheduleTime : null 
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -50 }} 
      className="space-y-6"
    >
      
      {/* --- FILE INFO CARD --- */}
      <div className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 p-4 rounded-3xl flex items-center gap-4 shadow-sm">
        <div className="w-16 h-16 bg-blue-50 dark:bg-[#0b0f1a] rounded-2xl flex items-center justify-center border border-blue-100 dark:border-gray-800 text-[#2F80FF]">
          <FileVideo size={28} />
        </div>
        <div className="flex-1 overflow-hidden">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">{file?.name || "Selected Video"}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{fileSizeMB} MB</span>
            <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
            <span className="text-[10px] font-black text-[#2F80FF] dark:text-[#56CCF2] uppercase tracking-widest">{videoType} FORMAT</span>
          </div>
        </div>
        <CheckCircle2 size={20} className="text-emerald-500" />
      </div>

      <div className="space-y-6">
        
        {/* --- VIDEO TITLE --- */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2">Video Title</label>
          <input 
            value={title} onChange={(e) => setTitle(e.target.value)}
            type="text" placeholder="Give your video a catchy title..." 
            className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] transition-all" 
          />
        </div>

        {/* --- VIDEO DESCRIPTION --- */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2">Description</label>
          <textarea 
            value={description} onChange={(e) => setDescription(e.target.value)}
            rows="4" placeholder="Tell your students what this video is about..." 
            className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[1.2rem] px-[1.2rem] py-[1rem] text-sm text-gray-900 dark:text-white font-medium shadow-sm focus:outline-none focus:border-[#2F80FF] transition-all resize-none"
          />
        </div>

        {/* --- VISIBILITY & SCHEDULING --- */}
        <div className="space-y-2 pb-6">
          <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2">Publish Settings</label>
          
          <div className="flex bg-white dark:bg-[#1a2233] p-1.5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setVisibility('public')} 
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all ${visibility === 'public' ? 'bg-[#2F80FF] text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Globe size={16} /> Public
            </button>
            <button 
              onClick={() => setVisibility('private')} 
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all ${visibility === 'private' ? 'bg-gray-800 dark:bg-gray-700 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Lock size={16} /> Private
            </button>
            <button 
              onClick={() => setVisibility('scheduled')} 
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold transition-all ${visibility === 'scheduled' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Calendar size={16} /> Schedule
            </button>
          </div>

          {/* Expanded Schedule Inputs (Date & Time) */}
          <AnimatePresence>
            {visibility === 'scheduled' && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="flex gap-4 p-4 bg-white dark:bg-[#1a2233] border border-purple-200 dark:border-purple-500/30 rounded-[1.5rem] shadow-sm">
                  {/* Date Picker */}
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-1">Date</label>
                    <input 
                      type="date" 
                      value={scheduleDate}
                      onChange={(e) => setScheduleDate(e.target.value)}
                      // [color-scheme:dark] ensures native calendar popup respects dark mode
                      className="w-full bg-gray-50 dark:bg-[#0b0f1a] border border-gray-200 dark:border-white/10 rounded-xl px-3 py-3 text-xs text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 transition-all dark:[color-scheme:dark]" 
                    />
                  </div>
                  {/* Time Picker */}
                  <div className="flex-1 space-y-2">
                    <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-1">Time</label>
                    <input 
                      type="time" 
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#0b0f1a] border border-gray-200 dark:border-white/10 rounded-xl px-3 py-3 text-xs text-gray-900 dark:text-white font-medium focus:outline-none focus:border-purple-500 transition-all dark:[color-scheme:dark]" 
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* --- FIXED NEXT BUTTON --- */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.1 }} 
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 via-gray-50 dark:from-[#0b0f1a] dark:via-[#0b0f1a] to-transparent z-30 pointer-events-none"
      >
        <button 
          onClick={handleNext} 
          className="w-full pointer-events-auto bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
           Next: Review Video <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default VideoDetailsForm;