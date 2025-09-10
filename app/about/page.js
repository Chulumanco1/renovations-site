"use client";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} className="text-4xl font-bold text-red-600 mb-6">About Ntakezulu Trading</motion.h1>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} className="text-gray-400">
          Ntakezulu Trading provides professional services across paving, building, plumbing, security camera installation, aluminium fabrication, painting, solar systems, built-in systems and design ceilings. We operate from:
          <br /><strong>30 Ostritch Street, Southernwood, Mthatha, 5099</strong>
        </motion.p>

        <div className="mt-8 space-y-2 text-gray-300">
          <div>Phone: <a href="tel:0655213160" className="text-white">065 521 3160</a></div>
          <div>Phone: <a href="tel:0673596093" className="text-white">067 359 6093</a></div>
          <div>Email: <a href="mailto:ntakazezulutrading@gmail.com" className="text-white">ntakazezulutrading@gmail.com</a></div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
