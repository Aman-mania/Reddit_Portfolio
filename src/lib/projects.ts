import { Project } from './types';

export const projects: Project[] = [
  {
    slug: "connect-u",
    title: "Connect-U: Fair Labor, Fair Wages",
    summary: "MERN platform connecting daily wage laborers with contractors, ensuring fair wages.",
    longDescription: `Connect-U is a comprehensive web platform that bridges the gap between daily wage laborers and contractors, 
    streamlining the hiring process and reducing discovery time significantly. Features smart search and filtering based on location, 
    ratings, and skills, real-time job notifications using Twilio API, secure payment system with Razorpay, and role-based access control.`,
    role: "Backend Lead & Full-stack Developer",
    problemStatement: "Daily wage laborers struggle to find consistent work opportunities, while contractors face difficulties in quickly finding skilled workers for their projects.",
    solution: `**Approach:** Analyzed supply-demand gap and identified key pain points: trust, real-time communication, and secure payments. Chose two-sided marketplace model with role-based access.
    
    **Implementation:** Built MERN stack with JWT authentication for workers/contractors. Integrated Socket.io for real-time messaging and Twilio for SMS notifications. Added location-based search with MongoDB indexing and Redis caching (30% faster load times). Razorpay payment integration in progress.`,
    keyChallenges: [
      "Implemented JWT-based role-based authentication system for workers and contractors",
      "Built real-time notification service with priority-based alerts using Socket.io and Twilio",
      "Integrated Razorpay payment gateway for secure transactions",
      "Optimized database queries and implemented caching to reduce page load time by 30%",
      "Developed search and filtering system based on location, ratings, and skills"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Twilio API", "Razorpay", "JWT (bcrypt)", "Tailwind CSS"],
    repo: "https://github.com/Aman-mania/Connect-U",
    demo: "",
    images: ["/images/connectu-1.png", "/images/connectu-2.png"],
    tags: ["MERN", "Real-time", "Payments", "WebSockets", "Socket.io", "Backend", "MongoDB", "Full-stack"],
    date: "2024-10-01",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/Connect-U
cd Connect-U

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your MongoDB URI, JWT secret, Razorpay keys, Twilio credentials, etc.

# Run the development server
npm run dev

# Visit http://localhost:3000
    `,
    upvotes: 142,
    views: 1250
  },
  {
    slug: "complete-authentication",
    title: "JWT Authentication System",
    summary: "Full-stack auth system with JWT, bcrypt, and user dashboard with contact management.",
    longDescription: `A complete MERN stack authentication application providing secure user verification and role-based access control. 
    Features user registration with password strength validation, JWT-based login, protected dashboard with change password functionality, 
    contact form with message tracking, and modern responsive UI. Deployed on Railway for production use.`,
    role: "Full-stack Developer",
    problemStatement: "Need for a reusable, secure authentication service that can be integrated into multiple applications with proper user management and contact tracking.",
    solution: `**Approach:** Researched industry-standard patterns (JWT, bcrypt) and designed modular system prioritizing security and user experience.
    
    **Implementation:** Built Express.js API with bcrypt password hashing and JWT tokens (5-day expiry). Created protected dashboard with password change functionality and contact form linking to authenticated users. Deployed to Railway with production security.`,
    keyChallenges: [
      "Implemented secure JWT token generation and validation with 5-day expiry",
      "Built bcrypt password hashing for secure storage",
      "Created protected dashboard with user info display and password change",
      "Developed contact form linking messages to authenticated users",
      "Deployed production-ready application on Railway"
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "HTML/CSS/JS"],
    repo: "https://github.com/Aman-mania/Complete-Authentication",
    demo: "https://complete-authentication-production.up.railway.app/",
    images: ["/images/auth-api-1.png"],
    tags: ["Full-stack", "Authentication", "Security", "JWT", "Backend"],
    date: "2024-08-20",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/Complete-Authentication
cd Complete-Authentication

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add PORT, JWT_SECRET, MONGODB_URI

# Run the server
npm run dev

# Visit http://localhost:3000
    `,
    upvotes: 87,
    views: 920
  },
  {
    slug: "e-wallet",
    title: "E-Wallet - Digital Payment Platform",
    summary: "Next.js digital wallet with P2P transfers, bank integration, and transaction management.",
    longDescription: `A modern e-wallet application built with Next.js and TypeScript in a monorepo structure using Turborepo. 
    Features P2P money transfers, bank account integration, on-ramp transactions with approval system, real-time balance updates, 
    comprehensive transaction history with credit/debit tracking, and secure authentication using NextAuth. Uses Prisma ORM with PostgreSQL.`,
    role: "Full-stack Developer",
    problemStatement: "Need for a digital wallet solution with P2P transfers, bank integration, and comprehensive transaction tracking in a scalable monorepo structure.",
    solution: `**Approach:** Chose monorepo architecture to separate user and bank apps for independent deployments. Focused on transaction integrity (atomicity, balance validation) and audit trails.
    
    **Implementation:** Set up Turborepo with two Next.js 15 apps. Built P2P transfers using Prisma transactions for atomic balance updates. Created bank on-ramp workflow with admin approval system. Integrated NextAuth for cross-app authentication and comprehensive transaction history with credit/debit tracking.`,
    keyChallenges: [
      "Set up Turborepo monorepo with separate user and bank apps",
      "Implemented P2P transfer system with balance validation",
      "Built bank integration with on-ramp transaction approval workflow",
      "Created comprehensive transaction history with credit/debit tracking",
      "Integrated NextAuth for secure authentication across apps"
    ],
    tech: ["Next.js", "TypeScript", "Turborepo", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    repo: "https://github.com/Aman-mania/E-Wallet",
    demo: "",
    images: ["/images/ewallet-1.png"],
    tags: ["Next.js", "TypeScript", "Fintech", "Monorepo", "Full-stack"],
    date: "2024-09-15",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/E-Wallet
cd E-Wallet

# Install dependencies
npm install

# Set up environment variables
# Configure DATABASE_URL in .env

# Set up database
npx prisma migrate dev

# Run the development server
npm run dev

# Visit http://localhost:3001 (user app) and http://localhost:3000 (bank app)
    `,
    upvotes: 98,
    views: 1140
  },
  {
    slug: "project-issue-tracker",
    title: "Project Issue Tracker",
    summary: "Full-stack issue tracker with TypeScript, status filtering, and search capabilities.",
    longDescription: `A comprehensive issue tracker built with React and Express.js (both TypeScript) and MongoDB. Features create and manage multiple projects, 
    track issues with status updates (To Do, In Progress, Done), filter issues by status, search functionality for both issues and projects, 
    prioritize issues by level (Low, Medium, High), pagination, and edit capabilities for both projects and issues.`,
    role: "Full-stack Developer",
    problemStatement: "Teams need an efficient issue tracking system with project management, status filtering, search, and prioritization capabilities.",
    solution: `**Approach:** Analyzed existing trackers (Jira, GitHub) and identified MVP features: project organization, issue lifecycle, search/filter, and priority levels. Chose TypeScript full-stack for type safety.
    
    **Implementation:** Built React TypeScript frontend and Express backend with MongoDB. Implemented three-state workflow (To Do → In Progress → Done) with priority system. Added search using MongoDB text indexes, pagination for performance, and Docker deployment.`,
    keyChallenges: [
      "Built project and issue management with proper data relationships",
      "Created search and filtering system for both projects and issues",
      "Developed status workflow (To Do, In Progress, Done)",
      "Implemented pagination for better performance with large datasets"
    ],
    tech: ["React", "TypeScript", "Express", "MongoDB", "Mongoose", "Docker"],
    repo: "https://github.com/Aman-mania/Project_Issue_Tracker",
    demo: "",
    images: ["/images/issue-tracker-1.png"],
    tags: ["TypeScript", "Full-stack", "Backend", "MongoDB",  "React", "Project Management", "CRUD"],
    date: "2024-07-15",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/Project_Issue_Tracker
cd Project_Issue_Tracker

# Backend setup
cd backend
npm install
# Add MONGODB_URI to .env
npm run dev

# Frontend setup (in another terminal)
cd frontend
npm install
npm start

# Visit http://localhost:3000
    `,
    upvotes: 64,
    views: 780
  },
  {
    slug: "e-library",
    title: "E-Library Management System",
    summary: "Digital library with book cataloging, member management, and circulation tracking.",
    longDescription: `E-Library is a comprehensive digital library management system built with Node.js and EJS templating. 
    Features book search and cataloging, member registration and management, borrowing and returning workflow, fine calculation system, 
    and administrative dashboard with analytics. Uses MongoDB for data storage and Bootstrap for responsive UI design.`,
    role: "Full-stack Developer",
    problemStatement: "Traditional library systems lack digital integration, efficient search capabilities, and proper circulation management.",
    solution: `**Approach:** Observed traditional library workflows and identified digitization opportunities: cataloging, member tracking, circulation, and fines. Chose server-side rendering (EJS) for faster loads and SEO.
    
    **Implementation:** Built Node.js/Express with MVC architecture. Created book catalog with availability tracking, member registration with borrowing history, and automatic fine calculation for overdue returns. Added admin dashboard with analytics and MongoDB text search for fast lookups.`,
    keyChallenges: [
      "Built comprehensive book cataloging and search system",
      "Implemented member registration and management via admin (RBAC)",
      "Users can preview/download or read books online",
      "Developed a admin specific portal where they can add, update or delete books from the library",
    ],
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    repo: "https://github.com/Aman-mania/E-Library",
    demo: "",
    images: ["/images/elibrary-1.png"],
    tags: ["Full-stack", "Node.js", "CRUD", "Library Management"],
    date: "2024-06-10",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/E-Library
cd E-Library

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add MONGODB_URI

# Run the development server
npm start

# Visit http://localhost:3000
    `,
    upvotes: 52,
    views: 650
  },
  {
    slug: "product-service-api",
    title: "Product Service REST API",
    summary: "Spring Boot RESTful API with CRUD operations, JPA, and Swagger documentation.",
    longDescription: `A robust RESTful API built with Spring Boot for comprehensive product management. Implements CRUD operations, 
    advanced search and filtering, pagination, sorting, and role-based access control. Features product categorization, inventory tracking, 
    Spring Data JPA for database operations, and Swagger for API documentation.`,
    role: "Backend Developer",
    problemStatement: "NA -Just needed to practice my Spring Boot skills",
    solution: `**Approach:** Studied Spring Boot microservice architecture and chose layered design (Controller → Service → Repository) for separation of concerns. Focused on RESTful principles and Spring Data JPA for database abstraction.
    
    **Implementation:** Built Spring Boot app with complete CRUD endpoints following REST conventions. Implemented product categorization, inventory tracking, and pagination. Integrated Swagger for API documentation, validation annotations, and global exception handling. Used MySQL with JPA relationships.`,
    keyChallenges: [
      "Implemented clean architecture with Spring Boot best practices",
      "Used Spring Data JPA for efficient database operations",
      "Built comprehensive CRUD endpoints with proper HTTP methods",
      "Implemented validation and exception handling, basically tried to implement everything I can find on Spring Boot documentation online"
    ],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Swagger"],
    repo: "https://github.com/Aman-mania/Product-Service-API",
    demo: "",
    images: ["/images/product-api-1.png"],
    tags: ["Spring Boot", "Java", "REST API", "Backend", "Microservices"],
    date: "2024-05-20",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/Product-Service-API
cd Product-Service-API

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run

# API will be available at http://localhost:8080
# Access Swagger UI at http://localhost:8080/swagger-ui.html
    `,
    upvotes: 45,
    views: 580
  },
  {
    slug: "laptop-price-predictor",
    title: "Laptop Price Predictor",
    summary: "ML web app predicting laptop prices using Flask and scikit-learn.",
    longDescription: `A machine learning application that predicts laptop prices based on various specifications. Built with Flask for the web interface and scikit-learn for the ML model. 
    Users can input laptop specifications including brand, type, RAM, weight, screen size, resolution, CPU, storage (HDD/SSD), GPU, and OS. 
    The model calculates PPI and uses a trained pipeline to predict accurate prices in INR. Features a clean, responsive UI with real-time predictions.`,
    role: "ML Developer",
    problemStatement: "NA -Just wanted to practice my ML/Data science skills",
    solution: `**Approach:** Performed EDA to identify key price drivers (RAM, storage, brand, processor). Compared regression models and engineered PPI feature as screen quality indicator.
    
    **Implementation:** Trained Random Forest model using scikit-learn with feature engineering pipeline (PPI calculation, encoding, scaling). Built Flask web app with real-time prediction endpoint returning prices in INR. Designed responsive UI with form validation.`,
    keyChallenges: [
      "Built ML model using scikit-learn with regression algorithms",
      "Implemented feature engineering including PPI calculation",
      "Designed responsive UI with form validation",
      "Integrated model pipeline for real-time predictions"
    ],
    tech: ["Python", "Flask", "scikit-learn", "pandas", "numpy", "HTML/CSS", "JavaScript"],
    repo: "https://github.com/Aman-mania/Laptop_Price_Predictor",
    demo: "",
    images: ["/images/laptop-predictor-1.png"],
    tags: ["Machine Learning", "Python", "Flask", "Data Science"],
    date: "2024-04-15",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/Laptop_Price_Predictor
cd Laptop_Price_Predictor

# Install dependencies
pip install -r requirements.txt

# Run the Flask app
python app.py

# Visit http://localhost:5000
    `,
    upvotes: 38,
    views: 490
  },
  {
    slug: "eda-clustering",
    title: "EDA & Clustering Algorithms",
    summary: "Jupyter notebook demonstrating exploratory data analysis and clustering techniques.",
    longDescription: `A comprehensive data science project showcasing exploratory data analysis (EDA) techniques and various clustering algorithms. 
    Implemented in Jupyter Notebook with detailed visualizations and explanations. Covers data preprocessing, feature engineering, K-means clustering, 
    hierarchical clustering, DBSCAN, and performance evaluation metrics. Includes real-world dataset analysis with matplotlib and seaborn visualizations.`,
    role: "Data Scientist",
    problemStatement: "NA - Wanted to practice/explore Data science and tried demonstrate proficiency in EDA and clustering techniques using Python and Jupyter Notebook.",
    solution: `**Approach:** Started with comprehensive EDA to understand data distribution and correlations. Compared multiple clustering algorithms (K-means, hierarchical, DBSCAN) to identify best fit for dataset characteristics.
    
    **Implementation:** Performed preprocessing (missing values, outliers, normalization) and EDA with matplotlib/seaborn (heatmaps, pair plots). Implemented K-means with elbow method, hierarchical clustering with dendrograms, and DBSCAN for density-based clustering. Evaluated using silhouette score and Davies-Bouldin index.`,
    keyChallenges: [
      "Performed comprehensive exploratory data analysis with visualizations",
      "Implemented multiple clustering algorithms (K-means, hierarchical, DBSCAN)",
      "Created detailed visualizations using matplotlib and seaborn",
      "Evaluated clustering performance with appropriate metrics",
      "Documented complete workflow with explanations and insights"
    ],
    tech: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    repo: "https://github.com/Aman-mania/EDA_Clustering_DS",
    demo: "",
    images: ["/images/eda-clustering-1.png"],
    tags: ["Data Science", "Machine Learning", "Python", "EDA", "Clustering"],
    date: "2024-03-10",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/EDA_Clustering_DS
cd EDA_Clustering_DS

# Install dependencies
pip install -r requirements.txt

# Open Jupyter Notebook
jupyter notebook

# Open the .ipynb file in the browser
    `,
    upvotes: 31,
    views: 420
  },
  {
    slug: "simon-game",
    title: "Simon Game - Memory Challenge",
    summary: "Interactive memory game built with jQuery, testing pattern recognition and recall.",
    longDescription: `Simon Game is a classic memory challenge game where players must remember and replay increasingly complex 
    sequences of button patterns along with their unique sounds. Developed as a JavaScript and jQuery learning project, the game features 
    progressive difficulty levels, sound effects for each button, high score tracking per session, and responsive button animations. 
    The game tests memory and concentration skills through an engaging, colorful interface.`,
    role: "Frontend Developer",
    problemStatement: "Need for an interactive game to demonstrate JavaScript DOM manipulation, event handling, and jQuery skills in a fun, engaging format.",
    solution: `**Approach:** Recreated classic Simon Game to practice JavaScript fundamentals: DOM manipulation, event handling, and timers. Broke down game logic into pattern generation, playback, input capture, and validation.
    
    **Implementation:** Built four colored buttons with unique sounds. Implemented random pattern generation and sequence playback using setTimeout. Captured user clicks for validation against pattern. Added progressive difficulty and session-based high score tracking. Used jQuery for animations and audio synchronization.`,
    keyChallenges: [
      "Implemented game logic for random pattern generation and sequence validation",
      "Created smooth button animations and sound synchronization",
      "Built session-based high score tracking system",
      "Handled user input timing and sequence matching",
      "Designed responsive and visually appealing button layout"
    ],
    tech: ["JavaScript", "jQuery", "HTML5", "CSS3"],
    repo: "https://github.com/Aman-mania/SimonGame",
    demo: "",
    images: ["/images/simon-game-1.png"],
    tags: ["JavaScript", "jQuery", "Game", "Frontend"],
    date: "2024-02-10",
    howToRun: `
# Clone the repository
git clone https://github.com/Aman-mania/SimonGame
cd SimonGame

# Open index.html in your browser
# Or use a local server
python -m http.server 8000
# Visit http://localhost:8000
    `,
    upvotes: 28,
    views: 380
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}
