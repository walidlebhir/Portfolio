"use client";

import Link from "next/link";
import Image from "next/image";
import { Hammer, Hourglass, Rocket, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./i18n";

export interface ProjectPlaceholder {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  slug?: string;
  status?: "dev" | "live";
  statusLabel?: string;
  descKey?: string;
  statusLabelKey?: string;
}

export default function ProjectCard({ project }: { project: ProjectPlaceholder }) {
  const { t } = useLanguage();
  const isLive = project.status === "live";

  const description = project.descKey ? t(project.descKey) : project.description;
  const statusLabel = project.statusLabelKey
    ? t(project.statusLabelKey)
    : (project.statusLabel ?? t("projects.status.dev"));

  const visual = project.image ? (
    <div className="relative h-44 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  ) : (
    <div className="relative h-44 overflow-hidden bg-slate-200/60 dark:bg-[#0a1128]">
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/25" />
      <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-600/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300/70 bg-white/70 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70 dark:shadow-none">
          <Hammer className="h-7 w-7 text-blue-600 dark:text-blue-400" />
        </span>
      </div>
    </div>
  );

  const card = (
    <article className="group glass-card h-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:shadow-black/20 dark:hover:shadow-blue-600/15">
      <div className="relative">
        {visual}
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur ${
            isLive
              ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300"
              : "border-amber-500/40 bg-amber-400/15 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300"
          }`}
        >
          {isLive ? <Rocket className="h-3.5 w-3.5" /> : <Hourglass className="h-3.5 w-3.5" />}
          {statusLabel}
        </span>
      </div>

      <div className="p-6">
        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
          {project.slug && (
            <ArrowUpRight className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-blue-400" />
          )}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.slug && (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-blue-400">
            {t("projects.caseStudy")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>
    </article>
  );

  return project.slug ? (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      {card}
    </Link>
  ) : (
    card
  );
}
