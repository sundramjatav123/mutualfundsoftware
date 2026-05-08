"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiX, FiCheck } from "react-icons/fi";
import Heading from "../ui/Heading";

const negatives = [
  "Manual tracking",
  "Frequent errors",
  "No automation",
  "Scattered data",
];

const positives = [
  "Automated portfolio tracking",
  "Accurate, real-time reports",
  "End-to-end automation",
  "All-in-one dashboard",
];

export default function ComparisonSection() {
  return (
    <section className="w-full px-4 bg-[var(--rv-primary-light)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            title="Why Switch?"
            heading1="From Manual Work to"
            heading2="Smart Automation"
            highlight="Smart Automation"
            align="center"
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="relative rounded-xl p-8 bg-[var(--rv-card)] backdrop-blur-xl border border-[var(--rv-border)] overflow-hidden"
          >
            <h6 className="font-bold text-[var(--rv-red)] mb-6 relative">
              Traditional Way
            </h6>
            <div className="flex flex-col gap-4 relative">
              {negatives.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <FiX className="text-[var(--rv-red)] text-lg" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="relative rounded-xl p-8 bg-gradient-to-br from-[var(--rv-primary)] to-[var(--rv-secondary)] text-[var(--rv-white)] overflow-hidden"
          >
            <h5 className="font-bold mb-6 relative">
              Our Platform
            </h5>

            <div className="flex flex-col gap-4 relative">
              {positives.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--rv-white-light)] flex items-center justify-center">
                    <FiCheck className="text-[var(--rv-green)] text-lg" />
                  </div>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}