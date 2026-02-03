import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary";

type InternalProps = {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ExternalProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  newTab?: boolean;
  download?: boolean;
};

type Props = InternalProps | ExternalProps;

export default function ButtonLink(props: Props) {
  const { children, variant = "primary", className = "" } = props;

  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition border";
  const styles =
    variant === "primary"
      ? "bg-white text-zinc-950 border-white hover:bg-zinc-200"
      : "bg-transparent text-zinc-100 border-white/15 hover:bg-white/5";

  const classes = `${base} ${styles} ${className}`;

  // Internal route link
  if ("to" in props) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  // External / file link
  const openInNewTab = props.newTab ?? true;

  return (
    <a
      href={props.href}
      className={classes}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noreferrer" : undefined}
      download={props.download}
    >
      {children}
    </a>
  );
}
