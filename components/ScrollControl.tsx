"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollControl() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updatePosition = () => setShowTop(window.scrollY > 420);
    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const scroll = () => {
    window.scrollTo({ top: showTop ? 0 : document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scroll}
      aria-label={showTop ? "Scroll to top" : "Scroll to bottom"}
      title={showTop ? "Scroll to top" : "Scroll to bottom"}
      className="fixed bottom-5 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#0b63ce] text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-[#0956b3] sm:bottom-7 sm:right-7"
    >
      {showTop ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
    </button>
  );
}
