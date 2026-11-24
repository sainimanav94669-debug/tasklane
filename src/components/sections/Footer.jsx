import Paragraph from "@/components/common/Paragraph";

export default function Footer() {
  return (
    <footer className="border-t border-light-grey py-6 sm:py-7">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <Paragraph variant="muted">© {new Date().getFullYear()} Tasklane</Paragraph>
        <Paragraph variant="muted">Made for people who like finishing things.</Paragraph>
      </div>
    </footer>
  );
}
