"use client";

import React from "react";
import Link from "next/link";

const Button = ({
  text,
  children,
  onClick,
  type = "button",
  Icon,
  className = "",
  link,
  disabled = false,
  loading = false,
  variant = "primary",
}) => {

  const label = text ?? children ?? "Click Me";

  const variants = {

    primary:
      "bg-[var(--rv-primary)] text-white hover:bg-[var(--rv-secondary)]",

    secondary:
      "bg-[var(--rv-secondary)] text-[var(--rv-white)] hover:bg-[var(--rv-primary)]",

    outline:
      "bg-transparent text-[var(--rv-text)] border border-[var(--rv-border)] hover:bg-[var(--rv-primary-light)]",

    ghost:
      "bg-transparent text-[var(--rv-text)] hover:bg-[var(--rv-primary-light)]",

    gradient:
      "bg-gradient-to-l to-[var(--rv-secondary)] from-[var(--rv-primary)] text-white hover:from-[var(--rv-secondary)] hover:to-[var(--rv-primary)]",

  };

  const baseClass = `
    ${variants[variant]}
    md:px-5 md:py-2.5 px-3 py-2
    text-sm md:text-base
    rounded-lg
    transition-all duration-300
    inline-flex items-center justify-center gap-2
    shadow-sm hover:shadow-md
  `;

  const content = (
    <>

      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

      )}

      <span>
        {label}
      </span>
      {!loading && Icon && (
        <Icon className="text-lg" />
      )}


    </>
  );

  if (link) {

    return (
      <Link
        href={link}
        className={`${baseClass} ${className} ${
          disabled
            ? "opacity-60 pointer-events-none"
            : ""
        }`}
      >

        {content}

      </Link>
    );

  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClass} ${className} ${
        disabled || loading
          ? "opacity-60 cursor-not-allowed pointer-events-none"
          : "hover:scale-[1.02]"
      }`}
    >
      {content}

    </button>
  );
};

export default Button;