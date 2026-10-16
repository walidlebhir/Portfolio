"use client";

import { useLanguage, type Lang } from "./i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const btn = (code: Lang, label: string) => (
    <button
      key={code}
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      aria-label={code === "fr" ? "Passer en français" : "Switch to English"}
      className={`rounded-lg px-2.5 py-1.5 text-xs font-bold tracking-wide transition-all ${
        lang === code
          ? "bg-[#0066ff] text-white shadow-sm"
          : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label="Language / Langue"
      className="flex shrink-0 items-center gap-0.5 rounded-xl border border-slate-200 bg-white/70 p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
    >
      {btn("fr", "FR")}
      {btn("en", "EN")}
    </div>
  );
}
