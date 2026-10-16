"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Rocket,
  Layers,
  Workflow,
  Bot,
  MonitorSmartphone,
  Terminal,
  Lightbulb,
  Server,
  Table2,
  Zap,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/AgentCoding_Project";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Unknown tech: ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  CrewAI: { name: "CrewAI", Icon: asIcon(Bot), color: "#FF5A5E" },
  Groq: { name: "Groq", Icon: asIcon(Zap), color: "#F55036" },
  Gemini: { name: "Gemini", Icon: asIcon(Sparkles), color: "#4285F4" },
  SQLAlchemy: { name: "SQLAlchemy", Icon: asIcon(Table2), color: "#EF4444" },
  SQLite: { name: "SQLite", Icon: asIcon(Server), color: "#38BDF8" },
};

const dict: Record<Lang, any> = {
  en: {
    all: "All projects",
    live: "Agentic AI",
    pill: "Code Generation · Multi-provider LLMs",
    tagline:
      "An AI coding agent architecture capable of generating complete software projects through both a web application and a command-line interface.",
    source: "Source code",
    cover: "SpringForge Agent — your AI assistant for Spring Boot and microservices.",
    layersK: "System design",
    layersTitle: "Three core layers",
    layers: [
      { t: "Next.js Frontend", x: "Project management, generation workflows and a seamless user experience for orchestrating code generation." },
      { t: "FastAPI Orchestration", x: "The central backend handling authentication, project management, request processing, generation pipelines and communication between all components." },
      { t: "Python CLI", x: "The same capabilities from the terminal, integrating naturally into existing development workflows." },
    ],
    archK: "Architecture",
    archTitle: "Orchestration at the center",
    archSub: "FastAPI backend, agentic engine, protected APIs and persistence.",
    archCap:
      "Global architecture: Next.js frontend, Python CLI, FastAPI backend, agent engine (LLM factory, rate limiting, code generation), SQLAlchemy and PostgreSQL.",
    archBullets: [
      "The agent is an orchestration engine, not a simple LLM wrapper.",
      "It manages prompt construction, provider selection, rate limiting and response parsing.",
      "File generation, project packaging and persistence are handled end-to-end.",
      "Abstracted models allow switching AI providers (Groq, Gemini) with a consistent workflow.",
    ],
    pipeK: "Pipeline",
    pipeTitle: "From request to delivery",
    pipe: [
      { t: "Request", x: "The developer describes the desired project in natural language." },
      { t: "Agent Orchestration", x: "The agent builds prompts, selects the provider and plans generation." },
      { t: "LLM Processing", x: "The selected model reasons about architecture and code structure." },
      { t: "Code Generation", x: "Files are generated, parsed and validated by the agent." },
      { t: "Project Assembly", x: "The project is packaged with config, dependencies and docs." },
      { t: "Delivery", x: "The complete project is delivered, ready to download as ZIP." },
    ],
    webK: "Web application",
    webTitle: "Generate, inspect and download",
    webSub: "Project history, code explorer, generation steps and one-click ZIP download.",
    webCaps: [
      "Project history with stats, chat assistant and generation tracking.",
      "Supported technologies and built-in capabilities.",
      "Code explorer: inspect every generated file before downloading.",
      "Generation steps with the selected provider, then ZIP download.",
    ],
    cliK: "Command-line interface",
    cliTitle: "The same power in your terminal",
    cliSub: "Generate projects, edit codebases, add features and fix bugs — in plain English.",
    cliCaps: [
      "SpringForge CLI: generate mode with configurable model and API endpoint.",
      "Live generation of a Spring Boot microservices app: 23 files packaged into a ZIP.",
    ],
    lessonT: "Key lesson",
    lessonX:
      "The success of an AI coding agent depends less on the model itself and more on the architecture surrounding it. Reliable orchestration, clear separation of concerns, security and developer experience are what turn an LLM into a real engineering product.",
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Frontend", "Backend", "Agent & LLM", "Data", "CLI & Packaging"],
    outro: "Architecture is what turns an LLM into a real engineering product.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "IA agentique",
    pill: "Génération de code · LLMs multi-fournisseurs",
    tagline:
      "Une architecture d’agent de code IA capable de générer des projets logiciels complets via une application web et une interface en ligne de commande.",
    source: "Code source",
    cover: "SpringForge Agent — votre assistant IA pour Spring Boot et les microservices.",
    layersK: "Conception système",
    layersTitle: "Trois couches principales",
    layers: [
      { t: "Frontend Next.js", x: "Gestion des projets, workflows de génération et expérience utilisateur fluide pour orchestrer la génération de code." },
      { t: "Orchestration FastAPI", x: "Le backend central gérant authentification, gestion des projets, traitement des requêtes, pipelines de génération et communication entre composants." },
      { t: "CLI Python", x: "Les mêmes capacités depuis le terminal, intégrées naturellement aux workflows existants." },
    ],
    archK: "Architecture",
    archTitle: "L’orchestration au centre",
    archSub: "Backend FastAPI, moteur agentique, API protégées et persistance.",
    archCap:
      "Architecture globale : frontend Next.js, CLI Python, backend FastAPI, moteur agent (fabrique LLM, limitation de débit, génération de code), SQLAlchemy et PostgreSQL.",
    archBullets: [
      "L’agent est un moteur d’orchestration, pas un simple wrapper LLM.",
      "Il gère construction des prompts, sélection du fournisseur, limitation de débit et analyse des réponses.",
      "Génération de fichiers, packaging et persistance gérés de bout en bout.",
      "Les modèles abstraits permettent de changer de fournisseur IA (Groq, Gemini) avec un workflow constant.",
    ],
    pipeK: "Pipeline",
    pipeTitle: "De la requête à la livraison",
    pipe: [
      { t: "Requête", x: "Le développeur décrit le projet souhaité en langage naturel." },
      { t: "Orchestration agent", x: "L’agent construit les prompts, choisit le fournisseur et planifie la génération." },
      { t: "Traitement LLM", x: "Le modèle sélectionné raisonne sur l’architecture et la structure du code." },
      { t: "Génération de code", x: "Les fichiers sont générés, analysés et validés par l’agent." },
      { t: "Assemblage", x: "Le projet est packagé avec config, dépendances et documentation." },
      { t: "Livraison", x: "Le projet complet est livré, prêt à télécharger en ZIP." },
    ],
    webK: "Application web",
    webTitle: "Générer, inspecter et télécharger",
    webSub: "Historique des projets, explorateur de code, étapes de génération et téléchargement ZIP en un clic.",
    webCaps: [
      "Historique des projets avec stats, assistant chat et suivi de génération.",
      "Technologies supportées et capacités intégrées.",
      "Explorateur de code : inspectez chaque fichier généré avant téléchargement.",
      "Étapes de génération avec le fournisseur choisi, puis téléchargement ZIP.",
    ],
    cliK: "Interface en ligne de commande",
    cliTitle: "La même puissance dans votre terminal",
    cliSub: "Générez des projets, modifiez du code, ajoutez des fonctionnalités et corrigez des bugs — en langage simple.",
    cliCaps: [
      "SpringForge CLI : mode génération avec modèle et endpoint configurables.",
      "Génération live d’une app microservices Spring Boot : 23 fichiers packagés en ZIP.",
    ],
    lessonT: "Leçon clé",
    lessonX:
      "Le succès d’un agent de code IA dépend moins du modèle lui-même que de l’architecture qui l’entoure. Orchestration fiable, séparation claire des responsabilités, sécurité et expérience développeur : voilà ce qui transforme un LLM en vrai produit d’ingénierie.",
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Frontend", "Backend", "Agent & LLM", "Données", "CLI & Packaging"],
    outro: "L’architecture transforme un LLM en vrai produit d’ingénierie.",
    back: "Retour aux projets",
  },
};

