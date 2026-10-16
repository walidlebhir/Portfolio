import type { Metadata } from "next";
import AiStoreContent from "./content";

export const metadata: Metadata = {
  title: "AI-Enhanced Store — Walid Lebhir",
  description:
    "AI-powered e-commerce platform with CLIP-based semantic search (text + image): Django REST backend, PostgreSQL, ChromaDB vectors and a React storefront.",
};

export default function AiStorePage() {
  return <AiStoreContent />;
}
