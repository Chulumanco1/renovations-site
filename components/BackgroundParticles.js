"use client";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

export default function BackgroundParticles() {
  const { darkMode } = useDarkMode();
  const circles = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, (i % 2 ? -1 : 1) * (20 + i * 6), 0],
            y: [0, (i % 2 ? 1 : -1) * (10 + i * 4), 0],
            rotate: [0, (i % 2 ? 3 : -3), 0],
          }}
          transition={{ repeat: Infinity, duration: 12 + i, delay: i * 0.4 }}
          style={{
            top: `${10 + i * 11}%`,
            left: `${5 + (i * 12) % 90}%`,
            width: 80,
            height: 80,
            borderRadius: 999,
            background: darkMode
              ? "radial-gradient(circle, rgba(80,80,80,0.08), rgba(40,40,40,0.02))"
              : "radial-gradient(circle, rgba(200,200,200,0.06), rgba(240,240,240,0.02))",
            opacity: 1,
          }}
          className="filter blur-sm"
        />
      ))}
    </div>
  );
}
