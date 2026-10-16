import type { Metadata } from "next";
import SmartCrmContent from "./content";

export const metadata: Metadata = {
  title: "SmartCRM — Walid Lebhir",
  description:
    "SmartCRM: a modern SaaS CRM platform centralizing leads, customers, opportunities and KPIs — Next.js + Spring Boot monolith with a complete DevOps pipeline (Jenkins, Terraform, Ansible, AWS).",
};

export default function SmartCrmPage() {
  return <SmartCrmContent />;
}
