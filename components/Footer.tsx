"use client";

import { Code2, ArrowUp } from "lucide-react";
import { useLanguage } from "./i18n";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none dark:hover:text-white";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white/60 dark:border-slate-800/80 dark:bg-[#020610]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0066ff]">
              <Code2 className="h-4 w-4 text-white" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-900 dark:text-white">
                Walid Lebhir
              </span>
              <span className="block text-xs text-slate-500">
                {t("footer.role")}
              </span>
            </span>
          </a>

          <p className="order-last text-sm text-slate-500 sm:order-none">
            {t("footer.rights")}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/walidlebhir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={socialClass}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lebhir-walid-602390288"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialClass}
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label={t("footer.backTop")}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-[#0066ff] text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
