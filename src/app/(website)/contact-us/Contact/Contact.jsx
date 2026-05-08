"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import InputField from "@/app/components/ui/InputField";
import TextareaField from "@/app/components/ui/TextareaField";
import Button from "@/app/components/ui/Button";
import { validateForm } from "@/utils/validateForm";
import Heading from "@/app/components/ui/Heading";
import ContactForm from "@/app/components/sections/ContactForm";

const Contact = ({ siteData }) => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">

          <div className="order-2 lg:order-1">
            <ContactForm
              title={'Book Free Consultation'}
            />
          </div>

          <div className="rounded-xl border border-[var(--rv-border)] w-full h-full order-1 lg:order-2">
            <img
              src="/images/contact-us.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { icon: <FiPhone />, title: "Call Us", value: siteData?.phone || "+91 9874563210" },
            { icon: <FiMail />, title: "Email Us", value: siteData?.email || "info@mutualfundsoftware.in" },
            { icon: <FiMapPin />, title: "Visit Us", value: siteData?.address || "Indore, 452010 (MP)" },
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
              {
                item.title === "Visit Us" ? (

                  <div
                    className="opacity-80 leading-7 [&_*]:m-0 [&_*]:whitespace-normal  [&_*]:break-words [&_*]:overflow-wrap-anywhere "
                    dangerouslySetInnerHTML={{
                      __html:
                        item.value
                          ?.replace(
                            /&nbsp;/g,
                            " "
                          ) || "",
                    }}
                  />

                ) : (

                  <p className="opacity-70 break-words">

                    {item.value}

                  </p>

                )
              }
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