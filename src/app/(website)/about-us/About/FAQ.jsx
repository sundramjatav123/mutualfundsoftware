"use client";

import Image from "next/image";
import { useState } from "react";
import Heading from "@/app/components/ui/Heading";
import Button from "@/app/components/ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

const faqs = [
    {
        q: "What services do you offer?",
        a: "We provide mutual fund investments, insurance planning, tax-saving strategies, and complete wealth management solutions.",
    },
    {
        q: "What industries do you specialize in?",
        a: "We serve individuals, professionals, and business owners across various sectors with customized financial solutions.",
    },
    {
        q: "How do you ensure financial security?",
        a: "We follow a disciplined investment approach, diversification, and regular portfolio reviews to minimize risks.",
    },
    {
        q: "What is your investment approach?",
        a: "We focus on long-term wealth creation through goal-based investing, SIP strategies, and asset allocation.",
    },
    {
        q: "Do you provide consultation?",
        a: "Yes, we offer free initial consultation to understand your financial goals and guide you accordingly.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState(1);

    return (
        <section className="w-full px-4 bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden">
            <div className="max-w-7xl mx-auto main-section flex flex-col gap-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                    <Heading
                        title={"FAQ"}
                        heading1="Find Solutions to"
                        heading2="Common Questions"
                        highlight="Common Questions"
                        align="start"
                    />

                    <Button
                        text="View All FAQ"
                        link="/faq"
                         
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                        <Image
                            src="/images/faqs-image.jpg"
                            alt="faq"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute bottom-5 left-5 bg-gradient-to-l from-[var(--rv-primary)] to-[var(--rv-secondary)] text-[var(--rv-white)] p-5 rounded-lg shadow-lg">
                            <h2 className="font-bold">25+</h2>
                            <p className="text-sm">Years Of Experience</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-[var(--rv-border)] pb-5"
                            >
                                <div
                                    onClick={() => setActive(active === index ? null : index)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <h6 className="font-semibold">
                                        {index + 1}. {faq.q}
                                    </h6>

                                    <div>
                                        <FiArrowUpRight
                                            size={35}
                                           
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${active === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="opacity-70">{faq.a}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}