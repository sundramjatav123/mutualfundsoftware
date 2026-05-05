"use client";

import { useTheme } from "next-themes";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const stats = [
    { num: "1,000+", label: "Active MFDs" },
    { num: "₹500Cr+", label: "AUM Managed via Platform" },
    { num: "50,000+", label: "Investor Portfolios" },
    { num: "99.9%", label: "Platform Uptime" },
  ];
  const logos =
    resolvedTheme === "dark"
      ? [
        "/images/logo1.png",
        "/images/logo1.png",
        "/images/logo1.png",
        "/images/logo1.png",
        "/images/logo1.png",
        "/images/logo1.png",
        "/images/logo1.png",
        "/images/logo1.png",
      ]
      : [
        "/images/logo.png",
        "/images/logo.png",
        "/images/logo.png",
        "/images/logo.png",
        "/images/logo.png",
        "/images/logo.png",
        "/images/logo.png",
        "/images/logo.png",
      ];

  return (
    <section className="w-full bg-[var(--rv-primary-light)] text-[var(--rv-text)] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-5 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-5 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              title={"Platform Impact"}
              heading1="Powering Growth for"
              heading2="MFDs Across India"
              highlight="MFDs Across India"
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center gap-2 px-6 relative"
              >

                {i !== 0 && (
                  <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-full bg-[var(--rv-border)]"></span>
                )}

                <motion.h2
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="font-bold text-[var(--rv-primary)]"
                >
                  {s.num}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.2 }}
                  className="opacity-80"
                >
                  {s.label}
                </motion.p>
              </motion.div>
            ))}

          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-8">
          <h4>Trusted by 1,000+ MFDs across India</h4>
          <div className="w-full flex flex-col gap-5 whitespace-nowrap overflow-hidden relative">
            <div className="absolute inset-0 z-10 flex justify-between">
              <div className="w-20 bg-gradient-to-l from-transparent to-[var(--rv-secondary-light)]" />
              <div className="w-20 bg-gradient-to-r from-transparent to-[var(--rv-secondary-light)]" />
            </div>
            <div className="slider-row animate-marquee flex justify-center items-center gap-5 opacity-70">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="client logo"
                  className="h-20 transition shadow-md border border-[var(--rv-border)] flex-shrink-0 rounded-lg"
                />
              ))}
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="client logo"
                  className="h-20 transition shadow-md border border-[var(--rv-border)] flex-shrink-0 rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}