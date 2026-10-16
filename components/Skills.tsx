"use client";

import { domains } from "./tech-data";
import { useLanguage } from "./i18n";

const domainText: Record<string, { titleKey: string; descKey: string }> = {
  "Backend Development": { titleKey: "skills.bT", descKey: "skills.bD" },
  "DevOps & Cloud": { titleKey: "skills.dT", descKey: "skills.dD" },
  "AI & Data": { titleKey: "skills.aT", descKey: "skills.aD" },
  "Frontend Development": { titleKey: "skills.fT", descKey: "skills.fD" },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
            {t("skills.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t("skills.title")}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {t("skills.sub")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          {domains.map((domain) => {
            const meta = domainText[domain.title] ?? { titleKey: domain.title, descKey: "" };
            return (
              <article
                key={domain.title}
                className="glass-card rounded-2xl border border-slate-200 p-5 shadow-lg shadow-slate-200/60 transition-colors hover:border-blue-500/40 sm:p-7 dark:border-slate-800 dark:shadow-black/20"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0066ff] shadow-lg shadow-blue-600/30 sm:h-12 sm:w-12">
                    <domain.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg dark:text-white">
                      {meta.titleKey.startsWith("skills.") ? t(meta.titleKey) : meta.titleKey}
                    </h3>
                    <p className="mt-0.5 text-xs leading-snug text-slate-500 sm:text-sm">
                      {meta.descKey ? t(meta.descKey) : domain.description} · {domain.techs.length} {t("skills.techWord")}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-2.5 sm:grid-cols-3">
                  {domain.techs.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-2.5 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/50 sm:gap-2.5 sm:px-3 sm:py-2.5 dark:border-slate-800/80 dark:bg-[#0a1128]/70 dark:shadow-none"
                    >
                      <span
                        className="flex shrink-0 transition-transform group-hover:scale-110"
                        style={{ color: tech.color }}
                      >
                        <tech.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="min-w-0 truncate text-xs font-medium text-slate-700 group-hover:text-slate-900 sm:text-[13px] dark:text-slate-300 dark:group-hover:text-white">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
