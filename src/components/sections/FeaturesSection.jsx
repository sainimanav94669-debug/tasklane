import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import Icons from "@/components/common/Icons";
import { featuresContent, featuresData } from "@/components/utilis/helper.js";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-15 sm:py-20 lg:py-24">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12">
        <Heading as="h2" className="text-4xl font-bold leading-[120%] mb-3">
          {featuresContent.heading}
        </Heading>
        <Paragraph variant="body" className="mb-12  ">
          {featuresContent.subheading}
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {featuresData.map((f) => (
            <div key={f.id} className="flex flex-col gap-4 border border-light-grey p-6 rounded-2xl sm:p-7">
              <div className="w-9 sm:w-12 h-9 sm:h-12 rounded-lg flex items-center justify-center">
                {Icons[f.id]}
              </div>
              <Heading as="h4" className="text-xl leading-[130%] text-black font-semibold">
                {f.title}
              </Heading>
              <Paragraph variant="default" className="text-dark-grey">{f.desc}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
