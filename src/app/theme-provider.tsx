"use client";

import React, { useEffect, createContext, useState } from "react";

export const ThemeContext = createContext(undefined);

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Custom setDarkMode para agregar la clase al elemento <html>
  const setDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    window.localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Verifica si el sistema operativo está en modo oscuro
  const isDarkModeSO = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Verifica si hay un valor en el localStorage para el modo oscuro
  const isDarkModeLocalStorage = JSON.parse(
    window.localStorage.getItem("darkMode")
  );

  // Respeta el modo oscuro del sistema operativo solo si no hay un valor en el localStorage
  useEffect(() => {
    setDarkMode(
      isDarkModeLocalStorage === null ? isDarkModeSO : isDarkModeLocalStorage
    );
    // setDarkMode;
  }, [isDarkModeLocalStorage, isDarkModeSO]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
