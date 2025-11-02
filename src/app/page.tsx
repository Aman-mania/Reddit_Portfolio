import { projects } from "@/lib/projects";
import { TrendingUp, Code2, Briefcase, ArrowRight, CheckCircle2, Trophy, Users, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import LeetCodeIcon from "@/components/LeetCodeIcon";

export default function Home() {
  // Get top 3 projects for home page (Connect-U, Product Service API, E-Library)
  const featuredProjects = projects.filter(p => 
    ['connect-u', 'product-service-api', 'e-library'].includes(p.slug)
  );

  return (
    <div className="space-y-12">
      {/* Hero Section with cover image */}
      <div className="max-w-4xl mx-auto">
      <div className="relative rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="h-56 md:h-72 relative">
          {/* Background Image */}
          <img 
            src="/images/cover 1.png" 
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

          {/* Bottom-left positioned content */}
          <div className="absolute left-0 bottom-0 z-10 w-full">
            <div className="px-6 pb-6 md:px-8 md:pb-8 text-white">
              <div className="max-w-3xl text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">r/Aman_Biswakarma</h1>

                <div className="flex flex-wrap gap-2 md:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="whitespace-nowrap">SDE (Backend) Intern @ Truxie</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Code2 className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="whitespace-nowrap">9+ Major Projects</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
                    <a href="https://leetcode.com/aman_kumar04" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1 whitespace-nowrap">
                      <LeetCodeIcon className="h-3 w-3 md:h-4 md:w-4" />
                      250+ Problems
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6">
                  <Link href="/about" className="px-4 py-2 text-sm md:text-base bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">About Me</Link>
                  <Link href="/projects" className="px-4 py-2 text-sm md:text-base bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium border-2 border-white">View All Projects</Link>
                  <Link href="/contact" className="px-4 py-2 text-sm md:text-base bg-transparent text-white rounded-lg hover:bg-white/20 transition-colors font-medium border-2 border-white">Contact Me</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-8">
      {/* Skills Section - Brief Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Code2 className="h-6 w-6 text-orange-500" />
            Core Skills
          </h2>
          <Link 
            href="/about#skills" 
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1 text-sm"
          >
            View All Skills <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'Java', 'Python', 'C++'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Full-stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'Spring Boot', 'NestJS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'AWS', 'MongoDB', 'PostgreSQL'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-orange-500" />
            Experience
          </h2>
          <Link 
            href="/experience" 
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1 text-sm"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="border-l-4 border-orange-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Software Developer Intern
              </h3>
              <p className="text-orange-600 dark:text-orange-400 font-semibold">Truxie</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">May 2024 - Present</span>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Building scalable backend systems for a logistics platform using NestJS, PostgreSQL, and MikroORM. 
            Developed 10+ RESTful APIs, integrated Firebase Cloud Messaging for real-time notifications, and 
            improved query performance by 25%.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {['NestJS', 'PostgreSQL', 'MikroORM', 'Firebase FCM', 'Docker', 'TypeScript'].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Designed RESTful APIs for shipment, driver, and quote management modules</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Integrated real-time notification system using Firebase Cloud Messaging</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Optimized database queries resulting in 25% performance improvement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>
          <Link 
            href="/projects" 
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          {featuredProjects.map((project) => (
            <PostCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-orange-500" />
            Achievements & Highlights
          </h2>
          <Link 
            href="/about" 
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1 text-sm"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group flex items-start gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500 hover:translate-x-2 transition-transform duration-300">
            <Users className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Tech Leadership - R.O.F.I.E.S.</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Head of R.O.F.I.E.S. tech club - Leading 200+ members, organizing events and mentoring students
              </p>
            </div>
          </div>
          <div className="group flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 hover:translate-x-2 transition-transform duration-300">
            <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 inline-flex items-center gap-2">
                Problem Solving
                <a 
                  href="https://leetcode.com/aman_kumar04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600"
                  aria-label="Visit LeetCode Profile"
                >
                  <LeetCodeIcon className="h-5 w-5 hover:scale-110 transition-all duration-200" />
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Solved 250+ problems with 6+ badges, demonstrating strong algorithmic skills
              </p>
            </div>
          </div>
          <div className="group flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500 hover:translate-x-2 transition-transform duration-300">
            <Trophy className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Hackathon Winner</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2nd place in Inter-college hackathon (HackIn) with E-Library Management System
              </p>
            </div>
          </div>
          <div className="group flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500 hover:translate-x-2 transition-transform duration-300">
            <BookOpen className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Editorial Team - Eminence'24</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Core member of Editorial team for Eminence'24 - Official annual magazine of IIIT Pune
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
