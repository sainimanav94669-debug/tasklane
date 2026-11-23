"use client";

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${className}`}
        {...props}
      />
    </div>
  );
}
