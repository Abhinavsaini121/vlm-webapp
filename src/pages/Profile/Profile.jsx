import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  User,
  Wallet,
  Bell,
  ShieldCheck,
  Languages,
  Eye,
  FileText,
  HelpCircle,
  Mail,
  LogOut,
  ChevronRight,
  Edit3,
} from "lucide-react";

const Profile = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const menuItems = [
    { icon: <User size={22} />, label: "Edit Profile" },
    { icon: <Wallet size={22} />, label: "Payment Option" },
    { icon: <Bell size={22} />, label: "Notifications" },
    { icon: <ShieldCheck size={22} />, label: "Security" },
    {
      icon: <Languages size={22} />,
      label: "Language",
      extra: "English (US)",
      extraClass: "text-blue-400",
    },
    { icon: <Eye size={22} />, label: "Dark Mode" },
    { icon: <FileText size={22} />, label: "Terms & Conditions" },
    { icon: <HelpCircle size={22} />, label: "Help Center" },
    { icon: <Mail size={22} />, label: "Invite Friends" },
    { icon: <LogOut size={22} />, label: "Logout" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1220] text-white font-sans pb-10">
      {/* 1. Header Area - Isko "Corner" mein move kar diya */}
      <div className="pt-10 pl-4 sm:pl-8 pb-16">
        <button className="hover:bg-white/10 p-2 rounded-full transition-all active:scale-90 inline-flex items-center justify-center">
          <ArrowLeft size={32} strokeWidth={2.5} />
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-5">
        {/* 2. Main Profile Card */}
        <div className="relative border-2 border-[#2F80FF] rounded-[40px] bg-[#242F41] pt-20 pb-6 shadow-[0_0_40px_rgba(47,128,255,0.2)]">
          {/* 3. Floating Avatar Section */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-36 h-36 rounded-full border-[5px] border-[#3abef9] p-1 overflow-hidden shadow-[0_0_20px_rgba(58,190,249,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Blue Edit Badge Overlay */}
              <button className="absolute bottom-2 right-1 bg-[#3abef9] p-2 rounded-lg border-[3px] border-[#0a0d14] shadow-lg hover:scale-110 active:scale-90 transition-all">
                <Edit3 size={18} className="text-white fill-white" />
              </button>
            </div>

            {/* Name & Email */}
            <div className="text-center mt-4">
              <h2 className="text-2xl font-extrabold tracking-tight">Harsha</h2>
              <p className="text-gray-300 text-sm font-medium mt-1">
                HarshaKumara98@gmail.com
              </p>
            </div>
          </div>

          {/* 4. Menu List Items */}
          <div className="mt-20 flex flex-col space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-between px-8 py-5 hover:bg-white/5 transition-all group active:bg-white/10 text-left"
              >
                <div className="flex items-center gap-5">
                  <div className="text-white/80 group-hover:text-[#3abef9] transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-lg font-semibold tracking-tight">
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {item.extra && (
                    <span className={`text-sm font-bold ${item.extraClass}`}>
                      {item.extra}
                    </span>
                  )}
                  <ChevronRight
                    size={24}
                    className="text-white/60 group-hover:text-white transition-all group-hover:translate-x-1"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
