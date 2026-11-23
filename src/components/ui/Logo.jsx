import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/assets/images/logo-icon.svg"
        alt="Tasklane logo"
        width={20}
        height={20}
        priority
      />
      <span className="text-sm font-semibold text-gray-900">Tasklane</span>
    </Link>
  );
}
