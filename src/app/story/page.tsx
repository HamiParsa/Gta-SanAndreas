"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryPage() {
  const storySteps = [
    {
      title: "Return to Los Santos",
      desc: "After years away, CJ returns to his hometown after the death of his mother, finding chaos and betrayal waiting.",
      img: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak73k92o47ko75/5de9d8bc4ffeabb209ec67ab3721ea281da5cd05.jpg",
    },
    {
      title: "Grove Street Reborn",
      desc: "CJ reunites with his old gang, rebuilding Grove Street Families and reclaiming lost territories.",
      img: "https://cdn.wccftech.com/wp-content/uploads/2022/10/Grand-Theft-Auto-San-Andreas-Sequel-UE5-scaled.jpg",
    },
    {
      title: "The Rise of Power",
      desc: "From the streets to the skyline, CJ dominates San Andreas, gaining power, money, and influence.",
      img: "https://e0.pxfuel.com/wallpapers/205/843/desktop-wallpaper-eclipse-rp-gta-v-roleplaying-server-grove-street.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white overflow-hidden">
      {/* === Hero Section === */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center">
        <Image
          src="https://wallpapercat.com/w/full/e/3/6/34-3840x2160-desktop-4k-grand-theft-auto-san-andreas-background-photo.jpg"
          alt="Story Background"
          fill
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-red-950/40" />
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-7xl font-extrabold text-red-500 drop-shadow-[0_0_20px_#ff0000]"
        >
          CJ’s Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-300 italic text-lg max-w-xl"
        >
          From loss to legacy — the streets of Los Santos never forget.
        </motion.p>
      </section>

      {/* === Story Timeline === */}
      <section className="relative py-20 max-w-6xl mx-auto px-6">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-600/40 transform -translate-x-1/2"></div>

        {storySteps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative flex flex-col md:flex-row items-center gap-10 my-20 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <Image
                src={step.img}
                alt={step.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-[0_0_25px_#ff000040] border border-red-700/40 object-cover"
              />
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-red-500 drop-shadow-[0_0_10px_#ff0000]">
                {step.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{step.desc}</p>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 md:left-auto md:right-1/2 transform -translate-x-1/2 md:translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-[0_0_20px_#ff0000] border-2 border-red-300"></div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
