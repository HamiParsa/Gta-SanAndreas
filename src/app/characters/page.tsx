"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";

export default function CharactersPage() {
  const characters = [
    {
      name: "Carl Johnson (CJ)",
      img: "https://staticg.sportskeeda.com/editor/2021/06/5a89c-16237545260241-800.jpg?w=640",
      desc: "CJ returns to Los Santos to rebuild his life and restore Grove Street’s legacy.",
    },
    {
      name: "Big Smoke",
      img: "https://dist.tekkenmods.com/dist-cache/1920/78/mods/1468/thumbnails/6d0880e9538e915d-1280x720.jpg",
      desc: "A friend or a foe? Big Smoke is known for his charm—and his betrayal.",
    },
    {
      name: "Ryder",
      img: "https://i.pinimg.com/736x/fc/5d/15/fc5d153bdd68372c54baa5eb77f2e72b.jpg",
      desc: "Loyal to Grove Street, but reckless in action. Ryder’s chaos defines him.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white overflow-hidden">
      {/* ===== Header Section ===== */}
      <div className="relative text-center py-28">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-red-500 drop-shadow-[0_0_25px_#ff0000]"
        >
          <FaUserAlt className="inline mr-3 text-red-400" />
          Meet the Legends
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-4 text-lg italic"
        >
          Power, loyalty, and betrayal define the streets of Los Santos.
        </motion.p>
      </div>

      {/* ===== Characters Grid ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {characters.map((char, i) => (
          <motion.div
            key={char.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative group rounded-xl overflow-hidden bg-zinc-900/70 border border-red-800/50 shadow-[0_0_25px_#ff000040] backdrop-blur-md"
          >
            <div className="overflow-hidden">
              <Image
                src={char.img}
                alt={char.name}
                width={500}
                height={400}
                className="object-cover w-full h-80 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 p-5 text-center">
              <h2 className="text-2xl font-bold text-red-500 drop-shadow-[0_0_20px_#ff0000]">
                {char.name}
              </h2>
              <p className="text-gray-300 text-sm mt-2 italic">
                {char.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
