import Para from "@/components/common/Para";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-6">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Para variant="muted">© 2026 Tasklane</Para>
        <Para variant="muted">Made for people who like finishing things.</Para>
      </div>
    </footer>
  );
}
