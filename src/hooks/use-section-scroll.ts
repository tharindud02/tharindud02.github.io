"use client";

import { useEffect, useRef, useState } from "react";

interface SectionInfo {
  id: string;
  element: HTMLElement;
  top: number;
  bottom: number;
  height: number;
}

export function useSectionScroll() {
  const [currentSection, setCurrentSection] = useState<string>("");
  const sectionsRef = useRef<SectionInfo[]>([]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateSections = () => {
      const sections: SectionInfo[] = [];
      const sectionIds = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const top = rect.top + scrollTop;
          const bottom = top + rect.height;

          sections.push({
            id,
            element,
            top,
            bottom,
            height: rect.height,
          });
        }
      });

      sectionsRef.current = sections;
    };

    const getCurrentSection = (): string => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
        if (scrollY >= section.top) {
          return section.id;
        }
      }

      return sectionsRef.current[0]?.id || "";
    };

    const scrollToSection = (index: number, showBottom: boolean = false) => {
      if (index < 0 || index >= sectionsRef.current.length) return;

      const section = sectionsRef.current[index];
      const navbarHeight = 80;
      const viewportHeight = window.innerHeight;

      // Calculate scroll position
      let scrollPosition = section.top - navbarHeight;

      // If showing bottom of section, scroll to show bottom content better
      if (showBottom && section.height > viewportHeight) {
        // Scroll to show bottom of section with some padding
        scrollPosition = section.bottom - viewportHeight + 100; // 100px padding from bottom
      }

      isScrollingRef.current = true;
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Shorter timeout to allow next scroll sooner
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        // Update sections after scroll completes to ensure accurate positions
        updateSections();
      }, 400);
    };

    const handleWheel = (e: WheelEvent) => {
      // Always update sections first to get latest positions
      updateSections();

      // Don't interfere if we're already programmatically scrolling (but allow after short delay)
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const currentSectionId = getCurrentSection();
      const currentSectionInfo = sectionsRef.current.find(
        (s) => s.id === currentSectionId
      );

      if (!currentSectionInfo) return;

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const navbarHeight = 80;
      const sectionTop = currentSectionInfo.top;
      const sectionBottom = currentSectionInfo.bottom;

      // Check if section has scrollable content (taller than viewport)
      const hasScrollableContent = currentSectionInfo.height > viewportHeight;

      // Calculate distances from section boundaries
      const distanceFromTop = scrollTop - sectionTop + navbarHeight;
      const distanceFromBottom = sectionBottom - (scrollTop + viewportHeight);

      // Increased threshold to allow more scrolling to see bottom content
      const threshold = 100; // pixels threshold for snapping
      const bottomPadding = 350; // Extra padding to ensure bottom content is fully visible and readable
      const isNearTop = distanceFromTop <= navbarHeight + threshold;
      // Allow scrolling until we're very close to bottom (with larger padding for better readability)
      const isNearBottom = distanceFromBottom <= threshold;

      // If scrolling down
      if (e.deltaY > 0) {
        // If section has scrollable content
        if (hasScrollableContent) {
          // Calculate how much we can scroll within this section
          // Add extra space at bottom to ensure content is visible
          const maxScrollInSection = currentSectionInfo.height - viewportHeight;
          const currentScrollInSection = Math.max(
            0,
            scrollTop - sectionTop + navbarHeight
          );

          // Allow scrolling until we're very close to the actual bottom (with larger padding buffer for readability)
          // This gives users more room to scroll and read bottom content
          if (currentScrollInSection < maxScrollInSection - bottomPadding) {
            // Allow normal scrolling - don't prevent default
            return;
          }

          // Even if we're past the padding, allow a bit more scrolling if we're not at the absolute bottom
          if (distanceFromBottom > 50) {
            // Still allow some scrolling if there's more content below
            return;
          }
        }

        // We're at or near bottom of section - move to next
        // Only snap when we're really at the bottom (with smaller threshold for non-scrollable sections)
        if (
          (isNearBottom && distanceFromBottom <= 50) ||
          (!hasScrollableContent && distanceFromBottom <= threshold)
        ) {
          const currentIndex = sectionsRef.current.findIndex(
            (s) => s.id === currentSectionId
          );
          if (currentIndex < sectionsRef.current.length - 1) {
            e.preventDefault();
            scrollToSection(currentIndex + 1);
          }
        }
      }
      // If scrolling up
      else if (e.deltaY < 0) {
        // If section has scrollable content
        if (hasScrollableContent) {
          // Calculate current scroll position within section
          const currentScrollInSection = Math.max(
            0,
            scrollTop - sectionTop + navbarHeight
          );

          // If we can still scroll up within this section, allow normal scrolling
          if (currentScrollInSection > navbarHeight + threshold) {
            // Allow normal scrolling - don't prevent default
            return;
          }
        }

        // We're at or near top of section - move to previous
        if (
          isNearTop ||
          (!hasScrollableContent && distanceFromTop <= navbarHeight + threshold)
        ) {
          const currentIndex = sectionsRef.current.findIndex(
            (s) => s.id === currentSectionId
          );
          if (currentIndex > 0) {
            e.preventDefault();
            scrollToSection(currentIndex - 1);
          }
        }
      }
    };

    const handleScroll = () => {
      // Update sections on scroll to keep positions accurate
      updateSections();
      const newSection = getCurrentSection();
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    // Listen for scroll end to reset scrolling state
    let scrollEndTimer: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        isScrollingRef.current = false;
        updateSections();
      }, 150);
    };

    // Initial setup
    setTimeout(() => {
      updateSections();
      setCurrentSection(getCurrentSection());
    }, 100);

    // Update sections on resize
    const handleResize = () => {
      updateSections();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener(
      "scroll",
      () => {
        handleScroll();
        handleScrollEnd();
      },
      { passive: true }
    );
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentSection]);

  return { currentSection };
}
