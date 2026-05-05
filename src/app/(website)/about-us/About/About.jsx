"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/app/components/ui/Heading";
import Button from "@/app/components/ui/Button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full bg-[var(--rv-bg)] px-4 text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl group h-full"
        >
          <Image
            src="/images/about.avif"
            alt="about"
            width={500}
            height={500}
            className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 right-6 bg-[var(--rv-card)] border border-[var(--rv-border)] p-5 rounded-xl shadow-lg w-[220px]"
          >
            <h4 className="font-semibold text-[var(--rv-primary)]">1000+</h4>
            <p className="text-sm opacity-70">Active MFDs</p>
          </motion.div>

          <div className="absolute -z-10 top-10 left-10 w-40 h-40 bg-[var(--rv-primary)] opacity-10 blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >

          <Heading
            title={"About Us"}
            heading1={"Building Wealth with"}
            heading2={"Trust & Strategy"}
            highlight={"Trust & Strategy"}
            description={
              "We help individuals and families grow their wealth through disciplined investing, personalized planning, and expert financial guidance."
            }
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="opacity-80 leading-7"
          >
            Whether you're starting your investment journey or scaling your portfolio,
            our approach focuses on long-term growth, risk management, and goal-based planning.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Personalized Investment Plans",
              "Regular Portfolio Monitoring",
              "Tax Efficient Strategies",
              "Goal-Based Financial Planning",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)] hover:shadow-md transition"
              >
                <div className="text-[var(--rv-primary)] text-xl">✔</div>
                <p className="">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between flex-wrap gap-5 pt-4 border-t border-[var(--rv-border)]"
          >
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-[var(--rv-primary)]">
                25+
              </h1>
              <div>
                <p className="opacity-70">Years of</p>
                <p className="opacity-70">Experience</p>
              </div>
            </div>

            <Button link={"/contact-us"} text={"Get Started"} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;