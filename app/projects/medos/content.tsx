"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Rocket,
  Building2,
  Smartphone,
  Server,
  Cloud,
  ShieldCheck,
  CircleCheck,
  Users,
  Database,
  HardDrive,
  KeyRound,
  Activity,
  Container,
  Network,
  LockKeyhole,
  Globe,
  Layers,
  Zap,
  Stethoscope,
  FlaskConical,
  Code2,
  Boxes,
  ScrollText,
  CalendarCheck,
  FileHeart,
  BellRing,
  CreditCard,
  Sparkles,
} from "lucide-react";
import {
  SiOpenjdk,
  SiSpringsecurity,
  SiHibernate,
  SiJunit5,
  SiExpo,
  SiTerraform,
} from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/CabinetOs_Saas";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Unknown tech: ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  "Java 21": { name: "Java 21", Icon: asIcon(SiOpenjdk), color: "#F89820" },
  "Spring Security": { name: "Spring Security", Icon: asIcon(SiSpringsecurity), color: "#6DB33F" },
  Hibernate: { name: "Hibernate", Icon: asIcon(SiHibernate), color: "#59666C" },
  "JUnit 5": { name: "JUnit 5", Icon: asIcon(SiJunit5), color: "#25A162" },
  "React Native": { name: "React Native", Icon: asIcon(Smartphone), color: "#61DAFB" },
  Expo: { name: "Expo", Icon: asIcon(SiExpo), color: "#64748B" },
  AWS: { name: "AWS", Icon: asIcon(Cloud), color: "#FF9900" },
  "ECS Fargate": { name: "ECS Fargate", Icon: asIcon(Boxes), color: "#FF9900" },
  JWT: { name: "JWT", Icon: asIcon(KeyRound), color: "#F59E0B" },
  RBAC: { name: "RBAC", Icon: asIcon(Users), color: "#22C55E" },
  "Audit AOP": { name: "Audit AOP", Icon: asIcon(ScrollText), color: "#A78BFA" },
  "Multi-tenant": { name: "Multi-tenant", Icon: asIcon(Building2), color: "#38BDF8" },
  "Secure files": { name: "Secure files", Icon: asIcon(LockKeyhole), color: "#EF4444" },
};

interface MedosCopy {
  all: string;
  live: string;
  pill: string;
  tagline: string;
  source: string;
  cover: string;
  statsK: string;
  statsTitle: string;
  statsSub: string;
  stats: { v: string; l: string; d: string }[];
  facts: { v: string; l: string }[];
  problemT: string;
  problemX: string;
  solutionT: string;
  solutionX: string;
  featK: string;
  featTitle: string;
  featSub: string;
  feat: { t: string; x: string }[];
  webK: string;
  webTitle: string;
  webSub: string;
  webCaps: string[];
  mobK: string;
  mobTitle: string;
  mobSub: string;
  mobCaps: string[];
  archK: string;
  archTitle: string;
  archSub: string;
  archPoints: string[];
  secK: string;
  secTitle: string;
  secSub: string;
  sec: { t: string; x: string }[];
  infraK: string;
  infraTitle: string;
  infraSub: string;
  infraLabels: Record<string, string>;
  infraPoints: string[];
  stackK: string;
  stackTitle: string;
  groups: string[];
  outro: string;
  back: string;
}

