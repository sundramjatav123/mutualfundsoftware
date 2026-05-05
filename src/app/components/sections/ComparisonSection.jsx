"use client";

import { motion } from "framer-motion";
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
        <section className="w-full px-4 bg-[var(--rv-primary-light)] text-[var(--rv-text)] overflow-hidden">
            <div className="max-w-7xl mx-auto main-section flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <Heading
                        title="Why Switch?"
                        heading1="From Manual Work to"
                        heading2="Smart Automation"
                        highlight="Smart Automation"
                        align="center"
                    />
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-6 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)] flex flex-col gap-4"
                    >
                        <h3 className="font-semibold text-[var(--rv-red)]">Traditional Way</h3>

                        {negatives.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 ṣṣṣopacity-80">
                                <FiX className="text-[var(--rv-red)] text-lg" />
                                {item}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-6 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)] flex flex-col gap-4 relative overflow-hidden"
                    >
                        <h3 className="font-semibold text-[var(--rv-primary)] relative">
                            Our Platform
                        </h3>

                        {positives.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 opacity-90 relative">
                                <FiCheck className="text-[var(--rv-green)] text-lg" />
                                {item}
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}