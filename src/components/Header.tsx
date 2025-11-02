'use client';

import Link from 'next/link';
import { Github, Linkedin, Code2 } from 'lucide-react';
import LeetCodeIcon from './LeetCodeIcon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">
              r/<span className="text-orange-500">Aman_Biswakarma</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Social links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Aman-mania"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-biswakarma-797250269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/aman_kumar04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              <LeetCodeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
