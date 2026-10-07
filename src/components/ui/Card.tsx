import { cn } from "@/lib/cn";

/** Base surface style, exported for elements that can't be a <div> (e.g. links). */
export const cardClass = "rounded-3xl border border-line bg-surface";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn(cardClass, className)} {...props} />;
}
