import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="p-4 rounded-full bg-surface border border-surface-border shadow-[0_0_15px_var(--tw-shadow-color)] shadow-accent/20">
          <Terminal className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          System <span className="text-accent">Online</span>
        </h1>
        <p className="text-zinc-400 max-w-md">
          Architecture initialized. Awaiting UI/UX layout directive.
        </p>
      </div>
    </main>
  );
}