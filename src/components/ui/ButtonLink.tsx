import { cn } from "@/lib/cn";
import { AppLink } from "./AppLink";

const variants = {
  primary: "bg-accent text-accent-ink hover:-translate-y-0.5",
  secondary: "border border-line bg-surface hover:border-accent",
};

type Props = React.ComponentProps<typeof AppLink> & { variant?: keyof typeof variants };

export function ButtonLink({ variant = "primary", className, ...props }: Props) {
  return (
    <AppLink
      className={cn(
        "inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
