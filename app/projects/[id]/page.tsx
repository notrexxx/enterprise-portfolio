import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, AlertCircle } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="flex flex-col min-h-screen p-8 md:p-12 lg:p-24 max-w-4xl mx-auto w-full">
      
      {/* Navigation */}
      <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-accent transition-colors mb-12 w-fit">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-xl bg-surface border border-surface-border">
            <Icon className="w-8 h-8 text-accent" />
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
        <div className="mb-10 p-4 rounded-lg bg-surface border border-accent/30 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-zinc-300 leading-relaxed">
            <span className="font-semibold text-accent">Infrastructure Note: </span>
            {project.notice}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-background font-medium hover:bg-accent/90 transition-colors"
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
            className="inline-flex items-center px-4 py-2 rounded-md bg-surface border border-surface-border text-foreground hover:bg-surface-border transition-colors"
          >
            <Code className="w-4 h-4 mr-2" />
            View Source Code
          </a>
        )}
      </div>

      {/* Tech Stack Tags */}
      <div className="mb-12">
        <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-4">Architecture & Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Video Demo Placeholder */}
      <div className="w-full aspect-video bg-surface rounded-xl border border-surface-border flex flex-col items-center justify-center text-zinc-500 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
        <span className="mb-2 text-2xl">🎥</span>
        <p className="text-sm text-center px-4">
          Replace this block with an embedded iframe of a YouTube or Loom video demonstrating the app.
        </p>
      </div>

    </main>
  );
}