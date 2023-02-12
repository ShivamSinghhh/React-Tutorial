import { createContext, useState } from "react";

// step-1 creating Context
export const ThemeContext = createContext();
// Reacts provide  us with Provider Component
// ThemeContext.Provider

// This is the provider component, It will create an environment around the App.
// The values which are passed inside this provider will be accessible from anywhere
// inside the Child Component.
export default function ThemeContextProvider({ children }) {
  console.log("ThemeContext is", ThemeContext);
  // step -2  Providing context values

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
