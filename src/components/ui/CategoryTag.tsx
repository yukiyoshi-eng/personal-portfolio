import { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryTagProps {
  category: ProjectCategory;
  className?: string;
}

const categoryMap: Record<ProjectCategory, string> = {
  "ML / AI": "tag-ml",
  "Full-Stack Web": "tag-web",
  "iOS / Mobile": "tag-mobile",
  Frontend: "tag-frontend",
};

export default function CategoryTag({ category, className }: CategoryTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border",
        categoryMap[category],
        className
      )}
    >
      {category}
    </span>
  );
}
