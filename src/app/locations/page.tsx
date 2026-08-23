"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Locations page with industrial theme
// ============================================================
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiChevronRight, FiCompass, FiGlobe } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

// ============================================================
// SECTION 2: CUSTOM HOOKS
// ============================================================
const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

// ============================================================
// SECTION 3: MAIN COMPONENT
// ============================================================
export default function LocationsPage() {
// ============================================================
// REFS - null! 
// ============================================================
const heroRef = useRef<HTMLElement>(null!);
const gridRef = useRef<HTMLElement>(null!);

// ============================================================
// INTERSECTION OBSERVER 
// ============================================================
const heroVisible = useIntersectionObserver(heroRef);
const gridVisible = useIntersectionObserver(gridRef);
  // ============================================================
  // DATA
  // ============================================================
  const locations = [
    {
      name: "Grove Street",
      description: "The heart of CJ's past and the birthplace of the Grove Street Families. Home, loyalty, and legacy.",
      image: "https://storage.cgsector.com/gallery/2022-06/3838/1654461277-o772i8xZHcDM19GRd1NaRKbsWaXgX4cqkER6mVfl.jpg",
      vibe: "OG Territory",
      region: "Los Santos"
    },
    {
      name: "Downtown Los Santos",
      description: "High-rise chaos, flashing lights, and the relentless pace of the city that never sleeps.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg/1200px-Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg",
      vibe: "Corporate Zone",
      region: "Los Santos"
    },
    {
      name: "Vinewood",
      description: "Where dreams meet corruption — the glitz and glamour hide dark secrets under the neon lights.",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd022e9d-8c1a-4f62-9908-0e571711aae2/ddla7h7-10df3ad2-7c5f-4681-a305-a2eabc9b05c3.jpg/v1/fill/w_1600,h_900,q_75,strp/vinewood_sign__by_remyras_ddla7h7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6Ii9mL2ZkMDIyZTlkLThjMWEtNGY2Mi05OTA4LTBlNTcxNzExYWFlMi9kZGxhN2g3LTEwZGYzYWQyLTdjNWYtNDY4MS1hMzA1LWEyZWFiYzliMDVjMy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.riB53d5yjX4FpXPsDl50m-YUMoOAcVhjUnlh7Go54kU",
      vibe: "Star District",
      region: "Los Santos"
    },
    {
      name: "Las Venturas",
      description: "Bright lights and broken dreams. The casino capital filled with money, crime, and adrenaline.",
      image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/gta-las-venturas-.png?q=50&fit=crop&w=825&dpr=1.5",
      vibe: "Casino City",
      region: "Las Venturas"
    },
    {
      name: "San Fierro",
      description: "Fog, bridges, and rebellion — a city that feels alive with underground races and tech madness.",
      image: "https://images.gamebanana.com/img/ss/mods/63537ae802158.jpg",
      vibe: "Tech Hub",
      region: "San Fierro"
    },
  ];

  // Stats
  const stats = [
    { value: "5", label: "Iconic Locations" },
    { value: "3", label: "Cities" },
    { value: "27M+", label: "Explorers" },
  ];

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] font-sans antialiased">

      {/* ============================================================
        SECTION 1: HERO
      ============================================================ */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center px-8 pt-32 pb-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://wallpapers.com/images/featured/los-angeles-ivvay01goo25zx7k.jpg"
            alt="Los Santos Skyline"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-[#f5f5f5]/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5]/90 via-[#f5f5f5]/50 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
              <span>HOME</span>
              <FiChevronRight className="text-xs" />
              <span className="text-[#1a1a1a]/60">LOCATIONS</span>
            </div>

            {/* Title */}
            <div>
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                <span>EXPLORE THE WORLD</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mt-4">
                Iconic <br />
                <span className="font-black bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-clip-text text-transparent bg-300% animate-gradient">
                  Locations.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-[#1a1a1a]/50 font-light max-w-2xl leading-relaxed">
              From the streets of Grove Street to the lights of Vinewood — 
              every corner tells a story in the city that never sleeps.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-light">{stat.value}</div>
                  <div className="text-sm text-[#1a1a1a]/40 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
        SECTION 2: LOCATIONS GRID
      ============================================================ */}
      <section 
        ref={gridRef}
        className="px-8 py-20 bg-[#f5f5f5] border-t border-[#1a1a1a]/5"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
              <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
              <span>DESTINATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-2">
              Every corner <span className="font-medium">tells a story.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                animate={gridVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1a1a1a]/5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
                  
                  {/* Region Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/60 border border-white/10 flex items-center gap-1.5">
                    <FiGlobe className="text-xs" />
                    <span>{loc.region}</span>
                  </div>

                  {/* Vibe Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/40 border border-white/10">
                    {loc.vibe}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-medium group-hover:text-[#1a1a1a]/80 transition-colors flex items-center gap-2">
                    <FiMapPin className="text-[#1a1a1a]/30 text-sm" />
                    {loc.name}
                  </h3>
                  
                  <p className="text-sm text-[#1a1a1a]/50 font-light leading-relaxed">
                    {loc.description}
                  </p>

                  {/* Explore Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors pt-2"
                  >
                    Explore <FiChevronRight className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 3: CTA - Explore More
      ============================================================ */}
      <section className="px-8 py-32 bg-[#1a1a1a] text-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30 mb-8">
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
            <span>ADVENTURE AWAITS</span>
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Ready to <br />
            <span className="font-medium">explore?</span>
          </h2>

          <p className="text-[#f5f5f5]/40 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Every street has a secret. Every corner tells a story. 
            Start your journey through Los Santos today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-5 bg-[#f5f5f5] text-[#1a1a1a] font-medium rounded-full hover:bg-[#f5f5f5]/90 transition-all text-lg tracking-wide flex items-center gap-3 mx-auto shadow-xl"
          >
            <FiCompass className="text-xl" /> Start Exploring
          </motion.button>
        </div>
      </section>

    </main>
  );
}