"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
   const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-1/2 right-1 -translate-y-1/2 z-50 w-16 h-9 flex items-center px-1 rounded-full
      bg-[var(--rv-bg)] border border-[var(--rv-border)] backdrop-blur-xl shadow-lg transition hover:scale-105"
    >
      <div
        className={`absolute w-7 h-7 rounded-full bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]
        shadow-md transition-all duration-300 flex items-center justify-center
        ${isDark ? "translate-x-7" : "translate-x-0"}`}
      >
        {isDark ? (
          <FiMoon className="text-[var(--rv-white)] text-sm" />
        ) : (
          <FiSun className="text-[var(--rv-white)] text-sm" />
        )}
      </div>

      <div className="flex justify-between w-full px-1 text-sm">
        <FiSun
          className={`transition ${
            isDark ? "text-[var(--rv-text)] opacity-100" : "opacity-10"
          }`}
        />
        <FiMoon
          className={`transition ${
            isDark ? "text-[var(--rv-text)] opacity-100" : "opacity-40"
          }`}
        />
      </div>
    </button>
  );
}