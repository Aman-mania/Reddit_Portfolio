'use client';

import { X, Code2, Server, Brain } from 'lucide-react';
import { useState } from 'react';

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
}

// Technology categories in order with icons
const techCategories = {
  'Full-stack': {
    icon: Code2,
    color: 'blue',
    tags: ['MERN', 'Next.js', 'Full-stack', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB']
  },
  'Backend': {
    icon: Server,
    color: 'green',
    tags: ['Backend', 'Spring Boot', 'Java', 'REST API', 'Microservices', 'Authentication', 'Security', 'JWT']
  },
  'Other': {
    icon: Brain,
    color: 'purple',
    tags: ['Machine Learning', 'Python', 'Data Science', 'EDA', 'Clustering', 'Flask', 'JavaScript', 'jQuery', 'Game', 'Frontend']
  }
};

const categoryOrder = ['Full-stack', 'Backend', 'Other'];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'text-blue-500'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
    text: 'text-green-700 dark:text-green-300',
    icon: 'text-green-500'
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
    text: 'text-purple-700 dark:text-purple-300',
    icon: 'text-purple-500'
  }
};

export default function TagFilter({ allTags, selectedTags, onTagToggle, onClearAll }: TagFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Group tags by category
  const categorizedTags: Record<string, string[]> = {};
  
  allTags.forEach((tag) => {
    let categorized = false;
    for (const [category, config] of Object.entries(techCategories)) {
      if (config.tags.includes(tag)) {
        if (!categorizedTags[category]) {
          categorizedTags[category] = [];
        }
        categorizedTags[category].push(tag);
        categorized = true;
        break;
      }
    }
    // All tags are now categorized, no uncategorized tags
  });

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Filter by Domain
        </h3>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-orange-500 hover:text-orange-600 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-2">
        {/* Main category buttons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {categoryOrder.map((category) => {
            const tags = categorizedTags[category];
            if (!tags || tags.length === 0) return null;
            
            const config = techCategories[category as keyof typeof techCategories];
            const Icon = config.icon;
            const colors = colorClasses[config.color as keyof typeof colorClasses];
            const isActive = activeCategory === category;
            const selectedInCategory = tags.filter(tag => selectedTags.includes(tag)).length;

            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`
                  relative p-3 rounded-lg border-2 transition-all duration-300 transform
                  ${isActive 
                    ? `${colors.bg} ${colors.border} scale-105 shadow-lg` 
                    : `bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:scale-102 ${colors.hover}`
                  }
                `}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon className={`h-6 w-6 ${isActive ? colors.icon : 'text-gray-400'} transition-colors`} />
                  <span className={`text-xs font-semibold text-center ${isActive ? colors.text : 'text-gray-600 dark:text-gray-400'}`}>
                    {category}
                  </span>
                </div>
                {selectedInCategory > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {selectedInCategory}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Technology tags - animated appearance */}
        <div className="min-h-[60px]">
          {categoryOrder.map((category) => {
            const tags = categorizedTags[category];
            if (!tags || tags.length === 0 || activeCategory !== category) return null;
            
            const config = techCategories[category as keyof typeof techCategories];
            const colors = colorClasses[config.color as keyof typeof colorClasses];

            return (
              <div 
                key={`tags-${category}`}
                className="animate-in slide-in-from-top-2 fade-in duration-300"
              >
                <div className={`${colors.bg} rounded-lg p-3 border ${colors.border}`}>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          onClick={() => onTagToggle(tag)}
                          style={{
                            animationDelay: `${index * 50}ms`
                          }}
                          className={`
                            px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                            animate-in zoom-in-95 fade-in
                            ${
                              isSelected
                                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md scale-105'
                                : `bg-white dark:bg-gray-800 ${colors.text} hover:scale-105 shadow-sm hover:shadow-md`
                            }
                          `}
                        >
                          {tag}
                          {isSelected && <X className="inline-block h-3 w-3 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {!activeCategory && (
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => onTagToggle(tag)}
                      style={{
                        animationDelay: `${index * 30}ms`
                      }}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                        animate-in zoom-in-95 fade-in
                        ${
                          isSelected
                            ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md scale-105'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 shadow-sm hover:shadow-md'
                        }
                      `}
                    >
                      {tag}
                      {isSelected && <X className="inline-block h-3 w-3 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedTags.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Active filters:
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
