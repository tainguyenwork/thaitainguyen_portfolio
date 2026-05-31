"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
};

export function RevealOnScroll({
  children,
  className,
  direction = "up",
}: RevealOnScrollProps) {
  const offset = {
    left: { x: -48, y: 0 },
    right: { x: 48, y: 0 },
    up: { x: 0, y: 40 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
