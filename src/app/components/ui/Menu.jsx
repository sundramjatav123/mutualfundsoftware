"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  useTheme,
} from "next-themes";

import {
  useEffect,
  useState,
} from "react";

import {
  FiHome,
  FiUser,
  FiPhone,
  FiLayers,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const Menu = () => {

  const pathname =
    usePathname();

  const {
    setTheme,
    resolvedTheme,
  } = useTheme();

  const [mounted,
    setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  if (!mounted) return null;

  const isDark =
    resolvedTheme === "dark";

  const navLinks = [

    {
      name: "Home",
      link: "/",
      icon: <FiHome />,
    },

    {
      name: "About",
      link: "/about-us",
      icon: <FiUser />,
    },

    {
      name: "Services",
      link: "/services",
      icon: <FiLayers />,
    },

    {
      name: "Contact",
      link: "/contact-us",
      icon: <FiPhone />,
    },

  ];

  return (
    <>
      <nav className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 z-50">

        <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-[var(--rv-card)] border border-[var(--rv-border)] backdrop-blur-2xl shadow-2xl">


          {navLinks
            .slice(0, 2)
            .map((item) => {

              const active =
                pathname ===
                item.link;

              return (

                <Link
                  key={item.link}
                  href={item.link}
                  className="flex flex-col items-center gap-1 relative group min-w-[52px]"
                >

                  <div
                    className={`text-xl transition-all duration-300 ${
                      active
                        ? "text-[var(--rv-primary)] scale-110"
                        : "text-[var(--rv-text)] group-hover:text-[var(--rv-primary)]"
                    }`}
                  >

                    {item.icon}

                  </div>

                  <span
                    className={`text-[10px] transition-all ${
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

          <button
            onClick={() =>
              setTheme(
                isDark
                  ? "light"
                  : "dark"
              )
            }
            className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-[var(--rv-primary)] to-[var(--rv-secondary)] text-[var(--rv-white)] shadow-xl border-4 border-[var(--rv-card)] flex items-center justify-center transition-all duration-300 active:scale-95"
          >

            <div className="text-2xl">

              {isDark
                ? <FiMoon />
                : <FiSun />
              }

            </div>

          </button>

          {navLinks
            .slice(2)
            .map((item) => {

              const active =
                pathname ===
                item.link;

              return (

                <Link
                  key={item.link}
                  href={item.link}
                  className="flex flex-col items-center gap-1 relative group min-w-[52px]"
                >

                  <div
                    className={`text-xl transition-all duration-300 ${
                      active
                        ? "text-[var(--rv-primary)] scale-110"
                        : "text-[var(--rv-text)] group-hover:text-[var(--rv-primary)]"
                    }`}
                  >

                    {item.icon}

                  </div>

                  <span
                    className={`text-[10px] transition-all ${
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