import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Navbar */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition">
              Features
            </a>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-600 transition"
            >
              Sign up
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Heading as="h1" className="text-5xl leading-tight mb-4">
              Plan the week.{" "}
              <span className="text-indigo-500">Finish the work.</span>
            </Heading>
            <Para variant="body" className="max-w-md mb-8">
              Tasklane keeps your tasks, deadlines and notes in one calm place, so nothing slips through.
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

        {/* Features */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <Heading as="h2" className="text-3xl mb-3">
              Built for the way you work
            </Heading>
            <Para variant="body" className="mb-12">
              Three simple tools that keep your day moving.
            </Para>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3v6l4 2" stroke="#4F6EF7" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="9" cy="9" r="7" stroke="#4F6EF7" strokeWidth="1.5"/>
                  </svg>
                </div>
                <Heading as="h4" className="text-base font-semibold">Quick capture</Heading>
                <Para variant="default">
                  Add a task in seconds and sort it into a list later.
                </Para>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="3" stroke="#4F6EF7" strokeWidth="1.5"/>
                    <path d="M5 7h8M5 10h5" stroke="#4F6EF7" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <Heading as="h4" className="text-base font-semibold">Weekly planner</Heading>
                <Para variant="default">
                  See every deadline for the week on a single clear view.
                </Para>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="6" cy="7" r="2.5" stroke="#4F6EF7" strokeWidth="1.5"/>
                    <circle cx="12" cy="7" r="2.5" stroke="#4F6EF7" strokeWidth="1.5"/>
                    <path d="M1 15c0-2.5 2-4 5-4m6 4c0-2.5-2-4-5-4" stroke="#4F6EF7" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <Heading as="h4" className="text-base font-semibold">Team lists</Heading>
                <Para variant="default">
                  Share a list and assign each task to one of your teammates.
                </Para>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
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
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Para variant="muted">© 2026 Tasklane</Para>
          <Para variant="muted">Made for people who like finishing things.</Para>
        </div>
      </footer>
    </div>
  );
}
