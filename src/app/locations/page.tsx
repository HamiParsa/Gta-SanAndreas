"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationsPage() {
  const locations = [
    {
      name: "Grove Street",
      desc: "The heart of CJ’s past and the birthplace of the Grove Street Families. Home, loyalty, and legacy.",
      img: "https://storage.cgsector.com/gallery/2022-06/3838/1654461277-o772i8xZHcDM19GRd1NaRKbsWaXgX4cqkER6mVfl.jpg",
    },
    {
      name: "Downtown Los Santos",
      desc: "High-rise chaos, flashing lights, and the relentless pace of the city that never sleeps.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg/1200px-Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg",
    },
    {
      name: "Vinewood",
      desc: "Where dreams meet corruption — the glitz and glamour hide dark secrets under the neon lights.",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd022e9d-8c1a-4f62-9908-0e571711aae2/ddla7h7-10df3ad2-7c5f-4681-a305-a2eabc9b05c3.jpg/v1/fill/w_1600,h_900,q_75,strp/vinewood_sign__by_remyras_ddla7h7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6Ii9mL2ZkMDIyZTlkLThjMWEtNGY2Mi05OTA4LTBlNTcxNzExYWFlMi9kZGxhN2g3LTEwZGYzYWQyLTdjNWYtNDY4MS1hMzA1LWEyZWFiYzliMDVjMy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.riB53d5yjX4FpXPsDl50m-YUMoOAcVhjUnlh7Go54kU",
    },
    {
      name: "Las Venturas",
      desc: "Bright lights and broken dreams. The casino capital filled with money, crime, and adrenaline.",
      img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/gta-las-venturas-.png?q=50&fit=crop&w=825&dpr=1.5",
    },
    {
      name: "San Fierro",
      desc: "Fog, bridges, and rebellion — a city that feels alive with underground races and tech madness.",
      img: "https://images.gamebanana.com/img/ss/mods/63537ae802158.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white overflow-hidden">
      {/* === Hero === */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center">
        <Image
          src="https://wallpapers.com/images/featured/los-angeles-ivvay01goo25zx7k.jpg"
          alt="Los Santos"
          fill
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-red-500 drop-shadow-[0_0_25px_#ff0000]"
        >
          Explore Los Santos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-300 italic text-lg max-w-xl"
        >
          From the streets of Grove Street to the lights of Vinewood — every corner tells a story.
        </motion.p>
      </section>

      {/* === Locations Grid === */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-zinc-900/60 border border-red-700/50 rounded-2xl overflow-hidden shadow-[0_0_25px_#ff000020] backdrop-blur-xl hover:shadow-[0_0_30px_#ff000040] transition-all"
          >
            <Image
              src={loc.img}
              alt={loc.name}
              width={500}
              height={300}
              className="object-cover w-full h-64 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

            <div className="absolute top-4 left-4 flex items-center text-red-500 text-2xl drop-shadow-[0_0_10px_#ff0000]">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-bold text-lg">{loc.name}</span>
            </div>

            <div className="absolute bottom-0 p-5 text-center">
              <p className="text-gray-300 text-sm leading-relaxed">{loc.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
