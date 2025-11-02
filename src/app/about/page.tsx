import { Code2, Award, Users, BookOpen, Trophy, TrendingUp, Calendar, GraduationCap, Briefcase, Baby, HardDrive } from 'lucide-react';
import type { Metadata } from 'next';
import LeetCodeIcon from '@/components/LeetCodeIcon';

export const metadata: Metadata = {
  title: 'About - Aman Biswakarma',
  description: 'Learn more about Aman Biswakarma - Full-stack (Backend) developer and tech leader.',
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Cover Image Hero - Reddit Style */}
      <div className="max-w-4xl mx-auto">
      <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cover 1.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="px-4 pb-6 md:pb-10 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">r/About_Me</h1>
            <p className="text-lg opacity-90">
              Full-stack (Backend Oriented) Developer | Tech Leader
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 space-y-8">
      {/* Introduction with Profile Photo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Profile Photo - Top Right on desktop, centered on mobile */}
          <div className="float-none md:float-right mb-6 md:ml-6 md:mb-4 flex justify-center md:block">
            <img
              src="/images/profile photo.jpg"
              alt="Aman Biswakarma"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-orange-500 shadow-xl ring-4 ring-orange-100 dark:ring-orange-900/30 transition-transform hover:scale-105 duration-300"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center md:text-left">
            Hi, I'm Aman Biswakarma
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed mb-4">
              I'm a passionate full-stack developer specializing in building scalable web applications
              using the <span className="font-semibold text-orange-600 dark:text-orange-400">MERN stack and Java Spring Boot</span>. With a strong foundation in both frontend and backend
              technologies, I create comprehensive solutions that solve real-world problems.
            </p>
            <p className="leading-relaxed mb-4">
              My journey in software development has been driven by curiosity and a desire to make a
              positive impact. From developing platforms that connect daily wage laborers with contractors
              to building digital wallets and logistics management systems, I focus on projects that matter.
            </p>
            <p className="leading-relaxed">
              Beyond coding, I'm deeply involved in the tech community as the Head of R.O.F.I.E.S. tech club,
              where I mentor fellow students and organize technical events.
            </p>
          </div>
        </div>

      {/* Timeline */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-700">
          <Calendar className="h-6 w-6 text-orange-500" />
          My Journey
        </h2>
        <div className="relative">
          {/* Timeline items */}
          <div className="space-y-8">
            {/* 2004 - Birth - Starting Point */}
            <div className="relative flex items-center gap-6 group animate-in slide-in-from-left-8 fade-in duration-700 delay-500">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-gray-800 z-10">
                <Baby className="h-6 w-6" />
              </div>
              <div className="flex-1 flex items-center">
                <div className="h-0.5 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
              </div>
              <div className="px-4 py-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Date of Birth: 07/01/2004</p>
              </div>
            </div>

            {/* Vertical Timeline Line starts here */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500"></div>
              
              <div className="space-y-8">
                {/* 2019 - 10th */}
                <div className="relative flex items-start gap-6 group animate-in slide-in-from-left-8 fade-in duration-700 delay-700">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-gray-800 z-10 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                    <GraduationCap className="h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-5 border-l-4 border-blue-500 group-hover:shadow-xl group-hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2019</span>
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Education</span>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1mQJLrzWACVX3LOxk5Yg-fDoRKB1C5oFY/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        aria-label="View 10th Grade Certificate"
                      >
                        <HardDrive className="h-5 w-5" />
                      </a>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      ICSE - 10th Grade
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Deepti Convent School • Score: 83.6%
                    </p>
                  </div>
                </div>

                {/* 2021 - 12th */}
                <div className="relative flex items-start gap-6 group animate-in slide-in-from-left-8 fade-in duration-700 delay-[900ms]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-gray-800 z-10 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                    <GraduationCap className="h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-5 border-l-4 border-green-500 group-hover:shadow-xl group-hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-green-600 dark:text-green-400">2021</span>
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">Education</span>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1L73sBZL3iJma5T4K0lSwRZFierqN4EYc/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                        aria-label="View 12th Grade Certificate"
                      >
                        <HardDrive className="h-5 w-5" />
                      </a>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      CHSE - 12th Grade
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Royal Junior College • Score: 85.83%
                    </p>
                  </div>
                </div>

                {/* 2022 - JEE */}
                <div className="relative flex items-start gap-6 group animate-in slide-in-from-left-8 fade-in duration-700 delay-[1100ms]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-gray-800 z-10 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                    <Trophy className="h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-5 border-l-4 border-purple-500 group-hover:shadow-xl group-hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl font-bold text-purple-600 dark:text-purple-400">2022</span>
                      <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">Achievement</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      JEE Qualified 🎯
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Successfully cleared one of India's toughest engineering entrance exams
                    </p>
                  </div>
                </div>

                {/* 2022 - IIIT Pune */}
                <div className="relative flex items-start gap-6 group animate-in slide-in-from-left-8 fade-in duration-700 delay-[1300ms]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-gray-800 z-10 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                    <GraduationCap className="h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-5 border-l-4 border-indigo-500 group-hover:shadow-xl group-hover:translate-x-2 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">2022</span>
                        <span className="px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full">Education</span>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1z1qrrlXgEwlLpw65wnGglK2rP4ChC9Q6/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        aria-label="View Academic Records"
                      >
                        <HardDrive className="h-5 w-5" />
                      </a>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      IIIT Pune - B.Tech CSE 🎓
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Computer Science & Engineering • CGPA: 7.26 • Final Year (Passout: May 2026)
                    </p>
                  </div>
                </div>

                {/* 2024 - Truxie */}
                <div className="relative flex items-start gap-6 group animate-in slide-in-from-left-8 fade-in duration-700 delay-[1500ms]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg ring-4 ring-white dark:ring-gray-800 z-10 animate-pulse transition-transform group-hover:scale-125 group-hover:rotate-12 duration-300">
                    <Briefcase className="h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-5 border-l-4 border-orange-500 group-hover:shadow-2xl group-hover:translate-x-2 transition-all duration-300 ring-2 ring-orange-200 dark:ring-orange-800">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl font-bold text-orange-600 dark:text-orange-400">2024</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full animate-pulse">Current</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Software Developer Intern @ Truxie 💼
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Started internship in May 2024, working on scalable backend systems with NestJS
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs rounded">NestJS</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs rounded">PostgreSQL</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs rounded">MikroORM</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs rounded">Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise - Comprehensive */}
      <div id="skills" className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <Code2 className="h-6 w-6 text-orange-500" />
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded"></span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded"></span>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'Socket.io'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded"></span>
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'Spring Boot', 'NestJS', 'REST APIs', 'JWT', 'Socket.io'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database & Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-cyan-500 rounded"></span>
              Database & Hosting
            </h3>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'MongoDB', 'PostgreSQL', 'MikroORM', 'Redis', 'Kafka', 'AWS', 'Vercel', 'Render', 'Railway'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-orange-500 rounded"></span>
              DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'Git', 'GitHub', 'Postman', 'Linux (Ubuntu)'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* IDE & Development Environment */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-pink-500 rounded"></span>
              IDE & Environment
            </h3>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Eclipse', 'IntelliJ IDEA', 'Jupyter Notebook', 'Google Colab'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Coursework Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-indigo-500 rounded"></span>
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Data Structures & Algorithms',
              'Database Management Systems',
              'Operating Systems',
              'Object Oriented Programming',
              'Machine Learning & Deep Learning',
              'Computer Networks',
              'Engineering Mathematics (I-IV)',
              'DevOps & Cloud Computing',
              'Human-Computer Interaction',
              'Software Engineering',
              'Information Systems Security'
            ].map((course) => (
              <span key={course} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-orange-500" />
          Achievements & Highlights
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
            <Users className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Leadership - R.O.F.I.E.S. Tech Club</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Head of R.O.F.I.E.S. (Robotics community of IIIT Pune) - Leading a team of 200+ members, organizing events and mentoring students
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
            <TrendingUp className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 inline-flex items-center gap-2">
                Problem Solving - LeetCode
                <a 
                  href="https://leetcode.com/aman_kumar04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 transition-all duration-200 hover:scale-110"
                  aria-label="Visit LeetCode Profile"
                >
                  <LeetCodeIcon className="h-5 w-5" />
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solved 250+ problems with 6+ badges • 150+ days streak, demonstrating strong algorithmic skills and consistency
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
            <Trophy className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Hackathon Winner</h3>
              <p className="text-gray-600 dark:text-gray-400">
                2nd place in college hackathon with E-Library Management System
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
            <BookOpen className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Editorial Team - Eminence'24</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Core member of Editorial team for Eminence'24 - Official annual magazine of IIIT Pune
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
            <Users className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Marketing & PR Lead - IConclave'23</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Co-head of Marketing and PR for IConclave'23 - Official annual Techno-Cultural fest of IIIT Pune
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Bachelor of Technology in Computer Science & Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Indian Institute of Information Technology (IIIT), Pune • 2022 - May 2026 (Expected)
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              CGPA: 7.26 • Final Year
            </p>
          </div>
        </div>
      </div>

      {/* What I'm Working On */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          What I'm Currently Working On
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">▸</span>
            <span>
              Developing an{' '}
              <a 
                href="https://github.com/Aman-mania/ExpenseManager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
              >
                Expense Manager application
              </a>
              {' '}that allows users to link multiple bank accounts and monitor expenses by category and frequency
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">▸</span>
            <span>Deepening expertise in Java Spring Boot microservices architecture and related technologies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">▸</span>
            <span>Exploring cloud-native architectures and containerization with Docker & Kubernetes (DevOps)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">▸</span>
            <span>Contributing to open-source projects and building my GitHub profile</span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}
