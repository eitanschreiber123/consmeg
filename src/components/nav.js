"use client"
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800">
      <Link href="/" className="text-xl font-bold">CONSMEG</Link>
      <div className="flex gap-6">
        {[{title:'Servicios',link:'services'},{title:'Proyectos',link:'projects'},{title:'Contacto',link:'contact'}].map((item,i)=> (
          <Link key={i} href={`/${item.link.toLowerCase()}`} className="relative group">
            {item.title}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
      <Link href="/cotizar" className="bg-green-500 px-4 py-2 rounded-xl text-white font-semibold">
        Cotizar
      </Link>
    </nav>
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
  export default Navbar