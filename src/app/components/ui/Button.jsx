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
    transition-all duration-600
    inline-flex items-center justify-center
    font-semibold
    shadow-sm hover:shadow-md
  `;

  const content = (
    <>
      {Icon && <Icon className="mr-2 text-lg" />}
      {label}
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        className={`${baseClass} ${className} ${
          disabled ? "opacity-60 pointer-events-none" : ""
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
      disabled={disabled}
      className={`${baseClass} ${className} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {content}
    </button>
  );
};

export default Button;