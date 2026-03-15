export const profile = {
  name: "Ajinkya Gholape",
  title: "Software Engineer II — Frontend & AI | Bentley Systems",
  location: "India",
  email: "ajinkyagholape1998@gmail.com",
  linkedin: "https://www.linkedin.com/in/gholapeajinkya",
  github: "https://github.com/gholapeajinkya",
  bio: "Software engineer at Bentley Systems with 5+ years building production-grade IoT and GIS platforms. On the side, I ship AI projects — like DubSync, a multi-model video dubbing pipeline using Whisper, GPT-4, and voice cloning. I work at the intersection of enterprise software and applied AI.",
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
      "Led PAI dashboard integration, building reusable components, APIs, reviving stalled projects and accelerating delivery timelines.",
      "Standardized application monitoring and logging using Azure Application Insights, improving observability, debugging efficiency, and phasing out Sentry.",
      "Mentored junior engineers, guiding complex tasks, assigning responsibilities, and supporting career development.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Bentley Systems",
    period: "May 2022 — Apr 2024",
    bullets: [
      "Delivered version 0.1 of an IoT monitoring platform and built 10+ reusable data visualization components, improving real-time sensor data visibility and user workflows.",
      "Architected and published a shared React UI package, reducing code duplication by ~40% and enabling faster feature rollout across iTwin IoT and OverWatch.",
      "Built and deployed a Backend-for-Frontend (BFF) GraphQL service to production, ensuring it passed quality and compliance scorecards.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Sigma Infraplan Engineering Pvt. Ltd.",
    period: "Feb 2021 — May 2022",
    bullets: [
      "Developed highly-responsive user interfaces via React.js functional components, optimizing web pages for maximum speed and scalability.",
      "Built reusable component library for future use, improving development velocity.",
      "Worked on GIS application, handled spatial data and computed friction factor using epanet.js.",
    ],
  },
  {
    role: "Intern",
    company: "Laurel Technologies",
    period: "Dec 2018 — Jan 2019",
    bullets: [
      "Composed & executed ~1000 test cases and reviewed ~100 user interfaces for functionality and adherence to design guidelines.",
    ],
  },
];

export const projects = [
  {
    name: "DubSync — AI Video Dubbing Pipeline",
    desc: "An end-to-end AI pipeline that dubs any video into another language while preserving the original speaker's voice. Chains Whisper (transcription) → GPT-4 (emotion-aware translation) → Demucs (audio separation) → F5-TTS (voice cloning) → final dubbed video. Deployed live on Hugging Face Spaces.",
    link: "https://gholapeajinkya-dubsync.hf.space/",
    github: "https://github.com/gholapeajinkya/DubSync",
    image: "/dubsync.jpeg",
    tech: ["Python", "Whisper", "GPT-4", "F5-TTS", "Demucs", "Streamlit", "Docker", "Hugging Face"],
  },
  {
    name: "Micro-Frontend Architecture with Module Federation",
    desc: "Built a micro-frontend architecture using Webpack Module Federation with two independent React apps, a host app and a remote app, both deployed via GitHub Pages. Integrated dynamic module loading, custom Webpack configuration, and client-side routing with React Router for seamless navigation across apps.",
    link: "https://gholapeajinkya.github.io/Micro-Frontend/host-app/",
    image: "/buynest.png",
    tech: ["Webpack", "Module Federation", "Axios", "GitHub Pages"],
    github: "https://github.com/gholapeajinkya/Micro-Frontend"
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
  "AI & ML": [
    "OpenAI / GPT-4",
    "Whisper",
    "Hugging Face",
    "Voice Cloning / F5-TTS",
    "Prompt Engineering",
  ],
  "Tools & DevOps": [
    "Webpack",
    "Rush for Monorepo",
    "Azure DevOps",
    "LaunchDarkly / Feature flags",
    "Observability (Azure App Insights, Sentry)",
    "Github Copilot",
  ],
  Backend: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  "Programming Languages": ["JavaScript", "Python"],
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
  }
];

export const languages = ["English", "Hindi", "Marathi"];
