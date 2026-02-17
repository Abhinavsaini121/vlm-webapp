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

const FeedbackReviews = () => {

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans pb-32 transition-colors duration-300">

      {/* HEADER */}
      <header className="p-4 bg-gray-50/90 dark:bg-[#0f0f10]/90 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2.5 bg-white dark:bg-[#1a1a1c] rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-xl font-black tracking-tight text-gray-800 dark:text-white">Performance</h1>
          </div>
          <button className="p-2.5 bg-white dark:bg-[#1a1a1c] rounded-2xl border border-gray-200 dark:border-gray-800 text-purple-600 dark:text-purple-500">
            <TrendingUp size={20} />
          </button>
        </div>
      </header>

      <div className="p-4 space-y-6">

        {/* RATING SUMMARY */}
        <div className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-6 shadow-sm dark:shadow-none relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#4ade80]/10 blur-[50px]"></div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Average Rating</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-5xl font-black text-[#4ade80]">{stats.avgRating}</h2>
                <span className="text-sm font-bold text-gray-400">/ 5.0</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Total Reviews</p>
              <h3 className="text-xl font-black text-gray-800 dark:text-white">{stats.totalReviews}</h3>
            </div>
          </div>

          <div className="space-y-2">
            {stats.distribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-8">
                  <span className="text-[10px] font-black text-gray-500">{item.stars}</span>
                  <Star size={10} className="fill-gray-400 text-gray-400" />
                </div>
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-600 to-[#4ade80] rounded-full" 
                    style={{ width: `${(item.count / stats.totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 w-6">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FILTER */}
        <div className="flex justify-between items-center px-1">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Student Feedback</h3>
          <button className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400">
            <Filter size={14} /> Newest First
          </button>
        </div>

        {/* REVIEWS */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-[#1a1a1c]/60 border border-gray-200 dark:border-gray-800 rounded-[2rem] p-5 active:scale-[0.98] transition-all shadow-sm dark:shadow-none">

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center font-black text-gray-500 dark:text-gray-400 text-xs">
                    {review.student.split(' ')[0][0]}
                    {review.student.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 dark:text-gray-100">{review.student}</h4>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-gray-100 dark:bg-black/40 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-800">
                  <Star size={12} className="fill-[#4ade80] text-[#4ade80]" />
                  <span className="text-xs font-black text-[#4ade80]">{review.rating}</span>
                </div>
              </div>

              <p className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest mb-2 px-1">
                Class: {review.class}
              </p>

              <div className="bg-gray-50 dark:bg-[#0f0f10] p-4 rounded-2xl relative border border-gray-200 dark:border-gray-800">
                <MessageSquareQuote size={20} className="absolute -top-2 -left-2 text-gray-300 dark:text-gray-800" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex justify-between items-center mt-4 px-1">
                <button className="flex items-center gap-2 text-[10px] font-black text-gray-500 dark:text-gray-600 uppercase tracking-widest">
                  <ThumbsUp size={14} /> Helpful
                </button>
                <button className="text-gray-400 dark:text-gray-700">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="bg-emerald-50 dark:bg-[#15231a] border border-emerald-200 dark:border-[#23422e] p-5 rounded-[2rem] flex items-center gap-4 mt-4">
          <div className="p-3 bg-[#4ade80]/10 rounded-2xl">
            <TrendingUp size={24} className="text-[#4ade80]" />
          </div>
          <div>
            <p className="text-xs text-emerald-600 dark:text-[#4ade80] font-black uppercase tracking-tight">Top Performer</p>
            <p className="text-[10px] text-emerald-500/70 dark:text-[#4ade80]/70 font-medium leading-tight">
              Your rating is in the top 5% of teachers this week. Keep it up!
            </p>
          </div>
        </div>

      </div>

      <FloatingNav />
    </div>
  );
};

export default FeedbackReviews;
