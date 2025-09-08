"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import BackgroundParticles from "../../components/BackgroundParticles";

export default function About() {
  return (
    <main className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <BackgroundParticles />
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400 dark:from-purple-700 dark:to-pink-500"
        >
          About Ntakazezulu Trading
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl"
        >
          We are passionate about delivering modern, fast, and animated solutions for businesses. 
          Our team combines creativity, technology, and precision to bring your projects to life.
        </motion.p>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-4xl mx-auto text-lg md:text-xl"
        >
          To craft visually stunning, highly functional websites that engage users and elevate brands. 
          Every project is treated with a cinematic approach, ensuring both aesthetic beauty and seamless performance.
        </motion.p>
      </section>
    </main>
  );
}
