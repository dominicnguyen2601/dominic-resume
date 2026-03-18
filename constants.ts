import { Experience, Project, SkillCategory, Testimonial, RatingCategory } from './types';

export const PERSONAL_INFO = {
  name: "Dominic Nguyen",
  role: "Senior Software Engineer",
  email: "tientainguyen.coding@gmail.com",
  phone: "+84 34783 6767",
  location: "Vietnam",
  about: "I am a Software Engineer with over 5 years of experience specializing in front-end technology. I have extensive experience with the development cycle for dynamic web projects, application design, and digital transformation. My expertise spans advanced HTML5, CSS, ReactJS, NextJS, VueJS, and mobile development with React Native.",
  education: "FPT University, Software Engineering (2016-2020) | EnglishScore Certificate (B2)"
};

// Google Docs CV - exports as PDF when downloaded
// To update: Edit the Google Doc directly, changes sync automatically
export const CV_URL = "https://docs.google.com/document/d/1ZUKZpoGppFHe0530xIf9YQvuaAXSVUQFFpNjxwsvamU/export?format=pdf";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Core",
    skills: ["ReactJS", "NextJS", "VueJS", "NuxtJS", "Angular", "TypeScript", "HTML5", "CSS3", "TailwindCSS"]
  },
  {
    name: "Mobile",
    skills: ["React Native", "Swift", "PWA"]
  },
  {
    name: "Backend & Cloud",
    skills: ["NodeJS", "ExpressJS", "Azure Functions (C#)", "Docker", "AWS", "Redis", "Microsoft Graph API", "SharePoint Framework (SPFx)"]
  },
  {
    name: "Tools & Methodologies",
    skills: ["Git", "Jenkins", "Agile/Scrum", "CI/CD", "Figma", "Storybook", "Unit Testing (Jest/Enzyme)"]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp1",
    role: "SharePoint Developer (SPFx) | E-Office",
    company: "Just Engineer Software (VinGroup)",
    period: "10/2025 – Current",
    description: "Development of an enterprise-grade Business Process Management (BPM) and legal document approval system fully integrated within the Microsoft 365 ecosystem.",
    responsibilities: [
      "Designed and developed high-performance SPFx applications using React and PnPJS.",
      "Developed Azure Functions (C#) for complex business logic and polling mechanisms.",
      "Implemented OAuth 2.0 authentication flows with Microsoft Entra ID.",
      "Integrated background file-processing services for watermarks and format conversion."
    ],
    technologies: ["SPFx", "React", "Azure Functions", "Microsoft Graph API", "TypeScript", "FluentUI"]
  },
  {
    id: "exp2",
    role: "Front end Web | iOS Developer",
    company: "Just Engineer Software (The Very Group)",
    period: "12/2024 – 08/2025",
    description: "Contributed to the large-scale digital transformation of one of the UK’s largest eCommerce platforms, modernizing legacy systems into high-performance architecture.",
    responsibilities: [
      "Implemented modular UI components using ReactJS and React Native integrated with Ampliance CMS.",
      "Optimized iOS application rendering cycle (Fast Refresh, Native Bridge).",
      "Migrated legacy features into micro-frontends/micro-apps.",
      "Improved CI/CD workflows using Docker, Jenkins, and AWS."
    ],
    technologies: ["ReactJS", "React Native", "Swift", "Storybook", "Docker", "AWS", "Redis"]
  },
  {
    id: "exp3",
    role: "Front-end Web Developer",
    company: "Just Engineer Software (Corsair Gaming)",
    period: "01/2024 – 12/2024",
    description: "Developed a web-based configuration tool for Corsair devices enabling users to customize lighting and macros directly from the browser.",
    responsibilities: [
      "Collaborated on feature planning and strategy.",
      "Implemented responsive layouts based on Figma designs.",
      "Created reusable, performance-optimized components.",
      "Refactored components to reduce re-rendering."
    ],
    technologies: ["NextJS", "IndexDB", "Chakra UI", "NodeJS"]
  },
  {
    id: "exp4",
    role: "Project Lead | Front end Developer",
    company: "Just Engineer Software (Virtual Weigh Station)",
    period: "06/2023 – 01/2024",
    description: "Led front-end development of a real-time vehicle monitoring system using Weigh-in-Motion technology.",
    responsibilities: [
      "Defined project skeleton, architecture, and state management strategy.",
      "Built real-time dashboards using WebSockets.",
      "Successfully delivered a stable real-time dashboard capable of processing continuous vehicle data."
    ],
    technologies: ["ReactJS", "NodeJs", "Socket", "Flowbite", "TypeScript"]
  },
  {
    id: "exp5",
    role: "SharePoint Developer (SPFx)",
    company: "Just Engineer Software (ECourier PN Viewer)",
    period: "07/2022 – 06/2023",
    description: "Engineered a custom document management and visualization solution integrated into SharePoint Online.",
    responsibilities: [
      "Architected scalable UI components using Vue 3 within SharePoint Framework.",
      "Integrated FabricJS and PDF.js for document manipulation on HTML5 canvas.",
      "Implemented incremental loading and offscreen rendering for large files."
    ],
    technologies: ["SPFx", "VueJS 3", ".NET", "FabricJS", "PDF.js", "Tailwind CSS"]
  },
  {
    id: "exp6",
    role: "Project Lead | Web Developer",
    company: "Just Engineer Software (Mipart)",
    period: "12/2021 – 07/2022",
    description: "Developed an on-demand manufacturing platform connecting users with custom parts services.",
    responsibilities: [
      "Delivered a fully functional MVP within the planned timeline.",
      "Implemented custom microservices integration for payment (Stripe) and order workflow.",
      "Developed a custom component library with Storybook."
    ],
    technologies: ["NuxtJS", "NodeJS", "TypeScript", "Azure", "Stripe", "GraphQL"]
  },
  {
    id: "exp7",
    role: "iOS Developer",
    company: "FPT Software (Match Local Tourist App)",
    period: "01/2021 – 12/2021",
    description: "Led mobile development of a location-based social platform connecting travelers with local guides.",
    responsibilities: [
      "Developed location-based matching features using React Native Maps.",
      "Optimized UI for one-handed navigation.",
      "Wrote comprehensive unit/integration tests using Jest and Enzyme."
    ],
    technologies: ["React Native", "Redux", "React Native Maps", "Jest", "Styled Components"]
  },
  {
    id: "exp8",
    role: "Front-end Developer",
    company: "FPT Software (Itrack Schaeffler)",
    period: "02/2020 – 01/2021",
    description: "Enterprise ecosystem for vehicle tracking and fleet management.",
    responsibilities: [
      "Engaged with customers for architecture and UML diagrams.",
      "Maintained and implemented new features ensuring alignment with business logic.",
      "Collaborated with backend teams to synchronize workflows."
    ],
    technologies: ["Angular", "Java", "SQLServer", "DevExpress"]
  },
  {
    id: "exp9",
    role: "Front-end Developer (OJT)",
    company: "FPT Software (Clean Slate Project)",
    period: "12/2018 – 08/2019",
    description: "Healthcare web application optimizing medical record management.",
    responsibilities: [
      "Designed responsive UI layouts for medical records.",
      "Aligned technical implementation with clinical workflow requirements.",
      "Debugging and testing user flows."
    ],
    technologies: ["ReactJS", "MySQL", "NodeJs", "Bootstrap"]
  }
];

