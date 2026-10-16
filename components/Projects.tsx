"use client";

import { ArrowRight } from "lucide-react";
import ProjectCard, { type ProjectPlaceholder } from "./ProjectCard";
import { useLanguage } from "./i18n";

export const featuredProjects: ProjectPlaceholder[] = [
  {
    title: "SpendPilot",
    description: "",
    tags: ["NestJS", "React", "React Native", "LangGraph"],
    image: "/SpendPilot/1789494739511.jpg",
    slug: "spendpilot",
    status: "live",
    descKey: "proj.spendpilot",
    statusLabelKey: "projects.status.mvp",
  },
  {
    title: "RH Intelligence",
    description: "",
    tags: ["Next.js", "FastAPI", "LangChain", "ChromaDB"],
    image: "/Rh_inteligence/dashboard-assistant.jpg",
    slug: "rh-intelligence",
    status: "live",
    descKey: "proj.rh",
    statusLabelKey: "projects.status.genai",
  },
  {
    title: "AI Coding Agent",
    description: "",
    tags: ["Next.js", "FastAPI", "Python", "Groq"],
    image: "/AI_coding_Agent/web-hero.jpg",
    slug: "ai-coding-agent",
    status: "live",
    descKey: "proj.aicoding",
    statusLabelKey: "projects.status.agentic",
  },
  {
    title: "SmartCRM",
    description: "",
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    image: "/SmartCRM/opportunites.jpg",
    slug: "smart-crm",
    status: "live",
    descKey: "proj.smartcrm",
    statusLabelKey: "projects.status.mvp",
  },
  {
    title: "AI-Enhanced Store",
    description: "",
    tags: ["React", "Django", "CLIP", "ChromaDB"],
    image: "/AI_Store/vitrine-accueil.jpg",
    slug: "ai-store",
    status: "live",
    descKey: "proj.aistore",
    statusLabelKey: "projects.status.multi",
  },
  {
    title: "Brain Tumor Detection",
    description: "",
    tags: ["PyTorch", "FastAPI", "React", "ChromaDB"],
    slug: "brain-tumor-detection",
    status: "live",
    descKey: "proj.brain",
    statusLabelKey: "projects.status.dl",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
              {t("projects.kicker")}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {t("projects.title")}
            </h2>
          </div>
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {t("projects.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