const dict: Record<Lang, MedosCopy> = {
  en: {
    all: "All projects",
    live: "MVP Live",
    pill: "Medical SaaS · Multi-tenant",
    tagline:
      "MedOS connects patients, doctors and medical practices on a single platform. Appointments, scheduling, medical records, prescriptions, notifications and subscriptions — designed and built end-to-end across web, mobile and cloud.",
    source: "Source code",
    cover: "Clinic dashboard: revenue, consultations, occupancy and activity in real time.",
    statsK: "At a glance",
    statsTitle: "Three applications, one product",
    statsSub:
      "One secured API serving a clinic web app and a patient mobile app.",
    stats: [
      { v: "3", l: "Applications", d: "API, web & mobile" },
      { v: "~45k", l: "Lines of code", d: "Full-stack footprint" },
      { v: "43", l: "JUnit test classes", d: "Backend quality" },
      { v: "21", l: "Backend modules", d: "Domain-driven design" },
    ],
    facts: [
      { v: "228", l: "Java files" },
      { v: "~26,500", l: "TS/TSX — web" },
      { v: "~7,900", l: "TS/TSX — mobile" },
    ],
    problemT: "The problem",
    problemX:
      "Medical practices still juggle disconnected tools: paper agendas, phone bookings, spreadsheets and scattered records. The result is double bookings, lost information, missed reminders and a fragmented patient experience.",
    solutionT: "The solution",
    solutionX:
      "MedOS centralizes the entire practice in one multi-tenant platform. Each clinic gets its own isolated workspace, while patients book appointments, access their records and follow their care journey from a dedicated mobile app.",
    featK: "Features",
    featTitle: "Everything a modern practice needs",
    featSub: "From the first booking to the medical record — covered.",
    feat: [
      { t: "Multi-tenant practices", x: "Each clinic works in an isolated workspace with its own team, patients and settings." },
      { t: "Roles & permissions", x: "Admins, doctors, secretaries and patients — each with scoped access." },
      { t: "Conflict-free planning", x: "Weekly availability, breaks and absences with overlap prevention at service level." },
      { t: "Smart appointments", x: "14-day booking window, real-time slots, consultation reason and confirmations." },
      { t: "Medical records", x: "Patient history and prescriptions centralized in one secure place." },
      { t: "Notifications", x: "Automatic reminders and follow-ups to reduce no-shows." },
      { t: "Subscriptions", x: "SaaS plan management for each practice." },
      { t: "Audit trail", x: "Every sensitive action traced for accountability and compliance." },
    ],
    webK: "Clinic experience",
    webTitle: "Next.js admin workspace",
    webSub: "A complete web app for clinic administrators, doctors and secretaries.",
    webCaps: [
      "Public website: modules, HDS-certified platform and demo booking form.",
      "Clinic dashboard: revenue, consultations, new patients and occupancy rate.",
      "Team management: doctors, specialties and access accounts in one click.",
      "Weekly planning: availability, lunch breaks, absences and conflict checks.",
    ],
    mobK: "Patient experience",
    mobTitle: "React Native mobile app",
    mobSub: "Patients search, book and follow their care from their phone.",
    mobCaps: [
      "Welcome experience with secure medical data messaging.",
      "Home: doctor search, specialties and nearby practices.",
      "Booking: choose a doctor, date and available time slot.",
      "Profile: personal details, family members and appointments.",
      "Settings: dark mode, medical record and prescription access.",
    ],
    archK: "Backend",
    archTitle: "Modular Spring Boot architecture",
    archSub: "Java 21, Spring Boot, PostgreSQL and Redis — multi-tenant by design.",
    archPoints: [
      "21 domain modules and 228 Java classes covering auth, users, appointments, planning, records, subscriptions, notifications and audit.",
      "JWT authentication with RBAC guards protecting every sensitive endpoint.",
      "Scheduling conflicts prevented in the service layer before persistence.",
      "AOP-based audit logging for full traceability of sensitive actions.",
    ],
    secK: "Security & reliability",
    secTitle: "Built with trust as a requirement",
    secSub: "Medical data demands more than a login form.",
    sec: [
      { t: "Redis cache with TTL", x: "Configurable time-to-live and a resilient error handler that keeps the app available if the cache fails." },
      { t: "Secure file storage", x: "Extension validation and path traversal protection on every uploaded document." },
      { t: "JWT & RBAC", x: "Signed tokens and fine-grained permissions across all applications." },
      { t: "Tenant isolation", x: "Every query is scoped to the active clinic — no data leaks between practices." },
      { t: "43 JUnit test classes", x: "Auth, appointments, planning, records, subscriptions, notifications, audit and guards." },
      { t: "Compliance-oriented", x: "Audit logging and controlled access for sensitive medical operations." },
    ],
    infraK: "Cloud infrastructure",
    infraTitle: "Production-grade AWS platform",
    infraSub: "Fully described as code with Terraform and containerized with Docker.",
    infraLabels: {
      internet: "Patients & clinics",
      alb: "Application Load Balancer",
      vpc: "VPC",
      public: "Public subnet",
      private: "Private subnet",
      data: "Data layer",
      web: "Next.js web app",
      api: "Spring Boot API",
      rds: "PostgreSQL",
      redis: "Redis cache",
      s3: "Secure files",
      ecr: "Container registry",
      iam: "Least-privilege roles",
      logs: "Logs & metrics",
      iac: "Infrastructure as Code",
      compose: "Local parity",
    },
    infraPoints: [
      "Terraform provisions the VPC, public/private subnets, ALB, ECS Fargate services, RDS, S3, IAM and CloudWatch.",
      "Docker images are pushed to ECR and deployed on ECS Fargate for the web and API services.",
      "RDS PostgreSQL stores medical data, Redis caches hot reads and S3 keeps uploaded files.",
      "Docker Compose reproduces the full stack locally for fast onboarding and testing.",
    ],
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Backend", "Web", "Mobile", "Data", "Cloud & IaC", "Security"],
    outro: "One platform, from the database to the bedside.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "MVP en ligne",
    pill: "SaaS médical · Multi-tenant",
    tagline:
      "MedOS relie patients, médecins et cabinets médicaux sur une seule plateforme. Rendez-vous, planning, dossiers médicaux, ordonnances, notifications et abonnements — conçus et développés de bout en bout, du web au mobile jusqu’au cloud.",
    source: "Code source",
    cover: "Tableau de bord du cabinet : chiffre d’affaires, consultations, taux d’occupation et activité en temps réel.",
    statsK: "En bref",
    statsTitle: "Trois applications, un seul produit",
    statsSub:
      "Une même exigence : une API sécurisée au service d’une application web cabinet et d’une application mobile patient.",
    stats: [
      { v: "3", l: "Applications", d: "API, web et mobile" },
      { v: "~45k", l: "Lignes de code", d: "Empreinte full-stack" },
      { v: "43", l: "Classes de tests JUnit", d: "Qualité backend" },
      { v: "21", l: "Modules backend", d: "Architecture métier" },
    ],
    facts: [
      { v: "228", l: "Fichiers Java" },
      { v: "~26 500", l: "TS/TSX — web" },
      { v: "~7 900", l: "TS/TSX — mobile" },
    ],
    problemT: "Le problème",
    problemX:
      "Les cabinets médicaux jonglent encore avec des outils déconnectés : agendas papier, rendez-vous par téléphone, tableurs et dossiers éparpillés. Résultat : doubles réservations, informations perdues, rappels oubliés et parcours patient fragmenté.",
    solutionT: "La solution",
    solutionX:
      "MedOS centralise toute l’activité du cabinet sur une plateforme multi-tenant. Chaque cabinet dispose d’un espace isolé, tandis que les patients réservent leurs rendez-vous, consultent leurs dossiers et suivent leur parcours depuis une application mobile dédiée.",
    featK: "Fonctionnalités",
    featTitle: "Tout ce qu’un cabinet moderne attend",
    featSub: "De la première réservation au dossier médical — tout est couvert.",
    feat: [
      { t: "Cabinets multi-tenant", x: "Chaque cabinet évolue dans un espace isolé avec sa propre équipe, ses patients et ses paramètres." },
      { t: "Rôles & permissions", x: "Administrateurs, médecins, secrétaires et patients — chacun avec un accès limité à son périmètre." },
      { t: "Planning sans conflits", x: "Disponibilités hebdomadaires, pauses et absences avec prévention des chevauchements côté service." },
      { t: "Rendez-vous intelligents", x: "Fenêtre de réservation sur 14 jours, créneaux en temps réel, motif de consultation et confirmations." },
      { t: "Dossiers médicaux", x: "Historique patient et ordonnances centralisés dans un espace sécurisé." },
      { t: "Notifications", x: "Rappels et relances automatiques pour réduire les absences." },
      { t: "Abonnements", x: "Gestion des plans SaaS de chaque cabinet." },
      { t: "Piste d’audit", x: "Chaque action sensible est tracée pour la traçabilité et la conformité." },
    ],
    webK: "Expérience cabinet",
    webTitle: "Espace d’administration Next.js",
    webSub: "Une application web complète pour les administrateurs, médecins et secrétaires.",
    webCaps: [
      "Site public : modules, plateforme certifiée HDS et formulaire de demande de démo.",
      "Tableau de bord : chiffre d’affaires, consultations, nouveaux patients et taux d’occupation.",
      "Gestion d’équipe : médecins, spécialités et comptes d’accès en un clic.",
      "Planning hebdomadaire : disponibilités, pauses déjeuner, absences et contrôle des conflits.",
    ],
    mobK: "Expérience patient",
    mobTitle: "Application mobile React Native",
    mobSub: "Les patients recherchent, réservent et suivent leurs soins depuis leur téléphone.",
    mobCaps: [
      "Écran d’accueil avec messagerie de données médicales sécurisées.",
      "Accueil : recherche de médecins, spécialités et cabinets proches.",
      "Réservation : choix du praticien, de la date et du créneau disponible.",
      "Profil : informations personnelles, proches rattachés et rendez-vous.",
      "Paramètres : mode sombre, dossier médical et accès aux ordonnances.",
    ],
    archK: "Backend",
    archTitle: "Architecture Spring Boot modulaire",
    archSub: "Java 21, Spring Boot, PostgreSQL et Redis — pensé multi-tenant dès le départ.",
    archPoints: [
      "21 modules métier et 228 classes Java couvrant authentification, utilisateurs, rendez-vous, planning, dossiers, abonnements, notifications et audit.",
      "Authentification JWT avec guards RBAC protégeant chaque endpoint sensible.",
      "Conflits de planning bloqués dans la couche service avant toute persistance.",
      "Journalisation d’audit via AOP pour une traçabilité complète des actions sensibles.",
    ],
    secK: "Sécurité & fiabilité",
    secTitle: "La confiance comme exigence",
    secSub: "Les données médicales méritent mieux qu’un simple formulaire de connexion.",
    sec: [
      { t: "Cache Redis avec TTL", x: "Durée de vie configurable et gestionnaire d’erreurs résilient : l’application reste disponible même si le cache tombe." },
      { t: "Stockage de fichiers sécurisé", x: "Validation d’extension et protection contre le path traversal sur chaque document envoyé." },
      { t: "JWT & RBAC", x: "Tokens signés et permissions fines sur l’ensemble des applications." },
      { t: "Isolation des tenants", x: "Chaque requête est limitée au cabinet actif — aucune fuite entre cabinets." },
      { t: "43 classes de tests JUnit", x: "Authentification, rendez-vous, planning, dossiers, abonnements, notifications, audit et guards." },
      { t: "Orienté conformité", x: "Journalisation d’audit et accès contrôlé aux opérations médicales sensibles." },
    ],
    infraK: "Infrastructure cloud",
    infraTitle: "Plateforme AWS prête pour la production",
    infraSub: "Entièrement décrite as code avec Terraform et conteneurisée avec Docker.",
    infraLabels: {
      internet: "Patients & cabinets",
      alb: "Application Load Balancer",
      vpc: "VPC",
      public: "Sous-réseau public",
      private: "Sous-réseau privé",
      data: "Couche données",
      web: "Application Next.js",
      api: "API Spring Boot",
      rds: "PostgreSQL",
      redis: "Cache Redis",
      s3: "Fichiers sécurisés",
      ecr: "Registre de conteneurs",
      iam: "Rôles au moindre privilège",
      logs: "Logs & métriques",
      iac: "Infrastructure as Code",
      compose: "Parité locale",
    },
    infraPoints: [
      "Terraform provisionne le VPC, les sous-réseaux publics/privés, l’ALB, les services ECS Fargate, RDS, S3, IAM et CloudWatch.",
      "Les images Docker sont poussées vers ECR puis déployées sur ECS Fargate pour le web et l’API.",
      "RDS PostgreSQL stocke les données médicales, Redis met en cache les lectures fréquentes et S3 conserve les fichiers.",
      "Docker Compose reproduit toute la stack en local pour un onboarding et des tests rapides.",
    ],
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Backend", "Web", "Mobile", "Données", "Cloud & IaC", "Sécurité"],
    outro: "Une plateforme complète, de la base de données au chevet du patient.",
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

function PhoneShot({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="flex flex-col items-center">
      <div className="w-[150px] sm:w-[176px] lg:w-[184px]">
        <div className="relative rounded-[2.1rem] border-[5px] border-slate-900 bg-slate-900 p-[3px] shadow-2xl shadow-slate-900/30 dark:border-slate-700 dark:bg-slate-700 dark:shadow-black/40">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.7rem] bg-white dark:bg-[#0a1128]">
            <Image
              src={src}
              alt={caption}
              fill
              sizes="190px"
              className="object-cover object-top"
            />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-900/60 dark:bg-slate-900/80" />
        </div>
      </div>
      <figcaption className="mt-3 max-w-[190px] text-center text-[12px] font-medium leading-snug text-slate-600 dark:text-slate-400">
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

function InfraNode({
  icon: Icon,
  title,
  subtitle,
  accent,
}: {
  icon: typeof Server;
  title: string;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white/85 px-2.5 py-3 text-center dark:border-slate-700/70 dark:bg-[#0a1128]/80">
      <Icon className="h-4 w-4" style={{ color: accent }} />
      <p className="text-[12px] font-bold leading-tight text-slate-800 dark:text-slate-100">
        {title}
      </p>
      {subtitle && (
        <p className="text-[10px] leading-tight text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const stackKeys: { domain: string; techs: Tech[] }[] = [
  {
    domain: "Backend",
    techs: [
      extraTechs["Java 21"],
      known("Spring Boot"),
      extraTechs["Spring Security"],
      extraTechs["Hibernate"],
      extraTechs["JUnit 5"],
      known("PostgreSQL"),
    ],
  },
  {
    domain: "Web",
    techs: [
      { ...known("Next.js"), color: "#64748B" },
      known("React"),
      known("TypeScript"),
      known("Tailwind CSS"),
    ],
  },
  {
    domain: "Mobile",
    techs: [extraTechs["React Native"], extraTechs["Expo"], known("TypeScript")],
  },
  {
    domain: "Data",
    techs: [known("PostgreSQL"), known("Redis")],
  },
  {
    domain: "Cloud & IaC",
    techs: [extraTechs["AWS"], known("Docker"), known("Terraform"), extraTechs["ECS Fargate"]],
  },
  {
    domain: "Security",
    techs: [
      extraTechs["JWT"],
      extraTechs["RBAC"],
      extraTechs["Audit AOP"],
      extraTechs["Multi-tenant"],
      extraTechs["Secure files"],
    ],
  },
];

const statIcons = [Boxes, Code2, FlaskConical, Layers];
const featureIcons = [
  Building2,
  Users,
  CalendarCheck,
  BellRing,
  FileHeart,
  Sparkles,
  CreditCard,
  ScrollText,
];

export default function MedosContent() {
  const { lang } = useLanguage();
  const L = dict[lang];
  const labels = L.infraLabels;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-[#030712] dark:text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,black,transparent)]" />
          <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[120px] dark:bg-emerald-600/15" />
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
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              {L.pill}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            MedOS
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {L.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-500/60 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:shadow-none dark:hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              {L.source}
            </a>
          </div>

          <div className="mt-8">
            <Shot src="/CabinetOs_Saas/web-dashboard.png" caption={L.cover} />
          </div>

          <div className="mt-14">
            <SectionTitle icon={Sparkles} kicker={L.statsK} title={L.statsTitle} subtitle={L.statsSub} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L.stats.map((stat: { v: string; l: string; d: string }, i: number) => {
                const Icon = statIcons[i];
                return (
                  <div key={i} className={cardClass}>
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {stat.v}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                      {stat.l}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stat.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {L.facts.map((fact: { v: string; l: string }, i: number) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white/60 px-3 py-3 text-center dark:border-slate-800 dark:bg-[#0a1128]/60"
                >
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">{fact.v}</p>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{fact.l}</p>
                </div>
              ))}
            </div>
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
            <SectionTitle icon={Stethoscope} kicker={L.featK} title={L.featTitle} subtitle={L.featSub} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L.feat.map((item: { t: string; x: string }, i: number) => {
                const Icon = featureIcons[i];
                return (
                  <div key={i} className={cardClass}>
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="mt-3 font-bold text-slate-900 dark:text-white">{item.t}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Globe} kicker={L.webK} title={L.webTitle} subtitle={L.webSub} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/CabinetOs_Saas/web-landing.png" caption={L.webCaps[0]} />
              <Shot src="/CabinetOs_Saas/web-dashboard.png" caption={L.webCaps[1]} />
              <Shot src="/CabinetOs_Saas/web-doctors.png" caption={L.webCaps[2]} />
              <Shot src="/CabinetOs_Saas/web-planning.png" caption={L.webCaps[3]} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Smartphone} kicker={L.mobK} title={L.mobTitle} subtitle={L.mobSub} />
            <div className="mt-8 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              <PhoneShot src="/CabinetOs_Saas/mobile-welcome.png" caption={L.mobCaps[0]} />
              <PhoneShot src="/CabinetOs_Saas/mobile-home.png" caption={L.mobCaps[1]} />
              <PhoneShot src="/CabinetOs_Saas/mobile-booking.png" caption={L.mobCaps[2]} />
              <PhoneShot src="/CabinetOs_Saas/mobile-profile.png" caption={L.mobCaps[3]} />
              <PhoneShot src="/CabinetOs_Saas/mobile-settings.png" caption={L.mobCaps[4]} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.archK} title={L.archTitle} subtitle={L.archSub} />
            <div className={`${cardClass} mt-8`}>
              <ul className="grid gap-4 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.archPoints.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={ShieldCheck} kicker={L.secK} title={L.secTitle} subtitle={L.secSub} />
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
            <SectionTitle icon={Cloud} kicker={L.infraK} title={L.infraTitle} subtitle={L.infraSub} />
            <div className={`${cardClass} mt-8`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Cloud className="h-5 w-5 text-[#FF9900]" />
                  AWS Cloud
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold text-violet-700 dark:text-violet-300">
                  <SiTerraform className="h-3.5 w-3.5" />
                  Terraform
                </span>
              </div>

              <div className="mt-6 grid items-center gap-3 md:grid-cols-[150px_auto_1fr]">
                <InfraNode icon={Globe} title={labels.internet} accent="#0066ff" />
                <div className="flex justify-center">
                  <ArrowRight className="h-5 w-5 rotate-90 text-slate-400 md:rotate-0" />
                </div>
                <div className="rounded-2xl border border-dashed border-amber-500/50 bg-amber-500/[0.04] p-3 sm:p-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    <Network className="h-3.5 w-3.5" />
                    {labels.vpc}
                  </p>
                  <div className="mt-3 grid gap-3 lg:grid-cols-[0.9fr_1.1fr_1.2fr]">
                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] p-2.5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {labels.public}
                      </p>
                      <InfraNode icon={Network} title={labels.alb} subtitle="HTTP / HTTPS" accent="#10B981" />
                    </div>
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/[0.04] p-2.5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                        {labels.private}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <InfraNode icon={Server} title="ECS Fargate" subtitle={labels.web} accent="#FF9900" />
                        <InfraNode icon={Server} title="ECS Fargate" subtitle={labels.api} accent="#6DB33F" />
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-300/70 bg-slate-500/[0.04] p-2.5 dark:border-slate-700">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        {labels.data}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        <InfraNode icon={Database} title="RDS" subtitle={labels.rds} accent="#6393E8" />
                        <InfraNode icon={Zap} title="Redis" subtitle={labels.redis} accent="#DC382D" />
                        <InfraNode icon={HardDrive} title="S3" subtitle={labels.s3} accent="#FF9900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <InfraNode icon={Layers} title="ECR" subtitle={labels.ecr} accent="#FF9900" />
                <InfraNode icon={LockKeyhole} title="IAM" subtitle={labels.iam} accent="#FF9900" />
                <InfraNode icon={Activity} title="CloudWatch" subtitle={labels.logs} accent="#FF9900" />
                <InfraNode icon={Container} title="Docker Compose" subtitle={labels.compose} accent="#2496ED" />
              </div>
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.infraPoints.map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Layers} kicker={L.stackK} title={L.stackTitle} />
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
