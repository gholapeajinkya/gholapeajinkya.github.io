import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLanguage,
  FaLightbulb,
  FaLinkedin,
  FaMapMarkerAlt,
  FaReact,
  FaRocket,
  FaStar,
  FaTools,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { SiGooglecloud, SiTailwindcss } from "react-icons/si";
import { trackEvent, trackSocial, trackOutboundLink } from "./analytics";

// Portfolio App (Populated from user's resume)
// Tailwind CSS + Framer Motion single-file component

export default function PortfolioApp() {
  const profile = {
    name: "Ajinkya Gholape",
    title: "Software Engineer II — Frontend (React)",
    location: "India",
    email: "ajinkyagholape1998@gmail.com",
    linkedin: "https://www.linkedin.com/in/gholapeajinkya",
    github: "https://github.com/gholapeajinkya",
    bio: "I’m a frontend engineer specializing in React, micro-frontends, and high-performance UI systems. I focus on building clean, scalable interfaces with strong attention to UX, performance, and modern architecture. I take pride in delivering reliable, production-ready solutions and creating reusable systems that improve team velocity and long-term maintainability.",
  };

  const experience = [
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

  const projects = [
    {
      name: "Micro-Frontend Architecture with Module Federation",
      desc: "Built a micro-frontend architecture using Webpack Module Federation with two independent React apps, a host app and a remote app, both deployed via GitHub Pages. Integrated dynamic module loading, custom Webpack configuration, and client-side routing with React Router for seamless navigation across apps.",
      link: "https://gholapeajinkya.github.io/Micro-Frontend/host-app/",
      image: "/buynest.png", // Optional: Add image URL here
    },
    {
      name: "DubSync: AI-powered Speech Processing Pipeline",
      desc: "DubSync is a Streamlit-based application for automated video dubbing. It enables users to upload or link to a video, extract and transcribe its audio, translate the dialogue, and generate a dubbed version in a target language using advanced TTS and voice cloning.",
      link: "https://gholapeajinkya-dubsync.hf.space/",
      image: "/dubsync.jpeg",
    },
  ];

  const skills = {
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
    Other: ["Android", "React Native"],
  };

  const certifications = [
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

  const languages = ["English", "Hindi", "Marathi"];

  return (
    <>
      <Helmet>
        <title>Ajinkya Gholape | Frontend Engineer - React & Micro-Frontends Specialist</title>
        <meta name="description" content="Software Engineer II specializing in React.js, micro-frontends, and high-performance web applications. Experienced in building scalable UI systems at Bentley Systems." />
        <link rel="canonical" href="https://gholapeajinkya.github.io/" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 antialiased relative overflow-hidden">
        {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <HiSparkles className="text-yellow-400 animate-pulse" />
              {profile.name}
            </h1>
            <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
              <FaReact className="text-cyan-400" />
              {profile.title}
              <span className="text-gray-500">•</span>
              <FaMapMarkerAlt className="text-red-400" />
              {profile.location}
            </p>
          </div>
          <nav className="flex gap-4 text-sm">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <FaRocket className="text-xs" /> Projects
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <FaBriefcase className="text-xs" /> Experience
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <FaEnvelope className="text-xs" /> Contact
            </motion.a>
          </nav>
        </motion.header>

        <section className="mt-12 grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl font-bold leading-tight">
              I build scalable React front-ends with excellent UX.
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl">{profile.bio}</p>

            <div className="mt-6 flex gap-3">
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg transition-all"
              >
                <IoRocketSharp /> View projects
              </motion.a>
              {/* <motion.a
                href="/resume.pdf"
                download="Ajinkya_Gholape_Resume.pdf"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-lg transition-all"
              >
                <FaDownload /> Download Resume
              </motion.a> */}
              <motion.a
                href={`mailto:${profile.email}`}
                onClick={() => trackEvent('Contact', 'Click', 'Email Button')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white border-opacity-20 hover:bg-white hover:text-black text-sm transition-all"
              >
                <FaEnvelope /> Email me
              </motion.a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-6 rounded-2xl border border-white border-opacity-10 backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent"
          >
            <div className="w-60 h-60 mx-auto rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">AG</span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <motion.a
                href={`mailto:${profile.email}`}
                onClick={() => trackEvent('Contact', 'Click', 'Email Sidebar')}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-cyan-400" />
                <span className="truncate">{profile.email}</span>
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocial('LinkedIn', 'Click', 'Profile Link')}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-blue-400" />
                <span>LinkedIn Profile</span>
                <FaExternalLinkAlt className="text-xs ml-auto" />
              </motion.a>
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocial('GitHub', 'Click', 'Profile Link')}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaGithub className="text-purple-400" />
                <span>gholapeajinkya</span>
                <FaExternalLinkAlt className="text-xs ml-auto" />
              </motion.a>
            </div>
          </motion.aside>
        </section>

        <section id="projects" className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <FaLightbulb className="text-yellow-400" /> Projects
          </motion.h3>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.name}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundLink(p.link, `Project: ${p.name}`)}
                className="group block p-6 rounded-2xl bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 hover:border-blue-500/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 text-gray-400 group-hover:text-blue-400 transition-colors">
                  <FaExternalLinkAlt />
                </div>
                {p.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-2xl">
                    <FaCode className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                      {p.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16">
          <motion.h3
            className="text-2xl font-bold flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaBriefcase className="text-blue-400" /> Experience
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4">
              {experience.map((e, idx) => (
                <motion.div
                  key={e.role + idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(96, 165, 250, 0.5)",
                  }}
                  className="p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-blue-500/10">
                      <FaBriefcase className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{e.role}</div>
                      <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                        <span className="font-medium text-cyan-400">
                          {e.company}
                        </span>
                        <span>•</span>
                        <span>{e.period}</span>
                      </div>
                      <ul className="mt-3 space-y-1.5 text-gray-300 text-sm">
                        {e.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaStar className="text-yellow-400 text-xs mt-1 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <aside className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent space-y-6 md:sticky md:top-6 self-start">
            <div>
              <h4 className="font-semibold flex items-center gap-2 text-lg">
                <FaTools className="text-orange-400" /> Skills
              </h4>
              <div className="mt-3 space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h5 className="text-xs font-medium text-gray-400 mb-2">
                      {category}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s, idx) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                          }}
                          className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all cursor-default"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold flex items-center gap-2">
                <FaCertificate className="text-green-400" /> Certifications
              </h5>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <SiGooglecloud className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackOutboundLink(c.url, `Certificate: ${c.title}`)}
                      className="hover:text-cyan-400 transition-colors hover:underline"
                    >
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold flex items-center gap-2">
                <FaLanguage className="text-purple-400" /> Languages
              </h5>
              <div className="text-sm text-gray-300 mt-2 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-1 rounded-md bg-white/5 border border-white/10"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </aside>
          </div>
        </section>

        <section id="contact" className="mt-20">
          <motion.h3
            className="text-2xl font-bold flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaEnvelope className="text-cyan-400" /> Get in touch
          </motion.h3>
          <motion.p
            className="mt-3 text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Interested in collaborating? Reach out for open roles.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-4">
            <motion.a
              href={`mailto:${profile.email}`}
              onClick={() => trackEvent('Contact', 'Click', 'Email Contact Section')}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all"
            >
              <FaEnvelope className="text-cyan-400" />
              <span>{profile.email}</span>
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocial('LinkedIn', 'Click', 'Contact Section')}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-gradient-to-r from-blue-600/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-800/30 transition-all"
            >
              <FaLinkedin className="text-blue-400" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocial('GitHub', 'Click', 'Contact Section')}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 transition-all"
            >
              <FaGithub className="text-purple-400" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </section>

        <footer className="mt-16 text-center text-xs text-gray-500">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <span>
              © {new Date().getFullYear()} {profile.name}. Built with
            </span>
            <FaReact className="text-cyan-400 animate-spin-slow" />
            <span>React +</span>
            <SiTailwindcss className="text-cyan-400" />
            <span>Tailwind + Framer Motion</span>
          </motion.div>
        </footer>
      </div>
    </div>
    </>
  );
}
