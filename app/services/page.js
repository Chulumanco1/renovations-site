"use client";
import ServiceCard from "../../components/ServiceCard";
import Footer from "../../components/Footer";

export default function Services() {
  const services = [
    { title: "Paving", desc: "Durable, stylish paving for homes & businesses.", image: "/services/paving.jpg" },
    { title: "Building", desc: "Quality construction & project management.", image: "/services/building.jpg" },
    { title: "Plumbing", desc: "Professional plumbing installation & repair.", image: "/services/plumbing.jpg" },
    { title: "Camera Installation", desc: "Security camera setup & monitoring.", image: "/services/camera.jpg" },
    { title: "Aluminium", desc: "Aluminium works & fabrication.", image: "/services/aluminium.jpg" },
    { title: "Painting", desc: "Interior & exterior painting.", image: "/services/painting.jpg" },
    { title: "Solar System", desc: "Solar panel installation & maintenance.", image: "/services/solar.jpg" },
    { title: "Built In Systems", desc: "Custom built-in cabinetry & systems.", image: "/services/builtin.jpg" },
    { title: "Design Ceiling", desc: "Stylish design ceilings and finishes.", image: "/services/ceiling.jpg" },
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(s => <ServiceCard key={s.title} title={s.title} desc={s.desc} image={s.image} />)}
        </div>
      </div>

      <Footer />
    </main>
  );
}
