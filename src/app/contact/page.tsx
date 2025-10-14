"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen  bg-black text-white flex flex-col items-center px-6 py-20">
      {/* Hero */}
      <section className="relative mt-30 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-red-500 drop-shadow-[0_0_25px_#ff0000]"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-300 italic"
        >
          Have questions or ideas? Reach out!
        </motion.p>
      </section>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-black/70 border border-red-700/40 rounded-xl p-8 shadow-2xl flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="bg-black/50 border border-red-700/40 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-black/50 border border-red-700/40 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-black/50 border border-red-700/40 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
        />
        <motion.button
          whileHover={{ scale: 1.05, textShadow: "0 0 15px #ff0000" }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full transition-all"
          type="submit"
        >
          Send Message
        </motion.button>
      </motion.form>
    </main>
  );
}
