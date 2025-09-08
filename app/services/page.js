"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import PageWrapper from "../../components/PageWrapper";
import BackgroundParticles from "../../components/BackgroundParticles";

const services = [
  { title: "Paving", desc: "Stylish and durable paving solutions.", color: "from-red-500 to-pink-500" },
  { title: "Building", desc: "Quality construction with precision.", color: "from-blue-500 to-cyan-500" },
  { title: "Plumbing", desc: "Efficient plumbing solutions for homes & businesses.", color: "from-green-500 to-emerald-500" },
];

export default function Services() {
  return (
    <PageWrapper>
      <main className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white relative min-h-screen overflow-hidden">
        <BackgroundParticles />
        <Navbar />
        <section className="py-20 text-center relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold mb-12 text-red-600 dark:text-red-400"
          >
            Our Services
          </motion.h1>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 1 : -1, boxShadow: "0 0 35px rgba(239,68,68,0.5)" }}
                className={`p-8 rounded-3xl shadow-2xl cursor-pointer bg-gradient-to-br ${s.color} text-white`}
              >
                <h3 className="text-3xl font-bold mb-3">{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
