import React from 'react';
import FloatingNav from '../../../../components/Bottombar/Bottombar'; 
import { 
  ChevronLeft, 
  Star, 
  MessageSquareQuote, 
  TrendingUp, 
  Filter, 
  MoreHorizontal,
  ThumbsUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeedbackReviews = () => {
  const navigate = useNavigate();

  const stats = {
    avgRating: "4.8",
    totalReviews: 124,
    trend: "+0.2 this month",
    distribution: [
      { stars: 5, count: 98 },
      { stars: 4, count: 20 },
      { stars: 3, count: 4 },
      { stars: 2, count: 2 },
      { stars: 1, count: 0 },
    ]
  };

  const reviews = [
    { id: 1, student: "Amit K.", rating: 5, date: "2 hours ago", class: "Physics: Quantum Mechanics", comment: "The way you explained the double-slit experiment was mind-blowing! Best teacher on the platform." },
    { id: 2, student: "Sneha R.", rating: 4, date: "Yesterday", class: "Advanced Algebra", comment: "Great session, but I wish we had more time for the Q&A at the end." },
    { id: 3, student: "Rohan D.", rating: 5, date: "2 days ago", class: "Physics: Quantum Mechanics", comment: "Very clear and concise. The diagrams helped a lot." },
    { id: 4, student: "Meera J.", rating: 5, date: "3 days ago", class: "Trigonometry Basics", comment: "Super helpful! I finally understand sin/cos waves." },
  ];

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    // Changed: Background to #0b0f1a
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">

      {/* HEADER */}
      {/* Changed: BG to #0b0f1a/90 */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-4 bg-gray-50/90 dark:bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-white/5"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              // Changed: Card BG to #1a2233
              className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <h1 className="text-xl font-black tracking-tight text-gray-800 dark:text-white">Performance</h1>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            // Changed: Text to Blue
            className="p-2.5 bg-white dark:bg-[#1a2233] rounded-2xl border border-gray-200 dark:border-white/10 text-[#2F80FF] dark:text-[#56CCF2]"
          >
            <TrendingUp size={20} />
          </motion.button>
        </div>
      </motion.header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="p-4 space-y-6"
      >

        {/* RATING SUMMARY */}
        {/* Changed: BG to #1a2233 */}
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/5 rounded-[2.5rem] p-6 shadow-sm dark:shadow-none relative overflow-hidden"
        >
          {/* Changed: Blob to Blue */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-[#2F80FF]/20 blur-[50px]"
          ></motion.div>

          <div className="flex items-center justify-between mb-6 relative z-10">
            <div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Average Rating</p>
              <div className="flex items-baseline gap-2">
                {/* Kept Emerald for the high score as it signifies "Good/Money" */}
                <h2 className="text-5xl font-black text-emerald-500 dark:text-emerald-400">{stats.avgRating}</h2>
                <span className="text-sm font-bold text-gray-400">/ 5.0</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Total Reviews</p>
              <h3 className="text-xl font-black text-gray-800 dark:text-white">{stats.totalReviews}</h3>
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            {stats.distribution.map((item, index) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-8">
                  <span className="text-[10px] font-black text-gray-500">{item.stars}</span>
                  <Star size={10} className="fill-gray-400 text-gray-400" />
                </div>
                <div className="flex-1 h-1.5 bg-gray-100 dark:bg-[#0b0f1a] rounded-full overflow-hidden">
                  {/* Changed: Gradient to Blue/Cyan & Added Width Animation */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.count / stats.totalReviews) * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    className="h-full bg-gradient-to-r from-[#2F80FF] to-[#56CCF2] rounded-full" 
                  ></motion.div>
                </div>
                <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 w-6">{item.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FILTER */}
        <motion.div variants={itemVariants} className="flex justify-between items-center px-1">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Student Feedback</h3>
          <button className="flex items-center gap-2 text-xs font-bold text-[#2F80FF] dark:text-[#56CCF2]">
            <Filter size={14} /> Newest First
          </button>
        </motion.div>

        {/* REVIEWS */}
        <div className="space-y-4">
          {reviews.map((review) => (
            // Changed: BG to #1a2233
            <motion.div 
              key={review.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-[#1a2233] border border-gray-200 dark:border-white/5 rounded-[2rem] p-5 shadow-sm dark:shadow-none"
            >

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {/* Changed: Avatar BG to dark slate */}
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#0b0f1a] border border-gray-200 dark:border-white/10 flex items-center justify-center font-black text-gray-500 dark:text-gray-400 text-xs">
                    {review.student.split(' ')[0][0]}
                    {review.student.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 dark:text-gray-100">{review.student}</h4>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#0b0f1a] px-2 py-1 rounded-lg border border-gray-200 dark:border-white/5">
                  <Star size={12} className="fill-[#4ade80] text-[#4ade80]" />
                  <span className="text-xs font-black text-[#4ade80]">{review.rating}</span>
                </div>
              </div>

              {/* Changed: Class Text to Blue */}
              <p className="text-[10px] text-[#2F80FF] dark:text-[#56CCF2] font-bold uppercase tracking-widest mb-2 px-1">
                Class: {review.class}
              </p>

              {/* Changed: Quote Box BG to #0b0f1a */}
              <div className="bg-gray-50 dark:bg-[#0b0f1a] p-4 rounded-2xl relative border border-gray-200 dark:border-white/5">
                <MessageSquareQuote size={20} className="absolute -top-2 -left-2 text-gray-300 dark:text-gray-700" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 px-1">
                <button className="flex items-center gap-2 text-[10px] font-black text-gray-500 dark:text-gray-500 hover:text-[#2F80FF] transition-colors uppercase tracking-widest">
                  <ThumbsUp size={14} /> Helpful
                </button>
                <button className="text-gray-400 dark:text-gray-600 hover:text-white transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER - Changed to Gradient Card style to match Wallet */}
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-[#2F80FF]/10 to-[#56CCF2]/10 border border-[#2F80FF]/20 p-5 rounded-[2rem] flex items-center gap-4 mt-4"
        >
          {/* Changed: Icon container BG */}
          <div className="p-3 bg-[#2F80FF]/20 rounded-2xl">
            <TrendingUp size={24} className="text-[#2F80FF] dark:text-[#56CCF2]" />
          </div>
          <div>
            <p className="text-xs text-[#2F80FF] dark:text-[#56CCF2] font-black uppercase tracking-tight">Top Performer</p>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 font-medium leading-tight mt-1">
              Your rating is in the top 5% of teachers this week. Keep it up!
            </p>
          </div>
        </motion.div>

      </motion.div>

      <FloatingNav />
    </div>
  );
};

export default FeedbackReviews;