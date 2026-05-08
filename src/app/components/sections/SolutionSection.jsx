"use client";

import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { FiTrendingUp, FiClock } from "react-icons/fi";

const points = [
  {
    title: "Automate Your Operations",
    desc: "Eliminate manual work with automation across reports, tracking, and communication.",
  },
  {
    title: "Manage Everything in One Place",
    desc: "Clients, portfolios, and transactions — all in a single dashboard.",
  },
  {
    title: "Scale Without Extra Effort",
    desc: "Grow your AUM and client base without increasing operational workload.",
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full bg-[var(--rv-bg)] px-4 text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <Heading
            title="Solution"
            heading1="A Smarter Way to Run"
            heading2="Your MFD Business"
            highlight="Smarter Way"
            description="Our platform replaces manual processes with automation, giving you better control, insights, and faster growth."
            align="start"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="opacity-80 leading-7"
          >
            Replace manual work with automation. Manage everything in one place and scale your MFD business without extra effort.
          </motion.p>

          <div className="flex flex-col gap-3">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-3 items-start"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-[var(--rv-primary)] flex-shrink-0"></span>
                <p className="opacity-80">
                  <span className="font-medium">{p.title}:</span> {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button text="Book Free Demo" link="/contact-us" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >

          <div className="bg-[var(--rv-card)] border border-[var(--rv-border)] rounded-xl p-6 pb-12 md:p-10 flex flex-col gap-6">
            <h4 className="font-semibold">
              Built for Efficiency & Scale
            </h4>

            <p className="opacity-80 text-sm leading-6">
              Designed for MFDs to streamline operations, reduce errors, and deliver a better client experience — all in one place.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--rv-primary-light)] flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[var(--rv-primary)]">
                  <FiTrendingUp />
                  <span className="text-sm font-medium">Efficiency</span>
                </div>
                <p className="text-2xl font-bold">90%</p>
                <p className="opacity-80">Faster operations</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--rv-primary-light)] flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[var(--rv-primary)]">
                  <FiClock />
                  <span className="text-sm font-medium">Time Saved</span>
                </div>
                <p className="text-2xl font-bold">85%</p>
                <p className="opacity-80">Less manual work</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Automation Level</span>
                  <span>85%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 md:-bottom-10 right-2 bg-[var(--rv-card)] border border-[var(--rv-border)] rounded-xl px-4 py-2">
            <p className="opacity-60">Clients Managed</p>
            <p className="font-semibold">+1,200</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}