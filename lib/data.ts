import { Terminal, Database, Smartphone, LineChart, LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  className: string;
  rowSpan?: string;
  icon: LucideIcon;
  techStack: string[];
  notice?: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  videoUrl: string;
  imageStyle: string;
}

export const projects: Project[] = [

  {
    id: "mobile-ecommerce",
    title: "Mobile E-Commerce Engine",
    description: "React Native, NestJS, Postgres. A fully featured premium commerce application.",
    longDescription: "A high-performance, full-stack, cross-platform e-commerce application. Features include offline resilience, smart inventory masking, and real-time order fulfillment handled by a custom ACID-compliant NestJS backend.",
    className: "md:col-span-2 lg:col-span-2",
    rowSpan: "",
    icon: Smartphone,
    techStack: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeORM"],
    notice: "Backend hosted on Render free tier. Initial API requests may take ~45 seconds to spin up.",
    liveUrl: "https://mobile-ecommerce-engine-nygp.vercel.app",
    githubUrl: "https://github.com/notrexxx/mobile-ecommerce-engine.git",
    imageUrl: "/media/images/ecommerce.png",
    videoUrl: "/media/videos/ecommerce.mp4",
    imageStyle: "object-cover object-top",
  },

  {
    id: "agent-aide",
    title: "Agent Aide",
    description: "Offline AI Agent built for localized, secure processing.",
    longDescription: "A fully localized Android application designed to run AI agent models completely offline. Built to ensure strict user privacy and zero-latency inference without relying on cloud processing.",
    className: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    icon: Terminal,
    techStack: ["Android (APK)", "React Native", "Local LLM", "SQLite"],
    notice: "This is a compiled Android APK. iOS or Desktop users please view the video demonstration below.",
    githubUrl: "https://github.com/notrexxx/AgentAide.git",
    imageUrl: "/media/images/agent-aide.png",
    videoUrl: "/media/videos/agent-aide.mp4",
    imageStyle: "object-contain p-4",
  },

  {
    id: "financial-analytics",
    title: "Financial Analytics",
    description: "React, Tailwind, Recharts. Massive data visualization dashboard.",
    longDescription: "A data-dense financial tracking dashboard built to process and visualize large datasets on the client-side without layout shift or performance degradation.",
    className: "md:col-span-1 lg:col-span-1", 
    rowSpan: "",
    icon: LineChart,
    techStack: ["React", "Recharts", "Tailwind CSS", "Vite"],
    notice: "WebSockets server hosted on free tier. Initial connection may experience a brief cold-start delay.",
    liveUrl: "https://financial-tracker-hfrm5hg81-andres-projects16.vercel.app",
    githubUrl: "https://github.com/notrexxx/financial-tracker.git",
    imageUrl: "/media/images/financial-analytics.png",
    videoUrl: "/media/videos/financial-analytics.mp4",
    imageStyle: "object-cover object-center",
  },

  {
    id: "kanban-workspace",
    title: "Kanban Workspace",
    description: "Real-time WebSockets integration for enterprise task management.",
    longDescription: "An enterprise-grade project management tool utilizing bidirectional WebSockets for real-time collaboration, instantaneous state updates, and optimistic UI rendering.",
    className: "md:col-span-2 lg:col-span-2", 
    rowSpan: "",
    icon: Database,
    techStack: ["React", "WebSockets", "Node.js", "Tailwind CSS"],
    notice: "WebSockets server hosted on free tier. Initial connection may experience a brief cold-start delay.",
    liveUrl: "https://real-time-kanban.vercel.app",
    githubUrl: "https://github.com/notrexxx/real-time-kanban.git",
    imageUrl: "/media/images/kanban-workspace.png",
    videoUrl: "/media/videos/kanban-workspace.mp4",
    imageStyle: "object-cover object-top",
  },
];