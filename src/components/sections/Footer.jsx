import Paragraph from "@/components/common/Paragraph";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-6">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Paragraph variant="muted">© 2026 Tasklane</Paragraph>
        <Paragraph variant="muted">Made for people who like finishing things.</Paragraph>
      </div>
    </footer>
  );
}
