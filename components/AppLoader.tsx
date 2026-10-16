"use client";

import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export default function AppLoader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.classList.remove("app-ready");
    document.body.style.overflow = "hidden";

    const showTimer = setTimeout(() => {
      setFading(true);
      document.body.classList.add("app-ready");
    }, 1700);

    const removeTimer = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 2300);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-50 transition-opacity duration-500 dark:bg-[#030712] ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[110px]" />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Animated logo */}
        <span className="relative flex h-24 w-24 items-center justify-center">
          <span className="animate-spin-slow absolute inset-0 rounded-3xl border-2 border-dashed border-blue-500/50" />
          <span className="absolute inset-2 animate-ping rounded-3xl bg-blue-600/10" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066ff] shadow-2xl shadow-blue-600/50">
            <Code2 className="h-8 w-8 text-white" />
          </span>
        </span>

        <p
          className="animate-fade-up mt-7 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          style={{ animationDelay: "0.15s" }}
        >
          Walid Lebhir
        </p>
        <p
          className="animate-fade-up mt-1.5 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400"
          style={{ animationDelay: "0.3s" }}
        >
          Software Engineer
        </p>

        {/* Progress bar */}
        <div className="mt-9 h-1 w-52 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="loader-bar h-full rounded-full bg-gradient-to-r from-[#0066ff] to-[#3b82f6]" />
        </div>
      </div>
    </div>
  );
}
