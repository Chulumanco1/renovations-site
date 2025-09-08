"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-between px-6 py-4 bg-black dark:bg-gray-900 shadow-lg sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 150 }}
        className="flex items-center gap-3"
      >
        <img src="/logo.jpg" alt="Logo" className="w-12 h-12 object-contain" />
        <span className="text-white font-bold text-xl">Ntakazezulu Trading</span>
      </motion.div>

      {/* Nav Links */}
      <div className="flex gap-10">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative font-bold text-gray-400 hover:text-red-700 transition"
          >
            {item.label}
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-red-700"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </motion.nav>
  );
}
