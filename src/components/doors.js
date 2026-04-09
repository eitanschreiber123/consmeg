"use client"
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
const DoorTypes = () => {
  return (
    <section className="py-20 grid md:grid-cols-4 gap-6 px-6">
      {doorTypes.map((d,i)=>(
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="border border-gray-800 rounded-xl overflow-hidden"
        >
          <img src={d.img} className="h-40 w-full object-cover hover:scale-110 transition" />
          <div className="p-3">{d.title}</div>
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
  { title: "Seccionales", img: "/garaje.jpg" },
  { title: "Enrollables", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952" },
  { title: "Corredizas", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { title: "Abatibles", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
];
export default DoorTypes