"use client";
import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gray-700 dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-lg shadow-lg"
    >
      {darkMode ? "Light" : "Dark"}
    </motion.button>
  );
}
