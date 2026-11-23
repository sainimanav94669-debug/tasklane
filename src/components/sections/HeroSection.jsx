import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";

export default function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Text */}
      <div className="flex-1">
        <Heading as="h1" className="text-5xl leading-tight mb-4">
          Plan the week.{" "}
          <span className="text-indigo-500">Finish the work.</span>
        </Heading>
        <Para variant="body" className="max-w-md mb-8">
          Tasklane keeps your tasks, deadlines and notes in one calm place, so
          nothing slips through.
        </Para>
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-600 transition"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Log in
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/assets/images/hero-illustration.svg"
          alt="Tasklane app illustration"
          width={400}
          height={280}
          priority
          className="w-full max-w-sm"
        />
      </div>
    </section>
  );
}
