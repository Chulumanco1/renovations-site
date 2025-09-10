"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sentOk, setSentOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent!");
        setSentOk(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSentOk(false), 3500);
      } else {
        setStatus("Failed to send.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-4 text-center">Contact</h1>
        <p className="text-gray-400 text-center mb-6">Send your enquiry and we’ll get back to you.</p>

        <motion.form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your name" className="bg-gray-900 border border-gray-800 px-4 py-2 rounded" required />
          <motion.input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} type="email" placeholder="Your email" className="bg-gray-900 border border-gray-800 px-4 py-2 rounded" required />
          <motion.textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Message" rows={6} className="bg-gray-900 border border-gray-800 px-4 py-2 rounded" required />
          <motion.button whileHover={{ scale: 1.03 }} className="bg-red-700 px-5 py-3 rounded text-white">Send Message</motion.button>
        </motion.form>

        {status && <div className="mt-4 text-gray-400">{status}</div>}
      </div>

      <Footer />

      {/* Success modal */}
      {sentOk && (
        <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }} className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl text-center">
            <h3 className="text-xl font-bold mb-2 text-white">Message sent</h3>
            <p className="text-gray-400 mb-4">Thanks! We’ll get back to you shortly.</p>
            <a href="mailto:ntakazezulutrading@gmail.com" className="inline-block px-4 py-2 bg-red-700 rounded text-white">Contact via Email</a>
          </div>
        </motion.div>
      )}
    </main>
  );
}
