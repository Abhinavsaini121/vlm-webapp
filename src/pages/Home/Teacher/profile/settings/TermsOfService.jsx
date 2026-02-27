import React from 'react';
import { 
  ChevronLeft, FileSignature, UserCheck, 
  Copyright, Wallet, AlertTriangle, Power 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  // Dummy Terms of Service Content
  const terms = [
    {
      icon: <UserCheck size={20} />,
      title: "1. Account Responsibilities",
      content: "As an educator on EduTeacher, you must provide accurate KYC details. You are strictly responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account."
    },
    {
      icon: <Copyright size={20} />,
      title: "2. Content Ownership & License",
      content: "You retain ownership of the educational content you upload. However, by uploading, you grant EduTeacher a worldwide, royalty-free license to host, distribute, and promote your content across our platform."
    },
    {
      icon: <Wallet size={20} />,
      title: "3. Payments & Earnings",
      content: "Earnings are calculated based on your content engagement and live class attendance. Payouts are processed by the 1st of every month. We reserve the right to withhold funds if fraudulent activity is detected."
    },
    {
      icon: <AlertTriangle size={20} />,
      title: "4. Prohibited Conduct",
      content: "You agree not to upload copyrighted material without permission, engage in hate speech, harassment, or spam. Professionalism and respect towards students and fellow educators are mandatory."
    },
    {
      icon: <Power size={20} />,
      title: "5. Account Termination",
      content: "EduTeacher reserves the right to suspend or terminate your account immediately, without prior notice, if you violate any of these terms, or if your account remains inactive for an extended period."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans transition-colors duration-300 pb-12">
      
      {/* --- HEADER --- */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-white/10 flex items-center gap-4 transition-colors">
        <button 
          onClick={() => navigate(-1)}
          className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 shadow-sm hover:scale-105 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Terms of Service</h1>
      </header>

      <div className="p-6 space-y-8">
        
        {/* --- HERO SECTION --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center justify-center text-center space-y-3 mt-4"
        >
          <div className="w-16 h-16 bg-blue-50 dark:bg-[#2F80FF]/10 rounded-full flex items-center justify-center text-[#2F80FF] dark:text-[#56CCF2] mb-2 shadow-sm border border-blue-100 dark:border-[#2F80FF]/20">
            <FileSignature size={32} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Terms & Conditions</h2>
          <div className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 px-4 py-1.5 rounded-full shadow-sm">
            <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Effective Date: <span className="text-[#2F80FF] dark:text-[#56CCF2]">October 24, 2023</span>
            </p>
          </div>
        </motion.div>

        {/* --- INTRODUCTION TEXT --- */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed text-center px-2"
        >
          Welcome to EduTeacher. By accessing our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
        </motion.p>

        {/* --- TERMS SECTIONS --- */}
        <div className="space-y-4 pt-2">
          {terms.map((term, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 bg-blue-50 dark:bg-[#2F80FF]/10 rounded-xl text-[#2F80FF] dark:text-[#56CCF2] group-hover:scale-110 group-hover:bg-[#2F80FF] group-hover:text-white dark:group-hover:bg-[#56CCF2] dark:group-hover:text-black transition-all shadow-sm">
                  {term.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-gray-100">
                  {term.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium pl-1">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- ACCEPTANCE BUTTON / FOOTER --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6 pb-4"
        >
           <button 
             onClick={() => navigate(-1)}
             className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
           >
             I Understand & Agree
           </button>
           <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center mt-4 opacity-60">
             EduTeacher Legal Department
           </p>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsOfService;