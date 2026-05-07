"use client";

import { useState } from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";


export default function ContactSection({ siteData }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", message: "",
  });

  const contactInfo = [
    {
      icon: "https://img.icons8.com/3d-fluency/94/telephone-handset.png",

      label: "Phone / WhatsApp",

      value: siteData?.phone || "+91 9874563210",
    },

    {
      icon: "https://img.icons8.com/arcade/64/new-post--v1.png",

      label: "Email",

      value:
        siteData?.email ||
        "info@mutualfundsoftware.in",
    },

    {
      icon: "https://img.icons8.com/arcade/64/address.png",

      label: "Office",

      value:
        siteData?.address || "Indore MP",

      isHtml: true,

    },

    {
      icon: "https://img.icons8.com/3d-fluency/94/alarm-clock--v2.png",

      label: "Office Hours",

      value:
        "Mon–Sat: 10am – 7pm",
    },
  ];

  return (
    <section className="w-full bg-[var(--rv-primary-light)] text-[var(--rv-text)] px-4 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--rv-primary)] blur-[120px] -z-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto main-section grid grid-cols-1 md:grid-cols-2 gap-10">

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

          <div className="flex flex-col gap-5">
            {contactInfo.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 md:items-center flex-col md:flex-row p-3 rounded-xl hover:bg-[var(--rv-primary-light)] transition border border-[var(--rv-border)]"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)] flex items-center justify-center">
                  <img src={c.icon} className="w-8 h-8" alt="" />
                </div>

                <div className="">
                  <p className="uppercase tracking-widest opacity-60 text-sm mb-1">
                    {c.label}
                  </p>

                  {
                    c.isHtml ? (

                      <div
                        className="opacity-80 leading-7 [&_*]:m-0 [&_*]:whitespace-normal  [&_*]:break-words [&_*]:overflow-wrap-anywhere "
                        dangerouslySetInnerHTML={{
                          __html:
                            c.value
                              ?.replace(
                                /&nbsp;/g,
                                " "
                              ) || "",
                        }}
                      />

                    ) : (
                      <p className="font-medium break-words leading-7">
                        {c.value}
                      </p>
                    )
                  }

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ContactForm title={'Book Free Consultation'} />
      </div>
    </section>
  );
}