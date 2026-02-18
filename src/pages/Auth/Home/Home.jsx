import React from "react";
import {
  Search,
  SlidersHorizontal,
  Bell,
  Flame,
  Bookmark,
  ChevronRight,
} from "lucide-react";

const Home = () => {
  // Data for multiple cards
  const courses = [
    {
      title: "Thermodynamics",
      mission: "Mission: Thermodynamics Trial",
      reward: "Reward: 120 XP",
      category: "Heat Mastery Arena",
      coins: "850",
      players: "7,830",
      image:
        "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2024/01/09162453/thermodynamics-2-1.png",
    },
    {
      title: "Organic Chemistry",
      mission: "Mission: Carbon Bonding",
      reward: "Reward: 150 XP",
      category: "Molecular Lab",
      coins: "920",
      players: "5,120",
      image: "https://i.ytimg.com/vi/B_ketdzJtY8/maxresdefault.jpg",
    },
    {
      title: "Quantum Physics",
      mission: "Mission: Particle Wave Duel",
      reward: "Reward: 200 XP",
      category: "Atomic Universe",
      coins: "1,100",
      players: "3,450",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Calculus III",
      mission: "Mission: Derivative Rush",
      reward: "Reward: 180 XP",
      category: "Maths Dimension",
      coins: "750",
      players: "6,200",
      image: "https://i.ytimg.com/vi/2_21erD-nBg/maxresdefault.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-24">
      {/* 1. Top Status Bar (Purple -> Blue) */}
      <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-[#0a0d14]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-1 bg-[#111721] px-3 py-1 rounded-full border border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span className="text-xs font-bold">6 Day Streak</span>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:brightness-110">
            <span className="bg-yellow-400 w-2 h-2 rounded-sm"></span> Class 12
          </div>
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 cursor-pointer hover:brightness-110">
            💰 1,240
          </div>
          <div className="bg-[#3abef9] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 text-white cursor-pointer hover:brightness-110">
            💎 12
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* 2. Header (Avatar & Welcome) */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh"
                alt="Profile"
                className="w-16 h-16 rounded-2xl border-2 border-yellow-500 p-0.5 group-hover:scale-105 transition-transform"
              />
              <div className="absolute -bottom-2 -right-1 bg-yellow-500 text-black text-[10px] font-black px-1.5 rounded-md border-2 border-[#0a0d14]">
                Level 5
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-yellow-400 font-bold text-lg">
                <span className="text-xl">🌟</span> Welcome Back,
              </div>
              <h1 className="text-2xl font-black tracking-tight leading-tight">
                Explorer Harsh!
              </h1>
              <div className="text-[10px] text-[#3abef9] font-bold mt-1 uppercase tracking-wider">
                320 / 500 XP
              </div>
            </div>
          </div>
          <button className="bg-[#111721] p-3 rounded-full border border-gray-800 hover:bg-gray-800 transition-all active:scale-90 shadow-lg shadow-blue-500/5">
            <Bell className="w-6 h-6 text-[#3abef9]" />
          </button>
        </div>

        {/* 3. Search Bar */}
        <div className="mt-6 flex gap-3">
          <div className="relative flex-1">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3abef9]" />

  <input
    type="text"
    placeholder="Search for.."
    className="w-full bg-[#111721] border border-[#3abef9] text-white py-4 pl-12 pr-4 rounded-2xl font-semibold placeholder:text-gray-500 outline-none shadow-[0_0_20px_rgba(58,190,249,0.3)]"
  />
          </div>
          <button className="bg-[#3abef9] p-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all active:scale-95">
            <SlidersHorizontal className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* 4. Daily Rewards Card (Gradient Update) */}
        <div className="mt-8 relative overflow-hidden bg-gradient-to-r from-[#3abef9] via-[#4cc9f0] to-[#219ebc] rounded-[32px] p-6 min-h-[180px] cursor-pointer group shadow-xl shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-black italic tracking-tighter">
                Daily Rewards Section
              </h2>
              <div className="bg-black/20 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1 border border-white/20">
                ⌛ (2h 14m left)
              </div>
            </div>
            <p className="mt-2 text-sm font-bold text-white max-w-[200px] leading-snug">
              Solve 5 MCQ today and win 50 XP
            </p>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2.5 rounded-xl font-black text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg">
              Start Quest
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-6 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* 5. New Worlds to Unlock */}
        <SectionHeader title="New Worlds to Unlock" />
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {[
            "Science",
            "Arts & Humanities",
            "Commerce",
            "Maths",
            "Social Science",
          ].map((item, i) => (
            <button
              key={i}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all active:scale-95 ${
                i === 1
                  ? "text-white border-b-2 border-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 6. Popular Courses Section (Purple -> Blue Tag) */}
        <SectionHeader title="Popular Courses" />
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
          {["All", "Physics", "Chemistry", "Arts", "Biology", "Maths"].map(
            (tag, i) => (
              <button
                key={i}
                className={`px-8 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                  i === 1
                    ? "bg-[#3abef9] text-white shadow-lg shadow-blue-500/30"
                    : "bg-[#111721] text-gray-300 border border-gray-800 hover:bg-gray-800"
                }`}
              >
                {tag}
              </button>
            ),
          )}
        </div>

        {/* 7. Course Cards Grid - Blue Borders Added */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* 8. Ask a Teacher Instantly */}
        <SectionHeader title="👩‍🏫 Ask a Teacher Instantly" />
        <div className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-2">
          {[
            { name: "Jiya", img: "https://i.pravatar.cc/150?u=jiya" },
            { name: "Aman", img: "https://i.pravatar.cc/150?u=aman" },
            { name: "Rahul.J", img: "https://i.pravatar.cc/150?u=rahul" },
            { name: "Rahul.J", img: "https://i.pravatar.cc/150?u=rahul" },
            { name: "Rahul.J", img: "https://i.pravatar.cc/150?u=rahul" },
            { name: "Manav", img: "https://i.pravatar.cc/150?u=manav" },
            { name: "Manav", img: "https://i.pravatar.cc/150?u=manav" },
            { name: "Manav", img: "https://i.pravatar.cc/150?u=manav" },
            { name: "Jiya", img: "https://i.pravatar.cc/150?u=jiya" },
            { name: "Jiya", img: "https://i.pravatar.cc/150?u=jiya" },
          ].map((teacher, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 flex-shrink-0 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={teacher.img}
                  className="w-24 h-24 rounded-[30px] object-cover border-2 border-transparent group-hover:border-[#3abef9] transition-all duration-300 shadow-xl shadow-black/50 group-hover:scale-105"
                  alt={teacher.name}
                />
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-4 border-[#0a0d14] rounded-full"></div>
              </div>
              <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                {teacher.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Section Header Component
const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-between mt-12 mb-5">
    <h3 className="text-2xl font-black tracking-tight">{title}</h3>
    <button className="text-[10px] font-black uppercase flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer group">
      SEE ALL{" "}
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

// Course Card Component (Blue Border Match)
const CourseCard = ({
  title,
  mission,
  reward,
  category,
  coins,
  players,
  image,
}) => (
  <div className="bg-[#111721] rounded-[32px] overflow-hidden border-2 border-[#3abef9] transition-all hover:shadow-[0_0_30px_rgba(58,190,249,0.15)] cursor-pointer group">
    <div className="relative h-52 overflow-hidden">
      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        alt={title}
      />
      <div className="absolute top-4 left-4 bg-white text-black font-black px-4 py-1.5 text-xs rounded-lg shadow-lg border-2 border-black/5">
        {title}
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
          {category}
        </span>
        <span className="text-[10px] font-bold text-[#3abef9] uppercase">
          {reward}
        </span>
        <Bookmark className="w-6 h-6 text-[#3abef9] fill-none hover:fill-[#3abef9] transition-all cursor-pointer" />
      </div>
      <h4 className="text-xl font-black leading-tight mb-4 group-hover:text-[#3abef9] transition-colors">
        {mission}
      </h4>
      <div className="flex items-center gap-5 text-xs font-bold text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="text-base">🪙</span>{" "}
          <span className="text-yellow-500">{coins} Coins</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-base text-[#3abef9]">👥</span>{" "}
          <span>{players} Adventurers</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
