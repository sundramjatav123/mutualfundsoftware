"use client";

const FileUpload = ({ label, onChange, name, error }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-medium">{label}</label>}

      <input
        type="file"
        name={name}
        onChange={onChange}
        className={`p-2 rounded-md border bg-transparent cursor-pointer
        ${error ? "border--[var(--rv-red)]" : "border-[var(--rv-border)]"}`}
      />

      {error && <span className="text-xs text--[var(--rv-red)]">{error}</span>}
    </div>
  );
};

export default FileUpload;