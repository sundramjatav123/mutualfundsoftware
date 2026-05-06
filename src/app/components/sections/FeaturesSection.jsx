"use client";

import React from "react";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";

import {
  FiTrendingUp,
  FiPercent,
  FiShield,
  FiTarget,
  FiFileText,
  FiSmartphone,
} from "react-icons/fi";

const features = [
  {
    icon: <FiTrendingUp />,
    title: "Client Portfolio Tracking",
    desc: "Track all investments in one dashboard",
  },
  {
    icon: <FiFileText />,
    title: "Automated Reports & Alerts",
    desc: "Instant reports with smart notifications",
  },
  {
    icon: <FiTarget />,
    title: "Goal-Based Planning",
    desc: "Align investments with life goals",
  },
  {
    icon: <FiPercent />,
    title: "Paperless Transactions",
    desc: "100% digital onboarding & execution",
  },
  {
    icon: <FiShield />,
    title: "Compliance & KYC Tools",
    desc: "Stay compliant with built-in workflows",
  },
  {
    icon: <FiSmartphone />,
    title: "White-Labeled Mobile App",
    desc: "Your own branded client app",
  },
];

export default function FeaturesSection() {

  return (
    <section className="w-full bg-[var(--rv-primary-light)] text-[var(--rv-text)] px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto main-section flex flex-col gap-5 md:gap-8">

        <Heading
          title="Features"
          heading1="Everything You Need to"
          heading2="Scale Your MFD Business"
          highlight="Scale Your MFD Business"
          description="Powerful tools designed to automate operations, improve efficiency, and help you grow faster."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {features.map((item, i) => (

            <motion.div
              key={i}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[var(--rv-primary)] to-[var(--rv-secondary)] opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>

              <div className="relative z-10 flex flex-col gap-3">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--rv-primary)] text-[var(--rv-white)] text-xl group-hover:bg-[var(--rv-white)] group-hover:text-[var(--rv-primary)] transition">

                  {item.icon}

                </div>

                <h5 className="font-semibold group-hover:text-[var(--rv-white)] transition">
                  {item.title}
                </h5>

                <p className="opacity-80 leading-snug group-hover:text-[var(--rv-white)] transition">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}