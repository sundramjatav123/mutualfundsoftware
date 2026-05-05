"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const AboutSection = () => {
  return (
    <section className="w-full bg-[var(--rv-bg)] px-4 text-[var(--rv-text)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[var(--rv-primary)] opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--rv-secondary)] opacity-10 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto main-section grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">

        <Tilt className="w-full h-full rounded-xl overflow-hidden" tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.2}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full rounded-xl overflow-hidden"
          >
            <Image
              src="/images/about.avif"
              alt="about"
              width={500}
              height={500}
              className="object-cover w-full h-full hover:scale-110 transition duration-500"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 right-6 bg-[var(--rv-card)] border border-[var(--rv-border)] p-5 rounded-xl shadow-lg backdrop-blur-md"
            >
              <h4 className="text-[var(--rv-primary)] font-bold">
                1200+
              </h4>
              <p className="opacity-80">Happy Investors</p>
            </motion.div>

          </motion.div>
        </Tilt>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <Heading
            title={"About Us"}
            heading1={"Building Wealth Through"}
            heading2={"Smart Investing"}
            highlight="Smart Investing"
            description={
              "We help individuals and families grow their wealth with disciplined investing, expert guidance, and goal-based financial planning."
            }
          />

          <p className="opacity-80 leading-7">
            Whether you're starting your investment journey or managing an
            existing portfolio, we simplify the process and help you stay on track
            with long-term strategies.
          </p>

          <p className="opacity-80 leading-7">
            Our focus is not just returns — but consistency, risk management, and
            building financial confidence over time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Personalized investment strategies",
              "Continuous portfolio monitoring",
              "Tax-efficient wealth planning",
              "Long-term disciplined approach",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 opacity-80"
              >
                <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[var(--rv-primary)]"></span>
                {item}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5 pt-6 border-t border-[var(--rv-border)]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <h2 className="font-bold  bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] bg-clip-text text-transparent">
                10+
              </h2>
              <div>
                <p className="opacity-70 text-sm">Years of Experience</p>
              </div>
            </motion.div>
            <Button
              link={"/contact-us"}
              text={"Start Your Journey"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;