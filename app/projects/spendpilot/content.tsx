"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Rocket,
  Building2,
  Smartphone,
  Server,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  ListChecks,
  CircleCheck,
  Clock,
  Plug,
  Zap,
  KeyRound,
  Users,
  Gauge,
  ScrollText,
  Database,
  MemoryStick,
} from "lucide-react";
import { SiExpo } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/Saas_mission_management";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Tech inconnue : ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  "React Native": { name: "React Native", Icon: asIcon(Smartphone), color: "#61DAFB" },
  Expo: { name: "Expo", Icon: SiExpo, color: "#64748B" },
  MCP: { name: "MCP", Icon: asIcon(Plug), color: "#D97757" },
  Groq: { name: "Groq", Icon: asIcon(Zap), color: "#F55036" },
  "AWS RDS": { name: "AWS RDS", Icon: asIcon(Database), color: "#FF9900" },
  ElastiCache: { name: "ElastiCache", Icon: asIcon(MemoryStick), color: "#FF9900" },
  JWT: { name: "JWT", Icon: asIcon(KeyRound), color: "#F59E0B" },
  RBAC: { name: "RBAC", Icon: asIcon(Users), color: "#22C55E" },
  "Rate Limiting": { name: "Rate Limiting", Icon: asIcon(Gauge), color: "#38BDF8" },
  "Audit Logs": { name: "Audit Logs", Icon: asIcon(ScrollText), color: "#A78BFA" },
};

