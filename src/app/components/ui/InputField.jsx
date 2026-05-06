"use client";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-medium">{label}</label>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2.5 rounded-md border bg-transparent focus:outline-none 
        ${error ? "border-[var(--rv-red)]" : "border-[var(--rv-border)]"}`}
      />

      {error && <span className="text-xs text-[var(--rv-red)]">{error}</span>}
    </div>
  );
};

export default InputField;