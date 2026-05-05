"use client";

import { useParams } from "next/navigation";
import { services } from "@/data/servicesData";
import Heading from "@/app/components/ui/Heading";
import Button from "@/app/components/ui/Button";
import { FiCheckCircle } from "react-icons/fi";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div>Service not found</div>;

  return (
    <section className="bg-[var(--rv-bg)] text-[var(--rv-text)] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto main-section flex flex-col gap-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Heading
              heading1={service.title}
              heading2={service.subtitle}
              highlight={service.subtitle}
              description={service.description}
            />

            <p className="opacity-80 mt-4 leading-7">
              {service.overview}
            </p>

            <div className="mt-5 flex flex-col gap-2">
              {service.benefits.map((b, i) => (
                <p key={i} className="text-sm">✔ {b}</p>
              ))}
            </div>
          </div>

          <img
            src={'/images/services/img.avif' ||  service.image}
            className="rounded-xl w-full h-full object-cover"
            alt={service.title}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
            <h4 className="font-semibold text-red-400 mb-2">Problem</h4>
            <p className="opacity-80 text-sm leading-6">
              {service.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
            <h4 className="font-semibold text-green-400 mb-2">Solution</h4>
            <p className="opacity-80 text-sm leading-6">
              {service.solution}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <Heading
            title="Who It's For"
            heading1="Designed For"
            heading2="Professionals Like You"
            highlight="Professionals"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {service.whoItsFor.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-md bg-[var(--rv-card)] border border-[var(--rv-border)] text-xl flex items-center gap-2"
              >
                <div className="w-4 h-4 rounded-md bg-[var(--rv-primary)]"></div>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <Heading
            title="Features"
            heading1="What You Get"
            align="center"
            highlight="Get"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <div key={i} className="flex gap-2 items-start">
                <FiCheckCircle className="text-[var(--rv-primary)] mt-1" />
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <Heading
            title="How It Works"
            heading1="Simple Process"
            heading2=""
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {service.steps.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--rv-primary)] text-[var(--rv-white)]">
                  {i + 1}
                </span>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[var(--rv-card)] border border-[var(--rv-border)]">
          <h4 className="font-semibold mb-2">Real Use Case</h4>
          <p className="opacity-80 leading-6">
            {service.useCase}
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <Heading
            title="Why Choose Us"
            heading1="Built for Growth"
            heading2=""
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {service.whyChooseUs.map((item, i) => (
              <div key={i} className="flex gap-2">
                <FiCheckCircle className="text-[var(--rv-primary)]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl bg-[var(--rv-primary-light)] border border-[var(--rv-border)] text-center">
          <h4 className="font-semibold mb-2">Expected Outcome</h4>
          <p className="opacity-80">{service.result}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h4 className="font-semibold">
              Ready to grow your business?
            </h4>
            <p className="opacity-70">
              Book a demo and experience the platform live.
            </p>
          </div>

          <Button text="Book Free Demo" link="/contact-us" />
        </div>

      </div>
    </section>
  );
}