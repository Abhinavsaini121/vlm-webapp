import React from "react";
import { ArrowLeft, PlayCircle, Lock, ArrowRight } from "lucide-react";

export const Curriculum = () => {
  // Data structure according to Figma
  const sections = [
    {
      title: "Section 01 - Introduction",
      totalDuration: "25 Mins",
      lessons: [
        { id: "01", title: "Why Using Graphic De..", duration: "15 Mins", locked: false },
        { id: "02", title: "Setup Your Graphic De..", duration: "10 Mins", locked: false },
      ],
    },
    {
      title: "Section 02 - Graphic Design",
      totalDuration: "55 Mins",
      lessons: [
        { id: "03", title: "Take a Look Graphic De..", duration: "08 Mins", locked: true },
        { id: "04", title: "Working with Graphic De..", duration: "25 Mins", locked: true },
        { id: "05", title: "Working with Frame & Lay..", duration: "12 Mins", locked: true },
        { id: "06", title: "Using Graphic Plugins", duration: "10 Mins", locked: true },
      ],
    },
    {
      title: "Section 03 - Let’s Practice",
      totalDuration: "35 Mins",
      lessons: [
        { id: "07", title: "Let’s Design a Sign Up Fo..", duration: "15 Mins", locked: true },
        { id: "08", title: "Sharing work with Team", duration: "20 Mins", locked: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-32 selection:bg-[#3abef9]/30">
      
      {/* 1. Header Area */}
      <div className="flex items-center gap-4 px-6 pt-10 pb-6 max-w-2xl mx-auto">
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
          <ArrowLeft size={30} strokeWidth={2.5} />
        </button>
        <h1 className="text-2xl font-black tracking-tight">Curriculum</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        {/* 2. Curriculum Card Wrapper */}
        <div className="bg-[#1a1f2e]/60 rounded-[35px] border border-white/5 overflow-hidden shadow-2xl">
          
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="flex flex-col">
              {/* Section Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <h3 className="text-[#3abef9] text-sm sm:text-base font-black uppercase tracking-tight">
                  {section.title}
                </h3>
                <span className="text-[#3abef9] text-xs font-bold opacity-80 uppercase tracking-tighter">
                  {section.totalDuration}
                </span>
              </div>

              {/* Lessons List */}
              <div className="flex flex-col">
                {section.lessons.map((lesson, lIndex) => (
                  <div 
                    key={lesson.id} 
                    className="flex items-center justify-between px-6 py-5 border-t border-white/10 hover:bg-white/5 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Number Circle */}
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                        <span className="text-[#1a1f2e] font-black text-sm">
                          {lesson.id}
                        </span>
                      </div>
                      
                      {/* Lesson Text */}
                      <div className="flex flex-col">
                        <h4 className={`text-sm sm:text-base font-bold tracking-tight ${lesson.locked ? 'text-gray-400' : 'text-white'}`}>
                          {lesson.title}
                        </h4>
                        <span className="text-xs font-bold text-gray-500 uppercase">
                          {lesson.duration}
                        </span>
                      </div>
                    </div>

                    {/* Action Icon (Play or Lock) */}
                    <div className="shrink-0">
                      {lesson.locked ? (
                        <Lock size={20} className="text-gray-600" />
                      ) : (
                        <PlayCircle size={24} className="text-[#3abef9] fill-[#3abef9]/10" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Sticky Bottom Enroll Button (Figma Style) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-50">
        <button className="w-full bg-gradient-to-r from-[#2F80FF] to-[#3abef9] py-4 rounded-full flex items-center justify-between px-8 shadow-[0_10px_30px_rgba(47,128,255,0.4)] hover:brightness-110 active:scale-95 transition-all">
          <span className="text-lg font-black tracking-tight text-white">
            Enroll Course - 499/-
          </span>
          <div className="bg-white p-2 rounded-full text-[#3abef9] shadow-md">
            <ArrowRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Curriculum;