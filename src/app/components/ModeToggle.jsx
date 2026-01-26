"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents server/client mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // don't render until mounted

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
