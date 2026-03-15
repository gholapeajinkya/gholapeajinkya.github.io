import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ContactSection({
  profile,
  mutedTextClass,
  isDark,
  contactButtonClass,
  onEmailClick,
  onLinkedinClick,
  onGithubClick,
  shouldReduceMotion,
}) {
  return (
    <section id="contact" className="mt-20" aria-labelledby="contact-heading">
      <motion.h2
        id="contact-heading"
        className="text-2xl font-bold flex items-center gap-2"
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
      >
        <FaEnvelope className="text-sky-600" /> Get in touch
      </motion.h2>
      <motion.p
        className={`mt-3 max-w-2xl ${mutedTextClass}`}
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 0.25 }}
      >
        Open to senior frontend, full-stack, or AI engineering roles. Especially interested in teams building at the intersection of AI and real-world software. Let's talk.
      </motion.p>

      <div className="mt-6 flex flex-wrap gap-4">
        <motion.a
          href={`mailto:${profile.email}`}
          onClick={onEmailClick}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          className={`${contactButtonClass} ${isDark ? "hover:border-sky-500" : "hover:bg-sky-50"}`}
        >
          <FaEnvelope className="text-sky-600" />
          <span>{profile.email}</span>
        </motion.a>
        <motion.a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
          onClick={onLinkedinClick}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
                }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          className={`${contactButtonClass} ${isDark ? "hover:border-blue-500" : "hover:bg-blue-50"}`}
        >
          <FaLinkedin className="text-blue-600" />
          <span>LinkedIn</span>
        </motion.a>
        <motion.a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
          onClick={onGithubClick}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(139, 92, 246, 0.4)",
                }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          className={`${contactButtonClass} ${isDark ? "hover:border-violet-500" : "hover:bg-violet-50"}`}
        >
          <FaGithub className="text-violet-600" />
          <span>GitHub</span>
        </motion.a>
      </div>
    </section>
  );
}

ContactSection.propTypes = {
  profile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
  mutedTextClass: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
  contactButtonClass: PropTypes.string.isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onLinkedinClick: PropTypes.func.isRequired,
  onGithubClick: PropTypes.func.isRequired,
  shouldReduceMotion: PropTypes.bool,
};
