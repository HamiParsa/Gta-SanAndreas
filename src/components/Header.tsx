"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCar, FaBookOpen, FaMapMarkedAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Characters", href: "/characters", icon: <FaUser /> },
    { name: "Mods", href: "/mods", icon: <FaCar /> },
    { name: "Story", href: "/story", icon: <FaBookOpen /> },
    { name: "Locations", href: "/locations", icon: <FaMapMarkedAlt /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  // Auto Close Menu 
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-widest text-red-500">GTA San Andreas</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-200 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center space-x-1 hover:text-red-500 transition ${
                pathname === link.href ? "text-red-500 font-bold" : ""
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/90 overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 p-6 text-gray-200">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-2 hover:text-red-500 transition ${
                      pathname === link.href ? "text-red-500 font-bold" : ""
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
