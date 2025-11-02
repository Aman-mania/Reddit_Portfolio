import { Briefcase, Calendar, MapPin, ExternalLink, Code2, Database, Server, Zap, CheckCircle2, TrendingUp, Building, Linkedin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Aman Biswakarma',
  description: 'Professional experience and internships of Aman Biswakarma - Software Developer Intern at Truxie.',
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
        <p className="text-xl opacity-90">
          Building scalable backend systems and real-time logistics solutions
        </p>
      </div>

      {/* Timeline indicator */}
      <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <TrendingUp className="h-6 w-6 text-orange-500" />
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">Current Status</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Software Developer Intern • Open to full-time opportunities</p>
        </div>
      </div>

      {/* Main Experience Card - Truxie */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-orange-500 overflow-hidden">
        {/* Company Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Software Developer Intern</h2>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="font-semibold">Truxie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>May 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Remote / Pune, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.truxie.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
              <a
                href="https://www.linkedin.com/company/truxie/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* About Company */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              About Truxie
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Truxie is a logistics platform that simplifies and optimizes the transportation process by connecting 
              shippers, drivers, and vehicles on a unified platform. The platform focuses on digitalizing shipment tracking, 
              automating quote generation, and ensuring real-time communication across all logistics stakeholders.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              While my primary work involved NestJS, my background in <span className="font-semibold text-orange-600 dark:text-orange-400">Java Spring Boot</span> development 
              helped me quickly grasp backend architecture patterns, RESTful API design principles, and layered component structures—concepts 
              I'd previously applied in building production-ready Spring Boot microservices with JPA and MySQL.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-orange-500" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'NestJS',
                'Node.js',
                'TypeScript',
                'PostgreSQL',
                'MikroORM',
                'Firebase FCM',
                'EXPO',
                'Docker',
                'Git/Github',
                'REST APIs',
                'Swagger',
                'Jest',
                'CI/CD Pipelines'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Server className="h-5 w-5 text-orange-500" />
              Key Contributions
            </h3>
            <div className="space-y-6">
              {/* Notification Service */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Notification Service Architecture
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Designed and built notification service from scratch with user-specific, priority-based alerts on both web (In-app) and mobile (Push notifications)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Implemented notification persistence for different events (shipment creation, driver assignment, status updates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integrated Firebase Cloud Messaging using EXPO with token entity management for push notifications to mobile app</span>
                  </li>
                </ul>
              </div>

              {/* Admin Module */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Admin Module & Authorization
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Built comprehensive admin module with authorization-driven workflows for role-based access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Developed admin dashboard endpoints: shipper CRUD operations, driver management, and status retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Created driver/shipper retrieval by phone/email and index (idx) for efficient admin queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Created document verification service via admin for both shipper and driver</span>
                  </li>
                </ul>
              </div>

              {/* Core APIs & Document Generation */}
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Core APIs & Document Automation
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Built shipment management APIs (create, get status, update) and document upload endpoint, applying RESTful principles from Spring Boot experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated Bills/Invoice related documents (Eg. Bill of Transport) generation triggered on shipment related events using Puppeteer and handlebars templates with comprehensive test coverage</span>
                  </li>
                </ul>
              </div>

              {/* Database & Testing */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Database Optimization & Testing
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Optimized transactional queries reducing data load-time and improving overall performance by 25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Developed database seeders using Faker library for all tables ensuring consistent test data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Optimized database access from n+1 queries for each entity to a single batch query, reducing access time by 15%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Implemented unit testing with Jest and resolved memory leak issues in e2e tests</span>
                  </li>
                </ul>
              </div>

              {/* CI/CD */}
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  CI/CD & DevOps
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Optimized CI/CD pipelines for automated testing and deployments with Docker integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Added valuable tests for critical workflows, improving overall test coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Implemented monitoring and logging for CI/CD pipelines using ELK stack</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact & Achievements */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" />
              Impact Metrics
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Notification System</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Built from scratch with priority-based alerts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">25%</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Query Optimization/Performance</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Improvement via transactional optimization
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Code2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Document Automation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Automated document generation using Puppeteer (Devtools)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Seeders using Faker</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Consistent test data across all tables
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Technical Highlights
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">System Design</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">▸</span>
                      <span>Built notification system architecture from ground up</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">▸</span>
                      <span>Authorization-driven admin workflows with role management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">▸</span>
                      <span>Layered architecture (DTOs, repositories, services) inspired by Spring Boot patterns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Quality & Performance</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">▸</span>
                      <span>Jest unit tests with e2e memory leak debugging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">▸</span>
                      <span>Transactional query patterns for data consistency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-500">▸</span>
                      <span>CI/CD pipeline optimization for automated workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Interested in Working Together?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I'm currently open to full-time backend developer positions and exciting projects
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Get in Touch
          </a>
          <a
            href="/resume"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
