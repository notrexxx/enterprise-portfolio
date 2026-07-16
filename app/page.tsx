import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { projects } from "@/lib/data";
import Link from "next/link";

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
        {projects.map((project) => {
          const Icon = project.icon;
          
          return (
            <Link key={project.id} href={`/projects/${project.id}`} className={project.className}>
              <BentoCard 
                title={project.title} 
                description={project.description}
                className="h-full"
              >
                <div className="h-32 w-full bg-zinc-950/50 rounded-lg flex items-center justify-center border border-surface-border mt-4">
                  <Icon className="w-10 h-10 text-accent/50" />
                </div>
              </BentoCard>
            </Link>
          );
        })}
      </BentoGrid>
    </main>
  );
}