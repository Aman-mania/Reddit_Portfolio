'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ResumePage() {
  const [pdfError, setPdfError] = useState(false);
  const resumePath = '/Aman_Biswakarma_Resume.pdf';

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-xl opacity-90">
          Preview and download my detailed resume
        </p>
      </div>

      {/* Download Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <FileText className="h-12 w-12 text-orange-500" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Aman_Biswakarma_Resume.pdf
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: November 2025
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={resumePath}
              download
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              <Download className="h-5 w-5 mr-2" />
              Download
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Open in New Tab
            </a>
          </div>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Resume Preview
          </h2>
        </div>
        
        <div className="relative w-full" style={{ minHeight: '800px' }}>
          {!pdfError ? (
            <>
              {/* PDF Embed */}
              <object
                data={resumePath}
                type="application/pdf"
                className="w-full h-full"
                style={{ minHeight: '800px' }}
                onError={() => setPdfError(true)}
              >
                {/* Fallback for browsers that don't support object tag */}
                <iframe
                  src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full h-full border-0"
                  style={{ minHeight: '800px' }}
                  title="Resume Preview"
                  onError={() => setPdfError(true)}
                />
              </object>
            </>
          ) : (
            /* Fallback message when PDF is not available */
            <div className="flex flex-col items-center justify-center p-12 text-center" style={{ minHeight: '800px' }}>
              <FileText className="h-24 w-24 text-gray-300 dark:text-gray-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Resume Preview Not Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                The PDF preview cannot be displayed. Please download the resume or open it in a new tab to view.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-6 max-w-2xl">
                <p className="text-sm text-blue-800 dark:text-blue-300 mb-4">
                  <strong>Setup Required:</strong> To enable the preview, place your resume PDF file in the 
                  <code className="mx-1 px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded">public</code> folder with the name:
                </p>
                <code className="block text-sm bg-gray-900 text-gray-100 p-3 rounded">
                  public/Aman_Biswakarma_Resume.pdf
                </code>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href={resumePath}
                  download
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
                <button
                  onClick={() => setPdfError(false)}
                  className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resume Summary (visible below preview) */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Resume Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
                      {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Education
              </h3>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                  Bachelor of Technology (Computer Science) — IIIT Pune
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: 7.26 • Passout: May 2026</p>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                Full-stack software engineer with practical experience building backend services and web
                applications using Spring Boot and the MERN/TypeScript stack. Delivered production features
                across notification delivery, admin tooling, and document automation. Comfortable working
                across the stack — from database schema and indexing to APIs, CI/CD pipelines and unit/integration testing.
              </p>
            </div>

            {/* Core Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java',
                  'Spring Boot',
                  'TypeScript',
                  'React',
                  'Node.js',
                  'Express',
                  'PostgreSQL',
                  'MongoDB',
                  'DevOps',
                  'Git/Github',
                  'Jest',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                <a href="/about#skills" className="text-orange-500 hover:text-orange-600 font-medium">
                  View complete skill set →
                </a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Featured Projects */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Featured Projects
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Connect-U</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    MERN platform connecting daily wage laborers with contractors
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">CONSULO</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    AI Mental Health Chatbot with emotion detection
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">E-Library System</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Hackathon winner - Digital library management
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Key Achievements
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Head — R.O.F.I.E.S. tech club (IIIT Pune)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>
                    <a 
                      href="https://leetcode.com/aman_kumar04" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 underline inline-flex items-center gap-1"
                    >
                      250+ problems solved
                    </a>
                    {' '}with 6+ badges
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>2nd place — College hackathon (team project)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Core member — Editorial team, Eminence'24 (IIIT Pune)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Co-head — Marketing & PR, IConclave'23 (IIIT Pune fest)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
