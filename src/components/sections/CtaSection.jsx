import Link from "next/link";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";

export default function CtaSection() {
  return (
    <section className="bg-indigo-500 py-14">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Heading as="h2" className="text-2xl text-white mb-1">
            Ready to get organized?
          </Heading>
          <Paragraph variant="white">
            Create your free account and get your first task done today.
          </Paragraph>
        </div>
        <Link
          href="/signup"
          className="shrink-0 rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-gray-50 transition"
        >
          Create account
        </Link>
      </div>
    </section>
  );
}
