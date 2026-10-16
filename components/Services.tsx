"use client";

import { Server, Cloud, BrainCircuit, LayoutDashboard } from "lucide-react";
import { useLanguage } from "./i18n";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Server,
      title: "Backend Architecture",
      description: t("services.d1"),
      tags: ["Spring Boot", "NestJS", "FastAPI"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Infrastructure",
      description: t("services.d2"),
      tags: ["Docker", "Kubernetes", "Terraform"],
    },
    {
      icon: BrainCircuit,
      title: "AI & RAG Solutions",
      description: t("services.d3"),
      tags: ["LangChain", "LangGraph", "ChromaDB"],
    },
    {
      icon: LayoutDashboard,
      title: "Full-Stack Development",
      description: t("services.d4"),
      tags: ["React", "Next.js", "Tailwind"],
    },
  ];

  return (
    <section id="services" className="relative scroll-mt-20 py-16 sm:py-24">
      {/* subtle divider glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
            {t("services.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {t("services.sub")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group glass-card relative overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:shadow-black/20 dark:hover:shadow-blue-600/15"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/25 dark:bg-blue-600/10 dark:group-hover:bg-blue-600/25" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066ff] shadow-lg shadow-blue-600/30">
                <service.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-blue-600/10 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
