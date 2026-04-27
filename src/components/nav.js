"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Wrench, Layers, Star, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { title: 'Servicios', link: 'services' },
    { title: 'Proyectos', link: 'projects' },
    { title: 'Contacto', link: 'contact' }
  ];

  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-800 relative">
      <Link href="/" className="text-xl font-bold">CONSMEG</Link>

      {/* Desktop Menu */}
      <div className="hidden min-[550px]:flex gap-6">
        {navItems.map((item, i) => (
          <Link key={i} href={`/${item.link}`} className="relative group">
            {item.title}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <Link
        href="/cotizar"
        className="hidden min-[550px]:block bg-green-500 px-4 py-2 rounded-xl text-white font-semibold"
      >
        Cotizar
      </Link>

      {/* Hamburger Icon */}
      <button
        className="min-[550px]:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 min-[550px]:hidden">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={`/${item.link}`}
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/cotizar"
            onClick={() => setOpen(false)}
            className="bg-green-500 px-4 py-2 rounded-xl text-white font-semibold"
          >
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
