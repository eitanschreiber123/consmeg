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
import DoorConfigurator from "@/components/config";
export default function CotizarPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-10 max-w-xl mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-6">Cotizar</h1>
        <DoorConfigurator />
      </div>
    </div>
  );
}