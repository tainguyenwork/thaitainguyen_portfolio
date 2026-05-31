import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
