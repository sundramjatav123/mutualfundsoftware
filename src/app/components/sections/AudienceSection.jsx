"use client";

import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import { FiUser, FiBriefcase, FiTrendingUp } from "react-icons/fi";

const audience = [
    {
        icon: '/images/mfds.webp',
        title: "Mutual Fund Distributors (MFDs)",
    },
    {
        icon: '/images/fa.webp',
        title: "Independent Financial Advisors (IFAs)",
    },
    {
        icon: '/images/wm.png',
        title: "Wealth Managers",
    },
];

export function AudienceSection() {
    return (
        <section className="w-full px-4 bg-[var(--rv-primary-light)] text-[var(--rv-text)] overflow-hidden">
            <div className="max-w-7xl mx-auto main-section flex flex-col gap-8">

                <Heading
                    title="Who This Is For"
                    heading1="Built for Professionals Who"
                    heading2="Want to Scale Faster"
                    highlight="Scale Faster"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {audience.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl border border-[var(--rv-border)] bg-[var(--rv-card)]  flex flex-col items-center text-center gap-4   hover:-translate-y-2 transition relative"
                        >
                            <div className="w-64 h-64 flex items-center justify-center rounded-xl p-2 bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)]  text-[var(--rv-white)] text-xl">
                                <img src={item.icon} alt="" />
                            </div>

                            <h5 className="font-semibold">
                                {item.title}
                            </h5>

                            {i !== audience.length - 1 && (
                                <span className="hidden md:block absolute top-1/2 right-0 w-10 h-[2px] bg-[var(--rv-border)] translate-x-full"></span>
                            )}

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}