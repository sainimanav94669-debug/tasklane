const variants = {
  default: "text-base leading-[150%]",
  muted: "  text-sm font-normal text-dark-grey leading-[122%]  ",
  body: "text-base sm:text-lg text-dark-grey  leading-[150%]  ",
  white: "  text-sm  ",
};

export default function Paragraph({ children, variant = "default", className = "", ...props }) {
  return (
    <p className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}
