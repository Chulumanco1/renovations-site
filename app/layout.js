"use client";
import { AnimatePresence, motion } from "framer-motion";
import { DarkModeProvider } from "../context/DarkModeContext";
import DarkModeToggle from "../components/DarkModeToggle";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 overflow-x-hidden">
        <DarkModeProvider>
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={Math.random()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </DarkModeProvider>
      </body>
    </html>
  );
}
