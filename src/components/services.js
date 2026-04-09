"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
const Services = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
      {services.map((s,i)=>(
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-6 rounded-2xl"
        >
          <s.icon />
          <h3>{s.title}</h3>
          <p className="text-gray-400">{s.desc}</p>
        </motion.div>
      ))}
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
export default Services 