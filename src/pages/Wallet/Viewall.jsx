import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Viewall = () => {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      title: "Reward Converted",
      date: "TODAY",
      amount: "+5,000",
      type: "credit",
    },
    {
      id: 2,
      title: "Course: Physics Masterclass",
      date: "SEP 28, 2023",
      amount: "-200",
      type: "debit",
    },
    {
      id: 3,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
    {
      id: 4,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
    {
      id: 5,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
    {
      id: 6,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
    {
      id: 7,
      title: "Reward Converted",
      date: "TODAY",
      amount: "+5,000",
      type: "credit",
    },
    {
      id: 8,
      title: "Reward Converted",
      date: "TODAY",
      amount: "+5,000",
      type: "credit",
    },
    {
      id: 9,
      title: "Reward Converted",
      date: "TODAY",
      amount: "+5,000",
      type: "credit",
    },
    {
      id: 10,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
    {
      id: 11,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
    {
      id: 12,
      title: "Course Purchase",
      date: "SEP 20, 2023",
      amount: "-150",
      type: "debit",
    },
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white px-6 pt-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10"
        >
          <ArrowLeft />
        </button>

        <h2 className="text-lg font-black">All Transactions</h2>
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        {currentTransactions.map((tx) => (
          <motion.div
            key={tx.id}
            whileHover={{ x: 5 }}
            className="bg-[#111721] rounded-[28px] p-5 flex items-center justify-between border border-white/5"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-2xl ${
                  tx.type === "credit"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {tx.type === "credit" ? (
                  <ArrowDownLeft size={20} />
                ) : (
                  <ArrowUpRight size={20} />
                )}
              </div>

              <div>
                <h4 className="text-sm font-black">{tx.title}</h4>
                <p className="text-[9px] text-gray-500">{tx.date}</p>
              </div>
            </div>

            <span
              className={`text-lg font-black ${
                tx.type === "credit" ? "text-[#22c55e]" : "text-red-500"
              }`}
            >
              {tx.amount}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-white/10 rounded-lg disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-white/10 rounded-lg disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Viewall;
