import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, User, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Aman Biswakarma`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHero title={project.title} subtitle={project.summary} />
      
      <div className="max-w-4xl mx-auto px-4 space-y-6">
      {/* Back button */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all projects
      </Link>

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {project.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {project.summary}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(project.date)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Impact */}
      {project.impact && (
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Impact & Results
          </h3>
          <p className="text-green-800 dark:text-green-200">{project.impact}</p>
        </div>
      )}

      {/* Problem Statement */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Problem Statement
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.problemStatement}
        </p>
      </div>

      {/* Solution */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Solution & Architecture
        </h2>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          {project.solution.split('\n\n').map((paragraph, idx) => {
            // Parse markdown bold (**text**)
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={idx}>
                {parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-semibold text-gray-900 dark:text-gray-100">{part.slice(2, -2)}</strong>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {project.longDescription}
        </p>
      </div>

      {/* Key Challenges */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Key Challenges & Accomplishments
        </h2>
        <ul className="space-y-3">
          {project.keyChallenges.map((challenge, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* How to Run */}
      {project.howToRun && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            How to Run Locally
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{project.howToRun.trim()}</code>
          </pre>
        </div>
      )}

      {/* Back to projects */}
      <div className="text-center py-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          View more projects
        </Link>
      </div>
      </div>
    </div>
  );
}
