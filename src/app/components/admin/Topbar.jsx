"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSidebar } from "@/context/SidebarContext";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import {
  FiSun,
  FiMoon,
} from "react-icons/fi";

export default function Topbar() {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";


  return (
    <header
      className="sticky top-0 z-40
      border-b border-[var(--rv-border)]
      bg-[var(--rv-card)]/80
      backdrop-blur-xl
      px-4 py-[14px]
      flex items-center justify-between"
    >
      <div className="flex items-center gap-5">
        <div
          onClick={toggleSidebar}
          className="w-10 h-10 flex items-center justify-center
          bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]
          text-[var(--rv-white)]
          rounded-xl text-2xl cursor-pointer
          hover:scale-105 transition-all duration-300"
        >
          {sidebarOpen ? (
            <MdKeyboardDoubleArrowLeft />
          ) : (
            <MdKeyboardDoubleArrowRight />
          )}
        </div>
        <div className="flex flex-col">

          <h6 className="font-semibold text-lg">
            Dashboard
          </h6>

          <p className="text-xs opacity-60">
            Welcome back 👋
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 z-0">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="relative z-0 w-16 h-9 flex items-center px-1 rounded-full
          bg-[var(--rv-bg)]
          border border-[var(--rv-border)]
          backdrop-blur-xl transition hover:scale-105"
        >
          <div
            className={`absolute w-7 h-7 rounded-full  z-0
            bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] transition-all duration-300
            flex items-center justify-center
            ${isDark ? "translate-x-7" : "translate-x-0"}`} >
            {isDark ? (
              <FiMoon className="text-[var(--rv-white)] text-sm" />
            ) : (
              <FiSun className="text-[var(--rv-white)] text-sm" />
            )}
          </div>
          <div className="flex justify-between w-full px-1 text-sm">
            <FiSun
              className={`transition
              ${isDark
                  ? "text-[var(--rv-text)] opacity-40"
                  : "opacity-100"
                }`}
            />
            <FiMoon
              className={`transition
              ${isDark
                  ? "text-[var(--rv-text)] opacity-100"
                  : "opacity-40"
                }`}
            />
          </div>
        </button>

        <div
          className="w-10 h-10 rounded-xl
          bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]
          flex items-center justify-center
          text-[var(--rv-white)] font-semibold shadow-lg"
        >
          A
        </div>
      </div>

    </header>
  );
}