"use client"
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
const WhyUs = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <ShieldCheck />
          <h3 className="font-bold">Seguridad</h3>
          <p className="text-gray-400">Materiales de alta resistencia</p>
        </div>
        <div>
          <Wrench />
          <h3 className="font-bold">Instalación</h3>
          <p className="text-gray-400">Equipo profesional</p>
        </div>
        <div>
          <Star />
          <h3 className="font-bold">Experiencia</h3>
          <p className="text-gray-400">Clientes satisfechos</p>
        </div>
      </div>
    </section>
  );
}
const services = [
  { title: "Puertas Blindadas", desc: "Alta seguridad", icon: ShieldCheck },
  { title: "Automatización", desc: "Motores y control", icon: Wrench },
  { title: "Garaje", desc: "Todo tipo de puertas", icon: Layers },
];

const doorTypes = [
  { title: "Seccionales", img: "https://images.unsplash.com/photo-1597002975673-ec9c8c4b7f02" },
  { title: "Enrollables", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
  { title: "Corredizas", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { title: "Abatibles", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
];
export default WhyUs