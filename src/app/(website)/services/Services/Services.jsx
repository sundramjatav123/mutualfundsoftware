"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiPercent,
  FiShield,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const Services = ({ service }) => {

  return (
    <section className="px-4 bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-4">
        {service.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)]
            hover:shadow-lg hover:border-[var(--rv-primary)] transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-xl bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]  text-[var(--rv-white)] transition">
              {i + 1}
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <h5 className="font-semibold group-hover:text-[var(--rv-primary)] transition">
                {item?.title}
              </h5>

              <p className="opacity-70">
                {item?.description}
              </p>
            </div>

            <Link
              href={`/services/${item.slug}`}
              className="flex items-center gap-2 text-[var(--rv-primary)] font-medium"
            >
              <span className="hidden sm:inline">Explore</span>

              <motion.div
                whileHover={{ x: 4, y: -4 }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--rv-border)] group-hover:border-[var(--rv-primary)] transition"
              >
                <FiArrowUpRight />
              </motion.div>
            </Link>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Services;