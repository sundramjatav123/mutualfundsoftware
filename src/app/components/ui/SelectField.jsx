"use client";

const SelectField = ({
    label,
    value,
    onChange,
    name,
    error,
    options = [],
    placeholder = "Select Option",
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label className="font-medium">
                    {label}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`p-3 rounded-md border bg-transparent focus:outline-none ${error ? "border-[var(--rv-red)]" : "border-[var(--rv-border)]"}`}>
                <option value="" className="text-[var(--rv-black)]">
                    {placeholder}
                </option>

                {options.map((item, i) => (
                    <option
                        key={i}
                        value={item.value || item}
                        className="text-[var(--rv-black)]"
                    >
                        {item.label || item}
                    </option>
                ))}
            </select>

            {error && (
                <span className="text-xs text-[var(--rv-red)]">
                    {error}
                </span>
            )}
        </div>
    );
};

export default SelectField;