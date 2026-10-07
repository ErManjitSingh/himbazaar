import Link from "next/link";
import { Button } from "./Button";

export function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="font-serif text-2xl text-hb-deep">{title}</h2>
      {description && (
        <p className="mt-2 max-w-md text-sm text-hb-muted">{description}</p>
      )}
      {actionHref && actionLabel && (
        <Link href={actionHref} className="mt-6 inline-flex">
          <Button type="button" variant="primary">
            {actionLabel}
          </Button>
        </Link>
      )}
    </div>
  );
}
