"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ title, desc, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
    >
      {image && (
        <img src={image} alt={title} className="w-full h-44 object-cover grayscale brightness-90" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
}
