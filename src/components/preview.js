"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
const DoorPreview = () => {
  const [type, setType] = useState("Seccional");

  const images = {
    Seccional: "/projects_1.jpg",
    Enrollable: "https://source.unsplash.com/800x600/?rolling,door",
    Corrediza: "https://source.unsplash.com/800x600/?sliding,gate",
    Abatible: "https://source.unsplash.com/800x600/?swing,gate",
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Vista previa interactiva</h2>

      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(images).map((key) => (
          <button
            key={key}
            onClick={() => setType(key)}
            className={`px-4 py-2 rounded-xl ${type===key ? "bg-green-500 text-black" : "bg-gray-800"}`}
          >
            {key}
          </button>
        ))}
      </div>

      <motion.img
        key={type}
        src={images[type]}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto rounded-2xl shadow-lg"
      />
    </section>
  );
}
export default DoorPreview