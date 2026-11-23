"use client";

const variants = {
  primary: "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700",
  outline:
    "border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100",
  ghost: "bg-transparent text-indigo-500 hover:bg-indigo-50 active:bg-indigo-100",
  white: "bg-white text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-semibold",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-sm",
  full: "w-full px-4 py-2.5 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "full",
  type = "button",
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
