import React, { useState } from 'react';
import {
    ChevronLeft,
    Search,
    MessageCircle,
    Zap,
    Clock,
    CheckCircle2,
    ArrowUpRight,
    Filter,
    Send,
    Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FloatingNav from '../../../../components/Bottombar/Bottombar';

const InteractionCenter = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('doubts');

    // States for Reply functionality
    const [activeReplyId, setActiveReplyId] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [isSending, setIsSending] = useState(false);

    // Live Doubts State (Dynamic so we can remove items)
    const [liveDoubts, setLiveDoubts] = useState([
        { id: 1, student: "Rahul Sharma", question: "Can you explain the difference between mass and weight again? I'm confused about the gravity factor.", class: "Physics 101", time: "2m ago", urgent: true },
        { id: 2, student: "Sneha Roy", question: "In the 3rd step of the derivation, where did the '2π' come from?", class: "Advanced Math", time: "5m ago", urgent: true },
        { id: 3, student: "Zaid Shaikh", question: "Is this formula applicable for non-circular motion as well?", class: "Physics 101", time: "12m ago", urgent: false },
    ]);

    // Dummy Data for Student Chats
    const studentChats = [
        { id: 1, student: "Amit Kumar", lastMsg: "Thank you sir! The notes were very helpful.", time: "10:30 AM", unread: 2, online: true },
        { id: 2, student: "Priya Singh", lastMsg: "Sir, can I submit the assignment by tomorrow morning?", time: "09:45 AM", unread: 0, online: false },
        { id: 3, student: "Karan Johar", lastMsg: "I missed yesterday's class. Is the recording available?", time: "Yesterday", unread: 5, online: true },
        { id: 4, student: "Ishita Paul", lastMsg: "I've sent the corrected graph.", time: "Yesterday", unread: 0, online: false },
    ];

    // --- HANDLE SENDING REPLY ---
    const handleSendReply = (id) => {
        if (!replyText.trim()) return;

        setIsSending(true);

        // Simulate API Call
        setTimeout(() => {
            setIsSending(false);
            setReplyText("");
            setActiveReplyId(null);
            // Remove the answered doubt from the list
            setLiveDoubts((prev) => prev.filter((doubt) => doubt.id !== id));
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-24 transition-colors duration-300">

            {/* --- HEADER --- */}
            <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200 dark:border-white/10 transition-colors">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)} // Dummy Route: Go Back
                            className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Interactions</h1>
                    </div>
                    <motion.button
                        onClick={() => navigate('/notifications')} // Dummy Route
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative cursor-pointer"
                    >
                        <MessageCircle size={24} className="text-[#2F80FF] dark:text-[#56CCF2]" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#0b0f1a] text-[8px] flex items-center justify-center font-bold text-white shadow-sm">12</span>
                    </motion.button>
                </div>

                {/* --- CUSTOM SEGMENTED TABS --- */}
                <div className="bg-white dark:bg-[#1a2233] p-1.5 rounded-[1.5rem] flex border border-gray-200 dark:border-white/10 shadow-sm relative">
                    <div className="absolute inset-y-1.5 flex w-[calc(100%-12px)] pointer-events-none">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] rounded-[1.2rem] shadow-md shadow-blue-500/20"
                            layout
                            initial={false}
                            animate={{
                                x: activeTab === 'doubts' ? '0%' : '100%',
                                width: '50%'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    </div>

                    <button
                        onClick={() => setActiveTab('doubts')}
                        className={`flex-1 py-3.5 rounded-[1.2rem] text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 z-10 ${activeTab === 'doubts' ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
                            }`}
                    >
                        <Zap size={14} className={activeTab === 'doubts' ? 'fill-white' : ''} />
                        Live Doubts
                    </button>

                    <button
                        onClick={() => setActiveTab('chats')}
                        className={`flex-1 py-3.5 rounded-[1.2rem] text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 z-10 ${activeTab === 'chats' ? 'text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
                            }`}
                    >
                        <MessageCircle size={14} className={activeTab === 'chats' ? 'fill-white' : ''} />
                        Direct Chats
                    </button>
                </div>
            </header>

            {/* --- CONTENT AREA --- */}
            <div className="p-4 space-y-4">

                {/* Search Bar */}
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative mb-6 group"
                >
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#2F80FF] transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder={activeTab === 'doubts' ? "Search questions..." : "Search students..."}
                        className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-gray-900 dark:text-white shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    />
                </motion.div>

                <AnimatePresence mode="wait">
                    {activeTab === 'doubts' ? (

                        /* ========================= */
                        /* TAB A: LIVE DOUBTS        */
                        /* ========================= */
                        <motion.div
                            key="doubts"
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="flex justify-between items-center px-1">
                                <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em]">Urgent Doubts</h3>
                                <Filter size={14} className="text-gray-400 dark:text-gray-500 cursor-pointer" />
                            </div>

                            <AnimatePresence>
                                {liveDoubts.length > 0 ? (
                                    liveDoubts.map((doubt, index) => (
                                        <motion.div
                                            key={doubt.id}
                                            layout // Animates layout changes when items are removed
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[2rem] p-5 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            {doubt.urgent && (
                                                <div className="absolute top-0 right-0 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-500 text-[8px] font-black px-3 py-1.5 rounded-bl-xl border-b border-l border-red-100 dark:border-red-500/20 uppercase tracking-tighter animate-pulse shadow-sm">
                                                    Urgent Action
                                                </div>
                                            )}

                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] flex items-center justify-center font-bold text-sm text-white shadow-inner">
                                                    {doubt.student[0]}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">{doubt.student}</h4>
                                                    <p className="text-[10px] text-[#2F80FF] dark:text-[#56CCF2] font-bold uppercase tracking-tighter">{doubt.class}</p>
                                                </div>
                                                <div className="ml-auto flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                                    <Clock size={12} />
                                                    <span className="text-[10px] font-bold">{doubt.time}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 italic">
                                                "{doubt.question}"
                                            </p>

                                            {/* --- REPLY INPUT & ACTIONS --- */}
                                            <AnimatePresence>
                                                {activeReplyId === doubt.id ? (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="space-y-3 overflow-hidden"
                                                    >
                                                        <textarea
                                                            autoFocus
                                                            value={replyText}
                                                            onChange={(e) => setReplyText(e.target.value)}
                                                            placeholder="Type your explanation here..."
                                                            className="w-full bg-gray-50 dark:bg-[#0b0f1a] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm text-gray-900 dark:text-white shadow-inner focus:outline-none focus:border-[#2F80FF] resize-none"
                                                            rows="3"
                                                        />
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => setActiveReplyId(null)}
                                                                className="px-5 bg-gray-100 dark:bg-[#0b0f1a] text-gray-500 dark:text-gray-400 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                onClick={() => handleSendReply(doubt.id)}
                                                                disabled={isSending}
                                                                className="flex-1 bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] text-white py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
                                                            >
                                                                {isSending ? <Loader2 size={16} className="animate-spin" /> : <><Send size={16} /> Send Reply</>}
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                        className="flex gap-2"
                                                    >
                                                        <button
                                                            onClick={() => setActiveReplyId(doubt.id)}
                                                            className="flex-1 bg-gray-100 dark:bg-[#0b0f1a] text-gray-600 dark:text-gray-300 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:text-[#2F80FF] dark:hover:text-[#56CCF2] transition-colors"
                                                        >
                                                            Reply Now <ArrowUpRight size={16} strokeWidth={2.5} />
                                                        </button>
                                                        <button
                                                            onClick={() => setLiveDoubts((prev) => prev.filter((d) => d.id !== doubt.id))} // Mark as resolved directly
                                                            className="px-5 bg-emerald-50 dark:bg-[#15231a] border border-emerald-200 dark:border-[#23422e] rounded-2xl text-emerald-600 dark:text-[#4ade80] hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors"
                                                        >
                                                            <CheckCircle2 size={20} />
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className="py-20 flex flex-col items-center justify-center text-center opacity-50"
                                    >
                                        <CheckCircle2 size={48} className="text-emerald-500 mb-4" />
                                        <p className="font-bold text-gray-500">All caught up! No active doubts.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                    ) : (

                        /* ========================= */
                        /* TAB B: STUDENT CHATS      */
                        /* ========================= */
                        <motion.div
                            key="chats"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-1"
                        >
                            <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em] ml-2 mb-4">Messages</h3>

                            <div className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm">
                                {studentChats.map((chat, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
                                        key={chat.id}
                                        onClick={() => navigate(`/chat/${chat.id}`)} // Dummy Route: Open Chat
                                        className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#0b0f1a]/50 active:bg-gray-100 dark:active:bg-gray-800 transition-colors ${index !== studentChats.length - 1 ? 'border-b border-gray-100 dark:border-gray-800/50' : ''
                                            }`}
                                    >
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-[#0b0f1a] border border-blue-100 dark:border-gray-700 flex items-center justify-center font-black text-[#2F80FF] dark:text-[#56CCF2]">
                                                {chat.student[0]}
                                            </div>
                                            {chat.online && (
                                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-[#1a2233] rounded-full shadow-sm"></div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-1">
                                                <h4 className="font-bold text-sm text-gray-900 dark:text-white">{chat.student}</h4>
                                                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">{chat.time}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className={`text-xs truncate pr-4 ${chat.unread > 0 ? 'text-gray-900 dark:text-gray-200 font-bold' : 'text-gray-500'}`}>
                                                    {chat.lastMsg}
                                                </p>
                                                {chat.unread > 0 && (
                                                    <div className="bg-[#2F80FF] text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center shadow-md shadow-blue-500/30 shrink-0">
                                                        {chat.unread}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

                    <FloatingNav />

        </div>
    );
};



export default InteractionCenter;