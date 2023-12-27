"use client";

import React, { useContext } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "@/app/theme-provider";

export default function ToggleTheme() {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  const changeTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <button type="button" onClick={changeTheme} className="p-5 ml-4 rounded-full text-2xl bg-boxes shadow-slate-300 dark:bg-darkBoxes shadow-md dark:shadow-darkBoxes fixed top-5 right-5 lg:relative lg:top-0 lg:right-0">
      {isDarkMode ? <BiSun /> : <BiMoon />}
    </button>
  );
}
