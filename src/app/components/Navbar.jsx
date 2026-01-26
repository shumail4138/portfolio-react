"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is loaded before rendering emoji
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  if (!mounted) return null; // prevent incorrect theme on SSR

  return (
    <header className="bg-blue-300 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-12">
        
        {/* LOGO */}
        <h3 className="text-2xl font-bold text-white">
          <Link href="/">SRK.</Link>
        </h3>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link href="/" className="text-white hover:text-gray-200 transition">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200 transition">About</Link>
          <Link href="/skills" className="text-white hover:text-gray-200 transition">Skills</Link>
          <Link href="/services" className="text-white hover:text-gray-200 transition">Services</Link>
          <Link href="/projects" className="text-white hover:text-gray-200 transition">Projects</Link>
          <Link href="/contact" className="text-white hover:text-gray-200 transition">Contact</Link>

          {/* DESKTOP DARK MODE TOGGLE */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-white dark:text-yellow-300 text-xl transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* MOBILE MENU BUTTON + TOGGLE */}
        <div className="flex items-center gap-4 md:hidden">
          {/* DARK MODE TOGGLE (outside hamburger) */}
          <button
            onClick={toggleTheme}
            className="text-white dark:text-yellow-300 text-2xl transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-3xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden bg-blue-400 dark:bg-gray-800 flex flex-col items-center gap-4 py-6 text-lg transition-colors">
          {["/", "/about", "/skills", "/services", "/projects", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                href={path}
                className="text-white hover:text-gray-200 transition"
                onClick={() => setOpen(false)}
              >
                {["Home", "About", "Skills", "Services", "Projects", "Contact"][index]}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
