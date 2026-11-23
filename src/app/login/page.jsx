"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
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

          <Logo className="mb-6" />

          <Heading as="h2" className="text-2xl mb-1">
            Welcome back
          </Heading>
          <Para variant="default" className="mb-6">
            Log in to pick up where you left off.
          </Para>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-3 py-2">
              <Para variant="default" className="text-red-600 text-xs">
                {error}
              </Para>
            </div>
          )}

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
              <Para variant="default" className="text-xs text-gray-500">
                Keep me logged in
              </Para>
            </label>

            <Button type="submit" size="full" disabled={loading} className="mt-1">
              {loading ? "Logging in…" : "Log in"}
            </Button>
          </form>

          <Para variant="muted" className="mt-5 text-center text-gray-400">
            New to Tasklane?{" "}
            <Link href="/signup" className="text-indigo-500 font-medium hover:underline">
              Create an account
            </Link>
          </Para>
        </div>
      </div>
    </div>
  );
}
