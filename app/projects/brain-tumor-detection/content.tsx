"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Rocket,
  BrainCircuit,
  ScanEye,
  MessagesSquare,
  Server,
  Cpu,
  Eye,
  BookOpen,
  Unplug,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { domains, type Tech } from "@/components/tech-data";
import { useLanguage, type Lang } from "@/components/i18n";

const GITHUB_REPO_URL = "https://github.com/walidlebhir/DeepLearning_projet_Detec_Cancer";

const techByName = new Map<string, Tech>();
domains.forEach((d) => d.techs.forEach((t) => techByName.set(t.name, t)));

function known(name: string): Tech {
  const tech = techByName.get(name);
  if (!tech) throw new Error(`Unknown tech: ${name}`);
  return tech;
}

const asIcon = (Icon: Tech["Icon"]) => Icon;

const extraTechs: Record<string, Tech> = {
  "EfficientNet-B0": { name: "EfficientNet-B0", Icon: asIcon(Cpu), color: "#FF6F00" },
  "Grad-CAM": { name: "Grad-CAM", Icon: asIcon(ScanEye), color: "#A78BFA" },
  OpenCV: { name: "OpenCV", Icon: asIcon(Eye), color: "#5C9EED" },
  Uvicorn: { name: "Uvicorn", Icon: asIcon(Unplug), color: "#64748B" },
  "Medical KB": { name: "Medical KB", Icon: asIcon(BookOpen), color: "#22C55E" },
};

const dict: Record<Lang, any> = {
  en: {
    all: "All projects",
    live: "Deep Learning",
    pill: "Medical Imaging · Explainable AI · RAG",
    tagline:
      "A full-stack medical imaging platform combining Deep Learning, Explainable AI and Retrieval-Augmented Generation — built as part of a Deep Learning module, covering the complete AI lifecycle from training to deployment.",
    source: "Source code",
    cover: "Glioma detected at 88.43% confidence — Grad-CAM heatmap highlights the tumor region.",
    stats: [
      { v: "4", l: "Tumor classes detected" },
      { v: "B0", l: "EfficientNet backbone" },
      { v: "XAI", l: "Grad-CAM visual explanations" },
      { v: "RAG", l: "Medical knowledge retrieval" },
    ],
    clsK: "Classification",
    clsTitle: "4-class MRI tumor detection",
    clsSub: "EfficientNet-B0 classifies brain MRI scans into four categories.",
    classes: [
      { t: "Glioma", x: "A tumor arising from glial cells in the brain or spine." },
      { t: "Meningioma", x: "A tumor forming on the membranes covering the brain." },
      { t: "Pituitary", x: "A tumor developing in the pituitary gland." },
      { t: "No Tumor", x: "Healthy MRI scans with no detectable tumor." },
    ],
    sainCap: "Healthy scan correctly classified as “No Tumor” at 86.6% confidence.",
    pipeK: "Pipeline",
    pipeTitle: "From scan to explanation",
    pipe: [
      { t: "MRI upload", x: "A brain MRI scan is uploaded through the interactive dashboard." },
      { t: "Classification", x: "EfficientNet-B0 predicts one of 4 classes in real time." },
      { t: "Explainability", x: "Grad-CAM highlights the regions driving the prediction." },
      { t: "Contextual explanation", x: "The RAG assistant generates an evidence-based medical explanation." },
    ],
    xaiT: "Transparent decisions",
    xaiX:
      "Grad-CAM visualizations highlight the exact regions influencing each prediction, making the model's decisions transparent and accessible — not just a black-box label.",
    ragT: "Medical AI assistant",
    ragX:
      "A RAG-powered assistant retrieves tumor explanations and clinical knowledge from a ChromaDB vector base seeded with medical literature — evidence-based answers after every prediction.",
    ragCap: "RAG assistant answering questions about glioma from the medical knowledge base.",
    fullK: "Full-stack",
    fullTitle: "Interactive platform, end to end",
    fullSub: "React + Vite dashboard with real-time results, served by a FastAPI + Uvicorn backend.",
    archCap:
      "End-to-end system: React + Vite frontend, FastAPI prediction & RAG routers, EfficientNet-B0, Grad-CAM, ChromaDB knowledge base.",
    fullBullets: [
      "Model training & evaluation with PyTorch, OpenCV and scikit-learn.",
      "FastAPI backend exposing prediction and RAG endpoints.",
      "Interactive React dashboard displaying results in real time.",
      "Medical knowledge base indexed with Sentence Transformers in ChromaDB.",
    ],
    stackK: "Tech stack",
    stackTitle: "Technologies used",
    groups: ["Frontend", "Backend", "Deep Learning", "RAG"],
    outro: "Making AI decisions more transparent through explainability and evidence-based retrieval.",
    back: "Back to projects",
  },
  fr: {
    all: "Tous les projets",
    live: "Deep Learning",
    pill: "Imagerie médicale · IA explicable · RAG",
    tagline:
      "Plateforme d’imagerie médicale full-stack combinant Deep Learning, IA explicable et Retrieval-Augmented Generation — réalisée dans le cadre d’un module Deep Learning, couvrant tout le cycle de vie IA du training au déploiement.",
    source: "Code source",
    cover: "Gliome détecté à 88,43 % de confiance — la heatmap Grad-CAM met en évidence la région tumorale.",
    stats: [
      { v: "4", l: "Classes de tumeurs détectées" },
      { v: "B0", l: "Backbone EfficientNet" },
      { v: "XAI", l: "Explications visuelles Grad-CAM" },
      { v: "RAG", l: "Retrieval de connaissances médicales" },
    ],
    clsK: "Classification",
    clsTitle: "Détection de tumeurs IRM en 4 classes",
    clsSub: "EfficientNet-B0 classifie les IRM cérébrales en quatre catégories.",
    classes: [
      { t: "Gliome", x: "Tumeur issue des cellules gliales du cerveau ou de la moelle." },
      { t: "Méningiome", x: "Tumeur formée sur les membranes recouvrant le cerveau." },
      { t: "Pituitaire", x: "Tumeur se développant dans l’hypophyse." },
      { t: "Pas de tumeur", x: "IRM saines sans tumeur détectable." },
    ],
    sainCap: "Scan sain correctement classé « No Tumor » à 86,6 % de confiance.",
    pipeK: "Pipeline",
    pipeTitle: "Du scan à l’explication",
    pipe: [
      { t: "Upload IRM", x: "Une IRM cérébrale est téléversée via le dashboard interactif." },
      { t: "Classification", x: "EfficientNet-B0 prédit l’une des 4 classes en temps réel." },
      { t: "Explicabilité", x: "Grad-CAM met en évidence les régions ayant guidé la prédiction." },
      { t: "Explication contextuelle", x: "L’assistant RAG génère une explication médicale sourcée." },
    ],
    xaiT: "Des décisions transparentes",
    xaiX:
      "Les visualisations Grad-CAM mettent en évidence les régions exactes influençant chaque prédiction, rendant les décisions du modèle transparentes et accessibles — pas juste un label boîte noire.",
    ragT: "Assistant médical IA",
    ragX:
      "Un assistant RAG récupère explications tumorales et connaissances cliniques depuis une base vectorielle ChromaDB alimentée de littérature médicale — des réponses sourcées après chaque prédiction.",
    ragCap: "Assistant RAG répondant aux questions sur le gliome depuis la base de connaissances médicales.",
    fullK: "Full-stack",
    fullTitle: "Plateforme interactive de bout en bout",
    fullSub: "Dashboard React + Vite avec résultats temps réel, servi par un backend FastAPI + Uvicorn.",
    archCap:
      "Système de bout en bout : frontend React + Vite, routeurs FastAPI prédiction & RAG, EfficientNet-B0, Grad-CAM, base de connaissances ChromaDB.",
    fullBullets: [
      "Entraînement & évaluation du modèle avec PyTorch, OpenCV et scikit-learn.",
      "Backend FastAPI exposant les endpoints de prédiction et RAG.",
      "Dashboard React interactif affichant les résultats en temps réel.",
      "Base de connaissances médicales indexée avec Sentence Transformers dans ChromaDB.",
    ],
    stackK: "Stack technique",
    stackTitle: "Technologies utilisées",
    groups: ["Frontend", "Backend", "Deep Learning", "RAG"],
    outro: "Rendre les décisions IA plus transparentes grâce à l’explicabilité et au retrieval sourcé.",
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
    techs: [{ ...known("React"), name: "React.js" }, known("Vite"), known("CSS")],
  },
  { domain: "Backend", techs: [known("FastAPI"), extraTechs["Uvicorn"]] },
  {
    domain: "Deep Learning",
    techs: [
      known("PyTorch"),
      extraTechs["EfficientNet-B0"],
      extraTechs["Grad-CAM"],
      extraTechs["OpenCV"],
      known("Scikit-learn"),
    ],
  },
  {
    domain: "RAG",
    techs: [
      { ...known("Hugging Face"), name: "Sentence-Transformers" },
      known("ChromaDB"),
      extraTechs["Medical KB"],
    ],
  },
];

