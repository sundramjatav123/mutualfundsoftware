"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiPhone,
  FiLayers,
} from "react-icons/fi";

const Menu = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", link: "/", icon: <FiHome /> },
    { name: "About", link: "/about-us", icon: <FiUser /> },
    { name: "Services", link: "/services", icon: <FiLayers /> },
    { name: "Contact", link: "/contact-us", icon: <FiPhone /> },
  ];

  return (
    <>
      <nav className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[var(--rv-card)] border border-[var(--rv-border)] backdrop-blur-xl shadow-lg">

        <div className="flex items-center gap-8 w-fit">

          {navLinks.map((item) => {
            const active = pathname === item.link;

            return (
              <Link
                key={item.link}
                href={item.link}
                className="flex flex-col items-center gap-1 relative group"
              >
                <div
                  className={`text-xl transition-all ${
                    active
                      ? "text-[var(--rv-primary)] scale-110"
                      : "text-[var(--rv-text)] group-hover:text-[var(--rv-primary)]"
                  }`}
                >
                  {item.icon}
                </div>

                <span
                  className={`text-[10px] ${
                    active
                      ? "text-[var(--rv-primary)]"
                      : "text-[var(--rv-text)] group-hover:text-[var(--rv-primary)]"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>
      </nav>
    </>
  );
};

export default Menu;