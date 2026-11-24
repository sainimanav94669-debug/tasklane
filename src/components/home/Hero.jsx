import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";

export default function Hero() {
  return (
    <section className="max-w-360 bg-[#F3F5FF] mx-auto px-4 sm:px-8 lg:px-12 py-15 sm:py-20 lg:py-22 flex flex-col md:flex-row items-center gap-12">
       
      <div className="flex-1">
        <Heading as="h1" className="text-3xl sm:text-5xl lg:text-[56px] mb-5 sm:mb-6">
         Plan the week. Finish the work.{" "}
           
        </Heading>
        <Paragraph variant="body" className="text-dark-grey font-normal mb-5 leading-[150%] sm:mb-6 text-base sm:text-xl ">
          Tasklane keeps your tasks, deadlines and notes in one calm place, so nothing slips through.
        </Paragraph>
        <div className="flex items-start gap-3">
          <Link
            href="/signup"
            className="btn-rtl btn-rtl-white rounded-[10px] bg-purple leading-[115%] px-6 sm:px-7 py-3 sm:py-4 text-base font-semibold text-white border border-purple hover:text-black hover:border-grey"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="btn-rtl btn-rtl-purple rounded-[10px] border border-grey bg-white px-6 sm:px-7 py-3 sm:py-4.25 leading-[115%] text-base font-semibold text-black hover:text-white hover:border-purple"
          >
            Log in
          </Link>
        </div>
      </div>

       
      <div className=" flex justify-center">
        <Image
          src="/assets/images/hero illustration.svg"
          alt="Tasklane app illustration"
          width={440}
          height={400}
          priority
          className="w-full max-w-110"
        />
      </div>
    </section>
  );
}
