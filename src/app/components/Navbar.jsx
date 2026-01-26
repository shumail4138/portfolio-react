"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="bg-blue-300 dark:bg-gray-900 transition-colors relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-12">
          
          {/* LOGO */}
          <h3 className="text-2xl font-bold text-white">
            <Link href="/">SRK.</Link>
          </h3>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-lg">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white hover:text-gray-200 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* DESKTOP THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="ml-4 text-white dark:text-yellow-300 text-xl"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </nav>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-4 md:hidden">
            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="text-white dark:text-yellow-300 text-2xl"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="text-white text-3xl"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* RIGHT SIDE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-blue-400 dark:bg-gray-900
        z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full px-6 py-8 gap-6 text-lg">
          
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="self-start text-3xl text-white"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* MENU LINKS */}
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
