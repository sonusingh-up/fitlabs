"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — Emil Kowalski scroll entrance system
 *
 * Watches all .animate-fade-up elements with an IntersectionObserver.
 * When they enter the viewport, .is-visible is added → CSS transitions fire.
 * Stagger is handled entirely in CSS via :nth-child transition-delay.
 *
 * No framer-motion needed — pure CSS transitions with JS trigger only.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".animate-fade-up");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once revealed, stop observing — no re-animation on scroll back up
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Trigger when 10% of the element is visible
        threshold: 0.1,
        // Start animation slightly before element enters viewport
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
