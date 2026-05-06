"use client";

import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiFileText,
  FiTrendingDown,
  FiBarChart2,
} from "react-icons/fi";

const problems = [
  {
    icon: <FiUsers />,
    title: "Managing Multiple Clients",
    desc: "Handling hundreds of clients manually becomes chaotic and difficult to scale efficiently.",
  },
  {
    icon: <FiFileText />,
    title: "Manual Reporting",
    desc: "Creating reports manually consumes valuable time and increases operational workload.",
  },
  {
    icon: <FiTrendingDown />,
    title: "Low Client Engagement",
    desc: "Delayed updates and lack of communication reduce trust and client retention over time.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Difficulty Tracking AUM",
    desc: "Without centralized insights, monitoring portfolios and business growth becomes complicated.",
  },
];

export default function ProblemsSection() {

  return (
    <section className="w-full bg-[var(--rv-primary-light)] px-4 text-[var(--rv-text)] overflow-hidden">

      <div className="max-w-7xl mx-auto main-section-bottom flex flex-col gap-8">

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <Heading
            title="Challenges"
            heading1="Running an MFD Business"
            heading2="Shouldn't Feel Overwhelming"
            highlight="Overwhelming"
            description="Most advisors struggle with manual operations, scattered systems, and inefficient workflows that slow business growth."
            align="center"
          />

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {problems.map((item, i) => (

            <motion.div
              key={i}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)] p-6 flex flex-col gap-4 hover:border-red-400/30 transition-all duration-300"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-red-500/5 to-transparent"></div>

              <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center bg-red-500/10 text-red-400 text-2xl">
                {item.icon}
              </div>

              <div className="relative z-10 flex flex-col gap-2">

                <h6 className="font-semibold">
                  {item.title}
                </h6>

                <p className="opacity-75 leading-6">
                  {item.desc}
                </p>

              </div>

              <div className="relative z-10 w-full h-[2px] bg-gradient-to-r from-red-500/40 to-transparent"></div>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-5 rounded-2xl border border-red-500/20 bg-[var(--rv-card)] text-center"
        >

          <p className="text-sm md:text-base opacity-80">
            These operational challenges don’t just waste time — they limit your growth, reduce efficiency, and impact client experience.
          </p>

        </motion.div>

      </div>

    </section>
  );
}