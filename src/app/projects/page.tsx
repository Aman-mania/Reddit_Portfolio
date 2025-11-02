import PostFeed from "@/components/PostFeed";
import PageHero from "@/components/PageHero";
import { projects, getAllTags } from "@/lib/projects";
import { Code2 } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Aman Biswakarma',
  description: 'Browse all projects by Aman Biswakarma - Full-stack developer with expertise in MERN stack and Spring Boot.',
};

export default function ProjectsPage() {
  const allTags = getAllTags();

  return (
    <div className="space-y-8">
      <PageHero
        title={<span className="flex items-center gap-3"><Code2 className="h-8 w-8" />r/All_Projects</span>}
        subtitle={`Explore my portfolio of full-stack applications, backend systems, and ML/data science projects`}
      />

      {/* Projects Feed with Filter */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="mt-4 text-sm opacity-80 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">{projects.length} projects • Filter by technology to find what interests you</div>
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-500">
          <PostFeed projects={projects} allTags={allTags} />
        </div>
      </div>
    </div>
  );
}
