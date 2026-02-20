import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Star,
  Clock,
  Video,
  MessageCircle,
  FileText,
  Smartphone,
  TrendingUp,
  Headphones,
  Infinity,
  ListChecks,
  Award,
  ChevronRight,
  Heart,
  Play,
  Share2,
  CheckCircle2,
} from "lucide-react";

export const Coursedetails = () => {
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: <FileText size={20} />, text: "25 Lessons" },
    { icon: <Smartphone size={20} />, text: "Mobile/Web Access" },
    { icon: <TrendingUp size={20} />, text: "Beginner Level" },
    { icon: <Headphones size={20} />, text: "Audio Books" },
    { icon: <Infinity size={20} />, text: "Lifetime Access" },
    { icon: <ListChecks size={20} />, text: "100+ Quizzes" },
    { icon: <Award size={20} />, text: "Certificate" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-24 lg:pb-10 selection:bg-[#3abef9]/30">
      {/* 1. Hero Section - Responsive Height */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden">
        <img
          src="https://www.wattco.com/wp-content/uploads/2021/04/shutterstock_379063504-scaled.jpg"
          alt="Course Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-black/20"></div>

        {/* Top Nav Buttons */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
          <button
            onClick={() => navigate(-1)}
            className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 active:scale-90 transition-all"
          >
            <ArrowLeft size={22} />
          </button>

          <button className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 active:scale-90 transition-all">
            <Share2 size={22} />
          </button>
        </div>

        {/* Hero Content - Adaptive font size */}
        <div className="absolute bottom-6 left-4 lg:left-20 z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#3abef9] text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
              Bestseller
            </span>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-bold text-gray-200">4.8</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter drop-shadow-lg">
            Thermodynamics
          </h1>
        </div>
      </div>

      {/* 2. Responsive Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT SIDE: Course Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Bar - Scrollable on mobile */}
            <div className="flex items-center gap-4 sm:gap-8 bg-[#111721] p-4 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 shrink-0">
                <Video size={18} className="text-[#3abef9]" />
                <span className="text-[11px] font-bold uppercase text-gray-400">
                  21 Lessons
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Clock size={18} className="text-[#3abef9]" />
                <span className="text-[11px] font-bold uppercase text-gray-400">
                  42 Hours
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <TrendingUp size={18} className="text-[#3abef9]" />
                <span className="text-[11px] font-bold uppercase text-gray-400">
                  Beginner
                </span>
              </div>
            </div>

            {/* Sticky Tabs - User Friendly Swipeable */}
            <div className="flex border-b border-white/5 sticky top-0 bg-[#0a0d14] z-30 overflow-x-auto no-scrollbar">
              {["About", "Curriculum", "Instructor", "Coursereview"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab.toLowerCase());

                    if (tab === "Curriculum") navigate("/curriculum");
                    if (tab === "Coursereview") navigate("/Coursereview");
                  }}
                  className={`px-6 py-4 text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all relative ${
                    activeTab === tab.toLowerCase()
                      ? "text-[#3abef9]"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3abef9]"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Description Area */}
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h3 className="text-xl font-black mb-4">Course Description</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Learn the fundamental principles of Thermodynamics with a focus
                on real-world engineering applications. This course covers
                everything from entropy to the second law of thermodynamics.
              </p>
            </section>

            {/* Benefits Grid - Responsive columns */}
            <section>
              <h3 className="text-xl font-black mb-6">What's Included?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#111721]/50 p-4 rounded-xl border border-white/5"
                  >
                    <div className="text-[#3abef9]">{item.icon}</div>
                    <span className="text-sm font-bold text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews - Responsive Stack */}
            <section className="space-y-6">
              <h3 className="text-xl font-black">Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <ReviewCard
                  name="Will Smith"
                  img="https://i.pravatar.cc/150?u=will"
                />
                <ReviewCard
                  name="Martha Thompson"
                  img="https://i.pravatar.cc/150?u=martha"
                />
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: Pricing Sidebar (Hidden on Mobile, Sticky on Desktop) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-24 bg-[#111721] border-2 border-[#3abef9] rounded-[40px] p-8 shadow-2xl">
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-black">499/-</span>
                <span className="text-gray-500 line-through text-lg">
                  1,999/-
                </span>
              </div>
              <button className="w-full bg-[#3abef9] text-white py-5 rounded-[24px] font-black text-xl shadow-lg active:scale-95 transition-all mb-6">
                Enroll Now
              </button>
              <div className="space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase">
                  Instructor
                </p>
                <div className="flex items-center gap-3 bg-black/20 p-3 rounded-xl">
                  <img
                    src="https://i.pravatar.cc/150?u=3"
                    className="w-10 h-10 rounded-full"
                    alt="Robert"
                  />
                  <div>
                    <h5 className="text-sm font-black">Robert Jr.</h5>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Physics Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE STICKY BOTTOM BAR - Best for User Friendliness */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#111721] border-t border-white/10 p-4 z-50 flex items-center justify-between gap-4 shadow-[0_-10px_20px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col">
          <span className="text-gray-400 text-[10px] font-bold uppercase leading-none">
            Price
          </span>
          <span className="text-2xl font-black text-[#3abef9]">499/-</span>
        </div>
        <button className="flex-1 bg-[#3abef9] text-white py-4 rounded-2xl font-black text-sm active:scale-95 transition-all flex items-center justify-center gap-2">
          Enroll Now <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

// Internal Review Component
const ReviewCard = ({ name, img }) => (
  <div className="bg-[#111721] p-5 rounded-2xl border border-white/5">
    <div className="flex items-center gap-3 mb-2">
      <img src={img} className="w-10 h-10 rounded-full" alt={name} />
      <h5 className="font-black text-sm">{name}</h5>
      <div className="flex text-yellow-400 ml-auto gap-0.5">
        <Star size={10} fill="currentColor" />
        <span className="text-[10px] font-bold">4.5</span>
      </div>
    </div>
    <p className="text-xs text-gray-400 leading-relaxed italic">
      "Great course for anyone looking to master heat dynamics."
    </p>
  </div>
);

export default Coursedetails;
