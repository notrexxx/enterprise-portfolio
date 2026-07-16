import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { Terminal, Database, Smartphone, LineChart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-12 lg:p-24">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Engineering <span className="text-accent">Portfolio</span>
        </h1>
        <p className="text-zinc-400 max-w-xl text-lg">
          Senior Full-Stack Engineer specializing in React, Node.js, and highly scalable enterprise architecture.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <BentoGrid>
        {/* Project 1: Spans 2 columns - High Priority */}
        <BentoCard 
          title="Mobile E-Commerce Engine" 
          description="React Native, NestJS, Postgres. A fully featured premium commerce application."
          className="md:col-span-2 lg:col-span-2"
        >
          <div className="h-32 w-full bg-zinc-950/50 rounded-lg flex items-center justify-center border border-surface-border">
            <Smartphone className="w-10 h-10 text-accent/50" />
          </div>
        </BentoCard>

        {/* Project 2: Standard Span */}
        <BentoCard 
          title="Agent Aide" 
          description="Offline AI Agent built for localized, secure processing."
          className="md:col-span-1 lg:col-span-1"
        >
          <div className="h-32 w-full bg-zinc-950/50 rounded-lg flex items-center justify-center border border-surface-border">
            <Terminal className="w-10 h-10 text-accent/50" />
          </div>
        </BentoCard>

        {/* Project 3: Standard Span */}
        <BentoCard 
          title="Kanban Workspace" 
          description="Real-time WebSockets integration for enterprise task management."
          className="md:col-span-1 lg:col-span-1"
        >
          <div className="h-32 w-full bg-zinc-950/50 rounded-lg flex items-center justify-center border border-surface-border">
            <Database className="w-10 h-10 text-accent/50" />
          </div>
        </BentoCard>

        {/* Project 4: Spans 2 columns on wide screens */}
        <BentoCard 
          title="Financial Analytics" 
          description="React, Tailwind, Recharts. Massive data visualization dashboard."
          className="md:col-span-3 lg:col-span-2"
        >
          <div className="h-32 w-full bg-zinc-950/50 rounded-lg flex items-center justify-center border border-surface-border">
            <LineChart className="w-10 h-10 text-accent/50" />
          </div>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}