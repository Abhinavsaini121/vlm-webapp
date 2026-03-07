import React from 'react';
import { 
  ChevronLeft, 
  ArrowDownCircle, 
  Clock, 
  CheckCircle2, 
  Search, 
  Filter, 
  ChevronRight,
  Download,
  ShieldCheck,
  Building
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PayoutHistory = () => {
  const navigate = useNavigate();

  // Dummy Payout Data
  const payouts = [
    { id: 'TXN-99201', amount: "12,500", date: "Oct 24, 2023", status: "pending", bank: "HDFC Bank (**** 4210)" },
    { id: 'TXN-88192', amount: "32,000", date: "Oct 01, 2023", status: "success", bank: "HDFC Bank (**** 4210)" },
    { id: 'TXN-77123', amount: "28,400", date: "Sep 01, 2023", status: "success", bank: "HDFC Bank (**** 4210)" },
    { id: 'TXN-66541', amount: "31,200", date: "Aug 01, 2023", status: "success", bank: "HDFC Bank (**** 4210)" },
    { id: 'TXN-55410', amount: "15,800", date: "Jul 15, 2023", status: "success", bank: "HDFC Bank (**** 4210)" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-24 transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-white/10 transition-colors">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Payout History</h1>
          </div>
          <button 
            onClick={() => console.log('Downloading statement...')}
            className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-[#2F80FF] dark:text-[#56CCF2] shadow-sm hover:scale-105 transition-all"
          >
            <Download size={20} />
          </button>
        </div>

        {/* --- SUMMARY STAT --- */}
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-1 mb-2 flex justify-between items-end"
        >
           <div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Lifetime Payouts</p>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">₹1,24,500</h2>
           </div>
           <div className="flex items-center gap-2 text-emerald-600 dark:text-[#4ade80] text-[10px] font-black uppercase tracking-widest bg-emerald-50 dark:bg-[#15231a] px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-[#23422e] shadow-sm">
              <ShieldCheck size={14} /> Verified Account
           </div>
        </motion.div>
      </header>

      <div className="p-4 space-y-6">
        
        {/* --- SEARCH & FILTERS --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2"
        >
           <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#2F80FF] dark:group-focus-within:text-[#56CCF2] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search by TXN ID..."
                className="w-full bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-gray-900 dark:text-white shadow-sm focus:outline-none focus:border-[#2F80FF] focus:shadow-[0_0_20px_rgba(47,128,255,0.15)] transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
           </div>
           <button className="p-3.5 bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-2xl text-gray-500 dark:text-gray-400 shadow-sm hover:border-[#2F80FF] hover:text-[#2F80FF] transition-all">
              <Filter size={20} />
           </button>
        </motion.div>

        {/* --- PAYOUT LIST --- */}
        <div className="space-y-3">
           <h3 className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em] ml-1">Past Transfers</h3>
           
           {payouts.map((payout, index) => (
              <motion.div 
                key={payout.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                // onClick={() => navigate(`/payout/${payout.id}`)}
                className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 rounded-[2rem] p-5 shadow-sm dark:shadow-none hover:shadow-md hover:border-blue-200 dark:hover:border-[#2F80FF]/30 active:scale-[0.98] transition-all group"
              >
                 <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                       <div className={`p-3 rounded-2xl ${
                          payout.status === 'success' 
                            ? 'bg-emerald-50 dark:bg-[#4ade80]/10 text-emerald-600 dark:text-[#4ade80]' 
                            : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500'
                       }`}>
                          <ArrowDownCircle size={24} />
                       </div>
                       <div>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest">{payout.date}</p>
                          <h4 className="text-lg font-black text-gray-900 dark:text-gray-100 group-hover:text-[#2F80FF] dark:group-hover:text-[#56CCF2] transition-colors">₹{payout.amount}</h4>
                       </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center gap-2 border ${
                       payout.status === 'success' 
                       ? 'bg-emerald-50 dark:bg-[#15231a] text-emerald-600 dark:text-[#4ade80] border-emerald-200 dark:border-[#23422e]' 
                       : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-500/20'
                    }`}>
                       {payout.status === 'success' ? <CheckCircle2 size={12}/> : <Clock size={12}/>}
                       {payout.status}
                    </div>
                 </div>

                 <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800/50">
                    <div className="flex items-center gap-3">
                       <Building size={14} className="text-gray-400 dark:text-gray-600 group-hover:text-[#2F80FF] transition-colors" />
                       <span className="text-[10px] font-bold text-gray-600 dark:text-gray-500">{payout.bank}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-gray-500 dark:text-gray-600">ID: {payout.id}</span>
                       <ChevronRight size={14} className="text-gray-400 dark:text-gray-700 group-hover:text-[#2F80FF] dark:group-hover:text-[#56CCF2] group-hover:translate-x-1 transition-all" />
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>

        {/* --- HELP FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-100/50 dark:bg-[#1a2233]/40 border border-gray-300 dark:border-gray-800 border-dashed rounded-[2rem] p-6 text-center mt-6"
        >
           <p className="text-xs text-gray-600 dark:text-gray-500 font-medium leading-relaxed mb-4">
             Missing a payout? Please contact our finance support team for manual verification.
           </p>
           <button 
             onClick={() => navigate('/support')}
             className="text-xs font-black text-[#2F80FF] dark:text-[#56CCF2] hover:text-blue-700 dark:hover:text-blue-400 transition-colors uppercase tracking-[0.2em] underline underline-offset-8"
           >
             Raise a Support Ticket
           </button>
        </motion.div>

      </div>
    </div>
  );
};

export default PayoutHistory;