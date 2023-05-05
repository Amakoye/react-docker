import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const UpdateThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={mode}>
      <UpdateThemeContext.Provider value={toggleMode}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

const useMode = () => {
  const mode = useContext(ThemeContext);
  const toggleTheme = useContext(UpdateThemeContext);

  const theme = {
    backgroundColor: mode === "dark" ? "#333" : "#ccc",
    color: mode === "dark" ? "#ccc" : "#333",
    padding: "2em",
  };

  return [theme, toggleTheme];
};

export { ThemeProvider, useMode };
