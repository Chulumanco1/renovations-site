"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95"
>

      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <img src="/logo.jpg" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-gray-800 dark:text-white">
          NtakazeZulu
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative font-medium text-white-800 dark:text-white hover:text-red-500 transition"
          >
            {item.label}
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
        <DarkModeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        <DarkModeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 dark:text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-screen w-2/3 md:hidden z-40 overflow-hidden"
          >
            {/* Animated Gradient Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-700 to-black animate-gradient-xy"
            />

            {/* Overlay Particles */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/20 dark:bg-white/10"
                  initial={{ x: "50%", y: "50%", opacity: 0 }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Menu Items */}
            <div className="relative flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-white hover:text-red-300 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
