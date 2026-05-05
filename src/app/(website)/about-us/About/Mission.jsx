"use client";

import Heading from "@/app/components/ui/Heading";
import { FiArrowDownRight } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

const Mission = () => {
  const [active, setActive] = useState(0);

  const items = [
    {
      title: "Our Mission",
      content:
        "To empower individuals and families to achieve financial freedom through disciplined investing and expert guidance.",
    },
    {
      title: "Our Vision",
      content:
        "To become a trusted financial partner for thousands of investors, helping them grow and protect their wealth.",
    },
    {
      title: "Our Values",
      content:
        "Transparency, consistency, and a client-first approach — building trust through long-term relationships.",
    },
  ];

  return (
    <section className="w-full px-4 bg-[var(--rv-primary-light)] text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-5 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            title={"Our Philosophy"}
            heading1={"Driven by Strategy,"}
            heading2={"Built on Trust"}
            highlight={"Built on Trust"}
            description={
              "Our approach is simple — disciplined investing, long-term thinking, and personalized financial planning."
            }
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const isActive = active === index;
            return (
              <motion.div
                key={index}
                onClick={() => setActive(isActive ? null : index)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`group cursor-pointer p-4 md:p-6 rounded-xl border transition-all duration-300
                ${
                  isActive
                    ? "bg-[var(--rv-primary)] text-[var(--rv-white)] border-[var(--rv-primary)] shadow-xl scale-[1.03]"
                    : "bg-[var(--rv-card)] border-[var(--rv-border)] hover:shadow-md"
                }`}
              >

                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 text-3xl ${
                    isActive ? "text-[var(--rv-white)]" : "text-[var(--rv-primary)]"
                  }`}
                >
                  <FiArrowDownRight />
                </motion.div>

                <h5 className="font-semibold mb-2">
                  {item.title}
                </h5>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    height: isActive ? "auto" : "auto",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden ${
                    isActive ? "mt-2" : ""
                  }`}
                >
                  <p className="leading-6">
                    {item.content}
                  </p>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Mission;