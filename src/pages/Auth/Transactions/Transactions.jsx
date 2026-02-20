import React, { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";

export const Transactions = () => {
  const historyData = [
    {
      id: 1,
      title: "Sinhala",
      subtitle: "Grammar",
      price: "₹499",
      date: "Apr 23, 2024",
      status: "Paid",
      img: "https://kodakco.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2024/07/16125413/english-british-england-language.webp",
    },
    {
      id: 2,
      title: "English",
      subtitle: "Tenses",
      price: "₹349",
      date: "Apr 21, 2024",
      status: "Paid",
      img: "https://kildarefetc.ie/wp-content/uploads/2021/06/download-2021-06-01T162515.614.jpg",
    },
    {
      id: 3,
      title: "Science",
      subtitle: "Chemistry",
      price: "₹499",
      date: "Apr 20, 2024",
      status: "Paid",
      img: "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",
    },
    {
      id: 4,
      title: "History",
      subtitle: "World war 2",
      price: "₹649",
      date: "Apr 18, 2024",
      status: "Paid",
      img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg",
    },
    {
      id: 5,
      title: "Math",
      subtitle: "Algebra",
      price: "₹399",
      date: "Apr 17, 2024",
      status: "Paid",
      img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg",
    },
    {
      id: 6,
      title: "Geography",
      subtitle: "Maps",
      price: "₹299",
      date: "Apr 16, 2024",
      status: "Paid",
      img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg",
    },
    {
      id: 6,
      title: "Geography",
      subtitle: "Maps",
      price: "₹299",
      date: "Apr 16, 2024",
      status: "Paid",
      img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg",
    },
    {
      id: 6,
      title: "Geography",
      subtitle: "Maps",
      price: "₹299",
      date: "Apr 16, 2024",
      status: "Paid",
      img: "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/07/importance-of-history-scaled-1.jpg",
    },
  ];

  // ------------------- PAGINATION -------------------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(historyData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = historyData.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  // ---------------------------------------------------

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans pb-10 selection:bg-[#3abef9]/30">
      {/* 1. Header Area */}
      <div className="flex items-center justify-between px-6 pt-10 pb-6 max-w-4xl mx-auto sticky top-0 bg-[#0a0d14]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
            <ArrowLeft size={28} strokeWidth={2.5} />
          </button>
          <h1 className="text-2xl font-black tracking-tight">History</h1>
        </div>
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90">
          <Search size={24} className="text-gray-400" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-5 space-y-8">
        {/* 2. Total Spent Summary Card */}
        <div className="bg-gradient-to-br from-[#111721] to-[#0a0d14] border-2 border-[#3abef9]/20 rounded-[35px] p-10 text-center shadow-2xl shadow-blue-500/5 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3abef9]/5 rounded-full blur-3xl group-hover:bg-[#3abef9]/10 transition-all duration-700"></div>
          <span className="text-gray-400 text-sm font-black uppercase tracking-[3px] mb-2 block">
            Total Spent
          </span>
          <h2 className="text-5xl font-black tracking-tighter text-white">
            ₹2,475
          </h2>
        </div>

        {/* 3. Transactions List Wrapper */}
        <div className="bg-[#111721]/30 rounded-[40px] border border-white/5 p-2 sm:p-4">
          <div className="flex flex-col">
            {currentItems.map((item, index) => (
              <div key={item.id} className="group">
                <div className="flex items-center justify-between p-4 sm:p-6 hover:bg-white/5 transition-all rounded-[30px] cursor-pointer active:scale-[0.98]">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] border-2 border-[#3abef9] p-1 overflow-hidden shadow-lg shadow-blue-500/10">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-[16px]"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-[#3abef9] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-bold">
                        {item.subtitle}
                      </p>
                      <div className="mt-1 w-fit bg-gradient-to-r from-[#2F80FF] to-[#3abef9] px-4 py-1 rounded-lg shadow-md shadow-blue-500/20">
                        <span className="text-[10px] font-black uppercase tracking-wider text-white">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1">
                    <span className="text-xl sm:text-2xl font-black tracking-tighter text-white">
                      {item.price}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-tight">
                      {item.date}
                    </span>
                  </div>
                </div>
                {index !== currentItems.length - 1 && (
                  <div className="mx-6 h-[1px] bg-white/5"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Pagination Controls */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-3 py-1 bg-[#3abef9]/20 rounded-lg font-bold hover:bg-[#3abef9]/40 transition-all"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                currentPage === i + 1
                  ? "bg-[#3abef9] text-black"
                  : "bg-[#3abef9]/20 hover:bg-[#3abef9]/40"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="px-3 py-1 bg-[#3abef9]/20 rounded-lg font-bold hover:bg-[#3abef9]/40 transition-all"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
