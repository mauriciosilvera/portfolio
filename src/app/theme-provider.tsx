"use client";

import { createContext, useState, ReactNode, useEffect } from "react";

export const ThemeContext = createContext(undefined);

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Custom setDarkMode para agregar la clase al elemento <html>
  const setDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    // window.localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Primer llamado para que se aplique correctamente el classname al <html>.
  useEffect(() => {
    setDarkMode(isDarkMode);
  }, []);

  /************ LEGACY ****************/

  // // Verifica si el sistema operativo está en modo oscuro
  // const isDarkModeSO = window.matchMedia(
  //   "(prefers-color-scheme: dark)"
  // ).matches;

  // // Verifica si hay un valor en el localStorage para el modo oscuro
  // const isDarkModeLocalStorage = JSON.parse(
  //   window.localStorage.getItem("darkMode")
  // );
  // useEffect(() => {
  //   setDarkMode(
  //     isDarkModeLocalStorage === null ? isDarkModeSO : isDarkModeLocalStorage
  //   );
  //   // setDarkMode;
  // }, [isDarkModeLocalStorage, isDarkModeSO]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
