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

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "experience", "projects", "contact"];

    const updateSections = () => {
      const sections: SectionInfo[] = [];

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

    const handleScroll = () => {
      updateSections();
      const newSection = getCurrentSection();
      setCurrentSection((previous) => (newSection === previous ? previous : newSection));
    };

    const initialize = () => {
      updateSections();
      setCurrentSection(getCurrentSection());
    };

    const handleResize = () => initialize();
    const handlePageLoad = () => initialize();

    initialize();
    window.addEventListener("load", handlePageLoad);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("load", handlePageLoad);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { currentSection };
}
