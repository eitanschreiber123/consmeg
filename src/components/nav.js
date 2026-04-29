"use client"
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { title: 'Servicios', link: 'services' },
    { title: 'Proyectos', link: 'projects' },
    { title: 'Contacto', link: 'contact' }
  ];

  // 👇 Detect clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 border-b border-gray-800 bg-black/80 backdrop-blur-md" style={{marginTop:'46px'}}>
      <Link href="/" className="text-xl font-bold">CONSMEG</Link>

      {/* Desktop Menu */}
      <div className="hidden min-[550px]:flex gap-6">
        {navItems.map((item, i) => (
          <Link key={i} href={`/${item.link}`}>
            {item.title}
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

      {/* Hamburger */}
      <button
        className="min-[550px]:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 min-[550px]:hidden"
        >
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={`/${item.link}`}
              onClick={() => setOpen(false)}
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
