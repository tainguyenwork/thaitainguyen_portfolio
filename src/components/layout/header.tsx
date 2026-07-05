"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { theme, toggleTheme } = useTheme();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-neutral-200/80 bg-background/90 backdrop-blur-md dark:border-neutral-800/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.15em] uppercase transition-opacity hover:opacity-60"
        >
          TTN
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-50",
                pathname === item.href && "opacity-100",
                pathname !== item.href && "opacity-70",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-50"
          aria-label={
            mounted
              ? `Switch to ${theme === "light" ? "dark" : "light"} mode`
              : "Toggle theme"
          }
        >
          {!mounted ? null : theme === "light" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </button>

  </div>
</div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-neutral-200 bg-background md:hidden dark:border-neutral-800"
          >
            <nav
              className="flex flex-col gap-6 px-6 py-8"
              aria-label="Mobile"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-serif text-2xl tracking-wide",
                    pathname === item.href && "underline underline-offset-8",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <p className="pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {siteConfig.location}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
