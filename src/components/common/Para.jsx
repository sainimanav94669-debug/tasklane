const variants = {
  default: "text-gray-500 text-sm leading-relaxed",
  muted: "text-gray-400 text-xs leading-relaxed",
  body: "text-gray-600 text-base leading-relaxed",
  white: "text-indigo-100 text-sm leading-relaxed",
};

export default function Para({ children, variant = "default", className = "", ...props }) {
  return (
    <p className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}
