import { cn } from "@/lib/cn";
import { AppLink } from "./AppLink";

const variants = {
  primary: "bg-accent text-accent-ink hover:-translate-y-0.5",
  secondary: "border border-line bg-surface hover:border-accent",
};

export type ButtonVariant = keyof typeof variants;

/** Pill button look, shared by links (ButtonLink) and real buttons. */
export const buttonClass = (variant: ButtonVariant = "primary", className?: string) =>
  cn("inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition", variants[variant], className);

type Props = React.ComponentProps<typeof AppLink> & { variant?: ButtonVariant };

export function ButtonLink({ variant = "primary", className, ...props }: Props) {
  return <AppLink className={buttonClass(variant, className)} {...props} />;
}
