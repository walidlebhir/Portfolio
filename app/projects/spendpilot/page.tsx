import type { Metadata } from "next";
import SpendPilotContent from "./content";

export const metadata: Metadata = {
  title: "SpendPilot — Walid Lebhir",
  description:
    "SpendPilot : plateforme SaaS de gestion des missions professionnelles à distance, dépenses centralisées, workflow d'approbation et agents IA multi-agents (LangGraph + MCP).",
};

export default function SpendPilotPage() {
  return <SpendPilotContent />;
}
