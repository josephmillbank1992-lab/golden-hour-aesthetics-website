import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "solid" | "outline" | "text";
};

export function ButtonLink({
  children,
  className = "",
  variant = "solid",
  ...linkProps
}: ButtonLinkProps) {
  const classes = ["button-link", `button-link--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...linkProps}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
