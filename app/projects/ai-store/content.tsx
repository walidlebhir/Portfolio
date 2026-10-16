"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Rocket,
  Package,
  ScanSearch,
  Server,
  MonitorSmartphone,
  Boxes,
  ArrowLeftRight,
  Flower2,
  Table2,
  ScanEye,
  Eye,
  Image as ImageIcon,
  Braces,
} from "lucide-react";
import { SiDjango } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/project_saas_Store_NLP";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Unknown tech: ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  Django: { name: "Django", Icon: SiDjango, color: "#34D399" },
  "Django REST": { name: "Django REST", Icon: asIcon(Braces), color: "#ED4B4B" },
  Zustand: { name: "Zustand", Icon: asIcon(Boxes), color: "#7C3AED" },
  Axios: { name: "Axios", Icon: asIcon(ArrowLeftRight), color: "#38BDF8" },
  DaisyUI: { name: "DaisyUI", Icon: asIcon(Flower2), color: "#EC4899" },
  SQL: { name: "SQL", Icon: asIcon(Table2), color: "#38BDF8" },
  CLIP: { name: "CLIP", Icon: asIcon(ScanEye), color: "#A78BFA" },
  OpenCV: { name: "OpenCV", Icon: asIcon(Eye), color: "#5C9EED" },
  Pillow: { name: "Pillow", Icon: asIcon(ImageIcon), color: "#F59E0B" },
};

