"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none dark:hover:border-blue-500/60 dark:hover:text-white"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
