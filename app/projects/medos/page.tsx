import type { Metadata } from "next";
import MedosContent from "./content";

export const metadata: Metadata = {
  title: "MedOS — CabinetOs SaaS — Walid Lebhir",
  description:
    "MedOS: a multi-clinic medical SaaS built end-to-end — secured Spring Boot API, Next.js clinic web app, React Native patient app, conflict-free scheduling, medical records, subscriptions and Terraform-provisioned AWS infrastructure.",
};

export default function MedosPage() {
  return <MedosContent />;
}
