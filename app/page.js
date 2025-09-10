"use client";
import { motion } from "framer-motion";
import BackgroundParticles from "../components/BackgroundParticles";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  const services = [
    { title: "Paving", desc: "Durable, stylish paving for homes & businesses.", image: "/services/paving.jpg" },
    { title: "Building", desc: "Quality construction & project management.", image: "/services/building.jpg" },
    { title: "Plumbing", desc: "Professional plumbing installation & repair.", image: "/services/plumbing.jpg" },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen">
      <BackgroundParticles />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 z-10 relative">
        <div className="max-w-3xl">
          <motion.h1 initial={{ opacity:0, y:-30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9 }} className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Ntakazezulu Trading
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }} className="mt-6 text-gray-400">
            Paving • Building • Plumbing • Camera installation • Aluminium • Painting • Solar • Built-in systems • Design ceilings
          </motion.p>

          <motion.div className="mt-8 flex gap-4 justify-center" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}>
            <Link href="/services" className="px-6 py-3 bg-red-700 rounded-lg text-white shadow hover:bg-red-600 transition">Our Services</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition">Contact</Link>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-red-600 mb-8">Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(s => <ServiceCard key={s.title} title={s.title} desc={s.desc} image={s.image} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
