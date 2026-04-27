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
export default function ContactoPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-10 max-w-xl mx-auto text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-400">WhatsApp: +593 98 593 6893</p>
      </div>
    </div>
  );
}