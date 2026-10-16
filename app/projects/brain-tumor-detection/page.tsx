import type { Metadata } from "next";
import BrainTumorContent from "./content";

export const metadata: Metadata = {
  title: "Brain Tumor Detection — Walid Lebhir",
  description:
    "Full-stack Brain Tumor Detection platform: EfficientNet-B0 MRI classification, Grad-CAM explainability, interactive React dashboard and a RAG-powered medical knowledge assistant.",
};

export default function BrainTumorPage() {
  return <BrainTumorContent />;
}
