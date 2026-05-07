"use client";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
  }
);

export default function TextEditor({
  label,
  value,
  onChange,
}) {

  const modules = {

    toolbar: [

      [{ header: [1, 2, 3, false] }],

      ["bold", "italic", "underline"],

      [{ list: "ordered" },
       { list: "bullet" }],

      ["link", "image"],

      ["clean"],

    ],

  };

  return (

    <div className="flex flex-col gap-2">

      {label && (

        <label className="font-medium">
          {label}
        </label>

      )}

      <div className="overflow-hidden rounded-xl border bg-[var(--rv-card)]">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          className="text-[var(--rv-text)]"
        />

      </div>

    </div>

  );

}