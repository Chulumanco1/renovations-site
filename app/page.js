"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  const services = ["Paving", "Building", "Plumbing"];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-red-700 mb-4"
        >
          Welcome to Ntakazezulu Trading
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg text-gray-400 max-w-xl"
        >
          We deliver top-quality services with precision and passion 🚀
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-red-700 text-white rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          Learn More
        </motion.button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg"
        >
          We are passionate about creating modern, fast, and reliable services. 
          This demo showcases a fully cinematic, dark-themed, animated website.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black text-center">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-red-700"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{service}</h3>
              <p className="text-gray-400">
                High-quality {service.toLowerCase()} service tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 text-gray-400 text-lg"
        >
          Have a project in mind? Let’s build it together.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-red-700 text-white rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          Contact Us
        </motion.button>
      </section>
    </main>
  );
}
