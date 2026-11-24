"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Heading from "@/components/common/Heading";
import Paragraph from "@/components/common/Paragraph";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { user, ready, login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
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
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    // Small delay so the button state is visible
    await new Promise((r) => setTimeout(r, 400));
    const err = login(form.email, form.password);
    setLoading(false);
    if (err) {
      setError(err);
    } else {
      router.push("/");
    }
  }

  // Don't flash the form while we check auth
  if (!ready) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-10">

          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Image
              src="/assets/images/logo.svg"
              alt="Tasklane logo"
              width={126}
              height={28}
              priority
            />
            
          </Link>

          <Heading as="h2" className="text-[32px] mb-2">
            Welcome back
          </Heading>
          <Paragraph variant="default" className="mb-7">
             Log in to pick up where you left off.
          </Paragraph>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-gray-300 accent-indigo-500"
              />
              <Paragraph variant="default" className="text-xs text-gray-500">
                Keep me logged in
              </Paragraph>
            </label>

            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2">
                <Paragraph variant="default" className="text-red-600 text-xs">
                  {error}
                </Paragraph>
              </div>
            )}

            <Button type="submit" size="full" disabled={loading} className="mt-1">
              {loading ? "Logging in…" : "Log in"}
            </Button>
          </form>

          <Paragraph variant="muted" className="mt-5 text-center text-gray-400">
            New to Tasklane?{" "}
            <Link href="/signup" className="text-indigo-500 font-medium hover:underline">
              Create an account
            </Link>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
