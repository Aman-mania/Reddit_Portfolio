import Link from 'next/link';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import LeetCodeIcon from './LeetCodeIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">r/Aman_Biswakarma</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-stack developer specializing in MERN stack, Spring Boot, and scalable backend systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amanbiswakarma.ak@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Aman Biswakarma. Built with Next.js & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
