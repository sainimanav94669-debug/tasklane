"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="border-b border-gray-100 bg-white py-4 sm:py-5 sticky top-0 z-50">
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12  flex items-center justify-between">
        <Link href="/" >
          <Image className="sm:w-full w-24 "
            src="/assets/images/logo.svg"
            alt="Tasklane logo"
            width={126}
            height={28}
            priority
          />
          
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="#features"
            className="text-[15px] leading-[120%] text-black hover:text-grey transition"
          >
            Features
          </a>

          {user ? (
           
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:inline">
                Hi, <span className="font-medium text-gray-800">{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-[10px] border border-grey sm:px-5 px-4 py-2 sm:py-3 leading-[123%] text-[15px] font-semibold text-black hover:bg-purple hover:text-white hover:border-purple transition"
              >
                Log out
              </button>
            </div>
          ) : (
             
            <>
              <Link
                href="/login"
                className="text-[15px] leading-[120%] text-black hover:text-grey transition"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-[10px] bg-purple border leading-[123%] border-purple hover:border-grey  sm:px-5 px-4 py-2 sm:py-3 max-w-23.75 text-nowrap text-[15px] font-semibold text-white hover:text-black  hover:bg-white  transition"
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
