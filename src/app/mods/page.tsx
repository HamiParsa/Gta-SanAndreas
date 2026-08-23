"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Mods page with industrial theme
// ============================================================
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FiDownload, 
  FiBox, 
  FiCpu, 
  FiMap, 
  FiChevronRight,
  FiHardDrive,
  FiStar
} from "react-icons/fi";
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
export default function ModsPage() {
// ============================================================
// REFS -  null! 
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
  const mods = [
    {
      title: "Realistic Graphics",
      image: "https://th-test-11.slatic.net/p/db92f26f739e45348a8a7af66362c39c.jpg",
      description: "Transform San Andreas into a next-gen experience with enhanced lighting and HD textures.",
      icon: FiCpu,
      size: "2.4 GB",
      downloads: "12.4K",
      rating: "4.9★",
      category: "Graphics"
    },
    {
      title: "Car Pack 2025",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6MJcESTFyN6FVpGymSD5abgBuDxU4ioNiANs7xqgIwy8QT60iQAtpVgfdqlrjE6TzCIxtiUw9BXio-pkJrlbGfjzrIoqrZvAyNP0n7yM4eJQZNo14yaHbm8bzuQKs-ys2Muw0wGS11l0Jn6zJ5p38kXVI9RVMgJv7nZZKskSGEoVpoES-74y0YZ8ioehB/s1919/image_2023-09-06_015534056.png",
      description: "Cruise around Los Santos with a stunning collection of 2025 model cars.",
      icon: FiBox,
      size: "3.1 GB",
      downloads: "8.7K",
      rating: "4.8★",
      category: "Vehicles"
    },
    {
      title: "City Expansion",
      image: "https://media.moddb.com/images/mods/1/45/44923/Capture_2020_02_17_09_53_14_890.jpg",
      description: "Explore new parts of San Andreas, filled with high-rises, lights, and chaos.",
      icon: FiMap,
      size: "1.8 GB",
      downloads: "15.2K",
      rating: "4.7★",
      category: "Maps"
    },
  ];

  // Stats
  const stats = [
    { value: "100+", label: "Mods Available" },
    { value: "50M+", label: "Total Downloads" },
    { value: "4.8★", label: "Average Rating" },
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
        className="relative min-h-[50vh] flex items-center px-8 pt-32 pb-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/5 via-[#f5f5f5] to-[#1a1a1a]/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a1a1a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a1a1a]/5 rounded-full blur-3xl" />
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
              <span className="text-[#1a1a1a]/60">MODS</span>
            </div>

            {/* Title */}
            <div>
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                <span>MODS GARAGE</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mt-4">
                Customize <br />
                <span className="font-black bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-clip-text text-transparent bg-300% animate-gradient">
                  Your Ride.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-[#1a1a1a]/50 font-light max-w-2xl leading-relaxed">
              Customize your ride, upgrade your world, dominate the streets. 
              Explore the best mods for Los Santos.
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
        SECTION 2: MODS GRID
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
              <span>POPULAR MODS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-2">
              Essential <span className="font-medium">Mods.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mods.map((mod, index) => {
              const Icon = mod.icon;
              const visible = gridVisible;
              
              return (
                <motion.div
                  key={mod.title}
                  className={`group transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1a1a1a]/5">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-[#1a1a1a]">
                      <Image
                        src={mod.image}
                        alt={mod.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/60 border border-white/10">
                        {mod.category}
                      </div>

                      {/* Size Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/40 border border-white/10 flex items-center gap-1.5">
                        <FiHardDrive className="text-xs" />
                        <span>{mod.size}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#1a1a1a]/5 flex items-center justify-center">
                          <Icon className="text-[#1a1a1a]/40 text-lg" />
                        </div>
                        <h3 className="text-xl font-medium group-hover:text-[#1a1a1a]/80 transition-colors">
                          {mod.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-[#1a1a1a]/50 font-light leading-relaxed">
                        {mod.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-[#1a1a1a]/40">
                        <div className="flex items-center gap-1.5">
                          <FiDownload className="text-xs" />
                          <span>{mod.downloads}</span>
                        </div>
                        <span className="w-px h-3 bg-[#1a1a1a]/10" />
                        <div className="flex items-center gap-1.5">
                          <FiStar className="text-xs" />
                          <span>{mod.rating}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-[#1a1a1a] text-[#f5f5f5] rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1a1a1a]/90 transition-all shadow-md hover:shadow-lg"
                      >
                        <FiDownload className="text-xs" /> Download Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 3: CTA - Explore More Mods
      ============================================================ */}
      <section className="px-8 py-32 bg-[#1a1a1a] text-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30 mb-8">
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
            <span>MORE MODS</span>
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Ready to <br />
            <span className="font-medium">upgrade?</span>
          </h2>

          <p className="text-[#f5f5f5]/40 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Discover hundreds of mods to customize your Los Santos experience. 
            From graphics to cars to new worlds.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-5 bg-[#f5f5f5] text-[#1a1a1a] font-medium rounded-full hover:bg-[#f5f5f5]/90 transition-all text-lg tracking-wide flex items-center gap-3 mx-auto shadow-xl"
          >
            <FiDownload className="text-xl" /> Browse All Mods
          </motion.button>
        </div>
      </section>

    </main>
  );
}