import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] rounded-full" />
    </ScrollReveal>
  );
}
