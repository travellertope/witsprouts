import Link from "next/link";

export function ArchivedBanner() {
  return (
    <div className="bg-cream text-center py-2.5 text-[13px] font-semibold">
      This is an archive of the 1st edition (2025). The 2026 longlist has
      been announced —{" "}
      <Link href="/prize/2026/longlist" className="text-ochre underline">
        view the 2026 longlist →
      </Link>
    </div>
  );
}
