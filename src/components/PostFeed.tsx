'use client';

import { useState, useMemo } from 'react';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import TagFilter from './TagFilter';
import { Project } from '@/lib/types';
import Fuse from 'fuse.js';

interface PostFeedProps {
  projects: Project[];
  allTags: string[];
}

export default function PostFeed({ projects, allTags }: PostFeedProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(projects, {
        keys: ['title', 'summary', 'longDescription', 'tech', 'tags'],
        threshold: 0.3,
        includeScore: true,
      }),
    [projects]
  );

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let result = projects;

    // Apply tag filter
    if (selectedTags.length > 0) {
      result = result.filter((project) =>
        selectedTags.some((tag) => project.tags.includes(tag))
      );
    }

    // Apply search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      const searchedProjects = searchResults.map((result) => result.item);
      result = selectedTags.length > 0
        ? result.filter((p) => searchedProjects.includes(p))
        : searchedProjects;
    }

    // Sort
    if (sortBy === 'recent') {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      result = [...result].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    }

    return result;
  }, [projects, selectedTags, searchQuery, sortBy, fuse]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6">
      {/* Search and Sort Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular')}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tag Filter */}
      <TagFilter
        allTags={allTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onClearAll={handleClearTags}
      />

      {/* Results count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      {/* Project Cards */}
      <div className="space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <PostCard key={project.slug} project={project} />
          ))
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
