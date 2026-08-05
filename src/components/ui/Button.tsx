import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "blue" | "outline" | "white" | "ghost-white";

const base =
  "inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase font-semibold px-6 py-3.5 rounded-full border-[1.5px] transition-all duration-200 whitespace-nowrap cursor-pointer";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink border-ink text-paper hover:bg-blue hover:border-blue",
  blue: "bg-blue border-blue text-paper hover:bg-blue-deep hover:border-blue-deep",
  outline: "bg-transparent border-ink text-ink hover:bg-ink hover:text-paper",
  white:
    "bg-transparent border-paper text-paper hover:bg-paper hover:text-ink",
  "ghost-white":
    "bg-transparent border-white/40 text-paper hover:border-paper",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "solid", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  void _href;

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
