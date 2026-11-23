"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/common/Logo";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-gray-500 hover:text-gray-900 transition"
          >
            Features
          </a>

          {user ? (
            /* ── logged-in state ── */
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:inline">
                Hi, <span className="font-medium text-gray-800">{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-md border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Log out
              </button>
            </div>
          ) : (
            /* ── logged-out state ── */
            <>
              <Link
                href="/login"
                className="text-sm text-gray-500 hover:text-gray-900 transition"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-600 transition"
              >
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
