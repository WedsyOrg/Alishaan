"use client";

import { useEffect } from "react";

function unlockPageScroll() {
  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("position");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("position");
  document.body.style.removeProperty("width");
  document.body.style.removeProperty("top");
  document.body.style.removeProperty("height");
}

export default function ScrollRestore() {
  useEffect(() => {
    unlockPageScroll();

    const observer = new MutationObserver(() => {
      const calendlyOpen = document.querySelector(".calendly-overlay");
      const modalOpen = document.querySelector('[class*="fixed inset-0"]');

      if (!calendlyOpen && !modalOpen) {
        unlockPageScroll();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    window.addEventListener("focus", unlockPageScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("focus", unlockPageScroll);
    };
  }, []);

  return null;
}
