"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, MotionProps } from "framer-motion";

// Default placeholder image path
const DEFAULT_PLACEHOLDER = "/images/placeholder.jpg";

// Props that conflict between HTML img and motion.img
type ConflictingProps = "onDrag" | "onDragStart" | "onDragEnd";

interface ImageWithFallbackProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "onError" | ConflictingProps
  > {
  src: string;
  alt: string;
  fallbackSrc?: string;
  defaultPlaceholder?: string;
  motionProps?: MotionProps;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  defaultPlaceholder = DEFAULT_PLACEHOLDER,
  motionProps,
  className = "",
  ...props
}: ImageWithFallbackProps) {
  // Normalize empty string to use placeholder immediately
  const normalizedSrc = useMemo(() => {
    if (!src || src.trim() === "")
      return defaultPlaceholder || DEFAULT_PLACEHOLDER;
    return src;
  }, [src, defaultPlaceholder]);

  // Ensure we always have a valid placeholder
  const finalPlaceholder = defaultPlaceholder || DEFAULT_PLACEHOLDER;

  const [imgSrc, setImgSrc] = useState<string>(normalizedSrc);
  const [errorCount, setErrorCount] = useState(0);

  // Reset when src changes
  useEffect(() => {
    setImgSrc(normalizedSrc);
    setErrorCount(0);
  }, [normalizedSrc]);

  const handleError = () => {
    // Prevent infinite loops
    if (errorCount >= 2) {
      return;
    }

    // If we're already showing the placeholder, don't do anything
    if (imgSrc === finalPlaceholder) {
      return;
    }

    // If fallbackSrc is provided and different from finalPlaceholder, try it first
    if (
      errorCount === 0 &&
      fallbackSrc &&
      fallbackSrc !== finalPlaceholder &&
      fallbackSrc !== imgSrc
    ) {
      setErrorCount(1);
      setImgSrc(fallbackSrc);
    } else {
      // Use default placeholder (either no fallback, fallback failed, or fallback is same as placeholder)
      setErrorCount(2);
      setImgSrc(finalPlaceholder);
    }
  };

  // Check if current image is the placeholder to apply mask
  const isPlaceholder =
    imgSrc === finalPlaceholder || (fallbackSrc && imgSrc === fallbackSrc);

  // Add greyscale filter for placeholder images
  const placeholderClassName = isPlaceholder
    ? className
      ? `${className} grayscale`
      : "grayscale"
    : className;

  if (motionProps) {
    // Filter out conflicting props when using motion.img
    const { onDrag, onDragStart, onDragEnd, ...safeProps } = props as any;
    return (
      <div className="relative w-full h-full">
        <motion.img
          src={imgSrc}
          alt={alt}
          className={placeholderClassName}
          onError={handleError}
          {...motionProps}
          {...safeProps}
        />
        {isPlaceholder && (
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/20 to-background/90 mix-blend-multiply pointer-events-none" />
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={imgSrc}
        alt={alt}
        className={placeholderClassName}
        onError={handleError}
        {...props}
      />
      {isPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/20 to-background/90 mix-blend-multiply pointer-events-none" />
      )}
    </div>
  );
}
