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
    if (!src || src.trim() === "") return defaultPlaceholder;
    return src;
  }, [src, defaultPlaceholder]);

  const [imgSrc, setImgSrc] = useState<string>(normalizedSrc);
  const [errorCount, setErrorCount] = useState(0);

  // Reset when src changes
  useEffect(() => {
    setImgSrc(normalizedSrc);
    setErrorCount(0);
  }, [normalizedSrc]);

  const handleError = () => {
    // Prevent infinite loops by checking if we're already showing the placeholder
    if (imgSrc === defaultPlaceholder) {
      return;
    }

    if (errorCount === 0 && fallbackSrc && fallbackSrc !== defaultPlaceholder) {
      // First error: try fallback (only if it's different from placeholder)
      setErrorCount(1);
      setImgSrc(fallbackSrc);
    } else {
      // Second error, no fallback, or fallback is same as placeholder: use default placeholder
      setErrorCount(2);
      setImgSrc(defaultPlaceholder);
    }
  };

  // Check if current image is the placeholder to apply mask
  const isPlaceholder =
    imgSrc === defaultPlaceholder || (fallbackSrc && imgSrc === fallbackSrc);

  if (motionProps) {
    // Filter out conflicting props when using motion.img
    const { onDrag, onDragStart, onDragEnd, ...safeProps } = props as any;
    return (
      <div className="relative w-full h-full">
        <motion.img
          src={imgSrc}
          alt={alt}
          className={className}
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
        className={className}
        onError={handleError}
        {...props}
      />
      {isPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/20 to-background/90 mix-blend-multiply pointer-events-none" />
      )}
    </div>
  );
}
