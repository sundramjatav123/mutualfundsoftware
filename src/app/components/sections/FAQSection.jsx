"use client";

import { useState } from "react";
import Heading from "../ui/Heading";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";


export default function FAQSection({ faqs }) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[var(--rv-bg)] px-4 text-[var(--rv-text)] overflow-hidden">
      <div className="max-w-5xl mx-auto main-section flex flex-col gap-5 md:gap-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <Heading
              title={"FAQ"}
              heading1="Find Solutions to"
              heading2="Common Questions"
              highlight="Common Questions"
              align="start"
            />

          </div>
        </motion.div>

        <div className="w-full">
          <div className="flex flex-col gap-4">
            {faqs?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-xl p-4 transition-all duration-300  flex flex-col
                ${active === index
                    ? "bg-[var(--rv-card)] shadow-md border-[var(--rv-primary)]"
                    : "border-[var(--rv-border)] hover:shadow-sm"
                  }`}
              >
                <div
                  onClick={() => setActive(active === index ? null : index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h6 className="font-semibold">
                    {index + 1}. {faq?.question}
                  </h6>
                  <motion.div
                    animate={{ rotate: active === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiArrowUpRight size={30} />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: active === index ? "auto" : 0,
                    opacity: active === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  <div
                    className="opacity-80 pt-4 leading-7 [&_*]:m-0 [&_*]:whitespace-normal  [&_*]:break-words [&_*]:overflow-wrap-anywhere "
                    dangerouslySetInnerHTML={{
                      __html:
                        faq?.answer 
                          ?.replace(
                            /&nbsp;/g,
                            " "
                          ) || "",
                    }}
                  />
                </motion.div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}