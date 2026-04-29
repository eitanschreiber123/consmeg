"use client"
import { Phone, ShieldCheck, Wrench, Layers, Star } from "lucide-react";
import CTA from "@/components/ct";
import Footer from "@/components/footer";
import DoorTypes from "@/components/doors";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import ProjectsPreview from "@/components/preview";
import Services from "@/components/services";
import WhyUs from "@/components/why";
import { useDisplay } from "../context";
import Link from "next/link";
const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

const ServiceCard = ({ icon, title, id })=> {
  return (
    <div id={id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
      <div className="text-3xl text-orange-500 mb-4">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
  );
}
import { FaPlay, FaShieldAlt, FaWarehouse, FaBolt, FaTools, FaCheckCircle } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
export default function Home() {
  const { display, setDisplay } = useDisplay();
  return display == 1 ? (
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
  )
  : display == 2 ? (<main className="bg-slate-50 text-slate-900 antialiased" style={{marginTop:'46px'}}>

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            CONS<span className="text-orange-600">MEG</span>
          </div>

          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#garage" className="hover:text-orange-600">Garage Systems</a>
            <a href="#automation" className="hover:text-orange-600">Automation</a>
          </div>

          <a href="https://wa.me/yournumber" className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="bg-slate-900 text-white py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Premium Metal Doors <br />
              <span className="text-orange-500">Tailored to Your Style</span>
            </h1>

            <p className="text-xl opacity-90 mb-8 max-w-lg">
              Consmeg specializes in decorative, armored, and fortified metal doors.
              Transform your entrance with modern design and 24/7 security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg">
                START MY CUSTOM PROJECT
              </button>

              <button className="bg-white/10 px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-md">
                SEE OUR WORK
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black aspect-video rounded-2xl flex items-center justify-center border-4 border-white/10">
              <FaPlay className="text-6xl text-orange-500" />
            </div>
          </div>

        </div>
      </header>

      {/* PROBLEMS */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Is Your Entrance Failing You?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Don't compromise on beauty or safety. We fix the most common entryway frustrations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "My door looks dated.",
            "I don't feel safe.",
            "My garage door is manual."
          ].map((text, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-red-500">
              <h3 className="font-bold text-xl mb-3 italic">"{text}"</h3>
              <p className="text-slate-600">
                We provide modern, secure, and automated solutions tailored to you.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Expert Solutions for Every Access Point
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <ServiceCard icon={<FaShieldAlt />} title="Armored Doors" />
            <ServiceCard icon={<FaWarehouse />} title="Garage Systems" id="garage" />
            <ServiceCard icon={<FaBolt />} title="Automation" id="automation" />
            <ServiceCard icon={<FaTools />} title="Technical Service" />

          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="border-2 border-orange-500 rounded-2xl overflow-hidden shadow-2xl">

            <div className="bg-orange-500 text-white p-6 text-center">
              <h2 className="text-2xl font-bold">The Consmeg Full-Service Package</h2>
            </div>

            <div className="p-8">
              <ul className="space-y-6 mb-10">
                {[
                  "Personalized Design",
                  "On-Site Installation",
                  "Automation Hardware",
                  "Lifetime Technical Support"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span><strong>{item}:</strong> Premium quality service.</span>
                  </li>
                ))}
              </ul>

              <div className="text-center border-t pt-8">
                <p className="line-through text-gray-400">$3,500+</p>
                <p className="text-4xl font-black">Custom Pricing</p>

                <button className="mt-8 w-full bg-orange-600 text-white py-5 rounded-xl text-xl font-black">
                  GET MY FREE ESTIMATE
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Still have questions?
          </h2>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold">
                What is the difference between armored and fortified?
              </summary>
              <p className="mt-4 text-slate-600">
                Armored doors use internal steel plates, while fortified doors use full steel structures.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold">
                Can you automate my existing garage door?
              </summary>
              <p className="mt-4 text-slate-600">
                Yes, we automate sectional, sliding, and folding systems.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">

          <div>
            <div className="text-2xl font-bold mb-4">
              CONS<span className="text-orange-600">MEG</span>
            </div>
            <p className="opacity-60 italic text-sm">
              Professional work you can trust.
            </p>
          </div>

          <div>
            <h4 className="text-orange-500 uppercase text-xs mb-4">Navigation</h4>
            <ul className="space-y-2 opacity-70">
              <li>Decorative Doors</li>
              <li>Garage Systems</li>
              <li>Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-orange-500 uppercase text-xs mb-4">Contact</h4>
            <p className="opacity-70 text-sm">
              Serving Guayaquil with expert installations.
            </p>

            <div className="mt-4 flex justify-center md:justify-start gap-4 text-2xl">
              <FaWhatsapp className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t text-center text-xs opacity-40">
          © {new Date().getFullYear()} Consmeg. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/yournumber"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        <FaWhatsapp />
      </a>

    </main>
  ) : display == 3 ? (
      <div className="font-sans text-gray-800" style={{marginTop:'46px'}}>
      {/* HERO */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Puertas Metálicas de Alta Seguridad
            </h1>
            <p className="text-lg mb-6">
              Instalamos puertas blindadas, decorativas y de garaje con diseño
              personalizado y máxima durabilidad.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-semibold"
              >
                Solicitar Cotización
              </a>
              <a
                href="#services"
                className="border border-white px-6 py-3 rounded"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Cotización Gratis</h3>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-3 p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full mb-3 p-3 border rounded"
            />
            <select className="w-full mb-4 p-3 border rounded">
              <option>Tipo de puerta</option>
              <option>Blindada</option>
              <option>Decorativa</option>
              <option>Garaje</option>
            </select>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded font-semibold">
              Recibir Cotización
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Puertas Blindadas",
                desc: "Alta seguridad para hogares y negocios",
              },
              {
                title: "Puertas Decorativas",
                desc: "Diseños modernos y personalizados",
              },
              {
                title: "Puertas de Garaje",
                desc: "Seccionales, corredizas, enrollables y más",
              },
              {
                title: "Automatización",
                desc: "Motores, sensores y control remoto",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Beneficios</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <p>🔒 Mayor seguridad para tu propiedad</p>
            <p>💰 Aumenta el valor de tu inmueble</p>
            <p>⚡ Automatización y comodidad</p>
            <p>🛠️ Instalación profesional garantizada</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Evaluación", "Diseño", "Fabricación", "Instalación"].map(
              (step, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="font-bold text-lg mb-2">{step}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Solicita tu cotización hoy mismo
        </h2>
        <p className="mb-6">Respuesta rápida y sin compromiso</p>
        <a
          href="#contact"
          className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded font-bold"
        >
          Contactar Ahora
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <p className="mb-4">WhatsApp: +593 XXX XXX XXX</p>
          <p className="mb-4">Teléfono: +593 XXX XXX XXX</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Consmeg - Todos los derechos reservados</p>
      </footer>
    </div>
    ) : display == 4 ? (
      <div className="bg-[#111] text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#111]/90 backdrop-blur z-50 border-b border-gray-800" style={{marginTop:'46px'}}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">CONSMEG</h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-yellow-500">Servicios</a>
            <a href="#gallery" className="hover:text-yellow-500">Proyectos</a>
            <a href="#contact" className="hover:text-yellow-500">Contacto</a>
          </div>

          <a
            href="https://wa.me/593XXXXXXXXX"
            className="bg-yellow-500 text-black px-4 py-2 rounded font-bold text-sm"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Puertas metálicas a tu medida
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Seguridad, diseño y automatización para tu hogar o negocio
          </p>

          <a
            href="https://wa.me/593XXXXXXXXX?text=Hola,%20quiero%20cotizar%20una%20puerta"
            className="bg-yellow-500 text-black px-6 py-3 font-bold rounded"
          >
            Cotizar ahora
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Nuestros Servicios
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Puertas Metálicas",
              desc: "Decorativas, blindadas y acorazadas a tu medida",
            },
            {
              title: "Puertas de Garaje",
              desc: "Seccionales, corredizas, enrollables y más",
            },
            {
              title: "Automatización",
              desc: "Motores, controles y servicio técnico especializado",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-xl hover:scale-105 transition"
            >
              <h4 className="text-xl font-bold mb-2">{s.title}</h4>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-[#0d0d0d] px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Proyectos Realizados
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-lg object-cover h-48 w-full hover:opacity-80 transition"
            />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">
          ¿Por qué elegir Consmeg?
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Alta seguridad",
            "Diseños personalizados",
            "Materiales de calidad",
            "Servicio técnico",
          ].map((item, i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 rounded-lg">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-500 text-black text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          ¿Necesitas una puerta segura?
        </h3>

        <p className="mb-6">
          Contáctanos ahora y recibe una cotización rápida
        </p>

        <a
          href="https://wa.me/593XXXXXXXXX"
          className="bg-black text-white px-6 py-3 rounded font-bold"
        >
          Escribir por WhatsApp
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Contacto
        </h3>

        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 rounded bg-[#1a1a1a] border border-gray-700"
          />

          <input
            type="text"
            placeholder="Teléfono"
            className="p-3 rounded bg-[#1a1a1a] border border-gray-700"
          />

          <textarea
            placeholder="Mensaje"
            rows="4"
            className="p-3 rounded bg-[#1a1a1a] border border-gray-700"
          />

          <button className="bg-yellow-500 text-black py-3 rounded font-bold">
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d0d0d] text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Consmeg - Todos los derechos reservados
      </footer>

    </div>
    ) : null
}
