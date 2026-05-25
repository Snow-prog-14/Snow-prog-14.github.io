import { projects, getProjectBySlug, type ProjectDetail } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    returnTo?: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project: ProjectDetail) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const returnTarget = resolvedSearchParams.returnTo ?? "lab";
  const backHref = `/#${returnTarget}`;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectNumber = String(projects.findIndex(p => p.slug === slug) + 1).padStart(2, "0");

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-24">
      {/* Background Decorative */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10 pt-32">
        {/* Navigation */}
        <Link 
          href={backHref}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold text-gray-500 hover:text-violet-600 hover:border-violet-200 transition-all mb-12 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO SYSTEM MODULES
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-lg bg-violet-600 text-white text-[10px] font-black tracking-widest uppercase">
              SYSTEM MODULE {projectNumber}
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-violet-200 to-transparent" />
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-500 mb-8">
            {project.type}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-gray-50 border border-gray-100">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
              <p className="text-sm font-bold text-gray-900">{project.status}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Year</p>
              <p className="text-sm font-bold text-gray-900">{project.year}</p>
            </div>
            <div className="col-span-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Infrastructure</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.slice(0, 3).map((t: string) => (
                  <span key={t} className="text-[9px] font-black text-violet-600 bg-violet-50 px-2 py-0.5 rounded border border-violet-100 uppercase tracking-wider">{t}</span>
                ))}
                {project.tech.length > 3 && <span className="text-[9px] font-black text-gray-400 uppercase">+{project.tech.length - 3} MORE</span>}
              </div>
            </div>
          </div>
        </header>

        {/* Main Visual */}
        <section className="mb-20">
          <div className="relative aspect-video rounded-4xl overflow-hidden border border-gray-100 bg-gray-50 shadow-2xl shadow-violet-100/40">
            <Image 
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-violet-600 rounded-full" />
                <h2 className="text-xl font-black text-gray-950 uppercase tracking-widest">System Overview</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
                {project.overview}
              </p>

              {project.repository && (
                <div className="p-6 rounded-3xl bg-violet-50 border border-violet-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-violet-600 uppercase tracking-widest mb-1">Source Code Repository</h4>
                      <p className="text-sm font-bold text-gray-900 truncate max-w-[200px] md:max-w-xs">{project.repository.replace('https://', '')}</p>
                    </div>
                  </div>
                  <a 
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-6 py-3 rounded-2xl bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 text-center"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-cyan-500 rounded-full" />
                <h2 className="text-xl font-black text-gray-950 uppercase tracking-widest">Core Features</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3 group hover:border-cyan-200 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-[10px] font-black shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm font-bold text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-12">
            <section className="p-8 rounded-4xl bg-slate-950 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-pink-500 rounded-full" />
                <h2 className="text-lg font-black uppercase tracking-widest">My Role</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {project.role}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 bg-violet-400 rounded-full" />
                <h2 className="text-lg font-black text-gray-950 uppercase tracking-widest">Stack Modules</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 rounded-xl bg-white border border-gray-100 text-[10px] font-black text-gray-500 uppercase tracking-widest hover:border-violet-200 hover:text-violet-600 transition-colors shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="pt-20 border-t border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 bg-emerald-500 rounded-full" />
              <h2 className="text-xl font-black text-gray-950 uppercase tracking-widest">System Documentation</h2>
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Screenshots_01-{String(project.screenshots.length).padStart(2, "0")}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((img: string, i: number) => (
              <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 hover:border-violet-200 transition-all shadow-xl shadow-gray-200/40">
                <Image 
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link 
            href={backHref}
            className="px-8 py-4 rounded-2xl bg-slate-950 text-white text-xs font-black tracking-[0.2em] hover:bg-violet-600 transition-all shadow-xl shadow-slate-200"
          >
            RETURN
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">System Authenticated</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </footer>
      </div>
    </main>
  );
}
