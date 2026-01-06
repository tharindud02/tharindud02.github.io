"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_PLACEHOLDER = "/images/placeholder.jpg";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  motionProps?: MotionProps;
  fill?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc,
  className,
  priority = false,
  loading = "lazy",
  motionProps,
  fill = false,
  sizes,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc || DEFAULT_PLACEHOLDER);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc && fallbackSrc !== DEFAULT_PLACEHOLDER) {
        setImgSrc(fallbackSrc);
      } else {
        setImgSrc(DEFAULT_PLACEHOLDER);
      }
    }
  };

  const isPlaceholder = imgSrc === DEFAULT_PLACEHOLDER || (fallbackSrc && imgSrc === fallbackSrc);
  const imageClassName = cn(className, isPlaceholder && "grayscale");

  const imageProps = {
    src: imgSrc,
    alt,
    className: imageClassName,
    onError: handleError,
    priority,
    loading,
    sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    quality: 85,
    ...(fill ? { fill: true } : { width, height }),
  };

  if (motionProps) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          {...motionProps}
        >
          <Image {...imageProps} />
        </motion.div>
        {isPlaceholder && (
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/20 to-background/90 mix-blend-multiply pointer-events-none z-10" />
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image {...imageProps} />
      {isPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/20 to-background/90 mix-blend-multiply pointer-events-none" />
      )}
    </div>
  );
}
