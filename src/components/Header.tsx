'use client';

import Link from 'next/link';
import { Github, Linkedin, Code2, Menu, X, Mail } from 'lucide-react';
import LeetCodeIcon from './LeetCodeIcon';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
            <span className="text-lg md:text-xl font-bold">
              r/<span className="text-orange-500">Aman_Biswakarma</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Social links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amanbiswakarma.ak@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
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
              href="https://leetcode.com/u/aman_kumar_04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              <LeetCodeIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t dark:border-gray-800 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-orange-500 transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 mt-6 px-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amanbiswakarma.ak@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
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
                href="https://leetcode.com/u/aman_kumar_04/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
