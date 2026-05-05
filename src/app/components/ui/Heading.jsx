import React from "react";

const highlightText = (text, highlight) => {
    if (!text || !highlight) return text;

    const regex = new RegExp(`(${highlight})`, "gi");

    return text.split(regex).map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span
                key={index}
                className="text-[var(--rv-primary)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
                {part}
            </span>
        ) : (
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" key={index}>{part}</span>
        )
    );
};

const Heading = ({
    title,
    heading1,
    heading2,
    description,
    align = "start",
    variant = "dark",
    highlight = "",
}) => {
    const textColor =
        variant === "light"
            ? "text-[var(--rv-white)]"
            : "text-[var(--rv-text)]";

    const alignment =
        align === "start"
            ? "items-start text-left"
            : align === "right"
                ? "items-end text-right"
                : "items-center text-center";

    return (
        <div className={`flex flex-col gap-2 ${alignment}`}>

            {title && (
                <div className={`capitalize tracking-wide font-medium flex items-center gap-2 ${textColor}`}>
                    <div className="w-2 h-2 rounded-full bg-[var(--rv-primary)]"></div>
                    <p>{title}</p>
                </div>
            )}

            <div>
                {heading1 && (
                    <h2 className={`font-bold leading-tight ${textColor}`}>
                        {highlightText(heading1, highlight)}
                    </h2>
                )}
                {heading2 && (
                    <h2 className={`font-bold leading-tight ${textColor}`}>
                        {highlightText(heading2, highlight)}
                    </h2>
                )}

            </div>
            {description && (
                <p className={`max-w-2xl opacity-80 ${textColor}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default Heading;
