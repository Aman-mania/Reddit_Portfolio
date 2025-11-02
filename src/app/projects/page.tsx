import PostFeed from "@/components/PostFeed";
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
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Code2 className="h-10 w-10" />
          All Projects
        </h1>
        <p className="text-xl opacity-90">
          Explore my portfolio of full-stack applications, backend systems, and ML/data science projects
        </p>
        <div className="mt-4 text-sm opacity-80">
          {projects.length} projects • Filter by technology to find what interests you
        </div>
      </div>

      {/* Projects Feed with Filter */}
      <PostFeed projects={projects} allTags={allTags} />
    </div>
  );
}
