import type { Metadata } from "next";
import AiCodingAgentContent from "./content";

export const metadata: Metadata = {
  title: "AI Coding Agent — Walid Lebhir",
  description:
    "SpringForge — an AI coding agent generating complete software projects through a Next.js web app and a Python CLI, with FastAPI orchestration and multi-provider LLMs.",
};

export default function AiCodingAgentPage() {
  return <AiCodingAgentContent />;
}
