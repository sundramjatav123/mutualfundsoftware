"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import Tilt from "react-parallax-tilt";

export default function HeroSection() {

  return (
    <section className="w-full px-4 bg-[var(--rv-bg)] text-[var(--rv-text)] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[var(--rv-primary)] opacity-10 blur-[120px]" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[var(--rv-secondary)] opacity-10 blur-[120px]" />
      <div className="max-w-7xl mx-auto main-section grid lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-40">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block w-fit px-4 py-2 rounded-full text-sm border border-[var(--rv-border)] bg-[var(--rv-card)]"
          >
            Built for Mutual Fund Distributors (MFDs)
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Grow AUM Faster. <br />
            <span className="bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] bg-clip-text text-transparent">
              Automate Everything.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="opacity-80 max-w-xl"
          >
            See how top MFDs scale faster using our all-in-one platform to manage clients,
            automate reporting, and grow their advisory business effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3">
            {[
              "Client Portfolio Tracking",
              "Automated Reports",
              "Goal-Based Planning",
              "Zero Manual Work",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 opacity-90">
                <FiCheck className="text-[var(--rv-green)] text-xl" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 flex-wrap mt-4">
            <Button text="Book Free Demo" link="/contact-us" />

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--rv-border)] hover:bg-[var(--rv-card)] transition">
              See How It Works <FiArrowRight />
            </button>
          </motion.div>

          <p className="opacity-60">
            Trusted by 1,000+ MFDs across India
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6}>
            <div className="relative dark:bg-white/5 bg-white/60 backdrop-blur-xl border border-[var(--rv-border)] rounded-xl p-5 lg:p-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="">Portfolio Overview</p>
                  <h5 className="font-semibold">Dashboard</h5>
                </div>
                <span className="text-[var(--rv-green)] text-sm font-medium px-2 py-1 rounded-md">
                  +12.4%
                </span>
              </div>

              <div className="bg-[var(--rv-bg-primary-light)] rounded-xl p-4">
                <div className="flex items-end gap-2 h-52">
                  {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[var(--rv-primary)] to-[var(--rv-secondary)] rounded-md opacity-90"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="flex justify-between text-[10px] mt-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
                <div className="bg-white/5 p-3 rounded-lg border border-[var(--rv-border)]">
                  <p className="text-gray-400">AUM</p>
                  <p className="font-semibold text-sm">₹12.4Cr</p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-[var(--rv-border)]">
                  <p className="text-gray-400">Clients</p>
                  <p className="font-semibold text-sm">320</p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg border border-[var(--rv-border)]">
                  <p className="text-gray-400">SIPs</p>
                  <p className="font-semibold text-sm">189</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 right-2 lg:-right-6 bg-white/10 backdrop-blur-md border border-[var(--rv-border)] px-4 py-3 rounded-xl">
              <p className="text-xs">New Clients</p>
              <p className="font-semibold">+24</p>
            </div>

            <div className="absolute -bottom-10 left-2 lg:-left-6 bg-white/10 backdrop-blur-md border border-[var(--rv-border)] px-4 py-3 rounded-xl">
              <p className="text-xs">Monthly SIP</p>
              <p className="font-semibold">₹2.1L</p>
            </div>

          </Tilt>

          <div className="absolute -z-10 inset-0 bg-[var(--rv-primary)] opacity-20 blur-3xl rounded-full" />
        </motion.div>
      
      </div>
    </section>
  );
}