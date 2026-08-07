import Image from "next/image";
import Link from "next/link";

const ASPECT = 630 / 177;

export function Logo({
  href = "/",
  size = "default",
  variant = "blue",
  className = "",
}: {
  href?: string;
  size?: "default" | "prize";
  variant?: "blue" | "white";
  className?: string;
}) {
  const height = size === "prize" ? 34 : 40;
  const width = Math.round(height * ASPECT);
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      <Image
        src={variant === "white" ? "/brand/logo-white.png" : "/brand/logo-blue.png"}
        alt="The Witsprouts Project"
        width={width}
        height={height}
        priority
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
