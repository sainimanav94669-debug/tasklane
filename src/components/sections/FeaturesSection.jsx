import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";

const features = [
  {
    id: "capture",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 3v6l4 2"
          stroke="#4F6EF7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="9" r="7" stroke="#4F6EF7" strokeWidth="1.5" />
      </svg>
    ),
    title: "Quick capture",
    desc: "Add a task in seconds and sort it into a list later.",
  },
  {
    id: "planner",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2"
          y="2"
          width="14"
          height="14"
          rx="3"
          stroke="#4F6EF7"
          strokeWidth="1.5"
        />
        <path
          d="M5 7h8M5 10h5"
          stroke="#4F6EF7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Weekly planner",
    desc: "See every deadline for the week on a single clear view.",
  },
  {
    id: "team",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="6" cy="7" r="2.5" stroke="#4F6EF7" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="2.5" stroke="#4F6EF7" strokeWidth="1.5" />
        <path
          d="M1 15c0-2.5 2-4 5-4m6 4c0-2.5-2-4-5-4"
          stroke="#4F6EF7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Team lists",
    desc: "Share a list and assign each task to one of your teammates.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Heading as="h2" className="text-3xl mb-3">
          Built for the way you work
        </Heading>
        <Para variant="body" className="mb-12">
          Three simple tools that keep your day moving.
        </Para>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.id} className="flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
                {f.icon}
              </div>
              <Heading as="h4" className="text-base font-semibold">
                {f.title}
              </Heading>
              <Para variant="default">{f.desc}</Para>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
