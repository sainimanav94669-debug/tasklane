const sizes = {
  h1: "text-4xl sm:text-5xl font-bold tracking-tight text-black leading-[111%]",
  h2: "text-3xl font-bold  text-black",
  h3: "text-2xl font-semibold text-gray-900",
  h4: "text-xl font-semibold text-gray-900",
  h5: "text-lg font-semibold text-gray-900",
};

export default function Heading({
  as: Tag = "h2",
  children,
  className = "",
  ...props
}) {
  return (
    <Tag
      className={`${sizes[Tag] ?? sizes.h2} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
