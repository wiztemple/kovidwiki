"use client";

import { useEffect, useState } from "react";
import LightModeIcon from "../icons/LightModeIcon";
import DarkModeIcon from "../icons/DarkModeIcon";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={handleToggle} className="p-2 rounded-lg border dark:border-gray-600">
      {theme === 'dark' ? <LightModeIcon fill="#878EAB" /> : <DarkModeIcon fill="#878EAB" /> }
    </button>
  );
};

export default ThemeToggle;
