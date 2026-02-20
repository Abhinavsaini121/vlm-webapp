import React from "react";
import { ArrowLeft, Search, Star, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Popularcourse = () => {
    const navigate = useNavigate();
  // Course Mock Data
  const courses = [
    {
      id: 1,
      subject: "Physics",
      title: "Thermodynamics",
      price: "7058/-",
      rating: "4.2",
      students: "7830 Std",
      image:
        "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2024/01/09162453/thermodynamics-2-1.png",
      label: "Thermodynamics",
    },
    {
      id: 2,
      subject: "Chemistry",
      title: "Chemical Kinetics",
      price: "800/-",
      rating: "3.9",
      students: "12680 Std",
      image:
        "https://i.ytimg.com/vi/7I0Xg92_eA4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQ4AEMO0Ml8RjsNs9lov04Ob_SBQ",
      label: "",
    },
    {
      id: 3,
      subject: "Physics",
      title: "Thermodynamics",
      price: "599/-",
      rating: "4.2",
      students: "990 Std",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400",
      label: "modynamics",
    },
    {
      id: 4,
      subject: "Chemistry",
      title: "Chemical Kinetics",
      price: "499/-",
      rating: "4.9",
      students: "14580 Std",
      image:
        "https://i.ytimg.com/vi/7I0Xg92_eA4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQ4AEMO0Ml8RjsNs9lov04Ob_SBQ",
      label: "",
    },
    {
      id: 5,
      subject: "History",
      title: "Harapa civilization",
      price: "599/-",
      rating: "4.2",
      students: "10252 Std",
      image:
        "https://m.media-amazon.com/images/I/61j1O1-SQAL._AC_UF1000,1000_QL80_.jpg",
      label: "HISTORY",
    },
  ];

  const categories = [
    "All",
    "Graphic Design",
    "3D Design",
    "Arts & Humanities",
  ];

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-10 selection:bg-[#3abef9]/30">
      {/* 1. Header Area */}
      <div className="flex items-center gap-4 px-6 pt-10 pb-6 max-w-4xl mx-auto">
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
          <ArrowLeft size={30} strokeWidth={2.5} />
        </button>
        <h1 className="text-2xl font-black tracking-tight">Popular Courses</h1>
      </div>

      <div className="max-w-4xl mx-auto px-5 space-y-6">
        {/* 2. Modern Search Bar (Figma Style) */}
        <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-lg shadow-black/20">
          <div className="pl-4 pr-2">
            <Search size={24} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Graphic Design"
            className="flex-1 bg-transparent text-black font-semibold placeholder:text-gray-400 focus:outline-none py-3"
          />
          <button className="bg-[#3abef9] p-3 rounded-xl hover:brightness-110 active:scale-95 transition-all">
            <Search size={22} className="text-white" strokeWidth={3} />
          </button>
        </div>

        {/* 3. Horizontal Category Pills */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all active:scale-95 ${
                i === 0
                  ? "bg-[#3abef9] text-white shadow-lg shadow-blue-500/20"
                  : "bg-[#1a1f2e] text-gray-400 hover:bg-[#252c3d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. Vertical Course Cards List */}
        <div className="flex flex-col gap-5 pt-2">
          {courses.map((course) => (
            <div
  key={course.id}
  onClick={() => navigate("/coursedetails", { state: course })}
  className="bg-[#1a1f2e] rounded-[30px] p-3 flex items-center gap-4 border border-white/5 hover:border-[#3abef9]/30 transition-all cursor-pointer group shadow-xl"
>
              {/* Left: Course Image with Label */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {course.label && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-black text-[10px] sm:text-[12px] font-black px-2 py-1 shadow-md">
                    {course.label}
                  </div>
                )}
              </div>

              {/* Right: Course Content */}
              <div className="flex-1 flex flex-col justify-center pr-2 relative">
                {/* Bookmark Icon */}
                <Bookmark
                  size={20}
                  className="absolute top-0 right-0 text-[#3abef9] hover:fill-[#3abef9] transition-all"
                />

                <span className="text-[#3abef9] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">
                  {course.subject}
                </span>

                <h3 className="text-base sm:text-xl font-black tracking-tight mb-1 group-hover:text-[#3abef9] transition-colors">
                  {course.title}
                </h3>

                <span className="text-[#3abef9] text-lg sm:text-xl font-black italic tracking-tighter mb-2">
                  {course.price}
                </span>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      fill="#fbbf24"
                      className="text-yellow-400"
                    />
                    <span className="text-[11px] sm:text-xs font-bold">
                      {course.rating}
                    </span>
                  </div>
                  <div className="w-[1px] h-3 bg-gray-700"></div>
                  <span className="text-[11px] sm:text-xs font-bold">
                    {course.students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularcourse;
