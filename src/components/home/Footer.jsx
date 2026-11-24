import Paragraph from "@/components/common/Paragraph";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-light-grey py-6 sm:py-7">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <Paragraph variant="muted">© {year} Tasklane</Paragraph>
        <Paragraph variant="muted">Made for people who like finishing things.</Paragraph>
      </div>
    </footer>
  );
}
