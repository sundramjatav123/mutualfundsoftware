"use client";

import Image from "next/image";
import Link from "next/link";


export default function Footer({ siteData }) {

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about-us" },
      { name: "Blogs", href: "/blogs" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact-us" },
    ],
    Services: [
      { name: "Wealth Elite" },
      { name: "Robo App" },
      { name: "Financial Website" },
      { name: "Business Booster" },
      { name: "Advisory X App" },
      { name: "Digital Marketing Services" },
    ],
    ContactUs: [
      {
        name: `Mobile : ${siteData?.phone || ""}`,
      },

      {
        name: `Email : ${siteData?.email || ""}`,
      },

      {
        name: `Address : ${siteData?.address || ""}`,
      },
    ],
  };
  return (
    <footer
      style={{ backgroundImage: "url('/images/footer-bg-image.png')" }}
      className="bg-[var(--rv-primary-dark)] text-[var(--rv-white)] px-4 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto py-8 md:pt-12 flex flex-col gap-5 md:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="md:col-span-1 flex flex-col gap-4">
            <img src="/images/logo1.png" alt="" className="brightness-0 invert filter w-60 h-auto" />
            <p className="text-[var(--rv-white)]">
              Revolutionize your mutual fund business with our comprehensive software. Effortlessly manage investors, portfolios, and everything in between.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h6 className="tracking-widest text-[var(--rv-white)] font-semibold mb-5">
                {title}
              </h6>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href || ""}
                      className="text-[var(--rv-white)] opacity-80 hover:opacity-100 transition"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center border-t pt-5 border-[var(--rv-white-light)] gap-4">
          <p className="text-[var(--rv-white)] opacity-80 text-center">

            © {new Date().getFullYear()}{" "}

            {siteData?.websiteName || "Mutual Fund Software"}.

            All Rights Reserved.

          </p>
        </div>
      </div>
    </footer>
  );
}