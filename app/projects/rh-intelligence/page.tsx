import type { Metadata } from "next";
import RhIntelligenceContent from "./content";

export const metadata: Metadata = {
  title: "RH Intelligence — Walid Lebhir",
  description:
    "RH Smart Assistant : assistant RH génératif basé sur RAG — analyse automatique des CV, accès aux documents juridiques et réponses contextuelles fiables (Next.js, FastAPI, LangChain, ChromaDB, Ollama).",
};

export default function RhIntelligencePage() {
  return <RhIntelligenceContent />;
}
