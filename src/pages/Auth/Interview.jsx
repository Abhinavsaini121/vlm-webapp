import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Info,
  ArrowRight,
  ChevronLeft,
  X,
  Sun,
  Sunset,
  Moon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your actual paths
import loginMobileBg from "../../assets/loginmobilebg.png";

const Interview = () => {
  const navigate = useNavigate();
 
  // Selected States
  const [selectedDate, setSelectedDate] = useState('Oct 26');
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  // Modal States
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Custom User Picks
  const [customDate, setCustomDate] = useState(null);
  const [customSlot, setCustomSlot] = useState(null);

  // Base Default Data
  const defaultDates = [
    { day: 'THU', date: 'Oct 26', full: new Date(2023, 9, 26) },
    { day: 'FRI', date: 'Oct 27', full: new Date(2023, 9, 27) },
    { day: 'SAT', date: 'Oct 28', full: new Date(2023, 9, 28) },
    { day: 'MON', date: 'Oct 30', full: new Date(2023, 9, 30) },
  ];

  const defaultSlots = [
    '10:30 AM', '12:00 PM',
    '02:30 PM', '04:00 PM',
    '06:30 PM', '08:00 PM'
  ];

  // Merge custom picks with defaults to show in UI
  const displayDates = customDate ? [customDate, ...defaultDates.filter(d => d.date !== customDate.date).slice(0, 3)] : defaultDates;
  const displaySlots = customSlot ? [customSlot, ...defaultSlots.filter(s => s !== customSlot).slice(0, 5)] : defaultSlots;

  // Generate Next 14 Days for Custom Date Picker
  const getNextDays = () => {
    const dates = [];
    let curr = new Date();
    for (let i = 0; i < 14; i++) {
      dates.push(new Date(curr));
      curr.setDate(curr.getDate() + 1);
    }
    return dates;
  };

  const handleCustomDateSelect = (dateObj) => {
    const dayStr = dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const newDate = { day: dayStr, date: dateStr, full: dateObj };
    
    setCustomDate(newDate);
    setSelectedDate(dateStr);
    setSelectedSlot(null);
    setShowDatePicker(false);
  };

  const handleComplete = () => {
    console.log("Demo Scheduled for:", selectedDate, selectedSlot);
    navigate('/teacher-dashboard');
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen h-screen w-full bg-[#090C15] text-white font-sans flex overflow-hidden">
      
      {/* --- LEFT SECTION (DESKTOP VISUALS) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-[45%] relative flex-col justify-between p-12 bg-[#050810] border-r border-white/5 relative overflow-hidden"
      >
         <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#eef7ff] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-black font-black text-sm tracking-tight">VLM</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Academy</span>
            </div>
            
            <h1 className="text-5xl font-blzack leading-tight mb-4">
               Final Step. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#56CCF2]">Schedule Demo.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
               Meet with our academic panel. We want to understand your teaching style and passion for education.
            </p>
         </div>

         <div className="relative z-10 w-full h-64 flex items-center justify-center">
             <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative">
                <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] p-[2px] shadow-2xl shadow-blue-500/20 rotate-6">
                   <div className="w-full h-full rounded-[2.3rem] bg-[#090C15] flex items-center justify-center">
                      <CalendarIcon size={64} className="text-[#56CCF2]" strokeWidth={1.5} />
                   </div>
                </div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl -rotate-6">
                   <Clock size={32} className="text-purple-400" />
                </motion.div>
             </motion.div>
         </div>
      </motion.div>

      {/* --- RIGHT SECTION (FORM / INTERACTION) --- */}
      <div 
        className="w-full lg:w-[55%] h-full relative flex flex-col items-center p-0 overflow-y-auto overflow-x-hidden"
        style={{
            backgroundImage: window.innerWidth < 1024 ? `url(${loginMobileBg})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
      >
        <div className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

        {/* Content Wrapper - FIXED: Removed justify-center, Added pt-16 lg:pt-24 to fix header cutoff */}
        <div className="w-full max-w-[480px] relative z-10 px-6 pt-12 pb-16 lg:pt-5 lg:pb-12 flex flex-col justify-start min-h-full">
            
            {/* Header - INLINE TITLE */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                    <button 
                      onClick={() => navigate(-1)}
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors flex items-center justify-center group shrink-0"
                    >
                      <ChevronLeft size={22} className="text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      Schedule Demo
                    </h1>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed sm:pl-[3.5rem]">
                  Pick a 15-minute slot for a brief video interaction with our academic panel.
                </p>
            </div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full space-y-8 flex-1">
              
              {/* --- Date Selector --- */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-xs font-bold tracking-[0.15em] uppercase">Select Date</h3>
                  
                  {/* CUSTOM CALENDAR BUTTON */}
                  <button 
                    onClick={() => setShowDatePicker(true)}
                    className="p-2 bg-white/5 hover:bg-[#2F80FF]/20 text-gray-400 hover:text-[#56CCF2] rounded-lg transition-all border border-transparent hover:border-[#2F80FF]/30"
                  >
                    <CalendarIcon size={18} />
                  </button>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                  {displayDates.map((item, index) => {
                    const isSelected = selectedDate === item.date;
                    return (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        key={index}
                        onClick={() => {
                          setSelectedDate(item.date);
                          setSelectedSlot(null); 
                        }}
                        className={`min-w-[90px] h-[110px] rounded-[1.5rem] flex flex-col items-center justify-center transition-all duration-300 relative shrink-0 border ${
                            isSelected
                            ? 'bg-gradient-to-b from-[#2F80FF] to-[#56CCF2] border-transparent shadow-[0_10px_25px_-5px_rgba(47,128,255,0.4)]'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                      >
                        <span className={`text-[11px] font-bold mb-1 tracking-widest ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                          {item.day}
                        </span>
                        <span className={`text-xl font-black leading-tight ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                          {item.date.split(' ')[0]}
                          <br />
                          {item.date.split(' ')[1]}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* --- Time Slot Selector --- */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 text-xs font-bold tracking-[0.15em] uppercase">Available Slots (IST)</h3>
                  
                  {/* CUSTOM TIME BUTTON */}
                  <button 
                    onClick={() => setShowTimePicker(true)}
                    className="p-2 bg-white/5 hover:bg-[#2F80FF]/20 text-gray-400 hover:text-[#56CCF2] rounded-lg transition-all border border-transparent hover:border-[#2F80FF]/30"
                  >
                    <Clock size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {displaySlots.map((slot, index) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        key={index}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-4 rounded-[1.2rem] text-[13px] font-bold transition-all duration-200 border ${
                            isSelected
                            ? 'bg-[#2F80FF] border-[#56CCF2] text-white shadow-[0_0_20px_rgba(47,128,255,0.4)]'
                            : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20'
                          }`}
                      >
                        {slot}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* --- Info Card --- */}
              <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                    <Video size={24} className="text-[#56CCF2]" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[15px] mb-1.5 tracking-wide">VIRTUAL INTERACTION</h4>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      A link to Google Meet will be shared via email and WhatsApp 30 minutes before your slot.
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* --- Bottom Action Area --- */}
            <div className="mt-10 relative z-20">
              <button
                disabled={!selectedSlot}
                onClick={handleComplete}
                className={`w-full py-4.5 h-14 rounded-[1.2rem] text-[14px] font-black flex items-center justify-center gap-2 tracking-widest uppercase transition-all duration-300 ${
                    selectedSlot
                    ? 'bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] text-white shadow-[0_10px_30px_rgba(47,128,255,0.4)] hover:opacity-90 active:scale-[0.98] border border-[#82baff]/50'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                  }`}
              >
                {selectedSlot ? 'Confirm Booking' : 'Select a Slot'}
                <ArrowRight size={18} className={selectedSlot ? "text-white" : "text-gray-500"} />
              </button>
            </div>

        </div>
      </div>

      {/* --- CUSTOM DATE PICKER MODAL --- */}
      <AnimatePresence>
        {showDatePicker && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-0">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowDatePicker(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="bg-[#111827] border border-white/10 w-full max-w-md rounded-[2rem] p-6 relative z-10 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Pick a Date</h3>
                <button onClick={() => setShowDatePicker(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><X size={20}/></button>
              </div>
              <div className="grid grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto no-scrollbar">
                {getNextDays().map((d, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleCustomDateSelect(d)}
                    className="p-3 bg-white/5 hover:bg-[#2F80FF] hover:text-white rounded-2xl flex flex-col items-center border border-white/5 transition-all text-gray-300"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                    <span className="text-lg font-black">{d.getDate()}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CUSTOM TIME PICKER MODAL --- */}
      <AnimatePresence>
        {showTimePicker && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-0">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowTimePicker(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="bg-[#111827] border border-white/10 w-full max-w-md rounded-[2rem] p-6 relative z-10 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Pick a Time</h3>
                <button onClick={() => setShowTimePicker(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10"><X size={20}/></button>
              </div>
              
              <div className="space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar">
                {/* Morning */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"><Sun size={14} className="text-yellow-400"/> Morning</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'].map(t => (
                      <button key={t} onClick={() => { setCustomSlot(t); setSelectedSlot(t); setShowTimePicker(false); }} className="py-3 bg-white/5 rounded-xl text-sm font-bold border border-white/5 hover:bg-[#2F80FF] transition-all">{t}</button>
                    ))}
                  </div>
                </div>

                {/* Afternoon */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"><Sunset size={14} className="text-orange-400"/> Afternoon</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['12:00 PM', '01:00 PM', '02:30 PM', '03:00 PM', '04:00 PM'].map(t => (
                      <button key={t} onClick={() => { setCustomSlot(t); setSelectedSlot(t); setShowTimePicker(false); }} className="py-3 bg-white/5 rounded-xl text-sm font-bold border border-white/5 hover:bg-[#2F80FF] transition-all">{t}</button>
                    ))}
                  </div>
                </div>

                {/* Evening */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"><Moon size={14} className="text-indigo-400"/> Evening</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['05:00 PM', '06:30 PM', '07:00 PM', '08:00 PM', '09:00 PM'].map(t => (
                      <button key={t} onClick={() => { setCustomSlot(t); setSelectedSlot(t); setShowTimePicker(false); }} className="py-3 bg-white/5 rounded-xl text-sm font-bold border border-white/5 hover:bg-[#2F80FF] transition-all">{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Interview;