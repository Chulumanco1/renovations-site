"use client";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

export default function BackgroundParticles() {
  const { darkMode } = useDarkMode();
  const circles = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, Math.random() * 0.5 + 0.75, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + i,
            delay: i * 0.5,
          }}
          className="absolute w-24 h-24 rounded-full opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: darkMode
              ? "radial-gradient(circle, #374151, #6B7280)" // Dark mode greys
              : "radial-gradient(circle, #E5E7EB, #D1D5DB)", // Light mode greys
          }}
        />
      ))}
    </div>
  );
}
