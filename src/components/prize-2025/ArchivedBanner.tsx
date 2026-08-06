import Link from "next/link";

export function ArchivedBanner() {
  return (
    <div className="bg-cream text-center py-2.5 text-[13px] font-semibold">
      This is an archive of the 1st edition (2025). Nominations for the
      current edition are open —{" "}
      <Link href="/prize/2026" className="text-blue underline">
        go to the 2026 Prize →
      </Link>
    </div>
  );
}
