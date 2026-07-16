import { Terminal, Database, Smartphone, LineChart, LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  className: string;
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    id: "mobile-ecommerce",
    title: "Mobile E-Commerce Engine",
    description: "React Native, NestJS, Postgres. A fully featured premium commerce application.",
    className: "md:col-span-2 lg:col-span-2",
    icon: Smartphone,
  },
  {
    id: "agent-aide",
    title: "Agent Aide",
    description: "Offline AI Agent built for localized, secure processing.",
    className: "md:col-span-1 lg:col-span-1",
    icon: Terminal,
  },
  {
    id: "kanban-workspace",
    title: "Kanban Workspace",
    description: "Real-time WebSockets integration for enterprise task management.",
    className: "md:col-span-1 lg:col-span-1",
    icon: Database,
  },
  {
    id: "financial-analytics",
    title: "Financial Analytics",
    description: "React, Tailwind, Recharts. Massive data visualization dashboard.",
    className: "md:col-span-3 lg:col-span-2",
    icon: LineChart,
  },
];