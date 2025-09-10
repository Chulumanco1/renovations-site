"use client";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="px-3 py-2 rounded-lg bg-gray-800 dark:bg-white text-white dark:text-black shadow-sm"
      aria-label="Toggle dark mode"
    >
      {darkMode ? "Light" : "Dark"}
    </motion.button>
  );
}
