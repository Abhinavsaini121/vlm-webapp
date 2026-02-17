// src/hooks/useTheme.js
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Ye line check karegi ki purana theme save hai ya nahi
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Purani class hatao aur nayi lagao
    root.classList.remove("dark");
    
    if (theme === "dark") {
      root.classList.add("dark");
    }

    // LocalStorage me save karo
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
};