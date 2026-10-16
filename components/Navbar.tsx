"use client";

import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./i18n";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.skills"), href: "/#skills" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-200/50 backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#030712]/85 dark:shadow-none"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066ff] shadow-lg shadow-blue-600/40">
            <Code2 className="h-5 w-5 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block truncate text-[15px] font-bold text-slate-900 dark:text-white">
              Walid Lebhir
            </span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
              {t("footer.role")}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[#0066ff] after:transition-all after:duration-300 hover:after:w-full dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="/#contact"
            className="rounded-xl bg-[#0066ff] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/40"
          >
            {t("nav.hire")}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition-colors active:scale-95 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-none"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — floating panel */}
      {open && (
        <div className="px-4 pb-4 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-300/40 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0a1128]/95 dark:shadow-black/50">
            <ul className="space-y-1 p-3">
              {links.map((link, i) => (
                <li
                  key={link.href}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-slate-700 transition-colors active:bg-blue-50 active:text-blue-700 dark:text-slate-300 dark:active:bg-slate-800/70 dark:active:text-white"
                  >
                    {link.label}
                    <span className="text-slate-300 dark:text-slate-600">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 p-3 dark:border-slate-800">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-[#0066ff] px-4 py-3.5 text-center text-[15px] font-semibold text-white shadow-lg shadow-blue-600/30 active:scale-[0.98]"
              >
                {t("nav.hire")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
