"use client";

import { useState } from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: "https://img.icons8.com/3d-fluency/94/telephone-handset.png", label: "Phone / WhatsApp", value: "+91 9039822000" },
  { icon: "https://img.icons8.com/arcade/64/new-post--v1.png", label: "Email", value: "info@mutualfundsoftware.in" },
  { icon: "https://img.icons8.com/arcade/64/address.png", label: "Office", value: "Krishan Vihar Colony, Nipania Road, Indore, Madhya Pradesh 452010" },
  { icon: "https://img.icons8.com/3d-fluency/94/alarm-clock--v2.png", label: "Office Hours", value: "Mon–Sat: 10am – 7pm" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", message: "",
  });

  return (
    <section className="w-full bg-[var(--rv-primary-light)] text-[var(--rv-text)] px-4 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--rv-primary)] blur-[120px] -z-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto main-section grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <Heading
            title={"Get in Touch"}
            heading1={"Start Your Investment Journey"}
            heading2={"With Confidence"}
            highlight="With Confidence"
            description={
              "Book a free consultation — no pressure, just honest financial guidance tailored to your goals."
            }
          />

          <div className="flex flex-col gap-2">
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-center p-2 rounded-xl hover:bg-[var(--rv-primary-light)] transition border border-[var(--rv-border)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)] flex items-center justify-center">
                  <img src={c.icon} className="w-8 h-8" alt="" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest opacity-60">
                    {c.label}
                  </p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="p-4 md:p-6 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)] backdrop-blur-xl flex flex-col gap-5">

            <h4 className="font-semibold">
              Book Free Consultation
            </h4>

              <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="px-4 py-3 rounded-xl border border-[var(--rv-border)]
                bg-[var(--rv-bg)] focus:border-[var(--rv-primary)] outline-none transition"
            />

            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="px-4 py-3 rounded-xl border border-[var(--rv-border)]
                bg-[var(--rv-bg)] focus:border-[var(--rv-primary)] outline-none transition"
            />

            <motion.input
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-3 rounded-xl border border-[var(--rv-border)]
              bg-[var(--rv-bg)] focus:border-[var(--rv-primary)] outline-none transition"
            />

            <motion.textarea
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              rows={4}
              placeholder="Tell us about your investment goals..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-3 rounded-xl border border-[var(--rv-border)]
              bg-[var(--rv-bg)] focus:border-[var(--rv-primary)] outline-none transition resize-none"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button text="Book Consultation 🚀" />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}