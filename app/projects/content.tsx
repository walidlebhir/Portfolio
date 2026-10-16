"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/components/Projects";
import { useLanguage } from "@/components/i18n";

export default function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-[#030712] dark:text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,black,transparent)]" />
          <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-blue-400/25 blur-[120px] dark:bg-blue-600/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("projects.backHome")}
          </Link>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
            {t("projects.kicker")}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {t("projects.allTitle")}
          </h1>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            {t("projects.allSub")}
          </p>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
