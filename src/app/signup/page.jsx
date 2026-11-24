"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Heading from "@/components/common/Heading";
import Para from "@/components/common/Para";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const { user, ready, signup } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ fullname: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // If already logged in, go straight to home
  useEffect(() => {
    if (ready && user) router.replace("/");
  }, [ready, user, router]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.fullname || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const err = signup(form.fullname, form.email, form.password);
    setLoading(false);
    if (err) {
      setError(err);
    } else {
      router.push("/");
    }
  }

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-10">

          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Image
              src="/assets/images/logo-icon.svg"
              alt="Tasklane logo"
              width={20}
              height={20}
              priority
            />
            <span className="text-sm font-semibold text-gray-900">Tasklane</span>
          </Link>

          <Heading as="h2" className="text-2xl mb-1">
            Create your account
          </Heading>
          <Para variant="default" className="mb-6">
            It only takes a minute to get started.
          </Para>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              id="fullname"
              label="Full name"
              type="text"
              placeholder="Your name"
              value={form.fullname}
              onChange={handleChange}
              required
            />

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Create a password (min 8 chars)"
              value={form.password}
              onChange={handleChange}
              required
            />

            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2">
                <Para variant="default" className="text-red-600 text-xs">
                  {error}
                </Para>
              </div>
            )}

            <Button type="submit" size="full" disabled={loading} className="mt-1">
              {loading ? "Creating account…" : "Create account"}
            </Button>
          </form>

          <Para variant="muted" className="mt-5 text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-500 font-medium hover:underline">
              Log in
            </Link>
          </Para>
        </div>
      </div>
    </div>
  );
}
