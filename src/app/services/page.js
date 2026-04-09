import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
import CTA from "@/components/ct";
import Footer from "@/components/footer";
import DoorTypes from "@/components/doors";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import ProjectsPreview from "@/components/preview";
import Services from "@/components/services";
import WhyUs from "@/components/why";
import Image from "next/image";
import Link from "next/link";
export default function ServiciosPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="py-16 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Fabricación, instalación y automatización de puertas metálicas para hogares, negocios e industria.
        </p>
      </section>

      {/* MAIN SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl">
            <s.icon className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 mb-4">{s.desc}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>✔ Instalación profesional</li>
              <li>✔ Materiales de alta calidad</li>
              <li>✔ Garantía incluida</li>
            </ul>
          </div>
        ))}
      </section>

      {/* GARAGE TYPES */}
      <section className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-10">Puertas de Garaje</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {doorTypes.map((d, i) => (
            <div key={i} className="border border-gray-800 rounded-2xl overflow-hidden">
              <img src={d.img} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="text-xs text-gray-500">Automatizables</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTOMATION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Automatización</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Control total con un botón</h3>
            <p className="text-gray-400 mb-4">
              Instalamos motores y sistemas automáticos para puertas corredizas, enrollables y seccionales.
            </p>
            <ul className="text-gray-500 space-y-2">
              <li>✔ Control remoto</li>
              <li>✔ Sensores de seguridad</li>
              <li>✔ Apertura silenciosa</li>
            </ul>
          </div>
          <div className="h-64 rounded-2xl"><Image src="/auto.jpg" alt="eitan" fill={true} className="h-64 w-full object-cover" style={{position:'static'}} /></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-10">Cómo trabajamos</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Evaluación",
            "Diseño",
            "Fabricación",
            "Instalación",
          ].map((step, i) => (
            <div key={i} className="bg-black p-6 rounded-2xl border border-gray-800">
              <div className="text-2xl font-bold mb-2">{i + 1}</div>
              <p className="text-gray-400">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-gray-400 mb-6">Solicita tu cotización en minutos</p>
        <Link href="/cotizar"><button className="bg-green-500 px-8 py-4 rounded-xl text-white font-bold">
          Cotizar
        </button></Link>
      </section>

      <Footer />
    </div>
  );
}
const services = [
  { title: "Puertas Blindadas", desc: "Alta seguridad", icon: ShieldCheck },
  { title: "Automatización", desc: "Motores y control", icon: Wrench },
  { title: "Garaje", desc: "Todo tipo de puertas", icon: Layers },
];

const doorTypes = [
  { title: "Seccionales", img: "/garaje.jpg" },
  { title: "Enrollables", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
  { title: "Corredizas", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { title: "Abatibles", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
];