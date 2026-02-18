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
        <div className="min-h-screen bg-[#0b0f1a] text-white pb-32">
            {/* HEADER */}
            <header className="flex justify-between items-center p-6">
                <div className="flex items-center gap-4">
                    <button className="p-2 bg-white/10 rounded-full">
                        <ChevronLeft size={20} />
                    </button>
                    <h1 className="text-lg font-bold">Wallet</h1>
                </div>
                <button className="p-2 bg-emerald-500/20 rounded-full">
                    <Banknote className="text-emerald-400" />
                </button>
            </header>

            {/* BALANCE CARD */}
            {/* BALANCE CARD */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mx-6 rounded-3xl p-[1px] bg-gradient-to-br from-[#2F80FF] to-[#56CCF2]"
            >
                <div className="rounded-3xl p-6 bg-[#1a2233] relative overflow-hidden">
                    {/* Wallet Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                        <Banknote className="text-[#56CCF2]" />
                    </div>

                    <p className="text-xs tracking-widest text-gray-400 uppercase">
                        Available Balance
                    </p>

                    <h2 className="text-4xl font-bold text-emerald-400 mt-2">
                        ₹45,200
                    </h2>

                    {/* Pills */}
                    <div className="flex gap-3 mt-5">
                        <span className="text-xs px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                            +₹2,400 this week
                        </span>
                        <span className="text-xs px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold">
                            View Incentive
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* PAYOUT INFO CARDS */}
            <div className="grid grid-cols-2 gap-4 px-6 mt-6">
                {/* Last Payout */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-2xl bg-[#1a2233] p-4 border border-white/5"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <ArrowUpRight className="text-blue-400" size={16} />
                        </div>
                        <p className="text-xs text-gray-400 uppercase">Last Payout</p>
                    </div>

                    <p className="text-lg font-bold text-white">₹32,000</p>
                    <p className="text-xs text-gray-500 mt-1">Oct 01, 2023</p>
                </motion.div>

                {/* Next Est */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="rounded-2xl bg-[#1a2233] p-4 border border-white/5"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle className="text-emerald-400" size={16} />
                        </div>
                        <p className="text-xs text-gray-400 uppercase">Next Est.</p>
                    </div>

                    <p className="text-lg font-bold text-emerald-400">₹13,200</p>
                    <p className="text-xs text-gray-500 mt-1">Nov 01, 2023</p>
                </motion.div>
            </div>


            {/* WITHDRAW */}
            <div className="p-6">
                <AnimatePresence>
                    {!showWithdraw ? (
                        <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setShowWithdraw(true)}
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-3 rounded-2xl font-bold flex justify-center gap-2"
                        >
                            Withdraw Funds <ArrowUpRight size={18} />
                        </motion.button>
                    ) : (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-3"
                        >
                            <input
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter Amount"
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none"
                            />

                            <button
                                onClick={handleWithdraw}
                                className="w-full bg-emerald-500 py-3 rounded-xl font-bold flex justify-center"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    "Confirm Withdraw"
                                )}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* TRANSACTIONS */}
            <div className="px-6 space-y-3">
                <p className="text-xs text-gray-400 uppercase">Recent Transactions</p>

                {transactions.map((tx) => (
                    <motion.div
                        key={tx.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#111827] border border-white/10 rounded-2xl p-4 flex justify-between"
                    >
                        <div>
                            <p className="font-semibold">{tx.title}</p>
                            <p className="text-xs text-gray-400">
                                {tx.status === "processing" ? "Processing..." : "Completed"}
                            </p>
                        </div>

                        <p
                            className={`font-bold ${tx.amount.startsWith("+")
                                ? "text-emerald-400"
                                : tx.status === "processing"
                                    ? "text-yellow-400"
                                    : "text-white"
                                }`}
                        >
                            {tx.amount}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* POPUP */}
            <AnimatePresence>
                {popup && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
                    >
                        <div className="bg-[#0f172a] border border-emerald-500/30 rounded-2xl p-6 text-center w-[80%]">
                            <CheckCircle className="mx-auto text-emerald-400 mb-2" size={40} />
                            <p className="font-bold">Withdrawal Initiated</p>
                            <p className="text-sm text-gray-400 mt-1">
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
