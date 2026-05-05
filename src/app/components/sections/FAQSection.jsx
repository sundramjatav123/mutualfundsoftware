"use client";

import { useState } from "react";
import Heading from "../ui/Heading";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is mutual fund software?",
    a: "It is a digital platform designed for Mutual Fund Distributors (MFDs) to manage clients, track portfolios, automate reporting, and grow their AUM efficiently from a single dashboard.",
  },
  {
    q: "Who can use this platform?",
    a: "This platform is built for Mutual Fund Distributors (MFDs), financial advisors, wealth managers, and RIAs who want to streamline operations and scale their advisory business.",
  },
  {
    q: "Does it support all AMCs?",
    a: "Yes, the platform integrates with all major AMCs in India, ensuring seamless transaction tracking, portfolio updates, and consolidated reporting.",
  },
  {
    q: "Is training provided?",
    a: "Absolutely. We provide onboarding assistance, guided training sessions, and ongoing support to help you get started quickly and use the platform effectively.",
  },
  {
    q: "How can I get access?",
    a: "You can request a free demo by clicking on the 'Book Free Demo' button. Our team will guide you through the platform and help you get started.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[var(--rv-bg)] px-4 text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-5xl mx-auto main-section flex flex-col gap-5 md:gap-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <Heading
              title={"FAQ"}
              heading1="Find Solutions to"
              heading2="Common Questions"
              highlight="Common Questions"
              align="start"
            />

            <Button text="View All FAQ" link="/faq" />
          </div>
        </motion.div>

        <div className="w-full">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-xl p-4 transition-all duration-300 
                ${active === index
                    ? "bg-[var(--rv-card)] shadow-md border-[var(--rv-primary)]"
                    : "border-[var(--rv-border)] hover:shadow-sm"
                  }`}
              >
                <div
                  onClick={() => setActive(active === index ? null : index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h5 className="font-semibold">
                    {index + 1}. {faq.q}
                  </h5>
                  <motion.div
                    animate={{ rotate: active === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiArrowUpRight size={30} />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: active === index ? "auto" : 0,
                    opacity: active === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  <p className="opacity-80 text-lg pt-3">{faq.a}</p>
                </motion.div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}