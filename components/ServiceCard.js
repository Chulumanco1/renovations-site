"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
    >
      {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />}
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
