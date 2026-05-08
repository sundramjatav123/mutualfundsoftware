"use client";

import Link from "next/link";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";


export default function BlogSection({ blogs }) {

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={`/blogs/${encodeURIComponent(p?.title)}`}
                className="group border border-[var(--rv-border)] rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 block bg-[var(--rv-card)]"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={p?.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  <h6 className="font-semibold leading-6 group-hover:text-[var(--rv-primary)] transition">
                    {p.title}
                  </h6>
                  <div
                    className="opacity-80 leading-7 line-clamp-2 [&_*]:m-0 [&_*]:whitespace-normal  [&_*]:break-words [&_*]:overflow-wrap-anywhere "
                    dangerouslySetInnerHTML={{
                      __html:
                        p.description
                          ?.replace(
                            /&nbsp;/g,
                            " "
                          ) || "",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}