import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "blue" | "outline" | "white";

const base =
  "inline-flex items-center gap-2 text-sm font-semibold px-[26px] py-3.5 rounded-[2px] border-[1.5px] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed max-w-full";

const variants: Record<Variant, string> = {
  solid: "bg-teal border-teal text-paper hover:bg-ochre hover:border-ochre",
  blue: "bg-ochre border-ochre text-paper hover:bg-teal hover:border-teal",
  outline: "bg-transparent border-ink text-ink hover:bg-teal hover:text-paper",
  white: "bg-transparent border-paper text-paper hover:bg-paper hover:text-ink",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
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
      <Link href={props.href} onClick={props.onClick} className={classes}>
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