export default function BrainTumorContent() {
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
            Brain Tumor Detection
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
            <Shot src="/tumeur_detection/detection-glioma.jpg" caption={L.cover} />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {L.stats.map((stat: { v: string; l: string }, i: number) => (
              <div key={i} className={`${cardClass} text-center`}>
                <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
                  {stat.v}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <SectionTitle icon={ScanEye} kicker={L.clsK} title={L.clsTitle} subtitle={L.clsSub} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {L.classes.map((item: { t: string; x: string }, i: number) => (
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
              <Shot src="/tumeur_detection/detection-sain.jpg" caption={L.sainCap} />
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={BrainCircuit} kicker={L.pipeK} title={L.pipeTitle} />
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className={cardClass}>
              <div className="flex items-center gap-3">
                <ScanEye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">{L.xaiT}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {L.xaiX}
              </p>
            </div>
            <div className={cardClass}>
              <div className="flex items-center gap-3">
                <MessagesSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-slate-900 dark:text-white">{L.ragT}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {L.ragX}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <Shot src="/tumeur_detection/rag-assistant.jpg" caption={L.ragCap} />
          </div>

          <div className="mt-14">
            <SectionTitle icon={Server} kicker={L.fullK} title={L.fullTitle} subtitle={L.fullSub} />
            <div className="mt-8">
              <Shot src="/tumeur_detection/architecture-systeme.jpg" caption={L.archCap} />
            </div>
            <div className={`${cardClass} mt-5`}>
              <ul className="grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2 dark:text-slate-400">
                {L.fullBullets.map((b: string, i: number) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle icon={BrainCircuit} kicker={L.stackK} title={L.stackTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackKeys.map((group, gi) => (
                <div key={group.domain} className={cardClass}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    {L.groups[gi]}
                  </h3>
                  <div className="mt-3 grid grid-cols-1 gap-2">
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
