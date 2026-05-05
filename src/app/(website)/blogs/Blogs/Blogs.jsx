"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "@/app/components/ui/Heading";

const posts = [
  {
    emoji: "📊",
    img:"https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=1170&auto=format&fit=crop",
    tag: "SIP Basics",
    title: "₹1,000/month se kaise banao ₹1 Crore ka corpus?",
    meta: "15 min read • Beginners ke liye",
    slug: "/blogs/sip-1000-to-1crore",
  },
  {
    emoji: "💰",
    img:"https://images.unsplash.com/photo-1579227113447-f1e32cc6bd42?q=80&w=2082&auto=format&fit=crop",
    tag: "Tax Planning",
    title: "ELSS vs PPF vs NSC — Konsa better hai 2024 mein?",
    meta: "10 min read • Section 80C Guide",
    slug: "/blogs/elss-vs-ppf-vs-nsc",
  },
  {
    emoji: "🧠",
    img:"https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?q=80&w=1170&auto=format&fit=crop",
    tag: "Market Basics",
    title: "Market crash mein ghabrana nahi — SIP investors ke liye guide",
    meta: "8 min read • Beginner Friendly",
    slug: "/blogs/market-crash-sip-guide",
  },
  {
    emoji: "📊",
    img:"https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=1170&auto=format&fit=crop",
    tag: "SIP Basics",
    title: "₹1,000/month se kaise banao ₹1 Crore ka corpus?",
    meta: "15 min read • Beginners ke liye",
    slug: "/blogs/sip-1000-to-1crore",
  },
  {
    emoji: "💰",
    img:"https://images.unsplash.com/photo-1579227113447-f1e32cc6bd42?q=80&w=2082&auto=format&fit=crop",
    tag: "Tax Planning",
    title: "ELSS vs PPF vs NSC — Konsa better hai 2024 mein?",
    meta: "10 min read • Section 80C Guide",
    slug: "/blogs/elss-vs-ppf-vs-nsc",
  },
  {
    emoji: "🧠",
    img:"https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?q=80&w=1170&auto=format&fit=crop",
    tag: "Market Basics",
    title: "Market crash mein ghabrana nahi — SIP investors ke liye guide",
    meta: "8 min read • Beginner Friendly",
    slug: "/blogs/market-crash-sip-guide",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[var(--rv-bg)] px-4 text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-5 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            title={"Financial Insights"}
            heading1="Learn, Understand,"
            heading2="and Invest Smarter"
            highlight="Invest Smarter"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={p.slug}
                className="group border border-[var(--rv-border)] rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 block bg-[var(--rv-card)]"
              >

                <div className="h-80 overflow-hidden relative">
                  <img
                    src={p.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  <p className="font-bold uppercase tracking-widest text-[var(--rv-primary)] flex items-center gap-2">
                    <span className="text-lg">{p.emoji}</span>
                    {p.tag}
                  </p>
                  <h6 className="font-semibold leading-6 group-hover:text-[var(--rv-primary)] transition">
                    {p.title}
                  </h6>
                  <p className="opacity-80">
                    {p.meta}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}