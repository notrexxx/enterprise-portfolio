import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ExternalLink, 
  Code, 
  AlertCircle, 
  Layers,
  Atom,
  Server,
  Database,
  Palette,
  Zap,
  Radio,
  Smartphone,
  Cpu,
  Code2
} from "lucide-react";

// Intelligent icon mapper based on technology name
const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react') || t.includes('expo')) return Atom;
  if (t.includes('node') || t.includes('nest')) return Server;
  if (t.includes('sql') || t.includes('postgres') || t.includes('database')) return Database;
  if (t.includes('tailwind') || t.includes('css')) return Palette;
  if (t.includes('vite')) return Zap;
  if (t.includes('websocket')) return Radio;
  if (t.includes('android')) return Smartphone;
  if (t.includes('llm')) return Cpu;
  return Code2; 
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }


  const ogUrl = new URL("https://andres-portfolio-tau.vercel.app/api/og");
  ogUrl.searchParams.set("title", project.title);
  ogUrl.searchParams.set("desc", project.description);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const HeaderIcon = project.icon;

  return (
    <main className="flex flex-col min-h-screen p-8 md:p-12 lg:p-24 max-w-4xl mx-auto w-full">
      
      {/* Navigation */}
      <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-accent transition-colors mb-12 w-fit group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Portfolio
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-surface border border-surface-border shadow-sm">
            <HeaderIcon className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
        </div>
        
        <p className="text-zinc-300 text-lg leading-relaxed">
          {project.longDescription}
        </p>
      </header>

      {/* Infrastructure / Technical Notice */}
      {project.notice && (
        <div className="mb-10 p-4 rounded-lg bg-zinc-900/80 border border-accent/20 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
          <p className="text-sm text-zinc-300 leading-relaxed">
            <span className="font-semibold text-accent">Infrastructure Note: </span>
            {project.notice}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-14">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-background font-medium hover:bg-accent/90 transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live App
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-surface border border-surface-border text-foreground hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <Code className="w-4 h-4 mr-2" />
            View Source Code
          </a>
        )}
      </div>

      {/* System Architecture - Compact Icon Badges */}
      <div className="mb-14">
        <div className="flex items-center space-x-2 mb-4">
          <Layers className="w-4 h-4 text-zinc-500" />
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            System Architecture
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => {
            const TechIcon = getTechIcon(tech);
            return (
              <div 
                key={tech} 
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-colors cursor-default"
              >
                <TechIcon className="w-3.5 h-3.5 text-accent" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Media Player Component */}
      {project.videoUrl ? (
        <div className="w-full aspect-video bg-zinc-950 rounded-xl border border-surface-border overflow-hidden relative shadow-lg shadow-accent/5 flex items-center justify-center">
          <video 
            src={project.videoUrl} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-contain" 
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-surface rounded-xl border border-surface-border flex flex-col items-center justify-center text-zinc-500 overflow-hidden relative shadow-sm">
          <div className="absolute inset-0 bg-linear-to-tr from-accent/5 to-transparent pointer-events-none" />
          <span className="mb-2 text-2xl">🎥</span>
          <p className="text-sm text-center px-4">
            Video module initialized. Awaiting media assets.
          </p>
        </div>
      )}

    </main>
  );
}