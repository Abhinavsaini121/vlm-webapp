import React, { useState } from 'react';
import { 
  ChevronLeft, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Mic,
  CheckCheck,
  Zap,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const ChatDetail = () => {
  const { id } = useParams(); // Dynamic route parameter
  const navigate = useNavigate();
  
  const [message, setMessage] = useState("");
  const [isAttaching, setIsAttaching] = useState(false);
    
  // Dummy Thread Data (In a real app, you'd fetch this using the 'id')
  const chatData = {
    id: id || "1",
    studentName: "Rahul Sharma",
    className: "Physics 101",
    status: "Online",
    doubtContext: "Confusion regarding Centripetal vs Centrifugal force in non-inertial frames.",
    messages: [
      { id: 1, sender: 'student', text: "Sir, I was reviewing the session and I'm stuck here. Is centrifugal force actually 'fake'?", time: "10:05 AM" },
      { id: 2, sender: 'teacher', text: "Great question, Rahul! In an inertial frame, it doesn't exist. We only 'invent' it to make Newton's laws work in a rotating frame.", time: "10:08 AM", status: 'read' },
      { id: 3, sender: 'student', text: "So if I am outside the merry-go-round, I don't see it?", time: "10:10 AM" },
      { id: 4, sender: 'student', isImage: true, imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80", time: "10:11 AM" },
    ]
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 sticky top-0 z-30 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
               <div className="relative">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] flex items-center justify-center font-bold text-sm text-white shadow-inner">
                   {chatData.studentName[0]}
                 </div>
                 {/* Online Indicator */}
                 <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-[#0b0f1a] rounded-full shadow-sm"></div>
               </div>
               <div>
                  <h2 className="text-sm font-bold leading-tight text-gray-900 dark:text-white">{chatData.studentName}</h2>
                  <p className="text-[10px] text-emerald-600 dark:text-[#4ade80] font-black uppercase tracking-widest">{chatData.status}</p>
               </div>
            </div>
          </div>
          <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#2F80FF] transition-colors"><MoreVertical size={20} /></button>
        </div>
      </header>

      {/* --- SCROLLABLE CHAT AREA --- */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">
        
        {/* DOUBT CONTEXT BOX (Sticky-style card) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#1a2233]/50 border border-blue-200 dark:border-[#2F80FF]/20 rounded-[1.5rem] p-4 mb-8 shadow-sm"
        >
           <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-[#2F80FF] dark:text-[#56CCF2] fill-current" />
              <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Doubt Context</span>
           </div>
           <p className="text-xs text-gray-600 dark:text-gray-300 italic leading-relaxed font-medium">
             "{chatData.doubtContext}"
           </p>
        </motion.div>

        {/* MESSAGES */}
        {chatData.messages.map((msg, index) => (
          <motion.div 
            key={msg.id} 
            initial={{ opacity: 0, y: 10, x: msg.sender === 'teacher' ? 20 : -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex w-full ${msg.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] flex flex-col ${msg.sender === 'teacher' ? 'items-end' : 'items-start'}`}>
              
              {msg.isImage ? (
                // Image Message
                <div className="rounded-[1.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
                  <img src={msg.imageUrl} alt="attached" className="w-full h-auto max-h-64 object-cover" />
                </div>
              ) : (
                // Text Message
                <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'teacher' 
                  ? 'bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] text-white rounded-tr-sm' 
                  : 'bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              )}
              
              {/* Message Meta (Time & Status) */}
              <div className="flex items-center gap-1.5 mt-1.5 px-2">
                 <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{msg.time}</span>
                 {msg.sender === 'teacher' && <CheckCheck size={14} className="text-[#2F80FF] dark:text-[#56CCF2]" />}
              </div>

            </div>
          </motion.div>
        ))}
      </main>

      {/* --- ATTACHMENT PREVIEW (Animated Pop-up) --- */}
      <AnimatePresence>
        {isAttaching && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="px-4 py-3 bg-white dark:bg-[#1a2233] border-t border-gray-200 dark:border-white/10 flex items-center justify-between shadow-lg z-20"
          >
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 dark:bg-[#2F80FF]/10 rounded-xl flex items-center justify-center border border-blue-100 dark:border-[#2F80FF]/30">
                   <FileText size={18} className="text-[#2F80FF] dark:text-[#56CCF2]" />
                </div>
                <div>
                   <p className="text-[11px] font-bold text-gray-900 dark:text-gray-200">forces_diagram.png</p>
                   <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase font-black tracking-widest mt-0.5">1.2 MB • Ready to send</p>
                </div>
             </div>
             <button onClick={() => setIsAttaching(false)} className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors p-2 bg-gray-50 dark:bg-[#0b0f1a] rounded-full">
               <X size={16} />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- INPUT BAR --- */}
      <footer className="p-4 bg-gray-50 dark:bg-[#0b0f1a] border-t border-gray-200 dark:border-white/10 pb-8 transition-colors z-20">
        <div className="flex items-end gap-3 bg-white dark:bg-[#1a2233] rounded-[2rem] p-2 border border-gray-200 dark:border-white/10 shadow-sm focus-within:border-blue-300 dark:focus-within:border-[#2F80FF]/50 focus-within:shadow-blue-500/10 transition-all">
          
          <button 
            onClick={() => setIsAttaching(!isAttaching)}
            className="p-3 text-gray-400 dark:text-gray-500 hover:text-[#2F80FF] dark:hover:text-[#56CCF2] transition-colors active:scale-90"
          >
            <Paperclip size={20} />
          </button>
          
          <textarea 
            rows="1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your reply..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 text-gray-900 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none max-h-32 outline-none"
          />

          {!message && !isAttaching ? (
            <button className="p-3 text-gray-400 dark:text-gray-500 hover:text-[#2F80FF] transition-colors active:scale-90">
              <Mic size={20} />
            </button>
          ) : (
            <button className="p-3 bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] rounded-full text-white shadow-lg shadow-blue-500/30 active:scale-90 transition-all">
              <Send size={18} fill="currentColor" strokeWidth={1.5} className="ml-0.5" />
            </button>
          )}
        </div>
      </footer>

    </div>
  );
};

export default ChatDetail;