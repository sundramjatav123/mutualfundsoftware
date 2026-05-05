"use client";

import React from "react";
import { motion } from "framer-motion";

const BlogDetails = () => {
  return (
    <section className="px-4 bg-[var(--rv-bg)] text-[var(--rv-text)]">

      <div className="max-w-7xl mx-auto main-section flex flex-col gap-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold leading-tight"
          >
            ₹1,000 SIP Se Kaise Banaye ₹1 Crore Corpus?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="opacity-80"
          >
            15 min read • Beginner Friendly
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f"
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-5 leading-7"
        >
          <p>
            SIP (Systematic Investment Plan) ek powerful tarika hai wealth
            create karne ka. Agar aap har mahine ₹1,000 invest karte hain,
            to long-term me ye ek bada corpus ban sakta hai.
          </p>

          <p>
            Compounding ka magic tab hota hai jab aap time ke sath consistent
            rehte hain. Market ups and downs ke bawajood, disciplined investing
            aapko long-term growth deta hai.
          </p>

          <p>
            Sabse important hai patience. Wealth overnight nahi banti —
            ye consistency aur strategy se banti hai.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetails;