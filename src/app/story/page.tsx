"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Story page with industrial theme and timeline
// ============================================================
import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronRight, FiClock, FiMapPin, FiStar, FiArrowRight } from "react-icons/fi";
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
export default function StoryPage() {
  // ============================================================
// REFS -  null! 
// ============================================================
const heroRef = useRef<HTMLElement>(null!);
const timelineRef = useRef<HTMLElement>(null!);

// ============================================================
// INTERSECTION OBSERVER 
// ============================================================
const heroVisible = useIntersectionObserver(heroRef);
const timelineVisible = useIntersectionObserver(timelineRef);

  // ============================================================
  // DATA
  // ============================================================
  const storySteps = [
    {
      title: "Return to Los Santos",
      description: "After years away, CJ returns to his hometown after the death of his mother, finding chaos and betrayal waiting.",
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak73k92o47ko75/5de9d8bc4ffeabb209ec67ab3721ea281da5cd05.jpg",
      year: "1992",
      location: "Los Santos",
      icon: "🏠"
    },
    {
      title: "Grove Street Reborn",
      description: "CJ reunites with his old gang, rebuilding Grove Street Families and reclaiming lost territories.",
      image: "https://cdn.wccftech.com/wp-content/uploads/2022/10/Grand-Theft-Auto-San-Andreas-Sequel-UE5-scaled.jpg",
      year: "1992",
      location: "Grove Street",
      icon: "🌿"
    },
    {
      title: "The Rise of Power",
      description: "From the streets to the skyline, CJ dominates San Andreas, gaining power, money, and influence.",
      image: "https://e0.pxfuel.com/wallpapers/205/843/desktop-wallpaper-eclipse-rp-gta-v-roleplaying-server-grove-street.jpg",
      year: "1993",
      location: "San Andreas",
      icon: "👑"
    },
  ];

  // Stats
  const stats = [
    { value: "3", label: "Chapters" },
    { value: "1992", label: "Year Began" },
    { value: "27M+", label: "Players" },
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
            src="https://wallpapercat.com/w/full/e/3/6/34-3840x2160-desktop-4k-grand-theft-auto-san-andreas-background-photo.jpg"
            alt="Story Background"
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
              <span className="text-[#1a1a1a]/60">STORY</span>
            </div>

            {/* Title */}
            <div>
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                <span>CJS JOURNEY</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mt-4">
                From Loss to <br />
                <span className="font-black bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-clip-text text-transparent bg-300% animate-gradient">
                  Legacy.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-[#1a1a1a]/50 font-light max-w-2xl leading-relaxed">
              From loss to legacy — the streets of Los Santos never forget. 
              Follow CJs journey from the streets to the throne.
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
        SECTION 2: STORY TIMELINE
      ============================================================ */}
      <section 
        ref={timelineRef}
        className="px-8 py-20 bg-[#f5f5f5] border-t border-[#1a1a1a]/5 relative"
      >
        <div className="max-w-6xl mx-auto">
          {/* Timeline Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
              <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
              <span>THE STORY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mt-2">
              The <span className="font-medium">Journey.</span>
            </h2>
          </motion.div>

          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-[180px] bottom-20 w-[1px] bg-[#1a1a1a]/10 -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="relative space-y-24">
            {storySteps.map((step, index) => {
              const visible = timelineVisible;
              
              return (
                <motion.div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-sm hover:shadow-xl transition-shadow duration-500">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
                      
                      {/* Year Badge */}
                      <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-mono text-white/60 border border-white/10 flex items-center gap-2">
                        <FiClock className="text-xs" />
                        <span>{step.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{step.icon}</span>
                      <h3 className="text-2xl md:text-3xl font-medium">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-[#1a1a1a]/50 font-light leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-[#1a1a1a]/30">
                      <div className="flex items-center gap-1.5">
                        <FiMapPin className="text-xs" />
                        <span>{step.location}</span>
                      </div>
                      <span className="w-px h-3 bg-[#1a1a1a]/10" />
                      <div className="flex items-center gap-1.5">
                        <FiStar className="text-xs" />
                        <span>Chapter {index + 1}</span>
                      </div>
                    </div>

                    {/* Explore Button */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors pt-2"
                    >
                      Read Full Story <FiArrowRight className="text-xs" />
                    </motion.button>
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border-4 border-white shadow-md" />
                  </div>

                  {/* Timeline Dot - Mobile */}
                  <div className="absolute left-0 top-0 md:hidden">
                    <div className="w-3 h-3 rounded-full bg-[#1a1a1a] border-2 border-white shadow-sm" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 3: CTA - Continue the Journey
      ============================================================ */}
      <section className="px-8 py-32 bg-[#1a1a1a] text-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30 mb-8">
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
            <span>CONTINUE THE JOURNEY</span>
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Every legend has a <br />
            <span className="font-medium">beginning.</span>
          </h2>

          <p className="text-[#f5f5f5]/40 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Dive deeper into the story of CJ and the streets of Los Santos. 
            The legend continues.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-5 bg-[#f5f5f5] text-[#1a1a1a] font-medium rounded-full hover:bg-[#f5f5f5]/90 transition-all text-lg tracking-wide flex items-center gap-3 mx-auto shadow-xl"
          >
            <FiClock className="text-xl" /> Explore the Full Story
          </motion.button>
        </div>
      </section>

    </main>
  );
}