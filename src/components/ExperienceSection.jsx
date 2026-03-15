import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  FaBriefcase,
  FaCertificate,
  FaCubes,
  FaCode,
  FaExchangeAlt,
  FaExternalLinkAlt,
  FaLanguage,
  FaLightbulb,
  FaLinkedin,
  FaMicrosoft,
  FaProjectDiagram,
  FaReact,
  FaRobot,
  FaServer,
  FaStar,
  FaTools,
  FaFlag,
} from "react-icons/fa";
import {
  SiCss3,
  SiCypress,
  SiExpress,
  SiGithubcopilot,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiPython,
  SiReactquery,
  SiRedux,
  SiSentry,
  SiTestinglibrary,
  SiWebpack,
} from "react-icons/si";

export default function ExperienceSection({
  experience,
  skills,
  certifications,
  languages,
  mutedTextClass,
  subtleTextClass,
  panelClass,
  cardClass,
  chipClass,
  languageChipClass,
  onCertificateClick,
  shouldReduceMotion,
}) {
  const skillIcons = {
    HTML: SiHtml5,
    CSS: SiCss3,
    Javascript: SiJavascript,
    "React.js": FaReact,
    "Micro-frontend (Module Federation)": FaProjectDiagram,
    Redux: SiRedux,
    "React Query": SiReactquery,
    "React Testing Library": SiTestinglibrary,
    Jest: SiJest,
    Cypress: SiCypress,
    "BFF (Backend-for-Frontend)": FaServer,
    Webpack: SiWebpack,
    "Rush for Monorepo": FaCubes,
    "Azure DevOps": FaMicrosoft,
    "LaunchDarkly / Feature flags": FaFlag,
    "Observability (Azure App Insights, Sentry)": SiSentry,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    GraphQL: SiGraphql,
    "REST APIs": FaExchangeAlt,
    JavaScript: SiJavascript,
    Python: SiPython,
    "Github Copilot": SiGithubcopilot,
    "OpenAI / GPT-4": FaRobot,
    "Whisper": FaRobot,
    "Hugging Face": FaRobot,
    "Voice Cloning / F5-TTS": FaRobot,
    "Prompt Engineering": FaLightbulb,
  };

  return (
    <section id="experience" className="mt-16" aria-labelledby="experience-heading">
      <motion.h2
        id="experience-heading"
        className="text-2xl font-bold flex items-center gap-2 mb-6"
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
      >
        <FaBriefcase className="text-sky-600" /> Experience
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          {experience.map((item, index) => (
            <motion.div
              key={item.role + index}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: -20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={shouldReduceMotion ? undefined : { delay: 0.05 * index }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.02,
                      borderColor: "rgba(96, 165, 250, 0.5)",
                    }
              }
              className={cardClass}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-lg bg-sky-100">
                  <FaBriefcase className="text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <div className={`text-xs mt-1 flex items-center gap-2 ${subtleTextClass}`}>
                    <span className="font-medium text-sky-600">{item.company}</span>
                    <span>•</span>
                    <span>{item.period}</span>
                  </div>
                  <ul className={`mt-3 space-y-1.5 text-sm ${mutedTextClass}`}>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <FaStar className="text-amber-500 text-xs mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          
          <p className={`mt-4 text-sm ${mutedTextClass}`}>
            For full experience details, view my{" "}
            <a
              href="https://www.linkedin.com/in/gholapeajinkya/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 transition-colors"
            >
              LinkedIn <FaLinkedin className="text-sm" />
            </a>
          </p>
        </div>

        <aside className={`${panelClass} space-y-6 md:sticky md:top-6 self-start`}>
          <div>
            <h3 className="font-semibold flex items-center gap-2 text-lg">
              <FaTools className="text-amber-600" /> Skills
            </h3>
            <div className="mt-3 space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className={`text-xs font-medium mb-2 ${subtleTextClass}`}>{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => {
                      const SkillIcon = skillIcons[skill] || FaCode;
                      return (
                        <motion.span
                          key={skill}
                          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
                          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                          transition={shouldReduceMotion ? undefined : { delay: idx * 0.05 }}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: 1.1,
                                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                                }
                          }
                          className={chipClass}
                        >
                          <SkillIcon className="text-sm" />
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <FaCertificate className="text-emerald-600" /> Certifications
            </h3>
            <ul className={`mt-2 text-sm space-y-1 ${mutedTextClass}`}>
              {certifications.map((certificate, index) => (
                <li key={index} className="flex items-start gap-2">
                  <SiGooglecloud className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open certificate: ${certificate.title}`}
                    onClick={() => onCertificateClick(certificate.url, `certificate_${certificate.title}`)}
                    className="hover:text-sky-600 transition-colors hover:underline inline-flex items-center gap-2"
                  >
                    <span>{certificate.title}</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <FaLanguage className="text-violet-600" /> Languages
            </h3>
            <div className={`text-sm mt-2 flex flex-wrap gap-2 ${mutedTextClass}`}>
              {languages.map((language) => (
                <span key={language} className={languageChipClass}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

ExperienceSection.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  skills: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  mutedTextClass: PropTypes.string.isRequired,
  subtleTextClass: PropTypes.string.isRequired,
  panelClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  chipClass: PropTypes.string.isRequired,
  languageChipClass: PropTypes.string.isRequired,
  onCertificateClick: PropTypes.func.isRequired,
  shouldReduceMotion: PropTypes.bool,
};
