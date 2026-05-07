"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Blogs", link: "/blogs" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 p-1 md:p-2.5 bg-[var(--rv-bg)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-2 rounded-xl
      bg-[var(--rv-bg)] backdrop-blur-xl border border-[var(--rv-border)]">
        <div className="h-12 sm:h-14 md:h-16">
          <Link href={'/'} >
            <img
              src={resolvedTheme === "dark" ? "/images/logo1.png" : "/images/logo.png"}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>


        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((item) => {
            const active = pathname === item.link;

            return (
              <Link
                key={item.link}
                href={item.link}
                className="relative group font-medium"
              >
                <span
                  className={`transition ${active
                    ? "text-[var(--rv-primary)]"
                    : "text-[var(--rv-text)] group-hover:text-[var(--rv-primary)]"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button text="Free Consultation" link="/contact-us" />
        </div>
      </div>

    </header>
  );
}