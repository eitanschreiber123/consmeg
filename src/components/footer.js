"use client"
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
const Footer = () => <footer className="border-t border-gray-800 p-6 text-center text-gray-500">© 2026 CONSMEG</footer>
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
export default Footer