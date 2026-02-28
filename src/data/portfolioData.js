export const profile = {
  name: "Ajinkya Gholape",
  title: "Software Engineer II — Frontend (React)",
  location: "India",
  email: "ajinkyagholape1998@gmail.com",
  linkedin: "https://www.linkedin.com/in/gholapeajinkya",
  github: "https://github.com/gholapeajinkya",
  bio: "I’m a frontend engineer specializing in React, micro-frontends, and high-performance UI systems. I focus on building clean, scalable interfaces with strong attention to UX, performance, and modern architecture. I take pride in delivering reliable, production-ready solutions and creating reusable systems that improve team velocity and long-term maintainability.",
};

export const experience = [
  {
    role: "Software Engineer II",
    company: "Bentley Systems",
    period: "Apr 2025 — Present",
    bullets: [
      "Architected and contributed to Graph Module redesign to a production-ready state, replacing the legacy iframe approach and enabling enterprise-grade data visualization for GA.",
      "Mentored junior developers, including guiding rotation engineers end-to-end through feature ownership, review processes, and problem-solving methodologies.",
    ],
  },
  {
    role: "Software Engineer I",
    company: "Bentley Systems",
    period: "Apr 2024 — Apr 2025",
    bullets: [
      "Designed and delivered new UI components for the Vibration Analytics module, improving reliability and usability of sensor insights.",
      "Enhanced existing alerts sharing workflow for production readiness, resolving bugs and optimizing user experience.",
      "Led PAI dashboard integration, building reusable components, APIs, reviving stalled projects and accelerating delivery timelines.",
      "Standardized application monitoring and logging using Azure Application Insights, improving observability, debugging efficiency, and phasing out Sentry.",
      "Mentored junior engineers, guiding complex tasks, assigning responsibilities, and supporting career development and effective team contribution.",
      "Organized and facilitated India team knowledge-sharing sessions, promoting cross-team learning and adoption of best practices.",
      "Demonstrated ownership with urgency, completing deliverables promptly, proactively resolving dependencies, and ensuring high-quality production releases.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Bentley Systems",
    period: "May 2022 — Apr 2024",
    bullets: [
      "Delivered version 0.1 of an IoT monitoring platform and built 10+ reusable data visualization components, improving real-time sensor data visibility and user workflows.",
      "Architected and published a shared React UI package, reducing code duplication by ~40% and enabling faster feature rollout across iTwin IoT and OverWatch.",
      "Implemented feature flagging with LaunchDarkly for controlled rollouts, improving deployment safety and environment-based configuration.",
      "Built and deployed a Backend-for-Frontend (BFF) GraphQL service to production, ensuring it passed quality and compliance scorecards.",
      "Integrated Sentry for error tracking (with session replay) and Pendo for product analytics, accelerating debugging and enabling data-driven UX decisions.",
      "Introduced visual regression testing workflows, improving UI stability and preventing unintentional layout changes in digital twin screens.",
      "Improved reliability by writing unit tests using React Testing Library + Jest, reducing UI regressions and supporting maintainable code patterns.",
      "Collaborated effectively with cross-timezone teams (India ↔ San Diego), resolving blockers and aligning technical decisions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Sigma Infraplan Engineering Pvt. Ltd.",
    period: "Feb 2021 — May 2022",
    bullets: [
      "Identified web-based user interactions and developed highly-responsive user interface via React js functional component concept",
      "Designed and translated design wire-frames into high quality code",
      "Employed a variety of languages such as HTML & CSS to write & create user-friendly web pages",
      "Build reusable code for future use and optimized web pages for maximum speed & scalability",
      "Communicated & retrieved resources from RESTful web services",
      "Authored elegant, self-documenting code, easy to read and adopt for other developers",
      "Worked on GIS application, handled spatial data and computed friction factor using epanet.js",
    ],
  },
  {
    role: "Intern",
    company: "Laurel Technologies",
    period: "Dec 2018 — Jan 2019",
    bullets: [
      "Composed & executing ~1000 of test cases and reviewed ~100 user interfaces for functionality and adherence to design guidelines",
      "Tested code for robustness, executed edge case, usability, and general reliability analysis",
    ],
  },
];

export const projects = [
  {
    name: "Micro-Frontend Architecture with Module Federation",
    desc: "Built a micro-frontend architecture using Webpack Module Federation with two independent React apps, a host app and a remote app, both deployed via GitHub Pages. Integrated dynamic module loading, custom Webpack configuration, and client-side routing with React Router for seamless navigation across apps.",
    link: "https://gholapeajinkya.github.io/Micro-Frontend/host-app/",
    image: "/buynest.png",
  },
  {
    name: "DubSync: AI-powered Speech Processing Pipeline",
    desc: "DubSync is a Streamlit-based application for automated video dubbing. It enables users to upload or link to a video, extract and transcribe its audio, translate the dialogue, and generate a dubbed version in a target language using advanced TTS and voice cloning.",
    link: "https://gholapeajinkya-dubsync.hf.space/",
    image: "/dubsync.jpeg",
  },
];

export const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Micro-frontend (Module Federation)",
    "Redux",
    "React Query",
    "React Testing Library",
    "Jest",
    "Cypress",
    "BFF (Backend-for-Frontend)",
  ],
  "Tools & DevOps": [
    "Webpack",
    "Rush for Monorepo",
    "Azure DevOps",
    "LaunchDarkly / Feature flags",
    "Observability (Azure App Insights, Sentry)",
  ],
  Backend: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  "Programming Languages": ["JavaScript", "Python", "Java"],
  Other: ["Android", "React Native", "Github Copilot", "AI/ML Concepts", "Neural Networks"],
};

export const certifications = [
  {
    title: "React: Design Patterns",
    url: "https://www.linkedin.com/learning/certificates/ac9c3ffcb4dad2ce39737cfe572788a7247e445149ede575da58845eece1851e",
  },
  {
    title: "Fundamentals of Micro-frontends",
    url: "https://coursera.org/share/f42049a9af8faeb05b2247eaff13b467",
  },
  {
    title: "GCP: Big Data & Machine Learning Fundamentals",
    url: "https://www.coursera.org/account/accomplishments/verify/TAZD76P79KXC",
  },
  {
    title: "Classification with Transfer Learning in Keras",
    url: "https://www.coursera.org/account/accomplishments/certificate/BJ6HKGQYSFUX",
  },
  {
    title: "ASP.NET Core: Building a GraphQL API",
    url: "https://www.linkedin.com/learning/certificates/c757af5ce04ee6e195f35a9ce087b65b5f41382ccc18dfc25bd02bfa621465d1",
  },
];

export const languages = ["English", "Hindi", "Marathi"];
