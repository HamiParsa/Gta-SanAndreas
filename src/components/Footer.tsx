"use client";
import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-8 text-center text-gray-400">
      <p>© 2025 GTA San Andreas Fan Site. Not affiliated with Rockstar Games.</p>
      <div className="mt-3 flex justify-center space-x-6 text-red-500 text-xl">
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaDiscord /></a>
      </div>
    </footer>
  );
}
