"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.hire": "Hire Me",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",

  "hero.greeting": "Hello, I'm",
  "hero.role": "Computer Engineering Student & Software Engineer",
  "hero.summary":
    "Passionate about Software Architecture, Backend, DevOps, and Artificial Intelligence, designing scalable and robust systems.",
  "hero.viewWork": "View My Work",
  "hero.contactMe": "Contact Me",
  "hero.stack": "Core Tech Stack",

  "about.kicker": "About Me",
  "about.title": "Building Solutions That Make an Impact",
  "about.p1":
    "I'm a State Engineering student in Computer Engineering at ENSA. Passionate about software architecture, backend development, DevOps and artificial intelligence, I focus on designing complex, high-performance and scalable systems.",
  "about.p2":
    "From distributed microservices to AI-powered pipelines, I enjoy turning ambitious ideas into clean, maintainable and production-ready software.",
  "about.cv": "Download CV",
  "about.techs": "Technologies",
  "about.areas": "Expertise areas",
  "about.quick": "Quick Info",
  "about.reply": "Get in touch — I usually reply within 24 hours.",
  "about.location": "Location",
  "about.email": "Email",
  "about.phone": "Phone",
  "about.languages": "Languages",

  "services.kicker": "My Services",
  "services.title": "What I Can Do For You",
  "services.sub": "End-to-end expertise — from system design to production deployment.",
  "services.d1":
    "Design of robust microservices, REST/GraphQL APIs with Spring Boot, NestJS, FastAPI.",
  "services.d2":
    "Containerization (Docker, K8s), CI/CD (GitHub Actions), IaC with Terraform and AWS deployment.",
  "services.d3":
    "Deployment of RAG pipelines, LLM integration, LangChain, LangGraph and vector databases (ChromaDB).",
  "services.d4":
    "Building modern, reactive web interfaces with React.js, Next.js and Tailwind CSS.",

  "skills.kicker": "Tech Stack",
  "skills.title": "Technologies I Work With",
  "skills.sub":
    "A complete toolbox organized by domain — from backend systems to AI pipelines.",
  "skills.techWord": "technologies",
  "skills.bT": "Backend Development",
  "skills.bD": "Robust APIs & distributed microservices",
  "skills.dT": "DevOps & Cloud",
  "skills.dD": "Containers, CI/CD & cloud infrastructure",
  "skills.aT": "AI & Data",
  "skills.aD": "LLMs, RAG pipelines & machine learning",
  "skills.fT": "Frontend Development",
  "skills.fD": "Modern & reactive web interfaces",

  "projects.kicker": "Portfolio",
  "projects.title": "Featured Projects",
  "projects.viewAll": "View All Projects",
  "projects.backHome": "Back to home",
  "projects.allTitle": "All Projects",
  "projects.allSub":
    "Detailed case studies are on the way — each project will include architecture, tech stack and lessons learned.",
  "projects.caseStudy": "View case study",
  "projects.status.dev": "In Development",
  "projects.status.mvp": "MVP Live",
  "projects.status.genai": "Generative AI",
  "projects.status.agentic": "Agentic AI",
  "projects.status.multi": "Multimodal AI",
  "projects.status.dl": "Deep Learning",
  "projects.status.health": "Medical SaaS",

  "proj.medos":
    "Multi-clinic medical SaaS by MedOS: secure Spring Boot API, Next.js web app and React Native mobile app with conflict-free scheduling, medical records and AWS infrastructure as code.",
  "proj.spendpilot":
    "SaaS platform for managing remote business missions: centralized expenses, full approval workflow and multi-agent AI (LangGraph + MCP).",
  "proj.rh":
    "Generative AI HR assistant powered by RAG: automatic CV analysis, legal document access and reliable contextual answers.",
  "proj.aicoding":
    "SpringForge — an AI agent that generates complete software projects via web app and CLI, with FastAPI orchestration and multi-provider LLMs.",
  "proj.smartcrm":
    "Modern SaaS CRM centralizing leads, customers, opportunities and KPIs — monolithic Next.js + Spring Boot platform with a full DevOps pipeline.",
  "proj.aistore":
    "E-commerce platform with CLIP-powered semantic search (text + image), Django REST backend, ChromaDB vectors and a React storefront.",
  "proj.brain":
    "Full-stack medical imaging platform: EfficientNet-B0 MRI classification, Grad-CAM explainability and a RAG-powered medical knowledge assistant.",
  "proj.extra1":
    "A real-time data streaming platform with event-driven microservices is being planned.",
  "proj.extra2":
    "A DevOps automation toolkit with Infrastructure as Code and observability is in preparation.",
  "proj.extra3":
    "An ML experimentation workspace with model tracking and evaluation is on the roadmap.",

  "contact.kicker": "Contact",
  "contact.title": "Get In Touch",
  "contact.sub":
    "Have a project or opportunity in mind? Feel free to reach out — I usually reply within 24 hours.",
  "contact.hello": "Say Hello",

  "footer.role": "Software Engineer",
  "footer.rights": "© 2026 Walid Lebhir. All rights reserved.",
  "footer.backTop": "Back to top",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.services": "Services",
  "nav.skills": "Compétences",
  "nav.projects": "Projets",
  "nav.contact": "Contact",
  "nav.hire": "Me Recruter",
  "nav.openMenu": "Ouvrir le menu",
  "nav.closeMenu": "Fermer le menu",

  "hero.greeting": "Bonjour, je suis",
  "hero.role": "Élève ingénieur en génie informatique & Software Engineer",
  "hero.summary":
    "Passionné par l'architecture logicielle, le backend, le DevOps et l'intelligence artificielle — je conçois des systèmes évolutifs et robustes.",
  "hero.viewWork": "Voir mes projets",
  "hero.contactMe": "Me contacter",
  "hero.stack": "Stack technique principale",

  "about.kicker": "À propos",
  "about.title": "Concevoir des solutions qui ont un impact",
  "about.p1":
    "Je suis élève ingénieur d'État en génie informatique à l'ENSA. Passionné par l'architecture logicielle, le développement backend, le DevOps et l'intelligence artificielle, je me concentre sur la conception de systèmes complexes, performants et évolutifs.",
  "about.p2":
    "Des microservices distribués aux pipelines IA, j'aime transformer des idées ambitieuses en logiciels propres, maintenables et prêts pour la production.",
  "about.cv": "Télécharger CV",
  "about.techs": "Technologies",
  "about.areas": "Domaines d'expertise",
  "about.quick": "Infos rapides",
  "about.reply": "Contactez-moi — je réponds généralement sous 24 heures.",
  "about.location": "Localisation",
  "about.email": "E-mail",
  "about.phone": "Téléphone",
  "about.languages": "Langues",

  "services.kicker": "Mes services",
  "services.title": "Ce que je peux faire pour vous",
  "services.sub":
    "Une expertise de bout en bout — de la conception système au déploiement en production.",
  "services.d1":
    "Conception de microservices robustes, API REST/GraphQL avec Spring Boot, NestJS, FastAPI.",
  "services.d2":
    "Conteneurisation (Docker, K8s), CI/CD (GitHub Actions), IaC avec Terraform et déploiement AWS.",
  "services.d3":
    "Déploiement de pipelines RAG, intégration de LLMs, LangChain, LangGraph et bases vectorielles (ChromaDB).",
  "services.d4":
    "Création d'interfaces web réactives et modernes avec React.js, Next.js et Tailwind CSS.",

  "skills.kicker": "Stack technique",
  "skills.title": "Technologies que j'utilise",
  "skills.sub":
    "Une boîte à outils complète organisée par domaine — des systèmes backend aux pipelines IA.",
  "skills.techWord": "technologies",
  "skills.bT": "Développement backend",
  "skills.bD": "API robustes et microservices distribués",
  "skills.dT": "DevOps & Cloud",
  "skills.dD": "Conteneurs, CI/CD et infrastructure cloud",
  "skills.aT": "IA & Data",
  "skills.aD": "LLMs, pipelines RAG et machine learning",
  "skills.fT": "Développement frontend",
  "skills.fD": "Interfaces web modernes et réactives",

  "projects.kicker": "Portfolio",
  "projects.title": "Projets en vedette",
  "projects.viewAll": "Voir tous les projets",
  "projects.backHome": "Retour à l'accueil",
  "projects.allTitle": "Tous les projets",
  "projects.allSub":
    "Des études de cas détaillées sont en route — chaque projet inclura architecture, stack et enseignements.",
  "projects.caseStudy": "Voir l'étude de cas",
  "projects.status.dev": "En développement",
  "projects.status.mvp": "MVP en ligne",
  "projects.status.genai": "IA Générative",
  "projects.status.agentic": "IA agentique",
  "projects.status.multi": "IA multimodale",
  "projects.status.dl": "Deep Learning",
  "projects.status.health": "SaaS médical",

  "proj.medos":
    "SaaS médical multi-cabinets MedOS : API Spring Boot sécurisée, application web Next.js et application mobile React Native — planning sans conflits, dossiers médicaux et infrastructure AWS as code.",
  "proj.spendpilot":
    "Plateforme SaaS de gestion des missions professionnelles à distance : dépenses centralisées, workflow d'approbation complet et agents IA multi-agents (LangGraph + MCP).",
  "proj.rh":
    "Assistant RH génératif basé sur RAG : analyse automatique des CV, accès aux documents juridiques et réponses contextuelles fiables.",
  "proj.aicoding":
    "SpringForge — un agent IA qui génère des projets logiciels complets via app web et CLI, avec orchestration FastAPI et LLMs multi-fournisseurs.",
  "proj.smartcrm":
    "CRM SaaS moderne centralisant leads, clients, opportunités et KPIs — plateforme monolithique Next.js + Spring Boot avec pipeline DevOps complet.",
  "proj.aistore":
    "Plateforme e-commerce avec recherche sémantique CLIP (texte + image), backend Django REST, vecteurs ChromaDB et vitrine React.",
  "proj.brain":
    "Plateforme d'imagerie médicale full-stack : classification IRM EfficientNet-B0, explicabilité Grad-CAM et assistant médical RAG.",
  "proj.extra1":
    "Une plateforme de streaming de données temps réel avec microservices événementiels est en préparation.",
  "proj.extra2":
    "Une boîte à outils DevOps avec Infrastructure as Code et observabilité est en préparation.",
  "proj.extra3":
    "Un espace d'expérimentation ML avec suivi des modèles et évaluation est sur la feuille de route.",

  "contact.kicker": "Contact",
  "contact.title": "Contactez-moi",
  "contact.sub":
    "Un projet ou une opportunité en tête ? N'hésitez pas à me contacter — je réponds généralement sous 24 heures.",
  "contact.hello": "Dire bonjour",

  "footer.role": "Ingénieur Logiciel",
  "footer.rights": "© 2026 Walid Lebhir. Tous droits réservés.",
  "footer.backTop": "Retour en haut",
};

const dictionaries: Record<Lang, Dict> = { en, fr };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("portfolio-lang");
    return saved === "fr" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const t = useCallback(
    (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key,
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
