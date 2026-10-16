import type { ComponentType } from "react";
import {
  Server,
  Cloud,
  BrainCircuit,
  LayoutDashboard,
  Database,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  SiSpringboot,
  SiNestjs,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiGit,
  SiLinux,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiPython,
  SiLangchain,
  SiOllama,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiMlflow,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiVite,
  SiApachekafka,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;

export interface Tech {
  name: string;
  Icon: TechIcon;
  color: string;
}

export interface Domain {
  title: string;
  description: string;
  icon: LucideIcon;
  techs: Tech[];
}

const lucideAsTech = (Icon: LucideIcon): TechIcon =>
  Icon as unknown as TechIcon;

export const domains: Domain[] = [
  {
    title: "Backend Development",
    description: "Robust APIs & distributed microservices",
    icon: Server,
    techs: [
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#9CA3AF" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#6393E8" },
      { name: "MySQL", Icon: SiMysql, color: "#4FA3C4" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Containers, CI/CD & cloud infrastructure",
    icon: Cloud,
    techs: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#4D9FFF" },
      { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
      { name: "AWS", Icon: lucideAsTech(Cloud), color: "#FF9900" },
      { name: "Nginx", Icon: SiNginx, color: "#009639" },
      { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
    ],
  },
  {
    title: "AI & Data",
    description: "LLMs, RAG pipelines & machine learning",
    icon: BrainCircuit,
    techs: [
      { name: "Python", Icon: SiPython, color: "#4B8BBE" },
      { name: "LangChain", Icon: SiLangchain, color: "#4ADE80" },
      { name: "LangGraph", Icon: lucideAsTech(Workflow), color: "#3B82F6" },
      { name: "ChromaDB", Icon: lucideAsTech(Database), color: "#F59E0B" },
      { name: "Ollama", Icon: SiOllama, color: "#E2E8F0" },
      { name: "Hugging Face", Icon: SiHuggingface, color: "#FFD21E" },
      { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", Icon: SiPandas, color: "#E70488" },
      { name: "MLflow", Icon: SiMlflow, color: "#0194E2" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Modern & reactive web interfaces",
    icon: LayoutDashboard,
    techs: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#38BDF8" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
    ],
  },
];

export const coreStack: Tech[] = [
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Apache Kafka", Icon: SiApachekafka, color: "#E2E8F0" },
];
