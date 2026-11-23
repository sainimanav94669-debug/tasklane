import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";

export default function CtaSection() {
  return (
    <section className="bg-indigo-500 py-14">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Heading as="h2" className="text-2xl text-white mb-1">
            Ready to get organized?
          </Heading>
          <Para variant="white">
            Create your free account and get your first task done today.
          </Para>
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
