"use client";

import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { coreStack } from "./tech-data";
import { useLanguage } from "./i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-blue-400/25 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-blue-300/30 blur-[100px] dark:bg-blue-800/20" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left column */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
            {t("hero.greeting")}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Walid Lebhir
          </h1>
          <p className="text-gradient mt-3 text-xl font-semibold sm:text-2xl">
            {t("hero.role")}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400">
            {t("hero.summary")}
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
            <a
              href="/#projects"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0066ff] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:flex-none"
            >
              {t("hero.viewWork")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/#contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-slate-900 sm:flex-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:shadow-none dark:hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {t("hero.contactMe")}
            </a>
          </div>

          {/* Tech stack badges */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t("hero.stack")}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {coreStack.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-slate-700 shadow-sm transition-colors hover:border-blue-500/50 hover:text-slate-900 dark:border-slate-800 dark:bg-[#111827]/80 dark:text-slate-300 dark:shadow-none dark:hover:text-white"
                >
                  <span style={{ color: tech.color }} className="flex">
                    <tech.Icon className="h-4 w-4" />
                  </span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — photo circulaire */}
        <div className="animate-float relative mx-auto w-full max-w-[250px] sm:max-w-sm lg:max-w-md">
          {/* Halo lumineux */}
          <div className="absolute inset-8 rounded-full bg-blue-500/25 blur-[90px] dark:bg-blue-600/25" />
          {/* Anneaux décoratifs */}
          <div className="animate-spin-slow absolute -inset-3 rounded-full border-2 border-dashed border-blue-500/40 sm:-inset-4 dark:border-blue-400/25" />
          <div className="absolute -inset-3 rounded-full border border-slate-300/50 sm:-inset-4 dark:border-slate-800" />

          {/* Photo */}
          <div className="relative aspect-square overflow-hidden rounded-full shadow-2xl shadow-blue-600/20 ring-4 ring-blue-600/25 ring-offset-4 ring-offset-slate-50 dark:ring-blue-500/30 dark:ring-offset-[#030712]">
            <Image
              src="/profil.jpeg"
              alt="Walid Lebhir — Software Engineer"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 35vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
