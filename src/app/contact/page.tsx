"use client";

// ============================================================
// SECTION 1: DEPENDENCIES
// Contact page with industrial theme
// ============================================================
import { motion  } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiChevronRight,
  FiClock,
  FiMessageCircle,
  FiUser,
  FiAtSign,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

// ============================================================
// SECTION 2: CUSTOM HOOKS
// ============================================================
const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1 },
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
export default function ContactPage() {
  // ============================================================
  // REFS -  null! 
  // ============================================================
  const heroRef = useRef<HTMLElement>(null!);
  const formRef = useRef<HTMLDivElement>(null!);
  const infoRef = useRef<HTMLDivElement>(null!);

  // ============================================================
  // INTERSECTION OBSERVER
  // ============================================================
  const heroVisible = useIntersectionObserver(heroRef);
  const formVisible = useIntersectionObserver(formRef);
  const infoVisible = useIntersectionObserver(infoRef);

  // ============================================================
  // DATA
  // ============================================================
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "grove@street.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Los Santos, San Andreas",
      description: "Grove Street, 4 Life",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+1 (555) 000-0000",
      description: "Mon-Fri, 9AM - 6PM",
    },
    {
      icon: FiClock,
      label: "Hours",
      value: "24/7",
      description: "Always open for the streets",
    },
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
        className="relative min-h-[40vh] flex items-center px-8 pt-32 pb-12 overflow-hidden"
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
              <span className="text-[#1a1a1a]/60">CONTACT</span>
            </div>

            {/* Title */}
            <div>
              <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                <span>GET IN TOUCH</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mt-4">
                Lets <br />
                <span className="font-black bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-clip-text text-transparent bg-300% animate-gradient">
                  Connect.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-[#1a1a1a]/50 font-light max-w-2xl leading-relaxed">
              Have questions, ideas, or just want to talk about the streets of
              Los Santos? Were here to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
        SECTION 2: CONTACT FORM + INFO
      ============================================================ */}
      <section className="px-8 py-12 bg-[#f5f5f5] border-t border-[#1a1a1a]/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - 3 columns */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#1a1a1a]/5">
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                    <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                    <span>SEND A MESSAGE</span>
                  </div>
                  <h2 className="text-2xl font-light tracking-tight mt-2">
                    Tell us <span className="font-medium">everything.</span>
                  </h2>
                </div>

                <form className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a]/60 mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1a1a1a]/30" />
                      <input
                        type="text"
                        placeholder="Carl Johnson"
                        className="w-full pl-10 pr-4 py-3 bg-[#f5f5f5] border border-[#1a1a1a]/10 rounded-xl text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 focus:border-[#1a1a1a]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a]/60 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiAtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1a1a1a]/30" />
                      <input
                        type="email"
                        placeholder="cj@grovestreet.com"
                        className="w-full pl-10 pr-4 py-3 bg-[#f5f5f5] border border-[#1a1a1a]/10 rounded-xl text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 focus:border-[#1a1a1a]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a]/60 mb-1.5">
                      Your Message
                    </label>
                    <div className="relative">
                      <FiMessageCircle className="absolute left-3 top-3 text-[#1a1a1a]/30" />
                      <textarea
                        placeholder="Tell us about your journey in Los Santos..."
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-[#f5f5f5] border border-[#1a1a1a]/10 rounded-xl text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 focus:border-[#1a1a1a]/30 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#1a1a1a] text-[#f5f5f5] font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-[#1a1a1a]/90 transition-all shadow-md hover:shadow-lg"
                    type="submit"
                  >
                    <FiSend className="text-lg" /> Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info - 2 columns */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 30 }}
              animate={infoVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#1a1a1a]/5">
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#1a1a1a]/30">
                    <span className="w-12 h-[1px] bg-[#1a1a1a]/20" />
                    <span>CONTACT INFO</span>
                  </div>
                  <h2 className="text-2xl font-light tracking-tight mt-2">
                    Find us <span className="font-medium">here.</span>
                  </h2>
                </div>

                <div className="space-y-5">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-[#f5f5f5] rounded-xl hover:bg-[#f5f5f5]/80 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#1a1a1a]/40 text-lg" />
                        </div>
                        <div>
                          <div className="text-xs font-mono tracking-[0.2em] text-[#1a1a1a]/30 uppercase">
                            {info.label}
                          </div>
                          <div className="font-medium text-[#1a1a1a]">
                            {info.value}
                          </div>
                          <div className="text-sm text-[#1a1a1a]/40 font-light">
                            {info.description}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quote Card */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 text-[#f5f5f5] border border-[#f5f5f5]/5">
                <div className="flex items-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30">
                  <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
                  <span>GROVE STREET</span>
                </div>
                <p className="text-xl font-light mt-4 italic leading-relaxed">
                  Grove Street. Home. At least it was before I f***ed
                  everything up.
                </p>
                <p className="text-sm text-[#f5f5f5]/30 font-light mt-3">
                  — Carl Johnson
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
        SECTION 3: CTA
      ============================================================ */}
      <section className="px-8 py-20 bg-[#1a1a1a] text-[#f5f5f5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-mono tracking-[0.3em] text-[#f5f5f5]/30 mb-8">
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
            <span>STAY CONNECTED</span>
            <span className="w-12 h-[1px] bg-[#f5f5f5]/20" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            The streets are <br />
            <span className="font-medium">always talking.</span>
          </h2>

          <p className="text-[#f5f5f5]/40 font-light mt-6 max-w-md mx-auto leading-relaxed">
            Follow us on social media and stay up to date with the latest mods,
            stories, and updates from Los Santos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/20 rounded-full font-medium text-sm transition-all border border-[#f5f5f5]/10"
            >
              Twitter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/20 rounded-full font-medium text-sm transition-all border border-[#f5f5f5]/10"
            >
              Discord
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#f5f5f5]/10 hover:bg-[#f5f5f5]/20 rounded-full font-medium text-sm transition-all border border-[#f5f5f5]/10"
            >
              YouTube
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}
