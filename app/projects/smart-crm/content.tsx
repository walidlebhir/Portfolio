"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Rocket,
  Users,
  Target,
  LayoutDashboard,
  Server,
  GitBranch,
  TrendingUp,
  Cloud,
  BadgeCheck,
} from "lucide-react";
import { SiGithub, SiAnsible } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/CRM_Saas_fullstack";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Unknown tech: ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  GitHub: { name: "GitHub", Icon: SiGithub, color: "#64748B" },
  AWS: { name: "AWS", Icon: asIcon(Cloud), color: "#FF9900" },
  SonarQube: { name: "SonarQube", Icon: asIcon(BadgeCheck), color: "#4E9BCD" },
  Ansible: { name: "Ansible", Icon: SiAnsible, color: "#EE0000" },
};

const dict: Record<Lang, any> = {
  en: {
    all: "All projects",
    live: "MVP Live",
    pill: "SaaS · CRM · Monolith",
    tagline:
      "Managing customers shouldn't feel like managing chaos. SmartCRM is a modern SaaS platform that centralizes everything your team needs — in one secure, accessible and intuitive environment.",
    source: "Source code",
    cover: "Opportunities pipeline: amounts, stages and win probabilities at a glance.",
    problemT: "The problem",
    problemX:
      "Too many companies still juggle spreadsheets, disconnected tools and manual processes just to track leads and sales activities — resulting in wasted time, missed opportunities and decisions made without reliable data.",
    solutionT: "The solution",
    solutionX:
      "Designed for startups, SMEs and enterprises alike, SmartCRM helps sales teams work smarter, collaborate better and grow faster — with structure, visibility and the right tools to grow with confidence.",
    featK: "Features",
    featTitle: "Everything the sales team needs",
    feat: [
      { t: "Lead tracking", x: "Track and manage leads across the entire sales cycle." },
      { t: "Unified customer data", x: "Centralize all customer data in a single unified database." },
      { t: "Clear opportunities", x: "Visualize and organize sales opportunities with clarity." },
      { t: "Real-time collaboration", x: "Foster collaboration across teams and departments." },
      { t: "Live dashboards & KPIs", x: "Monitor performance through live dashboards and KPIs." },
      { t: "Optimized follow-ups", x: "Optimize every customer interaction and follow-up activity." },
    ],
    tourK: "Product tour",
    tourTitle: "A complete sales workspace",
    tourSub: "Clients, sales team, leads and opportunities in one place.",
    tourCaps: [
      "Client portfolio with CSV import / export.",
      "Sales team management with roles and statuses.",
      "Lead import with automatic distribution across sales reps.",
      "Opportunity tracking from prospecting to won deals.",
    ],
    archK: "Architecture",
    archTitle: "Modern monolith, built to scale",
    archSub: "Next.js, Spring Boot, PostgreSQL, Docker and AWS — fast, reliable and scalable from day one.",
    archCap:
      "Backend services: Spring Security authentication, user & role management, service layer, JPA data access and PostgreSQL.",
    devK: "DevOps",
    devTitle: "A complete delivery pipeline",
    devSub: "Consistent, high-quality deployments with reduced delivery time.",
    devCap:
      "Jenkins CI/CD: checkout, build & test with SonarQube, packaging to ECR, Terraform infrastructure, Ansible deployment on AWS.",
    devBullets: [
      "GitHub as the single source of truth: code, Jenkinsfiles, Terraform and Ansible playbooks.",
      "Jenkins orchestrates checkout, build, unit tests and SonarQube quality gates.",
      "Terraform provisions VPC, EC2 auto-scaling groups and RDS PostgreSQL.",
      "Ansible handles configuration management and application deployment.",
    ],
    mileT: "Functional MVP delivered",
    mileX:
      "A major milestone that validates the vision and sets the stage for what's next:",
    next: ["New features", "Enhanced UX", "Advanced analytics", "Greater automation"],
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Frontend", "Backend", "Data", "Cloud", "DevOps"],
    outro: "Empowering businesses throughout their digital transformation journey.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "MVP en ligne",
    pill: "SaaS · CRM · Monolithe",
    tagline:
      "Gérer ses clients ne devrait pas ressembler à gérer le chaos. SmartCRM est une plateforme SaaS moderne qui centralise tout ce dont votre équipe a besoin — dans un environnement sécurisé, accessible et intuitif.",
    source: "Code source",
    cover: "Pipeline des opportunités : montants, étapes et probabilités de gain en un coup d’œil.",
    problemT: "Le problème",
    problemX:
      "Trop d’entreprises jonglent encore avec des tableurs, des outils déconnectés et des processus manuels pour suivre leads et activités commerciales — temps perdu, opportunités manquées et décisions sans données fiables.",
    solutionT: "La solution",
    solutionX:
      "Pensé pour startups, PME et grands comptes, SmartCRM aide les équipes commerciales à travailler plus intelligemment, mieux collaborer et croître plus vite — avec structure, visibilité et outils adaptés.",
    featK: "Fonctionnalités",
    featTitle: "Tout ce dont l’équipe commerciale a besoin",
    feat: [
      { t: "Suivi des leads", x: "Suivez et gérez les leads sur tout le cycle de vente." },
      { t: "Données clients unifiées", x: "Centralisez toutes les données clients dans une base unique." },
      { t: "Opportunités claires", x: "Visualisez et organisez les opportunités commerciales en toute clarté." },
      { t: "Collaboration temps réel", x: "Collaborez entre équipes et départements." },
      { t: "Dashboards & KPIs live", x: "Pilotez la performance via dashboards et KPIs en direct." },
      { t: "Relances optimisées", x: "Optimisez chaque interaction et relance client." },
    ],
    tourK: "Visite guidée",
    tourTitle: "Un espace de vente complet",
    tourSub: "Clients, équipe commerciale, leads et opportunités au même endroit.",
    tourCaps: [
      "Portefeuille clients avec import / export CSV.",
      "Gestion de l’équipe commerciale avec rôles et statuts.",
      "Import de leads avec répartition automatique entre commerciaux.",
      "Suivi des opportunités de la prospection aux affaires gagnées.",
    ],
    archK: "Architecture",
    archTitle: "Monolithe moderne, pensé pour scaler",
    archSub: "Next.js, Spring Boot, PostgreSQL, Docker et AWS — rapide, fiable et évolutif dès le premier jour.",
    archCap:
      "Services backend : authentification Spring Security, gestion utilisateurs & rôles, couche service, accès données JPA et PostgreSQL.",
    devK: "DevOps",
    devTitle: "Un pipeline de livraison complet",
    devSub: "Des déploiements cohérents et de qualité, en un temps réduit.",
    devCap:
      "CI/CD Jenkins : checkout, build & tests avec SonarQube, packaging vers ECR, infrastructure Terraform, déploiement Ansible sur AWS.",
    devBullets: [
      "GitHub comme source unique de vérité : code, Jenkinsfiles, playbooks Terraform et Ansible.",
      "Jenkins orchestre checkout, build, tests unitaires et quality gates SonarQube.",
      "Terraform provisionne VPC, groupes auto-scaling EC2 et RDS PostgreSQL.",
      "Ansible gère la configuration et le déploiement applicatif.",
    ],
    mileT: "MVP fonctionnel livré",
    mileX:
      "Une étape majeure qui valide la vision et prépare la suite :",
    next: ["Nouvelles fonctionnalités", "UX améliorée", "Analytique avancée", "Plus d’automatisation"],
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Frontend", "Backend", "Données", "Cloud", "DevOps"],
    outro: "Accompagner les entreprises dans leur transformation digitale.",
    back: "Retour aux projets",
  },
};

