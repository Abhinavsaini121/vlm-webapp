import React, { useState } from "react";
import videoFile from "../../assets/Home/liveclass.mp4";

import {
  Clock,
  Users,
  Heart,
  Maximize2,
  SkipBack,
  Play,
  SkipForward,
  MessageCircle,
  HelpCircle,
  FileDown,
  FileText,
  X,
} from "lucide-react";

const LiveClass = () => {
  // State to toggle between Main View and Chat View
  const [showChat, setShowChat] = useState(false);

  // Mock Chat Data from Figma
  const chatMessages = [
    { id: 1, user: "ARAVIND KUMAR", msg: "Sir, is the PDF for this session available?", color: "text-blue-400" },
    { id: 2, user: "SNEHA RAO", msg: "The formula on the left is slightly blurry. ✍️", color: "text-pink-500" },
    { id: 3, user: "ZAID SHAIKH", msg: "Understood! This is much easier than the book.", color: "text-green-400" },
    { id: 4, user: "DIVYA N.", msg: "Can we get one more example for this? 💯", color: "text-yellow-500" },
    { id: 5, user: "ROHAN DAS", msg: "Wait, why did we multiply by 2 there?", color: "text-orange-500" },
    { id: 6, user: "MEERA J.", msg: "Sir you are the best! 🔥🔥", color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white font-sans pb-32">
      {/* 1. Video Player Section (Common) */}
      <div className="relative w-full aspect-video md:max-w-4xl md:mx-auto md:mt-4 md:rounded-3xl overflow-hidden group shadow-2xl">
        <video
  src={videoFile}
  className="w-full h-full object-cover"
  controls
  autoPlay
  muted
/>


        <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div> LIVE
        </div>

        <button className="absolute top-4 right-4 bg-black/40 p-2 rounded-lg backdrop-blur-md hover:bg-black/60 transition-colors">
          <Maximize2 size={18} className="text-white" />
        </button>

        {/* Thin Video Progress Bar (Figma Style) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
               
        </div>
      </div>

      {/* 2. Stats Bar */}
      <div className="px-4 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500/20 p-1.5 rounded-full">
            <Clock size={16} className="text-blue-400" />
          </div>
          <span className="text-[10px] font-bold text-gray-300 uppercase">
            Duration : 60mins
          </span>
        </div>

        <div className="flex gap-2">
          <div className="bg-[#1a1a1c] px-3 py-1.5 rounded-xl border border-gray-800 flex items-center gap-2">
            <Users size={14} className="text-blue-400" />
            <span className="text-[10px] font-black">1,248</span>
          </div>
          <div className="bg-[#1a1a1c] px-3 py-1.5 rounded-xl border border-gray-800 flex items-center gap-2">
            <Heart size={14} className="text-pink-500 fill-pink-500" />
            <span className="text-[10px] font-black">4.2k</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* 3. Title */}
        <h1 className="text-xl font-black tracking-tight mt-2 mb-6">
          Thermodynamics - Heart Transfer
        </h1>

        {/* Conditional Rendering Logic */}
        {!showChat ? (
          /* --- MAIN VIEW: Controls & Buttons --- */
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            {/* 4. Custom Video Controls */}
            <div className="mt-8 space-y-6">
              <div className="relative w-full h-1.5 bg-gray-800 rounded-full">
                <div className="absolute left-0 top-0 h-full w-[60%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] cursor-pointer hover:scale-110 transition-transform"></div>
              </div>

              <div className="flex items-center justify-center gap-10">
                <button className="text-white hover:text-blue-400 transition-colors">
                  <SkipBack size={32} fill="currentColor" />
                </button>
                <button className="bg-white text-black p-4 rounded-full hover:scale-110 active:scale-90 transition-all shadow-lg shadow-white/10">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </button>
                <button className="text-white hover:text-blue-400 transition-colors">
                  <SkipForward size={32} fill="currentColor" />
                </button>
              </div>
            </div>

            {/* 5. Action Buttons */}
            <div className="mt-12 space-y-4">
              <button 
                onClick={() => setShowChat(true)} 
                className="w-full bg-[#4cc9f0] hover:bg-[#4895ef] text-white py-4 rounded-[20px] font-black text-lg flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(76,201,240,0.3)] active:scale-95 transition-all"
              >
                <MessageCircle size={24} fill="white" /> Ask Doubts
              </button>

              <button className="w-full bg-[#4cc9f0] hover:bg-[#4895ef] text-white py-4 rounded-[20px] font-black text-lg flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(76,201,240,0.3)] active:scale-95 transition-all">
                <HelpCircle size={24} fill="white" /> Take Practical Quiz
              </button>
            </div>

            {/* 6. Notes & Resources */}
            <div className="mt-16">
              <h3 className="text-xl font-black mb-6">Notes & Resources</h3>
              <button className="w-full bg-[#4cc9f0] hover:bg-[#4895ef] text-white py-5 rounded-[24px] font-black text-lg flex items-center justify-between px-8 shadow-[0_10px_25px_rgba(76,201,240,0.2)] group transition-all">
                <div className="flex items-center gap-4">
                  <FileText size={28} />
                  <span>Download Files</span>
                </div>
                <FileDown size={28} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          /* --- CHAT VIEW: Doubt Section --- */
          <div className="mt-4 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Chat Messages List */}
            <div className="space-y-6 max-h-[450px] overflow-y-auto no-scrollbar pb-4 pr-2">
              {chatMessages.map((chat) => (
                <div key={chat.id} className="group">
                  <h5 className={`${chat.color} text-[11px] font-black uppercase tracking-widest mb-1`}>
                    {chat.user}
                  </h5>
                  <p className="text-white text-[15px] font-medium leading-relaxed">
                    {chat.msg}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
  <div className="relative flex items-center gap-3">

    <input
      type="text"
      placeholder="Ask Doubt"
      className="flex-1 bg-transparent border-none text-gray-300 font-bold placeholder:text-gray-600 focus:outline-none py-2 italic text-lg"
    />

    {/* Send Button */}
    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
      Send
    </button>

    {/* Close Button */}
    <button
      onClick={() => setShowChat(false)}
      className="flex items-center gap-1 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-gray-400 text-xs font-bold transition-all border border-white/10"
    >
      <X size={14} /> Close
    </button>

  </div>
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default LiveClass;