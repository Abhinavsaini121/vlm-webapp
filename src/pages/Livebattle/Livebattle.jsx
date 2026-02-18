import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Users, ChevronRight } from "lucide-react";

const Livebattle = () => {
  const navigate = useNavigate();

  // Mock Data for Battle Cards
  const battleCards = [
    {
      name: "Pooja Mam",
      rating: 4.8,
      students: "1242",
      subject: "Physics",
      topic: "Thermodynamics - Heat Transfer",
      img: "https://i.pravatar.cc/150?u=pooja",
    },
    {
      name: "Rajat Sir",
      rating: 4.8,
      students: "540",
      subject: "Physics",
      topic: "Thermodynamics - Heat Transfer",
      img: "https://i.pravatar.cc/150?u=rajat",
    },
    {
      name: "Jiya Mam",
      rating: 4.8,
      students: "322",
      subject: "Physics",
      topic: "Thermodynamics - Heat Transfer",
      img: "https://i.pravatar.cc/150?u=jiya",
    },
    {
      name: "Aman Sir",
      rating: 4.8,
      students: "142",
      subject: "Physics",
      topic: "Thermodynamics - Heat Transfer",
      img: "https://i.pravatar.cc/150?u=aman",
    },
    {
      name: "Manav Sir",
      rating: 4.8,
      students: "242",
      subject: "Physics",
      topic: "Thermodynamics - Heat Transfer",
      img: "https://i.pravatar.cc/150?u=manav",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-28">
      {/* 1. Header Section */}
      <div className="pt-8 pb-4 text-center">
        <h1 className="text-3xl font-black tracking-tight">
          Live Battle Arena
        </h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            5 Teachers Live Now
          </span>
        </div>
      </div>

      {/* 2. Category Filters - Blue Theme */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 py-6">
        {["All", "Physics", "Chemistry", "Maths", "Biology"].map((tab, i) => (
          <button
            key={i}
            className={`px-8 py-2.5 rounded-2xl font-bold text-sm transition-all whitespace-nowrap active:scale-95 ${
              i === 1
                ? "bg-[#3abef9] text-white shadow-lg shadow-blue-500/20"
                : "bg-[#111721] text-gray-400 border border-gray-800 hover:bg-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Battle Cards Grid - Dark Background + Blue Border */}
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {battleCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#111721] border-2 border-[#3abef9] rounded-[35px] p-5 flex flex-col items-start shadow-xl transition-transform hover:scale-[1.02] cursor-pointer"
          >
            {/* Teacher Info Row */}
            <div className="flex items-center gap-3 w-full">
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-16 h-16 rounded-full border-2 border-[#3abef9] p-0.5"
                />
              </div>
              <div>
                <h3 className="text-white font-black text-lg leading-tight">
                  {card.name}
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">
                    {card.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                  <Users size={12} /> {card.students} Students
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-4">
              <h4 className="text-[#3abef9] font-black text-xl uppercase italic tracking-tighter">
                {card.subject}
              </h4>
              <p className="text-gray-400 text-[11px] font-bold mt-0.5 leading-tight">
                {card.topic}
              </p>
            </div>

            {/* XP Badge */}
            <div className="mt-3 bg-yellow-400 text-black text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm">
              +20 XP for joining live
            </div>

            {/* Action Button - Sky Blue */}
            <button
              onClick={() => navigate("/joinbattle")}
              className="mt-5 w-full bg-[#3abef9] text-white py-3 rounded-2xl font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-blue-500/10"
            >
              Join Battle
            </button>
          </div>
        ))}
      </div>

      {/* 4. Top Live Teacher Today Section - Bordered Dark List */}
      <div className="px-4 mt-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🔥</span>
          <h2 className="text-xl font-black tracking-tight">
            Top Live Teacher Today
          </h2>
        </div>

        {/* List Wrapper with Blue Border */}
        <div className="bg-[#111721] border-2 border-[#3abef9] rounded-[30px] overflow-hidden p-1 shadow-lg shadow-blue-500/10">
          <div className="flex flex-col">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 ${i !== 2 ? "border-b border-white/5" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      i === 0
                        ? "https://i.pravatar.cc/150?u=manav"
                        : i === 1
                          ? "https://i.pravatar.cc/150?u=aman"
                          : "https://i.pravatar.cc/150?u=jiya"
                    }
                    className="w-14 h-14 rounded-2xl object-cover border border-[#3abef9]/30"
                    alt="top teacher"
                  />
                  <div>
                    <h4 className="font-black text-lg leading-tight text-white">
                      Manav Sir
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                      <Users size={12} className="text-[#3abef9]" /> 242
                      Students joined
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/joinbattle")}
                  className="bg-[#3abef9] text-white px-6 py-2.5 rounded-xl font-black text-xs hover:brightness-110 active:scale-90 transition-all shadow-md"
                >
                  Join Battle
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livebattle;
