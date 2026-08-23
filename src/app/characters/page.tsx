"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Characters page with industrial theme
// ============================================================
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiStar, FiChevronRight } from "react-icons/fi";
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
export default function CharactersPage() {
// ============================================================
// REFS - null!
// ============================================================
const headerRef = useRef<HTMLDivElement>(null!);
const gridRef = useRef<HTMLDivElement>(null!);

// ============================================================
// INTERSECTION OBSERVER 
// ============================================================
const headerVisible = useIntersectionObserver(headerRef);
const gridVisible = useIntersectionObserver(gridRef);

  // ============================================================
  // DATA
  // ============================================================
  const characters = [
    {
      name: "Carl Johnson (CJ)",
      image: "https://staticg.sportskeeda.com/editor/2021/06/5a89c-16237545260241-800.jpg?w=640",
      role: "Protagonist",
      description: "CJ returns to Los Santos to rebuild his life and restore Grove Street's legacy.",
      quote: "Grove Street. Home.",
      stats: { missions: "100+", respect: "★★★★★" }
    },
    {
      name: "Big Smoke",
      image: "https://dist.tekkenmods.com/dist-cache/1920/78/mods/1468/thumbnails/6d0880e9538e915d-1280x720.jpg",
      role: "Antagonist",
      description: "A friend or a foe? Big Smoke is known for his charm—and his betrayal.",
      quote: "I'll have two number 9s...",
      stats: { missions: "20+", respect: "★★★☆☆" }
    },
    {
      name: "Ryder",
      image: "https://i.pinimg.com/736x/fc/5d/15/fc5d153bdd68372c54baa5eb77f2e72b.jpg",
      role: "Grove Street OG",
      description: "Loyal to Grove Street, but reckless in action. Ryder's chaos defines him.",
      quote: "You can't keep a good man down.",
      stats: { missions: "15+", respect: "★★★★☆" }
    },
  ];

 
  // ============================================================
  // RENDER
  // ============================================================
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] font-sans antialiased">

      {/* ============================================================
        SECTION 1: HEADER
      ============================================================ */}
      <section 
        ref={headerRef}
        className="relative px-8 pt-40 pb-20 bg-[#f5f5f5]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
              <span>HOME</span>
              <FiChevronRight className="text-xs" />
              <span className="text-[#1a1a1a]/60">CHARACTERS</span>
            </div>

            {/* Title */}
            <div>
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                <span>MEET THE LEGENDS</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mt-4">
                Characters of <br />
                <span className="font-black bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-clip-text text-transparent bg-300% animate-gradient">
                  Los Santos.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-[#1a1a1a]/50 font-light max-w-2xl leading-relaxed">
              Power, loyalty, and betrayal define the streets of Los Santos. 
              Meet the legends who shaped the city.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-6">
              <div>
                <div className="text-3xl font-light">6+</div>
                <div className="text-sm text-[#1a1a1a]/40 font-light">Main Characters</div>
              </div>
              <div>
                <div className="text-3xl font-light">1992</div>
                <div className="text-sm text-[#1a1a1a]/40 font-light">Year of Legend</div>
              </div>
              <div>
                <div className="text-3xl font-light">27M+</div>
                <div className="text-sm text-[#1a1a1a]/40 font-light">Players Worldwide</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
        SECTION 2: MAIN CHARACTERS GRID
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
              <span>MAIN CAST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-2">
              The <span className="font-medium">Legends.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((char, index) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 30 }}
                animate={gridVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1a1a1a]/5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={char.image}
                    alt={char.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/60 border border-white/10">
                    {char.role}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-medium group-hover:text-[#1a1a1a]/80 transition-colors">
                    {char.name}
                  </h3>
                  
                  <p className="text-sm text-[#1a1a1a]/50 font-light leading-relaxed">
                    {char.description}
                  </p>

                  {/* Quote */}
                  <div className="pt-3 border-t border-[#1a1a1a]/5">
                    <p className="text-sm italic text-[#1a1a1a]/40">
                      {char.quote}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 pt-2 text-xs text-[#1a1a1a]/40">
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="text-sm" />
                      <span>{char.stats.missions}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiStar className="text-sm" />
                      <span>{char.stats.respect}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* ============================================================
        SECTION 4: CTA
      ============================================================ */}
      <section className="px-8 py-32 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30 mb-8">
            <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
            <span>EXPLORE MORE</span>
            <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Discover their <br />
            <span className="font-medium">stories.</span>
          </h2>

          <p className="text-[#1a1a1a]/40 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Every legend has a story. Dive deeper into the lives 
            of those who shaped Los Santos.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-5 bg-[#1a1a1a] text-[#f5f5f5] font-medium rounded-full hover:bg-[#1a1a1a]/90 transition-all text-lg tracking-wide flex items-center gap-3 mx-auto shadow-xl"
          >
            <FiUser className="text-xl" /> View All Characters
          </motion.button>
        </div>
      </section>

    </main>
  );
}