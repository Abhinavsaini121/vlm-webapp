import React from 'react';
import { 
  ChevronLeft, 
  TrendingUp, 
  Star, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight,
  Target,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const IncentiveBreakdown = () => {
  const navigate = useNavigate();

  // Dummy Incentive Data
  const incentives = [
    {
      id: 1,
      title: "High Attendance Bonus",
      amount: "2,000",
      criteria: "90% Avg Attendance",
      current: 92,
      target: 90,
      icon: <Users className="text-blue-500 dark:text-blue-400" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Top Rating Reward",
      amount: "1,500",
      criteria: ">4.7 Star Rating",
      current: 4.8,
      target: 4.7,
      icon: <Star className="text-yellow-500 fill-yellow-500" />,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 3,
      title: "Student Retention Bonus",
      amount: "5,000",
      criteria: "95% Course Completion",
      current: 88,
      target: 95,
      icon: <Target className="text-emerald-500 dark:text-[#4ade80]" />,
      color: "from-emerald-500 to-[#4ade80]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* --- HEADER --- */}
      <header className="flex justify-between items-center p-6 sticky top-0 z-40 bg-gray-50/80 dark:bg-[#0b0f1a]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 bg-white dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-black tracking-tight">Incentives</h1>
        </div>
        <button 
          className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-xl border border-purple-200 dark:border-white/5"
        >
          <TrendingUp className="text-purple-600 dark:text-purple-400" />
        </button>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6 md:space-y-8">
        
        {/* ROW 1: SUMMARY & TIPS (Desktop: Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SUMMARY HERO (Takes 2 columns on large screens) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/40 dark:to-indigo-900/40 border border-purple-200 dark:border-purple-500/30 rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden shadow-xl shadow-purple-500/5 dark:shadow-purple-900/20">
            <div className="absolute top-0 right-0 p-6">
                <Zap size={48} className="text-purple-200 dark:text-purple-500/20 fill-current" />
            </div>
            
            <p className="text-xs text-purple-600 dark:text-purple-300 font-bold uppercase tracking-widest mb-2">Extra Earned This Month</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">₹10,200</h2>
            
            <div className="flex items-center gap-2 text-emerald-700 dark:text-[#4ade80] bg-emerald-100 dark:bg-[#15231a] w-fit px-4 py-2 rounded-full border border-emerald-200 dark:border-[#23422e] shadow-sm">
                <TrendingUp size={16} />
                <span className="text-xs font-bold uppercase tracking-wide">+15% from last month</span>
            </div>
          </div>

          {/* TIPS SECTION (Takes 1 column) */}
          <div className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-6 md:p-8 shadow-sm h-full flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-purple-100 dark:bg-purple-500/10 rounded-xl">
                   <Info size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">Pro Tips</h4>
             </div>
             <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-500 rounded-full mt-1.5 shrink-0"></div>
                   <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                     Respond to 100% of <span className="text-gray-900 dark:text-white font-bold">Live Doubts</span> to unlock badges.
                   </p>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-500 rounded-full mt-1.5 shrink-0"></div>
                   <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                     Schedule classes <span className="text-gray-900 dark:text-white font-bold">48 hours early</span> for a bonus.
                   </p>
                </li>
             </ul>
             <button className="w-full mt-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                View All Rules <ArrowUpRight size={14} />
             </button>
          </div>
        </div>

        {/* ROW 2: DETAILED CARDS GRID */}
        <div>
           <h3 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest ml-1 mb-4">Live Performance Goals</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
             {incentives.map((item) => (
                <motion.div 
                  whileHover={{ y: -4 }}
                  key={item.id} 
                  className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 transition-all duration-300"
                >
                   <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                         <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            {item.icon}
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h4>
                            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-1">Goal: {item.criteria}</p>
                         </div>
                      </div>
                   </div>
                   
                   <div className="flex justify-between items-end mb-3">
                       <div>
                          <p className="text-2xl font-bold text-emerald-600 dark:text-[#4ade80] tracking-tight">+₹{item.amount}</p>
                       </div>
                       <div className="text-[10px] font-bold text-gray-500 dark:text-gray-600">
                          {item.current >= item.target ? (
                            <span className="text-emerald-600 dark:text-[#4ade80] flex items-center gap-1 bg-emerald-50 dark:bg-transparent px-2 py-1 rounded-lg">
                              Achieved <CheckCircle2 size={12}/>
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg">In Progress</span>
                          )}
                       </div>
                   </div>

                   {/* Progress Bar */}
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Curr: {item.current}{item.id === 2 ? '' : '%'}</span>
                         <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase">Target: {item.target}{item.id === 2 ? '' : '%'}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden border border-gray-200 dark:border-gray-800">
                         <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((item.current / item.target) * 100, 100)}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]`} 
                         />
                      </div>
                   </div>
                </motion.div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default IncentiveBreakdown;