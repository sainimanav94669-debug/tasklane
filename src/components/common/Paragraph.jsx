const variants = {
  default: "text-sm ",
  muted: "  text-xs  ",
  body: " text-base  ",
  white: "  text-sm  ",
};

export default function Paragraph({ children, variant = "default", className = "", ...props }) {
  return (
    <p className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}
