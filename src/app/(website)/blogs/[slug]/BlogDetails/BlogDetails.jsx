"use client";

import React from "react";
import { motion } from "framer-motion";

const BlogDetails = ({ blog }) => {

  return (
    <section className="px-4 bg-[var(--rv-bg)] text-[var(--rv-text)]">

      <div className="max-w-7xl mx-auto main-section flex flex-col gap-8">

        <div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="font-bold leading-tight"
          >
            {blog?.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="opacity-80"
          >
            {blog?.category}
          </motion.p>

        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden"
        >

          <img
            src={blog?.image}
            className="w-full h-full object-cover"
            alt={blog?.title}
          />

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="flex flex-col gap-5 leading-7"
        >

          <div
            dangerouslySetInnerHTML={{
              __html:
                blog?.description,
            }}
          />

        </motion.div>

      </div>

    </section>
  );
};

export default BlogDetails;