const dict: Record<Lang, any> = {
  en: {
    all: "All projects",
    live: "Multimodal AI",
    pill: "E-commerce · Semantic Search",
    tagline:
      "A platform that helps users create and manage their own online store — with an AI-powered semantic search engine that understands products by description or even by image.",
    source: "Source code",
    cover: "Storefront: smart search, popular products, ratings and prices.",
    bizK: "Business",
    bizTitle: "A complete commerce platform",
    biz: [
      { t: "Product management", x: "Catalog, categories, pricing and stock — everything a merchant needs." },
      { t: "Order processing", x: "From cart to confirmed order with status tracking." },
      { t: "Delivery tracking", x: "Follow each delivery from warehouse to customer." },
      { t: "Store customization", x: "Each user creates and manages their own online store." },
    ],
    adminCap: "Admin dashboard: recent orders, popular products and stock levels.",
    aiK: "Multimodal AI",
    aiTitle: "Search by description — or by image",
    aiSub: "Beyond keywords: CLIP generates vector embeddings for both text and images.",
    aiCaps: [
      "Natural-language search with text, image and voice input.",
      "A description like “Sony digital camera in black” returns the right cameras.",
      "Visual search: results ranked by semantic similarity.",
      "Pipeline: Pillow + OpenCV preprocessing → CLIP embeddings → ChromaDB cosine similarity → Django REST results.",
    ],
    aiBullets: [
      "CLIP embeddings for both product text and images.",
      "NLP + image preprocessing with PyTorch, OpenCV and Pillow.",
      "ChromaDB stores and queries embeddings with cosine similarity.",
      "Structured data (products, users, orders) in PostgreSQL via Django ORM.",
    ],
    frontK: "Frontend",
    frontTitle: "Fast and usable interface",
    frontSub: "React with Zustand state, Axios API calls and a consistent Tailwind + DaisyUI design.",
    frontBullets: [
      "React.js focused on speed and usability.",
      "Zustand for lightweight application state.",
      "Axios for API communication.",
      "Tailwind CSS + DaisyUI for a modern, consistent UI.",
    ],
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Frontend", "Backend", "Data", "AI Search"],
    outro: "Full-stack development meets AI-driven search for a truly intelligent experience.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "IA multimodale",
    pill: "E-commerce · Recherche sémantique",
    tagline:
      "Une plateforme qui aide les utilisateurs à créer et gérer leur propre boutique en ligne — avec un moteur de recherche sémantique IA qui comprend les produits par description ou même par image.",
    source: "Code source",
    cover: "Vitrine : recherche intelligente, produits populaires, notes et prix.",
    bizK: "Business",
    bizTitle: "Une plateforme e-commerce complète",
    biz: [
      { t: "Gestion produits", x: "Catalogue, catégories, prix et stock — tout ce qu’il faut au marchand." },
      { t: "Traitement commandes", x: "Du panier à la commande confirmée avec suivi de statut." },
      { t: "Suivi livraisons", x: "Suivez chaque livraison de l’entrepôt au client." },
      { t: "Personnalisation boutique", x: "Chaque utilisateur crée et gère sa propre boutique en ligne." },
    ],
    adminCap: "Dashboard admin : commandes récentes, produits populaires et niveaux de stock.",
    aiK: "IA multimodale",
    aiTitle: "Recherche par description — ou par image",
    aiSub: "Au-delà des mots-clés : CLIP génère des embeddings vectoriels pour le texte comme pour les images.",
    aiCaps: [
      "Recherche en langage naturel avec entrée texte, image et voix.",
      "Une description comme « Sony digital camera in black » retourne les bons appareils.",
      "Recherche visuelle : résultats classés par similarité sémantique.",
      "Pipeline : prétraitement Pillow + OpenCV → embeddings CLIP → similarité cosinus ChromaDB → résultats Django REST.",
    ],
    aiBullets: [
      "Embeddings CLIP pour le texte et les images produits.",
      "Prétraitement NLP + image avec PyTorch, OpenCV et Pillow.",
      "ChromaDB stocke et interroge les embeddings par similarité cosinus.",
      "Données structurées (produits, utilisateurs, commandes) dans PostgreSQL via Django ORM.",
    ],
    frontK: "Frontend",
    frontTitle: "Une interface rapide et utilisable",
    frontSub: "React avec état Zustand, appels API Axios et design cohérent Tailwind + DaisyUI.",
    frontBullets: [
      "React.js axé vitesse et utilisabilité.",
      "Zustand pour un état applicatif léger.",
      "Axios pour la communication API.",
      "Tailwind CSS + DaisyUI pour une UI moderne et cohérente.",
    ],
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Frontend", "Backend", "Données", "Recherche IA"],
    outro: "Le développement full-stack rencontre la recherche IA pour une expérience vraiment intelligente.",
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
  {
    domain: "Frontend",
    techs: [
      { ...known("React"), name: "React.js" },
      known("JavaScript"),
      known("Tailwind CSS"),
      extraTechs["Zustand"],
      extraTechs["Axios"],
      extraTechs["DaisyUI"],
    ],
  },
  {
    domain: "Backend",
    techs: [extraTechs["Django"], extraTechs["Django REST"], known("Python")],
  },
  { domain: "Data", techs: [known("PostgreSQL"), known("ChromaDB"), extraTechs["SQL"]] },
  {
    domain: "AI Search",
    techs: [
      known("PyTorch"),
      extraTechs["CLIP"],
      { ...known("Hugging Face"), name: "Transformers (NLP)" },
      extraTechs["OpenCV"],
      extraTechs["Pillow"],
    ],
  },
];

export default function AiStoreContent() {
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
            AI-Enhanced Store
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
            <Shot src="/AI_Store/vitrine-accueil.jpg" caption={L.cover} />
          </div>

          <div className="mt-14">
            <SectionTitle icon={Package} kicker={L.bizK} title={L.bizTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L.biz.map((item: { t: string; x: string }, i: number) => (
                <div key={i} className={`${cardClass} relative overflow-hidden`}>
                  <span className="text-3xl font-extrabold text-blue-600/20 dark:text-blue-500/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 dark:text-white">{item.t}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.x}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Shot src="/AI_Store/admin-dashboard.jpg" caption={L.adminCap} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={ScanSearch} kicker={L.aiK} title={L.aiTitle} subtitle={L.aiSub} />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Shot src="/AI_Store/vitrine-recherche.jpg" caption={L.aiCaps[0]} />
              <Shot src="/AI_Store/recherche-sony.jpg" caption={L.aiCaps[1]} />
              <Shot src="/AI_Store/recherche-image.jpg" caption={L.aiCaps[2]} />
              <Shot src="/AI_Store/architecture-ia.jpg" caption={L.aiCaps[3]} />
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
            <SectionTitle icon={MonitorSmartphone} kicker={L.frontK} title={L.frontTitle} subtitle={L.frontSub} />
            <div className={`${cardClass} mt-8`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.frontBullets.map((b: string, i: number) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.stackK} title={L.stackTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
