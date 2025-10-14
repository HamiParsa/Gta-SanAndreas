"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speed: number }[] = [];
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.7 + 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
     

      {/* ===== Hero Section ===== */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Image
          src="https://wallpapercat.com/w/full/e/3/6/34-3840x2160-desktop-4k-grand-theft-auto-san-andreas-background-photo.jpg"
          alt="Los Santos"
          fill
          className="object-cover object-center brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-red-950/30" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />

        {/* Hero Glitch Neon Text */}
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative text-6xl md:text-8xl font-extrabold tracking-wider text-red-500 z-20"
        >
          <span className="absolute top-0 left-0 w-full h-full text-red-500 opacity-80 animate-glitch-1">Welcome to Los Santos</span>
          <span className="absolute top-0 left-0 w-full h-full text-blue-400 opacity-50 animate-glitch-2">Welcome to Los Santos</span>
          <span className="relative z-20">Welcome to Los Santos</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 italic z-20"
        >
          Power. Money. Respect.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1, textShadow: "0 0 15px #ff0000" }}
          className="mt-8 px-10 py-3 bg-red-600/80 hover:bg-red-700/90 backdrop-blur-sm rounded-full font-bold z-20 transition-all flex items-center gap-2"
        >
          Enter the City <FaDownload />
        </motion.button>
      </section>

      {/* ===== Characters Section ===== */}
      <section id="characters" className="py-20 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-500">Main Characters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Carl Johnson (CJ)", img: "https://staticg.sportskeeda.com/editor/2021/06/5a89c-16237545260241-800.jpg?w=640" },
              { name: "Big Smoke", img: "https://dist.tekkenmods.com/dist-cache/1920/78/mods/1468/thumbnails/6d0880e9538e915d-1280x720.jpg" },
              { name: "Ryder", img: "https://i.pinimg.com/736x/fc/5d/15/fc5d153bdd68372c54baa5eb77f2e72b.jpg" },
            ].map((char) => (
              <motion.div key={char.name} whileHover={{ scale: 1.05 }} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <Image src={char.img} alt={char.name} width={400} height={300} className="object-cover w-full h-64 group-hover:opacity-70 transition" />
                <div className="absolute bottom-0 w-full text-center bg-black/70 py-2 text-lg font-semibold z-20">{char.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Story Timeline Section ===== */}
      <section id="story" className="py-20 bg-gradient-to-b from-black to-red-950 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-500">CJs Journey</h3>
          <div className="flex flex-col md:flex-row gap-10">
            {[
              { title: "Return to Los Santos", desc: "CJ comes back home after his mother's death." },
              { title: "Gang Wars", desc: "Reclaiming Grove Street from rival gangs." },
              { title: "Rise to Power", desc: "CJ becomes the king of Los Santos." },
            ].map((step) => (
              <motion.div key={step.title} whileHover={{ y: -5 }} className="bg-black/70 rounded-xl p-6 shadow-lg border border-red-700/40 flex-1 transition-all cursor-pointer">
                <h4 className="text-xl font-bold text-red-400">{step.title}</h4>
                <p className="text-gray-300 mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Locations Section ===== */}
      <section id="locations" className="py-20 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-500">Explore Los Santos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Grove Street", img: "https://img.goodfon.com/original/2261x1080/8/a4/grove-street-gta-ulitsa-doma-san-andreas.jpg" },
              { name: "Downtown", img: "https://wallpapers.com/images/hd/downtown-los-angeles-4k-krb2f293worw6vrq.jpg" },
              { name: "Vinewood", img: "https://i.pinimg.com/736x/ff/44/24/ff442482fca73e6c0b51e220763535b3.jpg" },
            ].map((loc) => (
              <motion.div key={loc.name} whileHover={{ scale: 1.05 }} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <Image src={loc.img} alt={loc.name} width={400} height={250} className="object-cover w-full h-56 group-hover:opacity-70 transition" />
                <div className="absolute bottom-0 w-full text-center bg-black/70 py-2 text-lg font-semibold text-red-400">{loc.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Mods Section ===== */}
      <section id="mods" className="py-20 bg-gradient-to-b from-black to-red-950 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-red-500">Popular Mods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Realistic Graphics",
                img: "https://th-test-11.slatic.net/p/db92f26f739e45348a8a7af66362c39c.jpg",
                desc: "Enhance visuals with HD textures and lighting.",
              },
              {
                title: "Car Pack 2025",
                img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6MJcESTFyN6FVpGymSD5abgBuDxU4ioNiANs7xqgIwy8QT60iQAtpVgfdqlrjE6TzCIxtiUw9BXio-pkJrlbGfjzrIoqrZvAyNP0n7yM4eJQZNo14yaHbm8bzuQKs-ys2Muw0wGS11l0Jn6zJ5p38kXVI9RVMgJv7nZZKskSGEoVpoES-74y0YZ8ioehB/s1919/image_2023-09-06_015534056.png",
                desc: "Drive modern cars in San Andreas streets.",
              },
              {
                title: "CJ Custom Skins",
                img: "https://media.moddb.com/images/mods/1/45/44923/Capture_2020_02_17_09_53_14_890.jpg",
                desc: "Personalize CJ with new outfits and animations.",
              },
            ].map((mod) => (
              <motion.div
                key={mod.title}
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black/70 rounded-xl overflow-hidden shadow-2xl border border-red-700/40 transition-all cursor-pointer"
              >
                <Image src={mod.img} alt={mod.title} width={400} height={250} className="object-cover w-full h-56 group-hover:opacity-70 transition" />
                <div className="p-5 space-y-3">
                  <h4 className="text-xl font-bold text-red-400">{mod.title}</h4>
                  <p className="text-gray-300 text-sm">{mod.desc}</p>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold text-sm flex items-center gap-2">
                    Download <FaDownload />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
