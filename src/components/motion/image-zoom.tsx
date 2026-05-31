"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageZoomProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
};

export function ImageZoom({
  src,
  alt,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspectRatio = "4/5",
}: ImageZoomProps) {
  return (
    <motion.div
      className={cn("group relative overflow-hidden bg-accent", className)}
      style={{ aspectRatio }}
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className="relative h-full w-full"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </motion.div>
  );
}
