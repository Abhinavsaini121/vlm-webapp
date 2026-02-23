import React, { useState } from "react";
import { ArrowLeft, CloudUpload, ArrowRight } from "lucide-react";

export const Writereview = () => {
  const [reviewText, setReviewText] = useState("");
  const charLimit = 250;

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-10 selection:bg-[#3abef9]/30">
      
      {/* 1. Header Area */}
      <div className="flex items-center gap-4 px-6 pt-10 pb-8 max-w-2xl mx-auto">
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
          <ArrowLeft size={30} strokeWidth={2.5} />
        </button>
        <h1 className="text-2xl font-black tracking-tight">Write a Reviews</h1>
      </div>

      <div className="max-w-2xl mx-auto px-5 space-y-8">
        
        {/* 2. Course Info Card */}
        <div className="bg-[#1a1f2e] rounded-[30px] p-5 flex items-center gap-5 border border-white/5 shadow-xl">
          <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-2xl">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harsha" // Placeholder image for teacher/course
              alt="Course"
              className="w-full h-full object-cover bg-[#0a0d14]"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#3abef9] text-xs font-bold uppercase tracking-widest mb-1">
              Graphic Design
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight">
              Setup your Graphic Desig..
            </h3>
          </div>
        </div>

        {/* 3. Add Photo (or) Video Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tight ml-2">Add Photo (or) Video</h3>
          <label className="flex flex-col items-center justify-center bg-[#1a1f2e] rounded-[30px] border-2 border-dashed border-white/10 p-12 cursor-pointer hover:border-[#3abef9]/50 transition-all group">
            <div className="bg-[#3abef9] p-4 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <CloudUpload size={40} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="mt-4 text-gray-300 font-black text-sm tracking-tight">
              Click here to Upload
            </span>
            <input type="file" className="hidden" accept="image/*,video/*" />
          </label>
        </div>

        {/* 4. Write Your Review Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tight ml-2">Write you Review</h3>
          <div className="bg-[#1a1f2e] rounded-[30px] p-6 border border-white/5 shadow-inner min-h-[220px] flex flex-col">
            <textarea
              className="flex-1 bg-transparent text-white font-medium placeholder:text-gray-600 focus:outline-none resize-none leading-relaxed"
              placeholder="Would you like to write anything about this Product?"
              maxLength={charLimit}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <span className="text-right text-xs font-bold text-gray-500 mt-4 uppercase tracking-tighter">
              *{charLimit - reviewText.length} Characters Remaining
            </span>
          </div>
        </div>

        {/* 5. Submit Button (Figma Style) */}
        <div className="pt-6">
          <button className="w-full bg-gradient-to-r from-[#2F80FF] to-[#3abef9] py-5 rounded-full flex items-center justify-between px-8 shadow-[0_10px_30px_rgba(47,128,255,0.4)] hover:brightness-110 active:scale-95 transition-all">
            <span className="text-xl font-black tracking-tight text-white">
              Submit Review
            </span>
            <div className="bg-white p-2.5 rounded-full text-[#3abef9] shadow-md">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writereview;