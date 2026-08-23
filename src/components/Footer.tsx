"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Footer component with social links
// ============================================================
import Link from "next/link";
import { 
  FiYoutube, 
  FiInstagram, 
  FiGithub,
  FiTwitter,
  FiChevronUp,
  FiMail,
  FiMapPin
} from "react-icons/fi";
import { useState, useEffect } from "react";

// ============================================================
// SECTION 2: FOOTER COMPONENT
// Clean, minimal, industrial style matching the theme
// ============================================================
export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Footer links
  const footerLinks = {
    "Explore": [
      { name: "Characters", href: "/characters" },
      { name: "Locations", href: "/locations" },
      { name: "Story", href: "/story" },
      { name: "Mods", href: "/mods" },
    ],
    "Community": [
      { name: "Discord", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "YouTube", href: "#" },
      { name: "Instagram", href: "#" },
    ],
    "Legal": [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-[#f5f5f5] border-t border-[#1a1a1a]/5">
      {/* ============================================================
        MAIN FOOTER CONTENT
      ============================================================ */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-light tracking-tighter text-[#1a1a1a]">✧</span>
              <div>
                <span className="font-mono text-sm uppercase tracking-[0.2em] font-light text-[#1a1a1a]">
                  Grove Street
                </span>
                <p className="text-[8px] tracking-[0.3em] text-[#1a1a1a]/30 font-mono uppercase">
                  Los Santos
                </p>
              </div>
            </div>
            
            <p className="text-sm text-[#1a1a1a]/40 font-light leading-relaxed max-w-sm">
              A fan-made tribute to the legendary streets of Los Santos. 
              Grove Street 4 Life.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <Link 
                href="#" 
                className="text-[#1a1a1a]/30 hover:text-[#1a1a1a]/70 transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube className="text-xl" />
              </Link>
              <Link 
                href="#" 
                className="text-[#1a1a1a]/30 hover:text-[#1a1a1a]/70 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="text-xl" />
              </Link>
              <Link 
                href="#" 
                className="text-[#1a1a1a]/30 hover:text-[#1a1a1a]/70 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="text-xl" />
              </Link>
              <Link 
                href="#" 
                className="text-[#1a1a1a]/30 hover:text-[#1a1a1a]/70 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-[#1a1a1a]/30 font-light">
              <div className="flex items-center gap-2">
                <FiMail className="text-sm" />
                <span>grove@street.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-sm" />
                <span>Los Santos, San Andreas</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-mono tracking-[0.2em] text-[#1a1a1a]/30 uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ============================================================
          BOTTOM BAR
        ============================================================ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-[#1a1a1a]/5">
          <p className="text-xs text-[#1a1a1a]/30 font-light">
            © 2026 Grove Street. Not affiliated with Rockstar Games.
          </p>

          <div className="flex items-center gap-6 text-xs text-[#1a1a1a]/30 font-light">
            <Link href="#" className="hover:text-[#1a1a1a]/60 transition-colors">
              Privacy
            </Link>
            <span className="w-px h-3 bg-[#1a1a1a]/10" />
            <Link href="#" className="hover:text-[#1a1a1a]/60 transition-colors">
              Terms
            </Link>
            <span className="w-px h-3 bg-[#1a1a1a]/10" />
            <Link href="#" className="hover:text-[#1a1a1a]/60 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================
        SCROLL TO TOP BUTTON
      ============================================================ */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-[#1a1a1a] text-[#f5f5f5] rounded-full shadow-lg hover:bg-[#1a1a1a]/90 transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FiChevronUp className="text-xl" />
      </button>
    </footer>
  );
}