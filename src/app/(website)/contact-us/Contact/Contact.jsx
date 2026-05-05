"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import InputField from "@/app/components/ui/InputField";
import TextareaField from "@/app/components/ui/TextareaField";
import Button from "@/app/components/ui/Button";
import { validateForm } from "@/utils/validateForm";
import Heading from "@/app/components/ui/Heading";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
  };

  return (
    <section className="bg-[var(--rv-bg)] text-[var(--rv-text)] overflow-hidden px-4">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-5 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <Heading heading1={'Let’s Build Your'} heading2={'Financial Future'} highlight="Financial Future" description={'Get expert advice tailored to your goals. Start your journey today.'} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-8 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)] flex flex-col gap-5 backdrop-blur-xl"
          >

            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Full Name"
              />
              <InputField
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Email Address"
              />
            </div>

            <InputField
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              error={errors.mobile}
              placeholder="Mobile Number"
            />

            <TextareaField
              name="message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell us about your goals..."
            />

            <div>
              <Button text="Send Message 🚀" type="submit" />
            </div>
          </form>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { icon: <FiPhone />, title: "Call Us", value: "+91 9039822000" },
            { icon: <FiMail />, title: "Email Us", value: "info@mutualfundsoftware.in" },
            { icon: <FiMapPin />, title: "Visit Us", value: "Krishan Vihar Colony, Nipania Road, Indore, Madhya Pradesh 452010" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-4 md:p-6 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)] text-center flex flex-col items-center gap-2"
            >
              <div className="text-3xl md:text-5xl text-[var(--rv-primary)]">
                {item.icon}
              </div>
              <h6 className="font-semibold">{item.title}</h6>
              <p className="opacity-70">{item.value}</p>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-[var(--rv-border)]">
            <iframe
              src="https://www.google.com/maps?q=Indore%20Madhya%20Pradesh&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;