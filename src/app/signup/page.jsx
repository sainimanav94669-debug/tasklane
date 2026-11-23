"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Heading from "@/components/ui/Heading";
import Para from "@/components/ui/Para";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    // TODO: wire up real auth
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    alert("Account created! (wire up real auth next)");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-10">

          <Logo className="mb-6" />

          <Heading as="h2" className="text-2xl mb-1">
            Create your account
          </Heading>
          <Para variant="default" className="mb-6">
            It only takes a minute to get started.
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
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" size="full" disabled={loading} className="mt-1">
              {loading ? "Creating account…" : "Create account"}
            </Button>
          </form>

          <Para variant="muted" className="mt-5 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-500 font-medium hover:underline"
            >
              Log in
            </Link>
          </Para>
        </div>
      </div>
    </div>
  );
}
