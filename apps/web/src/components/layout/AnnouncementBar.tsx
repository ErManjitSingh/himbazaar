import Link from "next/link";
import { ANNOUNCEMENT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="bg-hb-deep text-center text-[12px] tracking-wide text-white/95">
      <Link
        href={ANNOUNCEMENT.href}
        className="block px-4 py-2 transition hover:text-white"
      >
        {ANNOUNCEMENT.text}
      </Link>
    </div>
  );
}
