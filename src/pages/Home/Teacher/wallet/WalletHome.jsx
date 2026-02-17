import React from "react";
import {
    ChevronLeft,
    Wallet,
    ArrowUpRight,
    ArrowDownLeft,
    Calendar,
    Clock,
    Info,
    ChevronRight,
    TrendingUp,
    Banknote,
    Sun,
    Moon,
} from "lucide-react";

import FloatingNav from "../../../../components/Bottombar/Bottombar";
import { useTheme } from "../../../../hooks/useTheme"; 

const WalletHome = () => {
    const { theme, toggleTheme } = useTheme();

    const walletData = {
        totalBalance: "45,200",
        lastPayout: { amount: "32,000", date: "Oct 01, 2023" },
        nextPayout: { estimate: "13,200", date: "Nov 01, 2023" },
        recentTransactions: [
            { id: 1, type: "earning", title: "Live Class", amount: "+1,200", date: "Today", status: "credited" },
            { id: 2, type: "payout", title: "Monthly Payout", amount: "-32,000", date: "Oct 01", status: "success" },
            { id: 3, type: "bonus", title: "High Rating", amount: "+5,000", date: "Sep 28", status: "credited" },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f10] text-gray-900 dark:text-white pb-32 transition-colors">

            {/* HEADER */}
            <header className="flex justify-between items-center p-6 pb-2 sticky top-0 z-40 bg-white/80 dark:bg-[#0f0f10]/80 backdrop-blur-md border-b border-gray-100 dark:border-transparent">
                <div className="flex items-center gap-4">
                    <button className="p-2 bg-gray-100 dark:bg-[#1a1a1c] rounded-full border border-gray-200 dark:border-gray-800">
                        <ChevronLeft size={20} />
                    </button>
                    <h1 className="text-lg font-bold">Wallet</h1>
                </div>

                <button className="p-2 bg-emerald-100 dark:bg-[#4ade80]/10 rounded-full">
                    <Banknote size={18} className="text-emerald-600 dark:text-[#4ade80]" />
                </button>
            </header>

            {/* BALANCE CARD */}
            <div className="p-6">
                <div className="bg-white dark:bg-[#1a1a1c] border border-purple-200 dark:border-purple-500/30 rounded-3xl p-6 shadow-lg">
                    <p className="text-gray-500 text-sm">Available Balance</p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-[#4ade80] mt-2">
                        ₹{walletData.totalBalance}
                    </h2>

                    <div className="flex gap-6 mt-4 text-sm">
                        <div>
                            <p className="text-gray-400 text-xs">Last Payout</p>
                            <p className="font-bold">₹{walletData.lastPayout.amount}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 text-xs">Next Est.</p>
                            <p className="font-bold text-emerald-600 dark:text-[#4ade80]">
                                ₹{walletData.nextPayout.estimate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TRANSACTIONS */}
            <div className="px-6 space-y-3">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Recent Transactions
                </h3>

                {walletData.recentTransactions.map((tx) => (
                    <div
                        key={tx.id}
                        className="bg-white dark:bg-[#1a1a1c] border border-gray-200 dark:border-gray-800 p-4 rounded-2xl flex justify-between"
                    >
                        <div>
                            <p className="font-semibold">{tx.title}</p>
                            <p className="text-xs text-gray-400">{tx.date}</p>
                        </div>

                        <p className={tx.amount.startsWith("+") ? "text-emerald-500 font-bold" : "font-bold"}>
                            {tx.amount}
                        </p>
                    </div>
                ))}
            </div>

            {/* WITHDRAW */}
            <div className="p-6">
                <button className="w-full bg-purple-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                    Withdraw Funds <ArrowUpRight size={18} />
                </button>
            </div>

            {/* Bottom Nav */}
            <FloatingNav />
        </div>
    );
};

export default WalletHome;
