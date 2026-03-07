import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  Info,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/Bottombar/ProgressBar';
import loginMobileBg from "../../assets/loginmobilebg.png";
import loginBg from "../../assets/loginbg.png";

const Interview = () => {
  const navigate = useNavigate(); // Dummy routing added
  const [selectedDate, setSelectedDate] = useState('Oct 26');
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Mock Data
  const dates = [
    { day: 'THU', date: 'Oct 26' },
    { day: 'FRI', date: 'Oct 27' },
    { day: 'SAT', date: 'Oct 28' },
    { day: 'MON', date: 'Oct 30' },
  ];

  const slots = [
    '10:30 AM', '12:00 PM',
    '02:30 PM', '04:00 PM',
    '06:30 PM', '08:00 PM'
  ];

  // Function to handle dummy routing when the final button is clicked
  const handleComplete = () => {
    // Dummy route to next page (e.g., Dashboard or Success screen)
    navigate('/dashboard');
  };

  return (
    // min-h-screen ensures the background covers everything
    <div
      className="min-h-screen text-white font-sans flex items-center justify-center p-0 md:p-6 relative overflow-hidden bg-[#090C15] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${window.innerWidth >= 768 ? loginBg : loginMobileBg})`
      }}
    >

      {/* Custom Styles for Animations & Hiding Scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Custom slide-up fade animations */
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-item {
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />

      {/* Main Container - Using h-[100dvh] so it perfectly fits the screen height */}
      <div className="w-full max-w-[420px] h-[100dvh] md:h-auto md:min-h-screen md:rounded-[2rem] bg-[#0B101A] flex flex-col relative z-10 shadow-2xl overflow-hidden animate-item" style={{ animationDelay: '0s' }}>

        {/* --- Top Area (Stable) --- */}
        <div className="pt-10 pb-4 px-6 shrink-0 bg-[#0B101A] z-20">
          <ProgressBar currentStep={3} />
        </div>

        {/* --- Main Scrollable Content --- */}
        {/* flex-1 allows this section to grow, overflow-y-auto makes it scrollable while keeping top/bottom fixed */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 hide-scroll relative z-10">

          {/* Header Texts */}
          <div className="mb-8 animate-item" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 text-[#3B82F6] text-[11px] font-black tracking-widest uppercase mb-3">
              <ShieldCheck size={14} strokeWidth={2.5} />
              Final Verification
            </div>
            <h1 className="text-[32px] font-extrabold tracking-tight mb-2 leading-tight">
              Schedule Your Demo
            </h1>
            <p className="text-[#8B95A5] text-[15px] leading-relaxed pr-2">
              Pick a 15-minute slot for a brief video interaction with our academic panel.
            </p>
          </div>

          {/* --- Date Selector --- */}
          <div className="mb-8 animate-item" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#6B7280] text-xs font-bold tracking-[0.15em] uppercase">Select Date</h3>
              <CalendarIcon size={16} className="text-[#6B7280]" />
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-3 overflow-x-auto pb-2 hide-scroll -mx-6 px-6">
              {dates.map((item, index) => {
                const isSelected = selectedDate === item.date;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedDate(item.date);
                      setSelectedSlot(null); // Reset slot on new date
                    }}
                    className={`min-w-[85px] h-[105px] rounded-[32px] flex flex-col items-center justify-center transition-all duration-300 relative shrink-0 ${isSelected
                        ? 'bg-gradient-to-b from-[#46B5FF] to-[#3B82F6] shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] scale-105'
                        : 'bg-[#1C2331] hover:bg-[#222A3A] hover:scale-[1.02]'
                      }`}
                  >
                    <span className={`text-[11px] font-bold mb-1 ${isSelected ? 'text-blue-100' : 'text-[#8B95A5]'}`}>
                      {item.day}
                    </span>
                    <span className={`text-xl font-black ${isSelected ? 'text-white' : 'text-white'}`}>
                      {item.date.split(' ')[0]}
                      <br />
                      {item.date.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- Time Slot Selector --- */}
          <div className="mb-10 animate-item" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#6B7280] text-xs font-bold tracking-[0.15em] uppercase">Available Slots (IST)</h3>
              <Clock size={16} className="text-[#6B7280]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {slots.map((slot, index) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-4 rounded-2xl text-[13px] font-bold transition-all duration-200 border border-transparent ${isSelected
                        ? 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transform scale-[1.03]'
                        : 'bg-[#1C2331] text-[#E5E7EB] hover:bg-[#262E3E]'
                      }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- Info Card --- */}
          <div className="bg-[#1C2331] rounded-[32px] p-6 relative overflow-hidden group animate-item" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-[#262E3E] w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                <Video size={24} className="text-[#3B82F6]" />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-[15px] mb-1.5">VIRTUAL INTERACTION</h4>
                <p className="text-[#8B95A5] text-[13px] leading-relaxed">
                  A link to Google Meet will be shared via email and WhatsApp 30 minutes before your slot.
                </p>

                <button className="flex items-center gap-1.5 mt-4 text-[#3B82F6] text-[10px] font-black uppercase tracking-widest hover:text-blue-400 transition-colors">
                  <Info size={14} strokeWidth={2.5} />
                  Prepare a 5-min demo
                </button>
              </div>
            </div>
            {/* Background decorative watermark */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#262E3E] rounded-[40px] rotate-12 opacity-50 z-0 group-hover:rotate-45 transition-transform duration-700"></div>
          </div>

        </div>

        {/* --- Stable/Sticky Bottom Action Area --- */}
        {/* shrink-0 and border-t ensures this block NEVER scrolls away and stays locked to the bottom */}
        <div className="shrink-0 px-6 pt-4 pb-8 bg-[#0B101A] border-t border-white/5 relative z-20 animate-item" style={{ animationDelay: '0.5s' }}>
          <button
            disabled={!selectedSlot}
            onClick={handleComplete} // Dummy routing function triggered here
            className={`w-full py-4.5 h-14 rounded-full text-[13px] font-black flex items-center justify-center gap-2 tracking-[0.15em] uppercase transition-all duration-300 ${selectedSlot
                ? 'bg-gradient-to-r from-[#3B82F6] to-[#46B5FF] text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:opacity-90 active:scale-[0.98]'
                : 'bg-[#1C2331] text-[#4B5563] cursor-not-allowed'
              }`}
          >
            Select a Slot
            <ArrowRight size={18} className={selectedSlot ? "text-white" : "text-[#4B5563]"} />
          </button>

          <p className="text-center text-[#4B5563] text-[9px] font-bold uppercase tracking-[0.2em] mt-5">
            Step 3 of 3 • Almost there
          </p>
        </div>

      </div>
    </div>
  );
};

export default Interview;