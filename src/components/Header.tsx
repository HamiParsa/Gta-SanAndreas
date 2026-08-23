"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Header component with mobile responsiveness
// ============================================================
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  FiHome, 
  FiUser, 
  FiMapPin, 
  FiBookOpen, 
  FiGrid, 
  FiMail,
  FiMenu,
  FiX,
  FiChevronRight
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// SECTION 2: HEADER COMPONENT
// Clean, minimal, industrial style matching the theme
// ============================================================
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links with GTA content
  const links = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "Characters", href: "/characters", icon: <FiUser /> },
    { name: "Locations", href: "/locations", icon: <FiMapPin /> },
    { name: "Story", href: "/story", icon: <FiBookOpen /> },
    { name: "Mods", href: "/mods", icon: <FiGrid /> },
    { name: "Contact", href: "/contact", icon: <FiMail /> },
  ];

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#f5f5f5]/95 backdrop-blur-md shadow-sm border-b border-[#1a1a1a]/5' 
          : 'bg-[#f5f5f5]/80 backdrop-blur-sm border-b border-[#1a1a1a]/5'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-light tracking-tighter text-[#1a1a1a] group-hover:rotate-12 transition-transform duration-300">
            ✧
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-sm uppercase tracking-[0.2em] font-light text-[#1a1a1a]">
              Grove Street
            </span>
            <span className="text-[8px] tracking-[0.3em] text-[#1a1a1a]/30 font-mono uppercase">
              Los Santos
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-2 text-sm font-light tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-[#1a1a1a]' 
                    : 'text-[#1a1a1a]/50 hover:text-[#1a1a1a]/80'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                <span>{link.name}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#1a1a1a]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side - CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 bg-[#1a1a1a] text-[#f5f5f5] text-xs font-medium rounded-full hover:bg-[#1a1a1a]/90 transition-all tracking-wide shadow-lg hover:shadow-xl">
            Download Mods
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#1a1a1a] hover:text-[#1a1a1a]/60 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ============================================================
        MOBILE MENU
        Full-width dropdown with smooth animation
      ============================================================ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[#f5f5f5] border-t border-[#1a1a1a]/5 overflow-hidden"
          >
            <div className="px-8 py-6 space-y-2">
              {links.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#1a1a1a]/5 text-[#1a1a1a]' 
                          : 'text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-lg ${isActive ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/40'}`}>
                          {link.icon}
                        </span>
                        <span className="text-sm font-light tracking-wide">{link.name}</span>
                      </div>
                      {isActive && (
                        <FiChevronRight className="text-[#1a1a1a]/40" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-2 border-t border-[#1a1a1a]/5"
              >
                <button className="w-full py-3 bg-[#1a1a1a] text-[#f5f5f5] text-sm font-medium rounded-xl hover:bg-[#1a1a1a]/90 transition-all">
                  Download Mods
                </button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}