"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Company: [
    { name: "About Us", href: "/about-us" },
    { name: "Blogs", href: "/blogs" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact-us" },
  ],
  Services: [
    { name: "Wealth Elite"},
    { name: "Robo App"},
    { name: "Financial Website"},
    { name: "Business Booster"},
    { name: "Advisory X App"},
    { name: "Digital Marketing Services"},
  ],
  ContactUs: [
    { name: "Mobile : +91 9039822000"},
    { name: "Email : info@mutualfundsoftware.in"},
    { name: "Address : Krishan Vihar Colony, Nipania Road, Indore, Madhya Pradesh 452010"},
  ],
};

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: "url('/images/footer-bg-image.png')" }}
      className="bg-[var(--rv-primary-dark)] text-[var(--rv-white)] px-4 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto py-8 md:pt-12 flex flex-col gap-5 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 flex flex-col gap-4">
            <h2 className="font-bold">
              LOGO
            </h2>
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

        <div className="flex items-center justify-center border-t pt-5 border-[var(--rv-border)] gap-4">
          <p className="text-[var(--rv-white)] opacity-80 text-center">
           © 2026 Mutual Fund Software. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}