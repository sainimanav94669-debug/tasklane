const sizes = {
  h1: "text-4xl sm:text-5xl font-bold tracking-tight text-black leading-[111%]",
  h2: "text-3xl font-bold  text-black",
  h3: "text-2xl font-semibold text-black",
  h4: "text-xl font-semibold ",
  h5: "text-lg font-semibold text-black",
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