const dict: Record<Lang, any> = {
  en: {
    all: "All projects",
    live: "MVP Live",
    pill: "SaaS Platform · Multi-tenant",
    tagline:
      "A SaaS platform designed to help companies manage remote business missions, centralize employee expenses and optimize mission-related costs.",
    source: "Source code",
    cover: "Finance dashboard with the built-in AI assistant — creating a mission in natural language.",
    problemT: "The problem",
    problemX:
      "Managing missions, employees and remote expenses still relies on manual processes: Excel files, paper receipts and email approvals — with no visibility or traceability.",
    solutionT: "The solution",
    solutionX:
      "A centralized platform that replaces these manual processes and brings better visibility, traceability and cost control across the entire mission lifecycle.",
    wfK: "MVP",
    wfTitle: "An end-to-end workflow",
    wfSub: "The MVP covers the full mission lifecycle.",
    wfMore: "+ tracked reimbursement and full traceability",
    steps: [
      { t: "Mission creation", x: "The mission is created with destination, dates and budget." },
      { t: "Assignment", x: "Employees are assigned to the mission." },
      { t: "Dependencies", x: "Mission-related expenses are managed." },
      { t: "Submission", x: "The employee submits expenses for review." },
      { t: "Review", x: "Finance reviews each expense." },
      { t: "Approval / Rejection", x: "Justified approval or rejection decision." },
      { t: "Reimbursement", x: "Approved expenses are reimbursed." },
    ],
    finK: "Finance / Admin experience",
    finTitle: "React.js dashboard",
    finSub: "Steer organizations, missions, expenses, budgets and reports from a dedicated web interface.",
    finCaps: [
      "Mission list with statuses, budgets and embedded AI agent.",
      "One-click employee assignment to a mission.",
      "Multi-organization workspaces: each company is isolated.",
      "Member management with roles (RBAC) and account statuses.",
    ],
    mobK: "Employee experience",
    mobTitle: "React Native mobile app",
    mobSub: "Built with Expo: assigned missions, mission details and expense analytics.",
    mobCaps: [
      "Assigned missions with progress and budget.",
      "Mission detail: period, budget, advance and status.",
      "Expense analytics by category and status.",
    ],
    archK: "Backend",
    archTitle: "Modular SaaS architecture",
    archSub: "NestJS, Node.js and TypeScript, with PostgreSQL and Redis — multi-tenant by design.",
    archCap: "Modular NestJS backend (Auth JWT, Users, Missions, Dependencies) connected to PostgreSQL, Redis and the AI system.",
    depK: "DevOps & Cloud",
    depTitle: "Containerized and Kubernetes-ready",
    depSub: "Deployed on a Kubernetes cluster with managed AWS services.",
    depCap:
      "Kubernetes cluster: React frontend, NestJS backend, Node MCP server and FastAPI MCP client — backed by RDS PostgreSQL and ElastiCache Redis.",
    aiK: "Artificial Intelligence",
    aiTitle: "Multi-agent AI architecture",
    aiSub: "Specialized agents interacting with the platform through MCP.",
    aiCap:
      "LangGraph supervisor orchestrating Expense, User and Mission agents — tools exposed via MCP, Groq inference.",
    aiBullets: [
      "A Node.js MCP server talks to the NestJS backend and exposes capabilities as tools.",
      "A LangGraph-based MCP client lets specialized AI agents use these tools.",
      "FastAPI provides the REST interface of the AI system.",
      "Missions can be created and assigned in natural language from the dashboard.",
    ],
    secK: "Trust",
    secTitle: "Built-in security",
    sec: [
      { t: "JWT authentication", x: "Secure sessions via signed tokens across the platform." },
      { t: "RBAC", x: "Roles and permissions: admins, finance and employees." },
      { t: "Data isolation", x: "Strict data separation at each organization level." },
      { t: "Rate limiting", x: "API protection against abuse and traffic spikes." },
      { t: "Audit logging", x: "Full traceability of sensitive actions." },
    ],
    roadK: "Vision",
    roadTitle: "Future improvements",
    road: [
      "OCR receipt processing",
      "Multi-currency support",
      "Advanced financial dashboards",
      "Automated approval flows",
      "Enriched reports",
      "AI-powered cost optimization and anomaly detection",
    ],
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Backend", "Frontend", "Mobile", "AI", "Infra", "Security"],
    outro: "SpendPilot is just the beginning.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "MVP en ligne",
    pill: "Plateforme SaaS · Multi-tenant",
    tagline:
      "Une plateforme SaaS conçue pour aider les entreprises à gérer les missions professionnelles à distance, centraliser les dépenses des employés et optimiser les coûts liés aux missions.",
    source: "Code source",
    cover: "Tableau de bord Finance avec l’assistant IA intégré — création d’une mission en langage naturel.",
    problemT: "Le problème",
    problemX:
      "La gestion des missions, des employés et des dépenses à distance repose encore sur des processus manuels : fichiers Excel, reçus papier et approbations par e-mail — sans visibilité ni traçabilité.",
    solutionT: "La solution",
    solutionX:
      "Une plateforme centralisée qui remplace ces processus manuels et offre une meilleure visibilité, traçabilité et contrôle des coûts sur l’ensemble du cycle de vie des missions.",
    wfK: "MVP",
    wfTitle: "Un workflow de bout en bout",
    wfSub: "Le MVP couvre l’intégralité du cycle de vie d’une mission.",
    wfMore: "+ remboursement suivi et traçabilité complète",
    steps: [
      { t: "Création de mission", x: "La mission est créée avec destination, dates et budget." },
      { t: "Affectation", x: "Les employés sont assignés à la mission." },
      { t: "Dépendances", x: "Gestion des dépenses liées à la mission." },
      { t: "Soumission", x: "L’employé soumet ses dépenses pour revue." },
      { t: "Revue", x: "La finance passe en revue chaque dépense." },
      { t: "Approbation / Refus", x: "Décision d’approbation ou de refus motivé." },
      { t: "Remboursement", x: "Remboursement des dépenses approuvées." },
    ],
    finK: "Expérience Finance / Admin",
    finTitle: "Tableau de bord React.js",
    finSub: "Pilotage des organisations, missions, dépenses, budgets et rapports depuis une interface web dédiée.",
    finCaps: [
      "Liste des missions avec statuts, budgets et agent IA intégré.",
      "Affectation d’un employé à une mission en un clic.",
      "Espaces de travail multi-organisations : chaque entreprise est isolée.",
      "Gestion des membres avec rôles (RBAC) et statuts de compte.",
    ],
    mobK: "Expérience Employé",
    mobTitle: "Application mobile React Native",
    mobSub: "Conçue avec Expo : missions affectées, détail des missions et analyse des dépenses.",
    mobCaps: [
      "Missions affectées avec progression et budget.",
      "Détail d’une mission : période, budget, avance et statut.",
      "Analyse des dépenses par catégorie et par statut.",
    ],
    archK: "Backend",
    archTitle: "Architecture SaaS modulaire",
    archSub: "NestJS, Node.js et TypeScript, avec PostgreSQL et Redis — pensée multi-tenant dès le départ.",
    archCap: "Backend NestJS modulaire (Auth JWT, Users, Missions, Dependances) connecté à PostgreSQL, Redis et au système IA.",
    depK: "DevOps & Cloud",
    depTitle: "Conteneurisé et prêt pour Kubernetes",
    depSub: "Déploiement sur cluster Kubernetes avec services managés AWS.",
    depCap:
      "Cluster Kubernetes : frontend React, backend NestJS, serveur MCP Node et client MCP FastAPI — adossés à RDS PostgreSQL et ElastiCache Redis.",
    aiK: "Intelligence Artificielle",
    aiTitle: "Architecture multi-agents IA",
    aiSub: "Des agents spécialisés qui interagissent avec la plateforme via MCP.",
    aiCap:
      "Superviseur LangGraph orchestrant les agents Dépenses, Utilisateurs et Missions — outils exposés via MCP, inférence Groq.",
    aiBullets: [
      "Un serveur MCP Node.js communique avec le backend NestJS et expose les capacités en tant qu’outils.",
      "Un client MCP basé sur LangGraph permet aux agents IA spécialisés d’utiliser ces outils.",
      "FastAPI fournit l’interface REST du système d’IA.",
      "Création de missions et assignations possibles en langage naturel depuis le dashboard.",
    ],
    secK: "Confiance",
    secTitle: "Sécurité intégrée",
    sec: [
      { t: "Authentification JWT", x: "Sessions sécurisées par tokens signés sur l’ensemble de la plateforme." },
      { t: "RBAC", x: "Rôles et permissions : administrateurs, finance et employés." },
      { t: "Isolation des données", x: "Séparation stricte des données au niveau de chaque organisation." },
      { t: "Limitation de taux", x: "Protection des API contre les abus et les pics de trafic." },
      { t: "Journalisation d’audit", x: "Traçabilité complète des actions sensibles." },
    ],
    roadK: "Vision",
    roadTitle: "Améliorations futures",
    road: [
      "Traitement des reçus par OCR",
      "Prise en charge multi-devises",
      "Tableaux de bord financiers avancés",
      "Flux d’approbation automatisés",
      "Rapports financiers enrichis",
      "Optimisation des coûts et détection d’anomalies par IA",
    ],
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Backend", "Frontend", "Mobile", "IA", "Infra", "Sécurité"],
    outro: "SpendPilot n’est que le début.",
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

function TallShot({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className={`${cardClass} overflow-hidden !p-0`}>
      <div className="relative h-80 overflow-hidden sm:h-[26rem]">
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
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
  { domain: "Backend", techs: [known("NestJS"), known("Node.js"), known("TypeScript"), known("PostgreSQL"), known("Redis")] },
  { domain: "Frontend", techs: [{ ...known("React"), name: "React.js" }] },
  { domain: "Mobile", techs: [extraTechs["React Native"], extraTechs["Expo"]] },
  { domain: "IA", techs: [known("LangGraph"), extraTechs["MCP"], known("FastAPI"), extraTechs["Groq"]] },
  { domain: "Infra", techs: [known("Docker"), known("Kubernetes"), extraTechs["AWS RDS"], extraTechs["ElastiCache"]] },
  { domain: "Sécurité", techs: [extraTechs["JWT"], extraTechs["RBAC"], extraTechs["Rate Limiting"], extraTechs["Audit Logs"]] },
];

export default function SpendPilotContent() {
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
            SpendPilot
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
            <Shot src="/SpendPilot/1789494739511.jpg" caption={L.cover} />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className={cardClass}>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{L.problemT}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{L.problemX}</p>
            </div>
            <div className={cardClass}>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{L.solutionT}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{L.solutionX}</p>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={ListChecks} kicker={L.wfK} title={L.wfTitle} subtitle={L.wfSub} />
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L.steps.map((item: { t: string; x: string }, i: number) => (
                <li key={i} className={`${cardClass} relative overflow-hidden`}>
                  <span className="text-3xl font-extrabold text-blue-600/20 dark:text-blue-500/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                </li>
              ))}
              <li className="flex items-center justify-center rounded-2xl border border-dashed border-blue-500/40 p-6 text-center text-sm font-semibold text-blue-700 dark:text-blue-400">
                {L.wfMore}
              </li>
            </ol>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Building2} kicker={L.finK} title={L.finTitle} subtitle={L.finSub} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/SpendPilot/1789494739658.jpg" caption={L.finCaps[0]} />
              <Shot src="/SpendPilot/1789494739600.jpg" caption={L.finCaps[1]} />
              <Shot src="/SpendPilot/1789494738812.jpg" caption={L.finCaps[2]} />
              <Shot src="/SpendPilot/1789494739318.jpg" caption={L.finCaps[3]} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Smartphone} kicker={L.mobK} title={L.mobTitle} subtitle={L.mobSub} />
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <TallShot src="/SpendPilot/1789494738088.jpg" caption={L.mobCaps[0]} />
              <TallShot src="/SpendPilot/1789494738726.jpg" caption={L.mobCaps[1]} />
              <TallShot src="/SpendPilot/1789494739036.jpg" caption={L.mobCaps[2]} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.archK} title={L.archTitle} subtitle={L.archSub} />
            <div className="mt-8">
              <Shot src="/SpendPilot/1789494738779.jpg" caption={L.archCap} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Cloud} kicker={L.depK} title={L.depTitle} subtitle={L.depSub} />
            <div className="mt-8">
              <Shot src="/SpendPilot/1789494738632.jpg" caption={L.depCap} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={BrainCircuit} kicker={L.aiK} title={L.aiTitle} subtitle={L.aiSub} />
            <div className="mt-8">
              <Shot src="/SpendPilot/1789494737930.jpg" caption={L.aiCap} />
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.aiBullets.map((b: string, i: number) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={ShieldCheck} kicker={L.secK} title={L.secTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {L.sec.map((item: { t: string; x: string }, i: number) => (
                <div key={i} className={cardClass}>
                  <CircleCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="mt-3 font-bold text-slate-900 dark:text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Clock} kicker={L.roadK} title={L.roadTitle} />
            <div className={`${cardClass} mt-8`}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {L.road.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
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
