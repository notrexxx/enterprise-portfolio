import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { projects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-8 md:px-12 lg:px-24 pt-4 pb-6">
      
      <header className="pt-3 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
          Engineering <span className="text-accent">Portfolio</span>
        </h1>
        <p className="text-zinc-400 max-w-xl text-base md:text-lg">
          Computer Science Engineer and Full-Stack Developer specializing in React, React Native, Node.js, and SQL.
        </p>
      </header>

      <BentoGrid>
        {projects.map((project, index) => {
          const Icon = project.icon;
          
          return (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`} 
              className={`${project.className} ${project.rowSpan || ""}`}
            >
              <BentoCard 
                title={project.title} 
                description={project.description}
                className="h-full flex flex-col"
              >
                {project.imageUrl ? (
                  <div className="relative grow min-h-56 w-full mt-3 rounded-lg overflow-hidden border border-surface-border bg-zinc-950/50">
                    <Image 
                      src={project.imageUrl} 
                      alt={`${project.title} preview`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`transition-transform duration-500 hover:scale-105 ${project.imageStyle}`}
                    />
                  </div>
                ) : (
                  <div className="grow min-h-56 w-full bg-zinc-950/50 rounded-lg flex items-center justify-center border border-surface-border mt-3">
                    <Icon className="w-10 h-10 text-accent/50" />
                  </div>
                )}
              </BentoCard>
            </Link>
          );
        })}
      </BentoGrid>
    </main>
  );
}