"use client";

import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import { FiClock, FiUsers, FiTrendingUp, FiBarChart2 } from "react-icons/fi";

const benefits = [
  {
    icon: '/images/benefits/1.png',
    title: "Save 10+ hours weekly",
  },
  {
    icon: '/images/benefits/2.png',
    title: "Increase client retention",
  },
  {
    icon: '/images/benefits/3.webp',
    title: "Manage 500+ clients easily",
  },
  {
    icon: '/images/benefits/4.png',
    title: "Grow AUM faster",
  },
];

export function BenefitsSection() {
  return (
    <section className="w-full px-4 bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-8">

        <Heading
          title="Benefits"
          heading1="Designed to Help You"
          heading2="Grow Faster & Smarter"
          highlight="Grow Faster"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-5 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)] flex flex-col items-center text-center gap-3 hover:-translate-y-2 transition"   >
              <div className="w-28 h-28 flex items-center justify-center rounded-xl">
                <img src={item.icon} alt="" />
              </div>
              <h5 className="font-light">
                {item.title}
              </h5>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}