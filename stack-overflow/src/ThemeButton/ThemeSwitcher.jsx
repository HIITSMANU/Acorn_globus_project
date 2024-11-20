import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggletheme } = useTheme();

  return (
    <button
      onClick={toggletheme}
      className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white "
    >
      <i
        className={`${
          theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon"
        } transition-all`}
      ></i>
    </button>
  );
};

export default ThemeSwitcher;
