const variants = {
  default: "text-base leading-[150%]",
  muted: "  text-xs  ",
  body: " text-lg text-dark-grey  leading-[150%]  ",
  white: "  text-sm  ",
};

export default function Paragraph({ children, variant = "default", className = "", ...props }) {
  return (
    <p className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}
