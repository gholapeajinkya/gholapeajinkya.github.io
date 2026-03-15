import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub, FaLightbulb } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ProjectsSection({
  projects,
  mutedTextClass,
  subtleTextClass,
  projectCardClass,
  onProjectClick,
  shouldReduceMotion,
}) {
  const getResponsiveSources = (imagePath) => {
    if (!imagePath) {
      return null;
    }

    const extensionIndex = imagePath.lastIndexOf(".");
    if (extensionIndex === -1) {
      return null;
    }

    const baseName = imagePath.slice(0, extensionIndex);
    const extension = imagePath.slice(extensionIndex);

    return `${baseName}-640${extension} 640w, ${baseName}-960${extension} 960w, ${imagePath} 1200w`;
  };

  const headingMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
      };

  return (
    <section id="projects" className="mt-16" aria-labelledby="projects-heading">
      <motion.h2
        id="projects-heading"
        className="text-2xl font-bold flex items-center gap-2"
        {...headingMotion}
      >
        <FaLightbulb className="text-amber-500" /> Projects
      </motion.h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -8,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }
            }
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.05 * index }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open project: ${project.name}`}
            onClick={() => onProjectClick(project.link, `project_${project.name}`)}
            className={projectCardClass}
          >
            <div className={`absolute top-0 right-0 p-3 group-hover:text-sky-600 transition-colors ${subtleTextClass}`}>
              <FaExternalLinkAlt />
            </div>
            {project.image && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  srcSet={getResponsiveSources(project.image) ?? undefined}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={project.name}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  width="1200"
                  height="720"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className="mt-1 text-2xl">
                <FaCode className="text-sky-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg group-hover:text-sky-600 transition-colors">
                  {project.name}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${mutedTextClass}`}>
                  {project.desc}
                </p>
                {project.tech && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-md ${subtleTextClass} bg-slate-800/50 border border-slate-700`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.github && (
                  <div className="mt-3">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                      className={`inline-flex items-center gap-1.5 text-sm ${subtleTextClass} hover:text-sky-500 transition-colors cursor-pointer`}
                    >
                      <FaGithub /> View on GitHub
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string,
      tech: PropTypes.arrayOf(PropTypes.string),
      github: PropTypes.string,
    })
  ).isRequired,
  mutedTextClass: PropTypes.string.isRequired,
  subtleTextClass: PropTypes.string.isRequired,
  projectCardClass: PropTypes.string.isRequired,
  onProjectClick: PropTypes.func.isRequired,
  shouldReduceMotion: PropTypes.bool,
};
