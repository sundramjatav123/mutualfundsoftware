"use client";

import Image from "next/image";
import Heading from "@/app/components/ui/Heading";
import Button from "@/app/components/ui/Button";
import { motion } from "framer-motion";

const Founder = () => {
  return (
    <section className="w-full px-4 bg-[var(--rv-primary-light)] text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center w-full h-full"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/founder.avif"
              alt="founder"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute -z-10 top-10 right-0 w-40 h-40 bg-[var(--rv-primary)] blur-3xl"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >

          <Heading
            title={"Founder’s Message"}
            heading1={"A Vision Built on"}
            heading2={"Trust & Discipline"}
            highlight={"Trust & Discipline"}
            description={
              "Our goal is to simplify investing and empower individuals to make confident financial decisions for long-term wealth creation."
            }
            align="start"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative p-6 rounded-2xl bg-[var(--rv-bg)] border border-[var(--rv-border)]"
          >
            <div className="text-4xl text-[var(--rv-primary)] opacity-50">
              “
            </div>
            <p className="relative z-10 italic leading-7 opacity-90">
              Wealth is not created overnight — it is built through consistency,
              patience, and disciplined investing. The right strategy over time
              always wins.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between flex-wrap gap-5 pt-4 border-t border-[var(--rv-border)]"
          >
            <div className="flex flex-col gap-1 md:text-center ">
              <p className="signature text-3xl italic text-[var(--rv-primary)]">
                Amit
              </p>
              <h6 className="font-semibold">Amit Sharma</h6>
              <p className="opacity-70">
                Founder & Mutual Fund Advisor
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Founder;