const cardClass =
  "glass-card rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:shadow-black/20";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Shot({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className={`${cardClass} overflow-hidden !p-0`}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="border-t border-slate-200 px-4 py-3 text-[13px] font-medium text-slate-600 dark:border-slate-800 dark:text-slate-400">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionTitle({
  icon: Icon,
  kicker,
  title,
  subtitle,
}: {
  icon: typeof Server;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0066ff] shadow-lg shadow-blue-600/30">
        <Icon className="h-6 w-6 text-white" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
          {kicker}
        </p>
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>}
      </div>
    </div>
  );
}

const stackKeys: { domain: string; techs: Tech[] }[] = [
  { domain: "Frontend", techs: [known("Next.js")] },
  { domain: "Backend", techs: [known("FastAPI"), known("Python")] },
  { domain: "Agent & LLM", techs: [extraTechs["CrewAI"], extraTechs["Groq"], extraTechs["Gemini"]] },
  { domain: "Data", techs: [known("PostgreSQL"), extraTechs["SQLite"], extraTechs["SQLAlchemy"]] },
  {
    domain: "CLI & Packaging",
    techs: [{ ...known("Python"), name: "Python (Click, httpx)" }, known("Docker")],
  },
];

export default function AiCodingAgentContent() {
  const { lang } = useLanguage();
  const L = dict[lang];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-[#030712] dark:text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,black,transparent)]" />
          <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-blue-400/25 blur-[120px] dark:bg-blue-600/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {L.all}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300">
              <Rocket className="h-3.5 w-3.5" />
              {L.live}
            </span>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
              {L.pill}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            AI Coding Agent
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <strong className="text-slate-900 dark:text-white">SpringForge</strong> — {L.tagline.replace(/^.*?— /, "")}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:shadow-none dark:hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              {L.source}
            </a>
          </div>

          <div className="mt-8">
            <Shot src="/AI_coding_Agent/web-hero.jpg" caption={L.cover} />
          </div>

          <div className="mt-14">
            <SectionTitle icon={Layers} kicker={L.layersK} title={L.layersTitle} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {L.layers.map((item: { t: string; x: string }, i: number) => (
                <div key={i} className={`${cardClass} relative overflow-hidden`}>
                  <span className="text-3xl font-extrabold text-blue-600/20 dark:text-blue-500/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.archK} title={L.archTitle} subtitle={L.archSub} />
            <div className="mt-8">
              <Shot src="/AI_coding_Agent/architecture-globale.jpg" caption={L.archCap} />
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.archBullets.map((b: string, i: number) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Workflow} kicker={L.pipeK} title={L.pipeTitle} />
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {L.pipe.map((item: { t: string; x: string }, i: number) => (
                <li key={i} className={`${cardClass} relative overflow-hidden`}>
                  <span className="text-3xl font-extrabold text-blue-600/20 dark:text-blue-500/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14">
            <SectionTitle icon={MonitorSmartphone} kicker={L.webK} title={L.webTitle} subtitle={L.webSub} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/AI_coding_Agent/dashboard-projets.jpg" caption={L.webCaps[0]} />
              <Shot src="/AI_coding_Agent/web-technologies.jpg" caption={L.webCaps[1]} />
              <Shot src="/AI_coding_Agent/code-explorer.jpg" caption={L.webCaps[2]} />
              <Shot src="/AI_coding_Agent/project-details.jpg" caption={L.webCaps[3]} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Terminal} kicker={L.cliK} title={L.cliTitle} subtitle={L.cliSub} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/AI_coding_Agent/cli-welcome.jpg" caption={L.cliCaps[0]} />
              <Shot src="/AI_coding_Agent/cli-generation.jpg" caption={L.cliCaps[1]} />
            </div>
          </div>

          <div className="mt-14">
            <div className={`${cardClass} border-l-4 !border-l-[#0066ff]`}>
              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{L.lessonT}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {L.lessonX}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Bot} kicker={L.stackK} title={L.stackTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stackKeys.map((group, gi) => (
                <div key={group.domain} className={cardClass}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    {L.groups[gi]}
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {group.techs.map((tech) => (
                      <div
                        key={tech.name}
                        title={tech.name}
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-2.5 py-2 dark:border-slate-800/80 dark:bg-[#0a1128]/70 sm:gap-2.5 sm:px-3 sm:py-2.5"
                      >
                        <span className="flex shrink-0" style={{ color: tech.color }}>
                          <tech.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <span className="min-w-0 truncate text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-[13px]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-slate-600 dark:text-slate-400">{L.outro}</p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0066ff] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <ArrowLeft className="h-4 w-4" />
              {L.back}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
