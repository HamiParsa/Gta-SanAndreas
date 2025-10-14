"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaCarSide, FaPaintBrush, FaCity } from "react-icons/fa";

export default function ModsPage() {
  const mods = [
    {
      title: "Realistic Graphics",
      img: "https://th-test-11.slatic.net/p/db92f26f739e45348a8a7af66362c39c.jpg",
      desc: "Transform San Andreas into a next-gen experience with enhanced lighting and HD textures.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Car Pack 2025",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6MJcESTFyN6FVpGymSD5abgBuDxU4ioNiANs7xqgIwy8QT60iQAtpVgfdqlrjE6TzCIxtiUw9BXio-pkJrlbGfjzrIoqrZvAyNP0n7yM4eJQZNo14yaHbm8bzuQKs-ys2Muw0wGS11l0Jn6zJ5p38kXVI9RVMgJv7nZZKskSGEoVpoES-74y0YZ8ioehB/s1919/image_2023-09-06_015534056.png",
      desc: "Cruise around Los Santos with a stunning collection of 2025 model cars.",
      icon: <FaCarSide />,
    },
    {
      title: "City Expansion",
      img: "https://media.moddb.com/images/mods/1/45/44923/Capture_2020_02_17_09_53_14_890.jpg",
      desc: "Explore new parts of San Andreas, filled with high-rises, lights, and chaos.",
      icon: <FaCity />,
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white overflow-hidden">
      {/* ==== Title ==== */}
      <div className="text-center py-28 relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-red-500 drop-shadow-[0_0_25px_#ff0000]"
        >
          🔧 Mods Garage
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-4 text-lg italic"
        >
          Customize your ride, upgrade your world, dominate the streets.
        </motion.p>
      </div>

      {/* ==== Mods Grid ==== */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {mods.map((mod, i) => (
          <motion.div
            key={mod.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden bg-zinc-900/60 backdrop-blur-xl border border-red-700/40 shadow-[0_0_25px_#ff000040]"
          >
            <div className="overflow-hidden">
              <Image
                src={mod.img}
                alt={mod.title}
                width={400}
                height={250}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

            <div className="absolute top-4 left-4 text-red-500 text-3xl drop-shadow-[0_0_10px_#ff0000]">
              {mod.icon}
            </div>

            <div className="absolute bottom-0 p-5 text-center">
              <h2 className="text-2xl font-bold text-red-500">{mod.title}</h2>
              <p className="text-gray-300 text-sm mt-3">{mod.desc}</p>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px #ff0000" }}
                className="mt-5 px-6 py-2 bg-red-600/80 hover:bg-red-700/90 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <FaDownload /> Download
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
