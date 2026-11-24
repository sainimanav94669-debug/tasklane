import Link from "next/link";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";

export default function CtaSection() {
  return (
    <section className="sm:pb-20 pb-15 sm:px-8 px-4 lg:px-12 lg:pb-24">
      <div className="max-w-336 rounded-3xl p-14 mx-auto  bg-purple  flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Heading as="h2" className="sm:text-4xl leading-[120%] text-white mb-2.5">
            Ready to get organized?
          </Heading>
          <Paragraph variant="body" className=" text-light-white">
            Create your free account and plan your first week today.
          </Paragraph>
        </div>
        <Link
          href="/signup"
          className="rounded-[10px] border border-white bg-white px-6 sm:px-7 py-3 sm:py-4.25 leading-[115%] text-base  font-semibold text-light-purple hover:bg-purple hover:text-white   transition"
        >
          Create account
        </Link>
      </div>
    </section>
  );
}
