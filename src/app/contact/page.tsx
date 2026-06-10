import type { Metadata } from "next";
import Link from "next/link";
import { Code2, ExternalLink, Mail, MapPin, Share2 } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/layout/section-heading";
// import { ContactForm } from "@/components/contact/contact-form";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for fashion design internships, technical apparel roles, and collaborations.`,
  path: "/contact",
});

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
  {
    icon: Share2,
    label: "LinkedIn",
    href: siteConfig.linkedin,
    value: "LinkedIn Profile",
  },
  {
    icon: ExternalLink,
    label: "Behance",
    href: siteConfig.behance,
    value: "Behance Portfolio",
  },
  {
    icon: Code2,
    label: "GitHub",
    href: siteConfig.github,
    value: "GitHub Profile",
  },
  {
    icon: MapPin,
    label: "Location",
    href: null,
    value: siteConfig.location,
  },
];

export default function ContactPage() {
  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-neutral-200 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              label="Connect"
              title="Contact"
              description="Available for fashion design internships, apparel product development roles, technical design positions, and freelance collaborations."
            />
          </FadeUp>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <FadeUp>
            <div className="space-y-8">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex gap-4">
                  <link.icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {link.label}
                    </p>
                    {link.href ? (
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-1 block text-sm transition-opacity hover:opacity-50"
                      >
                        {link.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-sm">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* <FadeUp delay={0.15}>
            <ContactForm />
          </FadeUp> */}
          <FadeUp delay={0.15}>
  <div className="border border-neutral-200 p-10 dark:border-neutral-800">
    <h3 className="font-serif text-2xl">Let's Connect</h3>

    <p className="mt-4 text-sm text-muted-foreground">
      For internships, collaborations, freelance projects, or career opportunities,
      feel free to contact me directly via email.
    </p>

    <Button asChild size="lg" className="mt-6">
      <a href="mailto:nguyenthaitai.work@gmail.com?subject=Portfolio Inquiry">
        Send Email
      </a>
    </Button>
  </div>
</FadeUp>
        </div>
      </section>
    </div>
  );
}
