import React from 'react';
import { ChevronLeft, ShieldAlert, Database, Lock, Share2, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const policies = [
    {
      icon: <Database size={20} />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This includes your name, email, phone number, and KYC documents for verification."
    },
    {
      icon: <FileText size={20} />,
      title: "How We Use Your Data",
      content: "Your data is primarily used to maintain your teacher profile, process your wallet earnings and payouts securely, and provide personalized support. We also analyze app usage to improve our platform's performance and introduce new features."
    },
    {
      icon: <Share2 size={20} />,
      title: "Data Sharing & Third Parties",
      content: "We do not sell your personal data. We may share necessary information with trusted third-party services exclusively for processing payments, conducting background KYC checks, and ensuring cloud hosting security."
    },
    {
      icon: <Lock size={20} />,
      title: "Security Measures",
      content: "EduTeacher implements robust, industry-standard security protocols including end-to-end encryption for your live classes and secure hashing for your passwords and financial details. However, no internet transmission is 100% secure."
    },
    {
      icon: <Mail size={20} />,
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, your data, or your rights, please contact our Data Protection Officer at privacy@eduteacher.in."
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
        <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">Privacy Policy</h1>
      </header>

      <div className="p-6 space-y-8">
        
        {/* --- LAST UPDATED BADGE --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center justify-center text-center space-y-3 mt-4"
        >
          <div className="w-16 h-16 bg-blue-50 dark:bg-[#2F80FF]/10 rounded-full flex items-center justify-center text-[#2F80FF] dark:text-[#56CCF2] mb-2 shadow-sm">
            <ShieldAlert size={32} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Your Privacy Matters</h2>
          <div className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 px-4 py-1.5 rounded-full shadow-sm">
            <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Last Updated: <span className="text-[#2F80FF] dark:text-[#56CCF2]">October 24, 2023</span>
            </p>
          </div>
        </motion.div>

        {/* --- POLICY SECTIONS --- */}
        <div className="space-y-4 pt-4">
          {policies.map((policy, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + (index * 0.1) }}
              className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/10 p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 bg-blue-50 dark:bg-[#2F80FF]/10 rounded-xl text-[#2F80FF] dark:text-[#56CCF2] group-hover:scale-110 group-hover:bg-[#2F80FF] group-hover:text-white dark:group-hover:bg-[#56CCF2] dark:group-hover:text-black transition-all">
                  {policy.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-gray-100">
                  {policy.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium pl-1">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER NOTE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6 pb-4 flex flex-col items-center justify-center text-center opacity-60"
        >
           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">EduTeacher Legal Department</p>
           <p className="text-[9px] font-medium text-gray-400 mt-1">By using the app, you agree to these terms.</p>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;