const variants = {
  default: "text-sm ",
  muted: "  text-xs  ",
  body: " text-base  ",
  white: "text-[#4A5160] text-sm  ",
};

export default function Para({ children, variant = "default", className = "", ...props }) {
  return (
    <p className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}
