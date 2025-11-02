'use client';

import Link from 'next/link';
import { ArrowBigUp, Eye, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface PostCardProps {
  project: Project;
}

export default function PostCard({ project }: PostCardProps) {
  const [upvotes, setUpvotes] = useState(project.upvotes || 0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load upvote state from localStorage on mount
  useEffect(() => {
    const storedUpvotes = localStorage.getItem(`upvotes_${project.slug}`);
    const storedHasUpvoted = localStorage.getItem(`hasUpvoted_${project.slug}`);
    
    if (storedUpvotes) {
      setUpvotes(parseInt(storedUpvotes, 10));
    }
    
    if (storedHasUpvoted === 'true') {
      setHasUpvoted(true);
    }
  }, [project.slug]);

  const handleUpvote = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (hasUpvoted) {
      // Remove upvote
      const newUpvotes = upvotes - 1;
      setUpvotes(newUpvotes);
      setHasUpvoted(false);
      localStorage.setItem(`upvotes_${project.slug}`, newUpvotes.toString());
      localStorage.setItem(`hasUpvoted_${project.slug}`, 'false');
    } else {
      // Add upvote
      const newUpvotes = upvotes + 1;
      setUpvotes(newUpvotes);
      setHasUpvoted(true);
      localStorage.setItem(`upvotes_${project.slug}`, newUpvotes.toString());
      localStorage.setItem(`hasUpvoted_${project.slug}`, 'true');
    }
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex">
        {/* Upvote section */}
        <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 p-4 rounded-l-lg">
          <button
            onClick={handleUpvote}
            className={`transition-all duration-200 ${
              hasUpvoted
                ? 'text-orange-500 hover:text-orange-600'
                : 'text-gray-400 hover:text-orange-500'
            } ${isAnimating ? 'scale-125' : 'scale-100'}`}
            aria-label={hasUpvoted ? 'Remove upvote' : 'Upvote'}
          >
            <ArrowBigUp 
              className={`h-6 w-6 ${hasUpvoted ? 'fill-current' : ''}`} 
            />
          </button>
          <span className={`text-sm font-semibold my-1 transition-colors ${
            hasUpvoted 
              ? 'text-orange-500' 
              : 'text-gray-700 dark:text-gray-300'
          }`}>
            {upvotes}
          </span>
        </div>

        {/* Content section */}
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span className="font-medium">r/Projects</span>
            <span>•</span>
            <span>Posted {formatDate(project.date)}</span>
          </div>

          {/* Title */}
          <Link href={`/project/${project.slug}`}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-200 mb-2 hover:translate-x-1">
              {project.title}
            </h2>
          </Link>

          {/* Summary */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 cursor-pointer hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer with stats and actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{project.views || 0} views</span>
              </div>
              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">
                {project.role}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 hover:scale-110"
                  aria-label="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 hover:scale-110"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Impact badge if present */}
          {project.impact && (
            <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded">
              <p className="text-xs text-green-800 dark:text-green-300">
                💡 <strong>Impact:</strong> {project.impact}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
