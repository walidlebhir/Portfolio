"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Rocket,
  Target,
  FileSearch,
  Scale,
  BrainCircuit,
  Server,
  Database,
  TrendingUp,
  Table2,
  Zap,
} from "lucide-react";
import { SiExpo } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/RH_AI_project";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Unknown tech: ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  SQLAlchemy: { name: "SQLAlchemy", Icon: asIcon(Table2), color: "#EF4444" },
  Groq: { name: "Groq", Icon: asIcon(Zap), color: "#F55036" },
  Expo: { name: "Expo", Icon: SiExpo, color: "#64748B" },
};

const dict: Record<Lang, any> = {
  en: {
    all: "All projects",
    live: "Generative AI",
    pill: "RAG · Smart Recruitment",
    tagline:
      "RH Smart Assistant, an innovative HR assistant powered by Generative AI and RAG — built to revolutionize talent management and legal document use in companies.",
    source: "Source code",
    cover: "Flux RH dashboard with the built-in HR assistant — headcount, leaves, applications and documents.",
    objK: "Goals",
    objTitle: "What the project aims for",
    obj: [
      { t: "Document responsiveness", x: "Enable HR teams to react quickly from all internal documents and legal texts." },
      { t: "Automatic CV analysis", x: "Identify candidate skills, experience and projects to build complete profiles." },
      { t: "Optimized decisions", x: "Reduce administrative load, optimize analysis time and improve decision-making." },
    ],
    ragK: "RAG Pipeline",
    ragTitle: "From question to contextual answer",
    ragSub: "Data loading, preprocessing, semantic embeddings, retrieval and generation.",
    ragCap:
      "RAG pipeline: HR query → Retriever (top documents) → Gemma 3 LLM — CVs indexed in ChromaDB via MiniLM-L6.",
    ragBullets: [
      "Loading and preprocessing of internal documents and candidate CVs.",
      "Semantic vectorization with sentence-transformers/all-MiniLM-L6-v2.",
      "Semantic search in ChromaDB with top-passage retrieval.",
      "Local generation with Ollama Gemma 3, validated via Groq.",
    ],
    archK: "Backend",
    archTitle: "Application architecture",
    archSub: "FastAPI, SQLAlchemy and PostgreSQL orchestrated with LangChain.",
    archCap: "FastAPI services (Employees, Leaves, Departments, AI ChatBot), LangChain RAG system, SQLAlchemy and PostgreSQL.",
    featK: "Features",
    featTitle: "Two concrete use cases",
    featCap1: "Candidate Assistant: automatic CV analysis and complete technical profile generation.",
    featCap2: "HR assistant: sourced legal answer about affectio societatis from internal documents.",
    featBullets: [
      "Extraction of skills, experience and academic/professional projects.",
      "Fast access to internal information and legal texts.",
      "Ranking and recommendation of the most relevant profiles.",
      "Dynamic CSR interface: smooth, real-time interactions.",
    ],
    valK: "Impact",
    valTitle: "Value for the company",
    val: [
      { t: "Time savings", x: "For HR and legal teams thanks to instant access to information." },
      { t: "Fewer errors", x: "Reduced human error through automation and AI models." },
      { t: "Reliable decisions", x: "Optimized decision-making with structured, reliable data." },
      { t: "Competitiveness", x: "AI becomes a strategic ally for talent management and legal compliance." },
    ],
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Frontend", "Backend", "Data & RAG", "LLM", "Infra"],
    outro: "AI becomes a strategic ally for talent management.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "IA Générative",
    pill: "RAG · Recrutement intelligent",
    tagline:
      "RH Smart Assistant, un assistant RH innovant basé sur l’IA générative et le RAG — conçu pour révolutionner la gestion des talents et l’exploitation des documents juridiques dans les entreprises.",
    source: "Code source",
    cover: "Tableau de bord Flux RH avec l’assistant RH intégré — effectifs, congés, candidatures et documents.",
    objK: "Objectifs",
    objTitle: "Ce que le projet vise",
    obj: [
      { t: "Réactivité documentaire", x: "Permettre aux équipes RH de réagir rapidement à partir de tous les documents internes et textes légaux." },
      { t: "Analyse automatique des CV", x: "Identifier compétences, expériences et projets des candidats pour générer des profils complets." },
      { t: "Décisions optimisées", x: "Réduire la charge administrative, optimiser le temps d’analyse et améliorer la prise de décision." },
    ],
    ragK: "Pipeline RAG",
    ragTitle: "De la question à la réponse contextuelle",
    ragSub: "Chargement des données, prétraitement, embeddings sémantiques, récupération et génération.",
    ragCap:
      "Pipeline RAG : requête RH → Retriever (top documents) → LLM Gemma 3 — CV indexés dans ChromaDB via MiniLM-L6.",
    ragBullets: [
      "Chargement et prétraitement des documents internes et des CV candidats.",
      "Vectorisation sémantique avec sentence-transformers/all-MiniLM-L6-v2.",
      "Recherche sémantique dans ChromaDB et récupération des meilleurs passages.",
      "Génération locale avec Ollama Gemma 3, validée via Groq.",
    ],
    archK: "Backend",
    archTitle: "Architecture applicative",
    archSub: "FastAPI, SQLAlchemy et PostgreSQL orchestrés avec LangChain.",
    archCap: "Services FastAPI (Employés, Congés, Départements, ChatBot IA), système RAG LangChain, SQLAlchemy et PostgreSQL.",
    featK: "Fonctionnalités",
    featTitle: "Deux cas d’usage concrets",
    featCap1: "Candidat Assistant : analyse automatique d’un CV et génération d’un profil technique complet.",
    featCap2: "Assistant RH : réponse juridique sourcée sur l’affectio societatis à partir des documents internes.",
    featBullets: [
      "Extraction des compétences, expériences et projets académiques et professionnels.",
      "Accès rapide aux informations internes et aux textes juridiques.",
      "Classement et recommandation des profils les plus pertinents.",
      "Interface CSR dynamique : interactions fluides et en temps réel.",
    ],
    valK: "Impact",
    valTitle: "Valeur ajoutée pour l’entreprise",
    val: [
      { t: "Gain de temps", x: "Pour les équipes RH et juridiques grâce à l’accès instantané à l’information." },
      { t: "Moins d’erreurs", x: "Réduction des erreurs humaines grâce à l’automatisation et aux modèles IA." },
      { t: "Décisions fiables", x: "Prise de décision optimisée grâce à des données structurées et fiables." },
      { t: "Compétitivité", x: "L’IA devient un allié stratégique pour la gestion des talents et la conformité juridique." },
    ],
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Frontend", "Backend", "Data & RAG", "LLM", "Infra"],
    outro: "L’IA devient un allié stratégique pour la gestion des talents.",
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
  { domain: "Frontend", techs: [{ ...known("Next.js"), name: "Next.js (CSR)" }] },
  { domain: "Backend", techs: [known("FastAPI"), extraTechs["SQLAlchemy"], known("Python")] },
  {
    domain: "Data & RAG",
    techs: [
      known("PostgreSQL"),
      known("ChromaDB"),
      { ...known("Hugging Face"), name: "Sentence-Transformers" },
      known("LangChain"),
    ],
  },
  {
    domain: "LLM",
    techs: [{ ...known("Ollama"), name: "Ollama (Gemma 3)" }, { ...extraTechs["Groq"], name: "Groq" }],
  },
  { domain: "Infra", techs: [known("Docker")] },
];

export default function RhIntelligenceContent() {
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
            RH Intelligence
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {L.tagline}
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
            <Shot src="/Rh_inteligence/dashboard-assistant.jpg" caption={L.cover} />
          </div>

          <div className="mt-14">
            <SectionTitle icon={Target} kicker={L.objK} title={L.objTitle} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {L.obj.map((item: { t: string; x: string }, i: number) => (
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
            <SectionTitle icon={BrainCircuit} kicker={L.ragK} title={L.ragTitle} subtitle={L.ragSub} />
            <div className="mt-8">
              <Shot src="/Rh_inteligence/rag-pipeline.jpg" caption={L.ragCap} />
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.ragBullets.map((b: string, i: number) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.archK} title={L.archTitle} subtitle={L.archSub} />
            <div className="mt-8">
              <Shot src="/Rh_inteligence/backend-architecture.jpg" caption={L.archCap} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={FileSearch} kicker={L.featK} title={L.featTitle} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/Rh_inteligence/candidat-assistant.jpg" caption={L.featCap1} />
              <Shot src="/Rh_inteligence/assistant-juridique.jpg" caption={L.featCap2} />
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.featBullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    {i === 0 ? <FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" /> : i === 1 ? <Scale className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" /> : i === 2 ? <Database className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" /> : <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />}
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={TrendingUp} kicker={L.valK} title={L.valTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L.val.map((item: { t: string; x: string }, i: number) => (
                <div key={i} className={cardClass}>
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.stackK} title={L.stackTitle} />
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
