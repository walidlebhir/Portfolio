import type { Metadata } from "next";
import ProjectsContent from "./content";

export const metadata: Metadata = {
  title: "Projects — Walid Lebhir",
  description:
    "All projects by Walid Lebhir, Software Engineer. New case studies coming soon.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
