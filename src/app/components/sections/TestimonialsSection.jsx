"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Mehta",
    city: "Mumbai",
    result: "Increased AUM by 40% in 6 months",
    image: "/images/testimonials/img1.avif",
    text: "This platform helped me automate client reporting and focus on growth. My efficiency improved drastically.",
  },
  {
    name: "Ankit Sharma",
    city: "Delhi",
    result: "Saved 10+ hours every week",
    image: "/images/testimonials/img2.avif",
    text: "Managing portfolios and reports is now effortless. I can spend more time acquiring clients instead of doing manual work.",
  },
  {
    name: "Priya Verma",
    city: "Bangalore",
    result: "Doubled client base in 1 year",
    image: "/images/testimonials/img3.avif",
    text: "The automation and insights helped me scale my advisory business faster than ever before.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[var(--rv-primary-light)] text-[var(--rv-text)] px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto main-section flex flex-col gap-5 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            title={"Testimonials"}
            heading1="Trusted by Investors"
            heading2="Across India"
            highlight="Across India"
            align="center"
          />
        </motion.div>

        <div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={30}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-[var(--rv-card)] border border-[var(--rv-border)] rounded-xl p-4 md:p-7"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="w-full h-60 sm:h-96 md:w-60 md:h-60 relative rounded-xl overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={500}
                      height={400}
                      className="object-cover w-full h-full object-top group-hover:scale-105 transition duration-300"
                    />
                  </motion.div>

                  <div className="flex flex-col gap-4">

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-1 opacity-80"
                    >
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </motion.div>

                    <h4 className="font-semibold leading-snug">
                      “A Reliable Financial Partner for Long-Term Growth”
                    </h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="opacity-80 leading-7"
                    >
                      {t.text}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="border-t border-[var(--rv-border)] pt-2 flex flex-col gap-1"
                    >
                      <p className="font-semibold">{t.name}</p>
                      <p className="opacity-80">{t.city}</p>

                      <p className="font-medium text-[var(--rv-primary)]">
                        🚀 {t.result}
                      </p>

                    </motion.div>

                  </div>

                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
} 