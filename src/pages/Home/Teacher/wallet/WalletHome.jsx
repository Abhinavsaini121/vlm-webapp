import React, { useState } from "react";
import {
  ChevronLeft,
  ArrowUpRight,
  Banknote,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import FloatingNav from "../../../../components/Bottombar/Bottombar";
import { useTheme } from "../../../../hooks/useTheme";

const WalletHome = () => {
  const { theme } = useTheme();

  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Live Class: Quantum Physics",
      amount: "+1,200",
      status: "credited",
    },
    {
      id: 2,
      title: "Monthly Payout",
      amount: "-32,000",
      status: "success",
    },
  ]);

  const handleWithdraw = () => {
    if (!amount) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPopup(true);

      setTransactions((prev) => [
        {
          id: Date.now(),
          title: "Withdrawal",
          amount: `-₹${amount}`,
          status: "processing",
        },
        ...prev,
      ]);

      setAmount("");
      setShowWithdraw(false);
      setTimeout(() => setPopup(false), 2500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f1a] text-gray-900 dark:text-white pb-32 transition-colors duration-300">
      
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 sticky top-0 z-40 bg-gray-50/80 dark:bg-[#0b0f1a]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button className="p-2 bg-white dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-black">Wallet</h1>
        </div>
        <button className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl">
          <Banknote className="text-emerald-600 dark:text-emerald-400" />
        </button>
      </header>

      {/* BALANCE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-6 mt-4 rounded-3xl p-[1px]
          bg-gradient-to-br from-[#2F80FF] to-[#56CCF2]"
      >
        <div className="rounded-3xl p-6
          bg-white dark:bg-[#1a2233]">

          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-white/10 flex items-center justify-center mb-4">
            <Banknote className="text-[#2F80FF] dark:text-[#56CCF2]" />
          </div>

          <p className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase">
            Available Balance
          </p>

          <h2 className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
            ₹45,200
          </h2>

          <div className="flex gap-3 mt-5 flex-wrap">
            <span className="text-xs px-4 py-1 rounded-full
              bg-emerald-100 text-emerald-700
              dark:bg-emerald-500/20 dark:text-emerald-400 font-bold">
              +₹2,400 this week
            </span>
            <span className="text-xs px-4 py-1 rounded-full
              bg-blue-100 text-blue-700
              dark:bg-emerald-500/10 dark:text-emerald-300 font-bold">
              View Incentive
            </span>
          </div>
        </div>
      </motion.div>

      {/* PAYOUT INFO */}
      <div className="grid grid-cols-2 gap-4 px-6 mt-6">
        {/* LAST PAYOUT */}
        <div className="rounded-2xl p-4
          bg-white dark:bg-[#1a2233]
          border border-gray-200 dark:border-white/5
          shadow-sm dark:shadow-none">
          <p className="text-xs uppercase text-gray-400">Last Payout</p>
          <p className="text-lg font-black mt-1">₹32,000</p>
          <p className="text-xs text-gray-500 mt-1">Oct 01, 2023</p>
        </div>

        {/* NEXT EST */}
        <div className="rounded-2xl p-4
          bg-white dark:bg-[#1a2233]
          border border-gray-200 dark:border-white/5
          shadow-sm dark:shadow-none">
          <p className="text-xs uppercase text-gray-400">Next Est.</p>
          <p className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-1">
            ₹13,200
          </p>
          <p className="text-xs text-gray-500 mt-1">Nov 01, 2023</p>
        </div>
      </div>

      {/* WITHDRAW */}
      <div className="p-6">
        <AnimatePresence>
          {!showWithdraw ? (
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowWithdraw(true)}
              className="w-full py-3 rounded-2xl font-black
                bg-gradient-to-r from-[#2F80FF] to-[#56CCF2]
                text-white flex justify-center gap-2"
            >
              Withdraw Funds <ArrowUpRight size={18} />
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full px-4 py-3 rounded-xl
                  bg-white dark:bg-[#111827]
                  border border-gray-200 dark:border-white/10
                  outline-none"
              />

              <button
                onClick={handleWithdraw}
                className="w-full bg-emerald-500 py-3 rounded-xl font-black text-white flex justify-center"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Confirm Withdraw"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* TRANSACTIONS */}
      <div className="px-6 space-y-3">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Recent Transactions
        </p>

        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="rounded-2xl p-4 flex justify-between
              bg-white dark:bg-[#111827]
              border border-gray-200 dark:border-white/10
              shadow-sm dark:shadow-none"
          >
            <div>
              <p className="font-bold">{tx.title}</p>
              <p className="text-xs text-gray-400">
                {tx.status === "processing" ? "Processing..." : "Completed"}
              </p>
            </div>

            <p
              className={`font-black ${
                tx.amount.startsWith("+")
                  ? "text-emerald-500"
                  : tx.status === "processing"
                  ? "text-yellow-500"
                  : ""
              }`}
            >
              {tx.amount}
            </p>
          </div>
        ))}
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 text-center w-[80%]">
              <CheckCircle className="mx-auto text-emerald-500 mb-2" size={40} />
              <p className="font-black">Withdrawal Initiated</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Your withdrawal will arrive shortly. Please wait.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingNav />
    </div>
  );
};

export default WalletHome;
