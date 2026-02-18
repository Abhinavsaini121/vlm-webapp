import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, MicOff, Video, VideoOff, Users, MessageSquare, 
  X, Send, Heart, Share2, ShieldCheck, ArrowLeft, MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- ASSET IMPORT ---
// Ensure this path matches your project
import videoBg from '../../../../../assets/short.webm'; 

const LiveClassRoom = () => {
  const navigate = useNavigate(); 
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [seconds, setSeconds] = useState(435); 
  const [chatInput, setChatInput] = useState("");
  const [hearts, setHearts] = useState([]);

  const chatScrollRef = useRef(null);

  // --- DUMMY DATA ---
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Aravind Kumar", text: "Sir, is the PDF for this session available?", color: "text-blue-600 dark:text-blue-400" },
    { id: 2, user: "Sneha Rao", text: "The formula on the left is slightly blurry. ✍️", color: "text-pink-600 dark:text-pink-400" },
    { id: 3, user: "Zaid Shaikh", text: "Understood! This is much easier than the book.", color: "text-green-600 dark:text-green-400" },
    { id: 4, user: "Divya N.", text: "Can we get one more example for this? 💯", color: "text-yellow-600 dark:text-yellow-400" },
  ]);

  const streamMetrics = {
    viewers: "1,248",
    likes: "4.2k",
    topic: "Physics: Quantum Entanglement",
    teacher: "Priya Sharma"
  };

  // Timer Logic
  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const newMsg = {
      id: Date.now(),
      user: "You",
      text: chatInput,
      color: "text-gray-900 dark:text-white"
    };
    setChatMessages([...chatMessages, newMsg]);
    setChatInput("");
  };

  const triggerHeart = () => {
    const newHeart = { id: Date.now(), x: Math.random() * 50 - 25 };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  };

  const handleEndClass = () => {
    navigate(-1); 
  };

  return (
    // Global Theme Container
    <div className="fixed inset-0 bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white flex flex-col font-sans overflow-hidden transition-colors duration-300">
      
      {/* --- LIVE VIDEO FEED AREA --- */}
      <div className="absolute inset-0 z-0 bg-gray-200 dark:bg-[#0a0a0b]">
        {!isVideoOff ? (
          <div className="relative w-full h-full">
            <video 
              src={videoBg} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay: Ensures white text is readable over video even in light mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-full gap-4 bg-gray-100 dark:bg-[#1a1a1c]"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 p-[3px]">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-[#1a1a1c] flex items-center justify-center">
                 <span className="text-4xl font-bold text-gray-700 dark:text-white">PS</span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm animate-pulse">Camera Paused</p>
          </motion.div>
        )}
      </div>

      {/* --- TOP HEADER OVERLAY --- */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 p-4 flex justify-between items-start"
      >
        <div className="flex flex-col gap-2">
          {/* Back Button & Timer */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleEndClass}
              className="p-2 rounded-full bg-white/80 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-white/20 transition-all shadow-sm"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full border border-red-500 shadow-lg shadow-red-900/20 text-white">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-wider">Live</span>
            </div>
            <span className="text-sm font-mono font-bold text-white drop-shadow-md">
              {formatTime(seconds)}
            </span>
          </div>

          {/* Stats */}
          <div className="flex gap-2 mt-1">
            <div className="bg-white/80 dark:bg-black/30 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-200 dark:border-white/5 flex items-center gap-1.5 shadow-sm">
              <Users size={12} className="text-blue-600 dark:text-blue-400" />
              <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">{streamMetrics.viewers}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
            <button className="p-2.5 bg-white/80 dark:bg-black/30 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm">
                <Share2 size={18} />
            </button>
            <button className="p-2.5 bg-white/80 dark:bg-black/30 backdrop-blur-md rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm">
                <MoreVertical size={18} />
            </button>
        </div>
      </motion.div>

      {/* --- MIDDLE AREA (Floating Hearts) --- */}
      <div className="relative flex-1 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: 100, x: heart.x, opacity: 1, scale: 0.5 }}
              animate={{ y: -300, opacity: 0, scale: 1.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute bottom-10 right-8 text-pink-500"
            >
              <Heart fill="currentColor" size={24} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- CHAT OVERLAY --- */}
      <AnimatePresence>
        {showChat && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "16rem" }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-10 px-4 mb-2"
          >
            <div 
              ref={chatScrollRef}
              className="h-full overflow-y-auto pr-2 space-y-3 no-scrollbar"
              style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%)' }}
            >
              {chatMessages.map((msg, idx) => (
                <motion.div 
                  key={msg.id} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-2xl rounded-tl-none px-4 py-2 border border-gray-200 dark:border-white/5 shadow-sm">
                    <span className={`text-[10px] font-black uppercase ${msg.color} tracking-tighter block mb-0.5`}>
                      {msg.user}
                    </span>
                    <span className="text-sm text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
                      {msg.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTROLS (THEME ADAPTED) --- */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="relative z-20 p-4 pb-6 bg-white dark:bg-[#0f0f10]/90 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 rounded-t-[30px] shadow-2xl transition-colors duration-300"
      >
        {/* Chat Input */}
        {showChat && (
          <form onSubmit={handleSendMessage} className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
            <button 
              type="submit"
              className="p-2 bg-purple-600 rounded-full text-white shadow-lg shadow-purple-600/30 hover:scale-105 active:scale-95 transition-transform"
            >
              <Send size={18} />
            </button>
            <button 
              type="button"
              onClick={triggerHeart}
              className="p-2 bg-pink-100 dark:bg-pink-600/20 border border-pink-200 dark:border-pink-500/30 rounded-full text-pink-600 dark:text-pink-500 hover:bg-pink-200 dark:hover:bg-pink-600/30 active:scale-95 transition-transform"
            >
              <Heart size={18} fill="currentColor" />
            </button>
          </form>
        )}

        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-3">
             <ControlButton 
               icon={isMuted ? <MicOff /> : <Mic />} 
               active={isMuted} 
               onClick={() => setIsMuted(!isMuted)} 
             />
             <ControlButton 
               icon={isVideoOff ? <VideoOff /> : <Video />} 
               active={isVideoOff} 
               onClick={() => setIsVideoOff(!isVideoOff)} 
             />
          </div>
          
          <button 
             onClick={() => setShowChat(!showChat)}
             className={`p-4 rounded-2xl border transition-all hover:scale-105 active:scale-95 ${
               showChat 
                ? 'bg-purple-50 border-purple-200 text-purple-600 dark:bg-white dark:text-black dark:border-white shadow-inner' 
                : 'bg-gray-100 border-gray-200 text-gray-500 dark:bg-white/10 dark:border-white/10 dark:text-white'
             }`}
          >
            <MessageSquare size={24} />
          </button>

          <button 
            onClick={handleEndClass}
            className="flex-1 bg-red-500 hover:bg-red-600 py-4 rounded-2xl text-white font-black uppercase text-sm tracking-widest shadow-lg shadow-red-900/40 active:scale-95 transition-all"
          >
            End Stream
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Helper Control Button with Theme Logic
const ControlButton = ({ icon, active, onClick }) => (
  <motion.button 
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`p-4 rounded-2xl border transition-all ${
      active 
      ? 'bg-red-50 border-red-200 text-red-500 dark:bg-red-500/20 dark:border-red-500/50 dark:text-red-500' 
      : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:border-white/10 dark:text-white dark:hover:bg-white/20'
    }`}
  >
    {React.cloneElement(icon, { size: 24 })}
  </motion.button>
);

export default LiveClassRoom;