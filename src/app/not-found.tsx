import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-6 font-serif text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-10">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
