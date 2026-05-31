import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl tracking-wide">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{siteConfig.location}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block transition-opacity hover:opacity-50"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <Separator className="my-10 bg-neutral-200 dark:bg-neutral-800" />

        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.15em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Fashion Design · Technical Apparel Development</p>
        </div>
      </div>
    </footer>
  );
}
