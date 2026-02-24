import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Search, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  HelpCircle, 
  ExternalLink,
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HelpSupport = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  // Dummy FAQ Data
  const faqs = [
    { id: 1, q: "When will I receive my monthly payout?", a: "Payouts are processed on the 1st of every month. It may take 24-48 hours to reflect in your bank account depending on your bank's processing time." },
    { id: 2, q: "How do I mark attendance for a live class?", a: "Once you end a live session, the attendance screen triggers automatically. You can also find it under the 'Tasks' section in your dashboard." },
    { id: 3, q: "Why is my profile still under review?", a: "Admin verification usually takes 24 hours. If your documents are blurry or incomplete, it might take longer. Please check your email for any status updates." },
    { id: 4, q: "Can I schedule a class for the same day?", a: "Yes, you can schedule a class as early as 30 minutes before the start time, but we recommend 24 hours notice for better student attendance." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-24 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-white/10 transition-colors">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Support Center</h1>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative group"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#2F80FF] transition-all" size={18} />
          <input 
            type="text" 
            placeholder="Search for help..."
            className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-gray-900 dark:text-white shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all placeholder:text-gray-500"
          />
        </motion.div>
      </header>

      <div className="p-6 space-y-8">
        
        {/* --- ACTIVE TICKET SECTION --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-[#1a2233] border-l-4 border-[#2F80FF] rounded-3xl p-5 shadow-sm dark:shadow-none relative overflow-hidden"
        >
           <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                 <Clock size={14} className="text-[#2F80FF] dark:text-[#56CCF2]" />
                 <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Active Ticket</span>
              </div>
              <span className="text-[9px] font-black text-[#2F80FF] dark:text-[#56CCF2] bg-blue-50 dark:bg-[#2F80FF]/10 px-2 py-0.5 rounded border border-blue-100 dark:border-[#2F80FF]/20">#TK-4421</span>
           </div>
           <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200">Payout not received for October</h3>
           <p className="text-[10px] text-gray-500 mt-1">Status: Admin is reviewing your bank statement.</p>
           <div className="mt-4 flex justify-end">
              <button 
                onClick={() => navigate('/ticket/TK-4421')}
                className="text-[10px] font-black text-[#2F80FF] dark:text-[#56CCF2] hover:text-blue-700 transition-colors uppercase tracking-widest flex items-center gap-1 group"
              >
                 View Conversation <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </motion.div>

        {/* --- QUICK CONTACT GRID --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
           {/* WhatsApp Card (Kept Emerald for Brand Recognition) */}
           <ContactCard 
             icon={<MessageCircle size={24} className="text-emerald-600 dark:text-[#4ade80]" />} 
             label="WhatsApp" 
             desc="Instant Reply" 
             colorClass="bg-emerald-50 dark:bg-[#15231a] border-emerald-200 dark:border-[#23422e] hover:shadow-emerald-500/10"
             onClick={() => console.log('Open WhatsApp')}
           />
           {/* Call Us Card (Blue Theme) */}
           <ContactCard 
             icon={<Phone size={24} className="text-[#2F80FF] dark:text-[#56CCF2]" />} 
             label="Call Us" 
             desc="10am - 7pm" 
             colorClass="bg-blue-50 dark:bg-blue-500/5 border-blue-200 dark:border-blue-500/20 hover:shadow-blue-500/10"
             onClick={() => console.log('Initiate Call')}
           />
        </motion.div>

        {/* --- FAQ SECTION --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
           <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em]">Common Questions</h3>
              <HelpCircle size={14} className="text-gray-400 dark:text-gray-600" />
           </div>

           <div className="space-y-3">
              {faqs.map((faq, index) => (
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.4 + (index * 0.1) }}
                   key={faq.id} 
                   onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                   className={`bg-white dark:bg-[#1a2233] border rounded-3xl p-5 cursor-pointer transition-all duration-300 shadow-sm dark:shadow-none ${
                     activeFaq === faq.id ? 'border-blue-300 dark:border-[#2F80FF]/50 shadow-md shadow-blue-500/10' : 'border-gray-200 dark:border-white/10 hover:border-blue-200 dark:hover:border-[#2F80FF]/30'
                   }`}
                 >
                    <div className="flex justify-between items-center gap-4">
                       <h4 className={`text-xs font-bold leading-snug transition-colors ${activeFaq === faq.id ? 'text-[#2F80FF] dark:text-[#56CCF2]' : 'text-gray-800 dark:text-gray-200'}`}>
                         {faq.q}
                       </h4>
                       <ChevronRight size={18} className={`text-gray-400 dark:text-gray-600 transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-90 text-[#2F80FF] dark:text-[#56CCF2]' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {activeFaq === faq.id && (
                         <motion.div
                           initial={{ height: 0, opacity: 0, marginTop: 0 }}
                           animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                           exit={{ height: 0, opacity: 0, marginTop: 0 }}
                           className="overflow-hidden"
                         >
                           <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                             {faq.a}
                           </p>
                         </motion.div>
                      )}
                    </AnimatePresence>
                 </motion.div>
              ))}
           </div>
        </motion.div>

        {/* --- KNOWLEDGE BASE --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-3 pt-4"
        >
           <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em] ml-1">Learning Center</h3>
           <div 
             onClick={() => navigate('/handbook')}
             className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[2rem] p-5 flex items-center justify-between group active:bg-gray-50 dark:active:bg-gray-800 transition-all cursor-pointer shadow-sm hover:border-blue-200 dark:hover:border-[#2F80FF]/30 hover:shadow-blue-500/10"
           >
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-gradient-to-tr from-[#2F80FF] to-[#56CCF2] rounded-2xl shadow-inner">
                    <MessageSquare size={20} className="text-white" />
                 </div>
                 <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-[#2F80FF] transition-colors">Teacher Handbook</h4>
                    <p className="text-[9px] text-gray-500 font-medium">Learn how to maximize earnings</p>
                 </div>
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-[#2F80FF] transition-colors group-hover:scale-110" />
           </div>
        </motion.div>

        {/* --- SYSTEM UPTIME --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-emerald-50 dark:bg-[#15231a] border border-emerald-200 dark:border-[#23422e] p-4 rounded-2xl flex items-center justify-center gap-3 shadow-sm"
        >
           <CheckCircle2 size={14} className="text-emerald-600 dark:text-[#4ade80]" />
           <span className="text-[9px] font-black text-emerald-600 dark:text-[#4ade80] uppercase tracking-[0.1em]">All systems operational • v2.4</span>
        </motion.div>

      </div>
    </div>
  );
};

// Helper Contact Card - Updated for Light/Dark themes
const ContactCard = ({ icon, label, desc, colorClass, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-6 rounded-[2.5rem] border text-left flex flex-col items-start gap-4 transition-all active:scale-95 shadow-sm group ${colorClass}`}
  >
     <div className="p-2 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <div>
        <h4 className="text-xs font-black text-gray-900 dark:text-white uppercase tracking-tight">{label}</h4>
        <p className="text-[9px] text-gray-500 font-bold uppercase mt-0.5">{desc}</p>
     </div>
  </button>
);

export default HelpSupport;