

# Aman Biswakarma — Reddit-Themed Portfolio

This is my personal portfolio, inspired by Reddit’s design and interaction. It’s a showcase of my projects, skills, certifications, and professional journey, built with Next.js, React, and Tailwind CSS.

## What’s Inside

- **Reddit-Style Project Feed:** All major projects as upvotable posts, with tags, search, and filters.
- **Certifications:** Dedicated cards for Truxie Internship, Spring Boot & Hibernate, and AWS Solutions Architect, on both About and Resume pages.
- **Resume:** Always up-to-date, fetched from Google Drive, with preview and download.
- **About Me:** Bio, skills, timeline, education, achievements, and certifications.
- **Contact:** Simple contact form and direct links to my profiles.
- **Project Details:** Each project has its own page with a full write-up, images, and links.
- **Dark Mode:** Fully responsive and theme-aware, with a Reddit-inspired look.

## Pages

- `/` — Project feed (Reddit style)
- `/about` — Bio, skills, timeline, certifications
- `/resume` — Resume preview/download, certifications
- `/contact` — Contact form and links
- `/project/[slug]` — Project details

## Tech Stack

- Next.js 15 (App Router)
- React, TypeScript
- Tailwind CSS
- Lucide Icons
- Fuse.js (search)

## Certifications

All certifications are shown as cards with a short description and a link to the actual certificate. To update, edit the relevant section in `src/app/about/page.tsx` and `src/app/resume/page.tsx`.

---

## Getting Started

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

To customize, edit your project data in `src/lib/projects.ts` and update your personal info in the About, Resume, and Contact pages as needed.

