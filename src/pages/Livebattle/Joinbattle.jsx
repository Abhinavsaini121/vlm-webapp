import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Users,
  Play,
  Clock,
  Lightbulb,
  Coins,
  Flame,
  MessageCircle,
  HelpCircle,
  Award,
} from "lucide-react";

const Joinbattle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-32">
      {/* 1. Header & Timer */}
      <div className="pt-8 pb-4 text-center">
        <h1 className="text-3xl font-black tracking-tight">
          Live Battle Lobby
        </h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          <span className="text-sm font-bold text-gray-300">
            Class Start in <span className="text-white font-black">02:35</span>
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-8 mt-6">
        {/* 2. Main Teacher Card (Dark Theme + Blue Border) */}
        <div className="relative border-2 border-[#3abef9] rounded-[35px] bg-[#111721] p-6 shadow-[0_0_25px_rgba(58,190,249,0.15)] transition-transform hover:scale-[1.01]">
          {/* LIVE Badge */}
          <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 z-10 animate-pulse">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span> LIVE
          </div>

          <div className="flex flex-row items-center gap-5 mt-4">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <img
                src="https://i.pravatar.cc/150?u=pooja"
                alt="Pooja Mam"
                className="w-24 h-24 rounded-full border-4 border-[#3abef9] p-1 object-cover shadow-lg shadow-blue-500/20"
              />
            </div>

            {/* Teacher Details */}
            <div className="flex-1">
              <h2 className="text-[#ff4d4d] text-2xl font-black leading-none italic">
                Pooja Mam
              </h2>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400">4.8</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-blue-400 mt-2 uppercase tracking-wide">
                <Users size={14} /> 1242 Students
              </div>
              <div className="mt-2">
                <span className="text-[#3abef9] font-black text-xs uppercase tracking-tighter">
                  Physics
                </span>
                <p className="text-gray-300 text-[11px] font-bold leading-tight">
                  Thermodynamics - Heat Transfer
                </p>
              </div>
              {/* XP Badge */}
              <div className="mt-3 inline-block bg-yellow-400 text-black text-[9px] font-black px-3 py-1.5 rounded-lg shadow-md">
                +20 XP for joining live
              </div>
            </div>
          </div>
        </div>

        {/* 3. Class Details Section */}
        <div>
          <h3 className="text-xl font-black mb-3 ml-2 tracking-tight">
            Class Details
          </h3>
          <div className="bg-[#111721] border-2 border-[#3abef9] rounded-[30px] overflow-hidden shadow-lg shadow-blue-500/10">
            <div className="p-5 flex items-center gap-4 border-b border-white/5">
              <div className="bg-[#3abef9]/20 p-2.5 rounded-xl text-[#3abef9]">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                Thermodynamics - Heat Transfer
              </span>
            </div>
            <div className="p-5 flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#3abef9]/20 p-2.5 rounded-full text-[#3abef9]">
                  <Clock size={18} />
                </div>
                <span className="text-white font-bold text-xs uppercase">
                  Duration : <span className="text-gray-400">60mins</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-bold text-xs uppercase">
                  Difficulty :{" "}
                  <span className="text-gray-400">Intermediate</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Rewards Section */}
        <div>
          <h3 className="text-xl font-black mb-3 ml-2 tracking-tight">
            Rewards
          </h3>
          <div className="bg-[#111721] border-2 border-[#3abef9] rounded-[30px] divide-y divide-white/5 overflow-hidden shadow-lg shadow-blue-500/10">
            <div className="p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#3abef9]/20 p-2 rounded-lg text-[#3abef9]">
                  <Play size={16} fill="currentColor" />
                </div>
                <span className="text-yellow-400 font-black text-xs">
                  +20XP{" "}
                  <span className="text-white font-bold">for joining</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400/20 p-2 rounded-lg text-yellow-400">
                  <Lightbulb size={16} fill="currentColor" />
                </div>
                <span className="text-yellow-400 font-black text-xs">
                  +10XP <span className="text-white font-bold">for doubts</span>
                </span>
              </div>
            </div>
            <div className="p-5 flex items-center gap-4">
              <div className="bg-[#3abef9]/20 p-2 rounded-lg text-[#3abef9]">
                <Coins size={16} fill="currentColor" />
              </div>
              <span className="text-yellow-400 font-black text-xs">
                +50 Coins{" "}
                <span className="text-white font-bold">
                  If Completing full session
                </span>
              </span>
            </div>
            <div className="p-5 flex items-center gap-4">
              <span className="text-2xl">🔥</span>
              <span className="text-white font-black text-xs uppercase tracking-wider">
                Streak Protection Active
              </span>
            </div>
          </div>
        </div>

        {/* 5. Features/Rules Section */}
        <div>
          <h3 className="text-xl font-black mb-3 ml-2 tracking-tight">
            Rewards
          </h3>
          <div className="bg-[#111721] border-2 border-[#3abef9] rounded-[30px] divide-y divide-white/5 overflow-hidden shadow-lg shadow-blue-500/10">
            <div className="p-5 flex items-center gap-4">
              <div className="bg-[#3abef9]/20 p-2 rounded-lg text-[#3abef9]">
                <MessageCircle size={18} fill="currentColor" />
              </div>
              <span className="text-white font-black text-xs uppercase">
                Doubt Chat Enabled
              </span>
            </div>
            <div className="p-5 flex items-center gap-4">
              <div className="bg-[#3abef9]/20 p-2 rounded-lg text-[#3abef9]">
                <HelpCircle size={18} fill="currentColor" />
              </div>
              <span className="text-white font-black text-xs uppercase">
                Quiz mid-session
              </span>
            </div>
            <div className="p-5 flex items-center gap-4">
              <div className="bg-yellow-400/20 p-2 rounded-lg text-yellow-400">
                <Award size={18} fill="currentColor" />
              </div>
              <span className="text-yellow-400 font-black text-xs uppercase">
                Bonus XP{" "}
                <span className="text-white font-bold">
                  for correct answers
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* 6. Action Button - BLUE GRADIENT (Figma Style) */}
        <div className="pt-6">
          <button
            onClick={() => navigate("/liveclass")}
            className="w-full bg-gradient-to-r from-[#4cc9f0] to-[#4361ee] hover:brightness-110 text-white py-5 rounded-[25px] font-black text-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(76,201,240,0.3)] active:scale-95 transition-all"
          >
            🔥 Enter Battle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joinbattle;
