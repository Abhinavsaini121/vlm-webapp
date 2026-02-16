import { createContext } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeData = useTheme();
  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
};