const cardClass =
  "glass-card rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:shadow-black/20";

function PageGithubIcon({ className }: { className?: string }) {
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
  { domain: "Backend", techs: [known("Spring Boot")] },
  { domain: "Data", techs: [known("PostgreSQL")] },
  { domain: "Cloud", techs: [known("Docker"), extraTechs["AWS"]] },
  {
    domain: "DevOps",
    techs: [
      extraTechs["GitHub"],
      known("Jenkins"),
      extraTechs["SonarQube"],
      known("Terraform"),
      extraTechs["Ansible"],
    ],
  },
];

export default function SmartCrmContent() {
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
            SmartCRM
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
              <PageGithubIcon className="h-4 w-4" />
              {L.source}
            </a>
          </div>

          <div className="mt-8">
            <Shot src="/SmartCRM/opportunites.jpg" caption={L.cover} />
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
            <SectionTitle icon={Target} kicker={L.featK} title={L.featTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {L.feat.map((item: { t: string; x: string }, i: number) => (
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
            <SectionTitle icon={LayoutDashboard} kicker={L.tourK} title={L.tourTitle} subtitle={L.tourSub} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/SmartCRM/clients.jpg" caption={L.tourCaps[0]} />
              <Shot src="/SmartCRM/equipe-commerciale.jpg" caption={L.tourCaps[1]} />
              <Shot src="/SmartCRM/import-leads.jpg" caption={L.tourCaps[2]} />
              <Shot src="/SmartCRM/opportunites.jpg" caption={L.tourCaps[3]} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.archK} title={L.archTitle} subtitle={L.archSub} />
            <div className="mt-8">
              <Shot src="/SmartCRM/architecture-microservices.jpg" caption={L.archCap} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={GitBranch} kicker={L.devK} title={L.devTitle} subtitle={L.devSub} />
            <div className="mt-8">
              <Shot src="/SmartCRM/pipeline-cicd.jpg" caption={L.devCap} />
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.devBullets.map((b: string, i: number) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <div className={`${cardClass} border-l-4 !border-l-[#0066ff]`}>
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{L.mileT}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {L.mileX}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {L.next.map((step: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-md bg-blue-600/10 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Users} kicker={L.stackK} title={L.stackTitle} />
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
