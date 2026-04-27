import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
import CTA from "@/components/ct";
import Footer from "@/components/footer";
import DoorTypes from "@/components/doors";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import ProjectsPreview from "@/components/preview";
import Services from "@/components/services";
import WhyUs from "@/components/why";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <DoorTypes />
      <WhyUs />
      <CTA />
      <section className="py-20 text-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 className="text-3xl font-bold mb-4">Quienes Somos</h2>
            <p>Necesito mas contenido</p>
          </section>
      <Footer />
    </div>
  );
}
