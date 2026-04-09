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
export default function ProyectosPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-10 grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map(i => (
          <img src={`/projects_${i}.jpg`} className="border border-gray-800 rounded-2xl h-60 w-full object-cover" />
        ))}
      </div>
    </div>
  );
}