"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Core libraries and third-party packages for the homepage
// ============================================================
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { 
  FiArrowRight, 
  FiChevronDown,
  FiDownload,
  FiMapPin,
  FiUsers,
  FiStar,
  FiPlay,
  FiClock,
  FiTrendingUp,
  FiAward,
  FiGlobe,
  FiUser,
  FiAnchor,
  FiDollarSign,
  FiShield,
  FiUserCheck
} from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// ============================================================
// SECTION 2: CUSTOM HOOK - Intersection Observer
// Triggers animations when elements enter the viewport
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
// Homepage featuring Los Santos content with industrial theme
// ============================================================
export default function Home() {
  // ============================================================
  // REFS - DOM element references for scroll and intersection tracking
  // Using null! to satisfy TypeScript strict mode
  // ============================================================
  const heroRef = useRef<HTMLElement>(null!);
  const featuresRef = useRef<HTMLElement>(null!);
  const charactersRef = useRef<HTMLElement>(null!);
  const storyRef = useRef<HTMLElement>(null!);
  const locationsRef = useRef<HTMLElement>(null!);
  const modsRef = useRef<HTMLElement>(null!);
  const ctaRef = useRef<HTMLElement>(null!);

  // ============================================================
  // VIEWPORT VISIBILITY - Track which sections are visible
  // Used for scroll-triggered animations
  // ============================================================
  const featuresVisible = useIntersectionObserver(featuresRef);
  const charactersVisible = useIntersectionObserver(charactersRef);
  const storyVisible = useIntersectionObserver(storyRef);
  const locationsVisible = useIntersectionObserver(locationsRef);
  const modsVisible = useIntersectionObserver(modsRef);
  const ctaVisible = useIntersectionObserver(ctaRef);

  // ============================================================
  // SCROLL ANIMATIONS - Parallax and opacity effects
  // Uses Framer Motion's useScroll and useTransform hooks
  // ============================================================
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // ============================================================
  // HERO BACKGROUND - Dynamic image carousel
  // Cycles through hero images every 6 seconds
  // ============================================================
  const heroImages = [
    "https://i.postimg.cc/9F3T2fGp/wp11053100-gta-san-andreas-pc-wallpapers.jpg",
    "https://i.postimg.cc/156GVFmh/gta-6-cover-art-3840x2160-26689.jpg",
    "https://i.postimg.cc/GpMGnJQp/grand-theft-auto-3840x2160-10592.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ============================================================
  // DATA - Static content for all sections
  // Organized by section for maintainability
  // ============================================================
  
  // Feature cards - Three pillars of the Grove Street legend
  const features = [
    {
      icon: FiMapPin,
      title: "Grove Street",
      description: "The birthplace of legends. Where every gangster's story begins in Los Santos."
    },
    {
      icon: FiUsers,
      title: "Gang Alliances",
      description: "From Grove Street Families to Ballas. Every alliance shapes the city's destiny."
    },
    {
      icon: FiStar,
      title: "Legendary Status",
      description: "Earn your reputation. In Los Santos, respect is the only currency that matters."
    }
  ];

  // Character profiles - Main protagonists and antagonists
  const characters = [
    { 
      name: "Carl Johnson (CJ)", 
      image: "https://staticg.sportskeeda.com/editor/2021/06/5a89c-16237545260241-800.jpg?w=640",
      role: "Protagonist",
      quote: "Grove Street. Home.",
      color: "from-[#1a1a1a]"
    },
    { 
      name: "Big Smoke", 
      image: "https://dist.tekkenmods.com/dist-cache/1920/78/mods/1468/thumbnails/6d0880e9538e915d-1280x720.jpg",
      role: "Antagonist",
      quote: "I'll have two number 9s...",
      color: "from-[#2a1a1a]"
    },
    { 
      name: "Ryder", 
      image: "https://i.pinimg.com/736x/fc/5d/15/fc5d153bdd68372c54baa5eb77f2e72b.jpg",
      role: "Grove Street OG",
      quote: "You can't keep a good man down.",
      color: "from-[#1a1a2a]"
    },
  ];

  // Story timeline - Three chapters of CJ's journey
  const storySteps = [
    { 
      icon: FiAnchor, 
      title: "Return to Los Santos",
      description: "CJ comes back home after his mother's murder. The streets need a king.",
      year: "1992"
    },
    { 
      icon: FiShield, 
      title: "Territory Wars",
      description: "Reclaiming Grove Street from rival gangs in bloody street battles.",
      year: "1992"
    },
    { 
      icon: FiUserCheck, 
      title: "Rise to Power",
      description: "Building a criminal empire that controls all of San Andreas.",
      year: "1993"
    },
  ];

  // Iconic locations - Key areas in the GTA universe
  const locations = [
    { 
      name: "Grove Street", 
      image: "https://img.goodfon.com/original/2261x1080/8/a4/grove-street-gta-ulitsa-doma-san-andreas.jpg",
      vibe: "OG Territory",
      description: "Where every gangster's story begins."
    },
    { 
      name: "Downtown", 
      image: "https://wallpapers.com/images/hd/downtown-los-angeles-4k-krb2f293worw6vrq.jpg",
      vibe: "Power Zone",
      description: "Where money talks and bodies walk."
    },
    { 
      name: "Vinewood", 
      image: "https://i.pinimg.com/736x/ff/44/24/ff442482fca73e6c0b51e220763535b3.jpg",
      vibe: "Star District",
      description: "Fame, fortune, and the fall."
    },
  ];

  // Popular mods - Community favorites with stats
  const mods = [
    {
      title: "HD Graphics Overhaul",
      image: "https://th-test-11.slatic.net/p/db92f26f739e45348a8a7af66362c39c.jpg",
      description: "4K textures with ray-tracing. Los Santos never looked this real.",
      size: "2.4 GB",
      downloads: "12.4K"
    },
    {
      title: "2025 Car Pack",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6MJcESTFyN6FVpGymSD5abgBuDxU4ioNiANs7xqgIwy8QT60iQAtpVgfdqlrjE6TzCIxtiUw9BXio-pkJrlbGfjzrIoqrZvAyNP0n7yM4eJQZNo14yaHbm8bzuQKs-ys2Muw0wGS11l0Jn6zJ5p38kXVI9RVMgJv7nZZKskSGEoVpoES-74y0YZ8ioehB/s1919/image_2023-09-06_015534056.png",
      description: "100+ hypercars with realistic handling and damage models.",
      size: "3.1 GB",
      downloads: "8.7K"
    },
    {
      title: "CJ Customization Pack",
      image: "https://media.moddb.com/images/mods/1/45/44923/Capture_2020_02_17_09_53_14_890.jpg",
      description: "500+ outfits, tattoos, and hairstyles. Be the king you were born to be.",
      size: "1.8 GB",
      downloads: "15.2K"
    },
  ];

  // Statistics - Quick facts about the game
  const stats = [
    { value: "1992", label: "Year Released", icon: FiClock },
    { value: "27M+", label: "Copies Sold", icon: FiTrendingUp },
    { value: "4.9★", label: "Rating", icon: FiAward },
    { value: "100+", label: "Mods Available", icon: FiDownload }
  ];

  // ============================================================
  // RENDER - Main UI output
  // Organized into 7 sections: Hero, Features, Characters, 
  // Story, Locations, Mods, and CTA
  // ============================================================
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] font-sans antialiased">

      {/* ============================================================
        SECTION 1: CINEMATIC HERO
        Full-screen hero with dynamic background carousel, 
        typewriter animation, and scroll-driven effects
      ============================================================ */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center px-8 overflow-hidden"
      >
        {/* Dynamic Background with Smooth Fade Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Los Santos Skyline"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlays - Create depth and readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f5f5f5]/85 via-[#f5f5f5]/50 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#f5f5f5]" />
        <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-[1px]" />

        {/* Image Slide Indicators - Dots for manual navigation */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-500 ${
                index === currentImage 
                  ? 'w-12 h-1 bg-[#1a1a1a]' 
                  : 'w-3 h-1 bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content - With parallax effects */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-6xl mx-auto w-full relative z-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/50"
              >
                <span className="w-16 h-[1px] bg-[#1a1a1a]/20" />
                <span>✦ EST. 1992 ✦</span>
                <span className="w-16 h-[1px] bg-[#1a1a1a]/20" />
              </motion.div>

              {/* Main Title with Gradient Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-7xl md:text-8xl lg:text-[120px] font-light leading-[0.85] tracking-tighter">
                  Los<br />
                  <span className="font-black bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-clip-text text-transparent bg-300% animate-gradient">
                    Santos.
                  </span>
                </h1>
              </motion.div>

              {/* Typewriter Subtitle - Animated text loop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-[#1a1a1a]/60 font-light leading-relaxed h-14"
              >
                <TypeAnimation
                  sequence={[
                    'Power. Money. Respect.',
                    2000,
                    'Grove Street 4 Life.',
                    2000,
                    'The streets are calling.',
                    2000,
                    'Welcome to the city that never sleeps.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="border-r-2 border-[#1a1a1a]/30 pr-3"
                />
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-4 bg-[#1a1a1a] text-[#f5f5f5] font-medium rounded-full flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all"
                >
                  Explore the City
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-[#1a1a1a]/20 hover:border-[#1a1a1a]/50 rounded-full font-medium flex items-center gap-3 transition-all bg-white/50 backdrop-blur-sm"
                >
                  <FiPlay className="text-sm" /> Watch Trailer
                </motion.button>
              </motion.div>

              {/* Statistics - Game facts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-10 pt-8 border-t border-[#1a1a1a]/10"
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="group">
                      <div className="flex items-center gap-2 text-3xl font-light tracking-tight group-hover:scale-105 transition-transform">
                        <Icon className="text-xl text-[#1a1a1a]/30" />
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#1a1a1a]/40 font-light mt-0.5">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Column - Floating Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[500px]">
                {/* Card 1 - Gang Revenue */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-64 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center">
                      <FiDollarSign className="text-[#1a1a1a]/40" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Gang Revenue</div>
                      <div className="text-xs text-[#1a1a1a]/40">+247% this year</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-[#1a1a1a]/10 rounded-full">
                    <div className="h-1 w-3/4 bg-[#1a1a1a] rounded-full" />
                  </div>
                </motion.div>

                {/* Card 2 - Active Members */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-24 left-0 w-56 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center">
                      <FiUser className="text-[#1a1a1a]/40" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Active Members</div>
                      <div className="text-xs text-[#1a1a1a]/40">12,847 online</div>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#1a1a1a]/20 border-2 border-white" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-xs border-2 border-white">
                      +8k
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - Global Impact */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-0 right-10 w-60 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center">
                      <FiGlobe className="text-[#1a1a1a]/40" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Global Impact</div>
                      <div className="text-xs text-[#1a1a1a]/40">27M+ players worldwide</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-[#1a1a1a]/20"
        >
          <span className="text-[10px] font-mono tracking-[0.3em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiChevronDown className="text-xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================
        SECTION 2: FEATURES
        Three pillars of the Grove Street legend
        Displayed in a clean 3-column grid with hover effects
      ============================================================ */}
      <section 
        ref={featuresRef}
        className="px-8 py-32 bg-[#1a1a1a] text-[#f5f5f5] relative overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f5f5f5] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5f5f5] rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left - Section Header */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30">
                <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
                <span>THE LEGEND</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-6">
                Grove Street <br /><span className="font-medium">4 Life.</span>
              </h2>
              <p className="text-[#f5f5f5]/40 font-light mt-4 max-w-sm leading-relaxed">
                Three iconic characters. One unforgettable story. 
                The streets of Los Santos will never be the same.
              </p>
            </div>

            {/* Right - Feature Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const visible = featuresVisible;
                  
                  return (
                    <motion.div 
                      key={feature.title}
                      className={`space-y-4 transition-all duration-700 ${
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#f5f5f5]/5 flex items-center justify-center">
                        <Icon className="text-3xl text-[#f5f5f5]/40" />
                      </div>
                      <h3 className="text-xl font-medium">{feature.title}</h3>
                      <p className="text-[#f5f5f5]/40 text-sm font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 3: CHARACTERS
        Main character profiles with images and quotes
        Staggered animation and hover scale effects
      ============================================================ */}
      <section 
        ref={charactersRef}
        className="px-8 py-32 bg-[#f5f5f5]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-16"
          >
            <div>
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                <span>MAIN CHARACTERS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-4">
                Legends of <br /><span className="font-medium">Los Santos.</span>
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-light hover:text-[#1a1a1a]/60 transition-colors">
              View All <FiArrowRight className="text-sm" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((char, index) => {
              const visible = charactersVisible;
              
              return (
                <motion.div 
                  key={char.name}
                  className={`group cursor-pointer transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`relative aspect-[4/3] bg-gradient-to-b ${char.color} to-[#1a1a1a] rounded-2xl overflow-hidden`}>
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/30 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 text-xs font-mono tracking-wider text-[#f5f5f5]/40">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                          {char.role}
                        </span>
                      </div>
                      <h3 className="text-2xl font-light text-[#f5f5f5] mt-2">{char.name}</h3>
                      <p className="text-sm text-[#f5f5f5]/30 italic">{char.quote}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 4: STORY TIMELINE
        Three chapter journey with icons and years
        Horizontal timeline with centered dot indicators
      ============================================================ */}
      <section 
        ref={storyRef}
        className="px-8 py-32 bg-[#1a1a1a] text-[#f5f5f5] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30">
              <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
              <span>THE JOURNEY</span>
              <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-4">
              From the Streets to <br /><span className="font-medium">the Throne.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Timeline Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-[#f5f5f5]/10 -translate-y-1/2" />

            {storySteps.map((step, index) => {
              const Icon = step.icon;
              const visible = storyVisible;
              
              return (
                <motion.div
                  key={step.title}
                  className={`transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative bg-[#f5f5f5]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#f5f5f5]/5 hover:border-[#f5f5f5]/20 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-[#f5f5f5]/10 flex items-center justify-center text-2xl">
                        <Icon />
                      </div>
                      <span className="text-sm font-mono text-[#f5f5f5]/20">{step.year}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-[#f5f5f5]/40 text-sm font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 5: LOCATIONS
        Iconic locations with image cards and vibe badges
        Hover scale and overlay effects
      ============================================================ */}
      <section 
        ref={locationsRef}
        className="px-8 py-32 bg-[#f5f5f5]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
              <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
              <span>EXPLORE</span>
              <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-4">
              Iconic <span className="font-medium">Locations.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, index) => {
              const visible = locationsVisible;
              
              return (
                <motion.div
                  key={loc.name}
                  className={`group cursor-pointer transition-all duration-700 ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
                    
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/60">
                      {loc.vibe}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-light text-white">{loc.name}</h3>
                      <p className="text-sm text-white/40 font-light">{loc.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 6: MODS
        Popular mods with download stats and size badges
        Glass-morphism style cards with hover elevation
      ============================================================ */}
      <section 
        ref={modsRef}
        className="px-8 py-32 bg-[#1a1a1a] text-[#f5f5f5] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30">
              <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
              <span>MODS</span>
              <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mt-4">
              Essential <span className="font-medium">Mods.</span>
            </h2>
            <p className="text-[#f5f5f5]/30 font-light mt-4 max-w-md mx-auto">
              Enhance your Los Santos experience with these community favorites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mods.map((mod, index) => {
              const visible = modsVisible;
              
              return (
                <motion.div
                  key={mod.title}
                  className={`group transition-all duration-700 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-[#f5f5f5]/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#f5f5f5]/5 hover:border-[#f5f5f5]/20 transition-all">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={mod.image}
                        alt={mod.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-full text-xs font-mono text-[#f5f5f5]/60 border border-[#f5f5f5]/10">
                          {mod.size}
                        </span>
                        <span className="px-3 py-1 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-full text-xs font-mono text-[#f5f5f5]/40 border border-[#f5f5f5]/10">
                          ⬇ {mod.downloads}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-medium group-hover:text-[#f5f5f5]/80 transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-[#f5f5f5]/30 text-sm font-light leading-relaxed">
                        {mod.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/20 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all border border-[#f5f5f5]/10"
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
        SECTION 7: CALL TO ACTION
        Final CTA section encouraging users to start their journey
        Clean centered layout with animated button
      ============================================================ */}
      <section 
        ref={ctaRef}
        className="px-8 py-40 bg-[#f5f5f5] relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1a1a1a] rounded-full blur-3xl" />
        </div>

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30 mb-8">
            <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
            <span>JOIN THE LEGEND</span>
            <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
          </div>

          <h2 className="text-6xl md:text-7xl font-light tracking-tight">
            Ready to rule <br />
            <span className="font-medium">Los Santos?</span>
          </h2>

          <p className="text-[#1a1a1a]/40 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Download the mods, customize your ride, and claim your throne 
            in the city that never sleeps.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-5 bg-[#1a1a1a] text-[#f5f5f5] font-medium rounded-full hover:bg-[#1a1a1a]/90 transition-all text-lg tracking-wide flex items-center gap-3 mx-auto shadow-2xl"
          >
            <FiStar className="text-xl" /> Start Your Journey
          </motion.button>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-[#1a1a1a]/20">
            <span>grove@street.com</span>
            <span className="w-px h-4 bg-[#1a1a1a]/10" />
            <span>Los Santos, San Andreas</span>
          </div>
        </div>
      </section>

    </main>
  );
}