import React, { useState } from "react";

import { MoonFill, SunFill } from "react-bootstrap-icons";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="theme-toggle-container d-flex justify-content-end">
      <div className={`theme-toggle ${isDarkMode ? "dark" : "light"}`} onClick={toggleTheme}>
        <div className="toggle-circle">
          {isDarkMode ? <MoonFill size={18} color="white" /> : <SunFill  size={18} color="yellow" />}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
