"use client";

import { motion } from "framer-motion";
import Heading from "../ui/Heading";

const steps = [
  {
    step: "01",
    title: "Book a Free Demo",
    desc: "Schedule a quick walkthrough to see how the platform helps you manage clients, automate reporting, and grow your AUM.",
  },
  {
    step: "02",
    title: "We Understand Your Workflow",
    desc: "Our team analyzes your current process and tailors the platform to match your advisory style and business needs.",
  },
  {
    step: "03",
    title: "Get Instant Access & Start Scaling",
    desc: "Onboard seamlessly, migrate your data, and start managing portfolios, clients, and reports from one powerful dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full px-4 bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Heading
            title="How It Works"
            heading1="Start Growing Your Business"
            heading2="In Just 3 Simple Steps"
            highlight="3 Simple Steps"
            align="center"
          />

          <p className="text-center opacity-70 max-w-2xl mx-auto mt-3">
            Get started in minutes — no technical setup required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)] backdrop-blur-sm flex flex-col gap-4"
            >

              <div className="w-12 h-12 flex items-center justify-center rounded-lg 
              bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] 
              text-[var(--rv-white)] font-bold">
                {item.step}
              </div>

              <h5 className="font-semibold">
                {item.title}
              </h5>

              <p className="opacity-80 leading-relaxed">
                {item.desc}
              </p>

              {i !== steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 right-0 w-10 h-[2px] bg-[var(--rv-border)] translate-x-full"></span>
              )}

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}