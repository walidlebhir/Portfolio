"use client";

import { Download, Mail, MapPin, Phone, Languages } from "lucide-react";
import { useLanguage } from "./i18n";

export default function About() {
  const { t } = useLanguage();

  const info = [
    { icon: MapPin, label: t("about.location"), value: "Kénitra, Morocco" },
    { icon: Mail, label: t("about.email"), value: "walidelbhir@gmail.com" },
    { icon: Phone, label: t("about.phone"), value: "0704213771" },
    {
      icon: Languages,
      label: t("about.languages"),
      value: "Arabic (Native), French (Fluent), English (Intermediate)",
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Bio */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
              {t("about.kicker")}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {t("about.title")}
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0066ff] lg:mx-0" />
            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
              {t("about.p1")}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              {t("about.p2")}
            </p>

            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href="/CV/LEBHIR_WALID_RESUME.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066ff] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                {t("about.cv")}
              </a>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span className="text-center sm:text-left">
                  <strong className="block text-2xl font-extrabold text-slate-900 dark:text-white">10+</strong>
                  {t("about.techs")}
                </span>
                <span className="h-10 w-px bg-slate-300 dark:bg-slate-800" />
                <span className="text-center sm:text-left">
                  <strong className="block text-2xl font-extrabold text-slate-900 dark:text-white">4</strong>
                  {t("about.areas")}
                </span>
              </div>
            </div>
          </div>

          {/* Quick info card */}
          <div className="glass-card rounded-2xl border border-slate-200 p-6 shadow-xl shadow-slate-200/70 sm:p-8 dark:border-slate-800 dark:shadow-black/40">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t("about.quick")}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {t("about.reply")}
            </p>
            <ul className="mt-6 space-y-3 sm:space-y-4">
              {info.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 transition-colors hover:border-blue-500/40 dark:border-slate-800/80 dark:bg-[#0a1128]/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700 dark:text-[#3b82f6]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                    <span className="block break-words text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