// Testimonial images from clients
// Add more by placing images in /public/testimonial/ and updating this array
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    projectName: "The Very Group",
    image: "/testimonial/1.png",
    caption: "Excellent work on the eCommerce platform transformation. Dominic delivered high-quality React components ahead of schedule."
  },
  {
    id: "t2",
    projectName: "Corsair Gaming",
    image: "/testimonial/2.png",
    caption: "Great collaboration on the device configuration tool. The UI is intuitive and performant."
  }
];

// Base ratings data - updated with user votes via localStorage
export const RATINGS_DATA: RatingCategory[] = [
  {
    id: "professionalism",
    name: "Professionalism",
    description: "Đúng deadline, làm việc có trách nhiệm",
    rating: 4.8,
    totalVotes: 42
  },
  {
    id: "technical",
    name: "Technical Skills",
    description: "Năng lực kỹ thuật, code quality",
    rating: 4.9,
    totalVotes: 38
  },
  {
    id: "communication",
    name: "Communication",
    description: "Giao tiếp rõ ràng, trình bày ý tưởng tốt",
    rating: 4.6,
    totalVotes: 45
  },
  {
    id: "teamwork",
    name: "Team Collaboration",
    description: "Làm việc nhóm, hỗ trợ đồng nghiệp",
    rating: 4.7,
    totalVotes: 40
  },
  {
    id: "problem_solving",
    name: "Problem Solving",
    description: "Khả năng phân tích và giải quyết vấn đề",
    rating: 4.8,
    totalVotes: 36
  },
  {
    id: "mentorship",
    name: "Mentorship",
    description: "Hướng dẫn, chia sẻ kiến thức với team",
    rating: 4.5,
    totalVotes: 28
  }
];