"use client";

import Heading from "@/app/components/ui/Heading";
import Button from "@/app/components/ui/Button";
import {
    FiTrendingUp,
    FiShield,
    FiTarget,
    FiBarChart2,
    FiClock,
    FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: <FiClock />,
        title: "Save 10+ Hours Weekly",
        desc: "Automate reporting, tracking, and client management to reduce manual workload significantly.",
    },
    {
        icon: <FiUsers />,
        title: "Increase Client Retention",
        desc: "Deliver better experience with faster updates, reports, and personalized communication.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Manage 500+ Clients Easily",
        desc: "Handle large client portfolios efficiently from a single dashboard without complexity.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Grow AUM Faster",
        desc: "Focus more on client acquisition while automation handles operations and reporting.",
    },
    {
        icon: <FiShield />,
        title: "Reduce Errors & Risk",
        desc: "Minimize manual mistakes with structured workflows and automated processes.",
    },
    {
        icon: <FiTarget />,
        title: "Scale Without Extra Effort",
        desc: "Expand your business without increasing operational workload or hiring more staff.",
    },
];

const Benefits = () => {
    return (
        <section className="w-full px-4 bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden">
            <div className="max-w-7xl mx-auto main-section flex flex-col gap-5 md:gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 lg:sticky top-28"
                    >
                        <Heading
                            title={"Why Choose Us"}
                            heading1={"Smart Strategies for"}
                            heading2={"Wealth Growth"}
                            highlight={"Wealth Growth"}
                            description={
                                "We combine expert insights, disciplined investing, and personalized planning to help you achieve long-term financial success."
                            }
                            align="start"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button
                                text="Get Free Consultation"
                                link="/contact-us"
                            />
                        </motion.div>
                    </motion.div>
                    <div className="flex flex-col gap-6">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}

                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                                whileHover={{ scale: 1.01 }}
                                className={`group relative p-6 rounded-2xl border border-[var(--rv-border)] bg-[var(--rv-card)]
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300
              ${index % 2 !== 0 ? "lg:ml-5" : ""}`}
                            >

                                <div className="absolute -top-10 right-10 md:-right-10 w-28 h-28 bg-[var(--rv-primary)] opacity-10 blur-2xl group-hover:opacity-30 transition"></div>

                                <div className="relative z-10 flex gap-4 items-start">

                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="text-3xl p-3 rounded-xl bg-[var(--rv-primary-light)] text-[var(--rv-primary)]
                group-hover:bg-[var(--rv-primary)] group-hover:text-[var(--rv-white)] transition"
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-semibold">
                                            {item.title}
                                        </h4>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: index * 0.2 + 0.2 }}
                                            className="opacity-80 text-sm leading-6"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 md:p-10 rounded-2xl 
  bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] 
  text-[var(--rv-white)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
                >

                    <div className="flex flex-col gap-2 text-center md:text-left max-w-xl">
                        <h5 className="font-semibold">
                            Ready to Scale Your Advisory Business?
                        </h5>

                        <p className="opacity-90 text-sm md:text-base">
                            See how top MFDs automate operations, grow AUM faster, and manage clients effortlessly.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                        <Button
                            text="Book Free Demo"
                            link="/contact-us"
                        />
                        <Button
                            text="Talk to Expert"
                            link="/contact-us"
                            variant="secondary"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Benefits;