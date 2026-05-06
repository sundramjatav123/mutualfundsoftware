"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Innerpage = ({ title }) => {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden px-1 md:px-2.5 bg-[var(--rv-bg)]">
      <div className="relative z-10 max-w-7xl mx-auto main-section text-[var(--rv-text)] border border-[var(--rv-border)] rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--rv-primary-light)] to-transparent opacity-90"></div>
        <button
          onClick={() => router.back()}
          className="absolute top-5 left-5 text-xs flex items-center gap-2 px-2 py-1 rounded-lg border border-[var(--rv-border)] bg-[var(--rv-card)] hover:bg-[var(--rv-primary-light)] transition"
        >
         <FaLongArrowAltLeft /> Back
        </button>

        <div className="flex flex-col gap-4 py-3 relative z-50 p-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {title}
          </h1>
          <div className="flex items-center gap-2 opacity-80">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="w-1 h-1 bg-[var(--rv-text)] rounded-full"></span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innerpage;