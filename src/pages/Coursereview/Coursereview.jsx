import React from "react";
import { ArrowLeft, Star, Heart, ArrowRight } from "lucide-react";

export const Coursereview = () => {
  // Mock Data for Reviews
  const Coursereview = [
    {
      id: 1,
      name: "Heather S. McMullen",
      rating: "4.2",
      comment:
        "The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse..",
      likes: "760",
      time: "2 Weeks Agos",
      avatar: "https://i.pravatar.cc/150?u=heather",
    },
    {
      id: 2,
      name: "Natasha B. Lambert",
      rating: "4.8",
      comment:
        "The Course is Very Good dolor veterm, quo etiam utuntur hi capiamus..",
      likes: "918",
      time: "2 Weeks Agos",
      avatar: "https://i.pravatar.cc/150?u=heather", // Placeholder for white circle as per figma
    },
    {
      id: 3,
      name: "Marshall A. Lester",
      rating: "4.6",
      comment:
        "The Course is Very Good dolor sit amet, con sect tur adipiscing elit. Naturales divitias dixit parab les esse..",
      likes: "914",
      time: "2 Weeks Agos",
      avatar: "https://i.pravatar.cc/150?u=heather",
    },
    {
      id: 4,
      name: "Frances D. Stanford",
      rating: "4.8",
      comment:
        "The Course is Very Good dolor veterm, quo etiam utuntur hi capiamus..",
      likes: "850",
      time: "3 Weeks Agos",
      avatar: "https://i.pravatar.cc/150?u=heather",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-32 selection:bg-[#3abef9]/30">
      {/* 1. Header Area */}
      <div className="flex items-center gap-4 px-6 pt-10 pb-6 max-w-2xl mx-auto">
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
          <ArrowLeft size={30} strokeWidth={2.5} />
        </button>
        <h1 className="text-2xl font-black tracking-tight">Reviews</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* 2. Rating Summary Section */}
        <div className="flex flex-col items-center py-6">
          <h2 className="text-7xl font-black text-[#3abef9] tracking-tighter">
            4.8
          </h2>
          <div className="flex gap-1 my-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-500 font-bold text-sm tracking-wide">
            Based on 448 Reviews
          </span>
        </div>

        {/* 3. Filter Pills (Horizontal Scroll) */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-6">
          {["Excellect", "Good", "Average", "Below Average"].map((pill, i) => (
            <button
              key={i}
              className={`px-6 py-2.5 rounded-2xl font-bold text-sm whitespace-nowrap transition-all active:scale-95 ${
                i === 0
                  ? "bg-[#3abef9] text-white shadow-lg shadow-blue-500/20"
                  : "bg-[#1a1f2e] text-gray-400 border border-white/5 hover:bg-[#252c3d]"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* 4. Review Cards List */}
        <div className="space-y-5">
          {Coursereview.map((review) => (
            <div
              key={review.id}
              className="bg-[#1a1f2e] rounded-[30px] p-6 border border-white/5 hover:border-[#3abef9]/30 transition-all shadow-xl"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-full shrink-0 shadow-lg ${review.avatar ? "" : "bg-white"}`}
                >
                  {review.avatar && (
                    <img
                      src={review.avatar}
                      className="w-full h-full rounded-full object-cover"
                      alt={review.name}
                    />
                  )}
                </div>

                {/* Content Area */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[#3abef9] font-black text-lg tracking-tight leading-tight">
                      {review.name}
                    </h4>
                    {/* Star Badge */}
                    <div className="bg-white px-2 py-0.5 rounded-full flex items-center gap-1 border border-yellow-500 shadow-sm">
                      <Star
                        size={10}
                        fill="#fbbf24"
                        className="text-yellow-400"
                      />
                      <span className="text-[10px] font-black text-[#3abef9]">
                        {review.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-white text-sm font-medium leading-relaxed mb-4 opacity-90">
                    {review.comment}
                  </p>

                  {/* Footer (Likes & Time) */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <Heart
                        size={18}
                        className="text-red-500 fill-red-500 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-xs font-black text-[#3abef9]">
                        {review.likes}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#3abef9] uppercase tracking-tighter">
                      {review.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Sticky Bottom Action Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-50">
        <button className="w-full bg-gradient-to-r from-[#2F80FF] to-[#3abef9] py-5 rounded-full flex items-center justify-between px-8 shadow-[0_10px_30px_rgba(47,128,255,0.4)] hover:brightness-110 active:scale-95 transition-all">
          <span className="text-xl font-black tracking-tight text-white">
            Write a Review
          </span>
          <div className="bg-white p-2.5 rounded-full text-[#3abef9] shadow-md">
            <ArrowRight size={22} strokeWidth={3} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Coursereview;
