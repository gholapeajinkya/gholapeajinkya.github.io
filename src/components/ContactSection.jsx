import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaUser, FaComment } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import PropTypes from "prop-types";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inputClass = isDark
    ? "w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
    : "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all";

  const formPanelClass = isDark
    ? "p-6 rounded-2xl border border-slate-700 backdrop-blur-sm bg-slate-900/70 shadow-lg"
    : "p-6 rounded-2xl border border-slate-200 backdrop-blur-sm bg-white/80 shadow-sm";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: profile.email,
          subject: `Portfolio Contact: Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mt-20 text-center" aria-labelledby="contact-heading">
      <motion.h2
        id="contact-heading"
        className="text-2xl font-bold flex items-center justify-center gap-2"
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
      >
        <FaEnvelope className="text-sky-600" /> Get in touch
      </motion.h2>
      <motion.p
        className={`mt-3 max-w-2xl mx-auto ${mutedTextClass}`}
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { delay: 0.25 }}
      >
        Open to senior frontend, full-stack, or AI engineering roles. Especially interested in teams building at the intersection of AI and real-world software. Let's talk.
      </motion.p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
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

      {/* Let's Connect Form */}
      <motion.div
        className="mt-12"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { delay: 0.3 }}
      >
        <h3 className="text-xl font-bold flex items-center justify-center gap-2 mb-6">
          <HiSparkles className="text-amber-500" /> Let's Connect
        </h3>
        
        <div className={`${formPanelClass} max-w-2xl mx-auto text-left`}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${mutedTextClass}`}>
                <FaUser className="inline mr-2 text-sky-600" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${mutedTextClass}`}>
                <FaEnvelope className="inline mr-2 text-sky-600" />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${mutedTextClass}`}>
                <FaComment className="inline mr-2 text-sky-600" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi Ajinkya, I'd love to discuss..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                isSubmitting
                  ? "bg-slate-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-md hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-600 dark:text-green-400 text-center"
              >
                🎉 Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400 text-center"
              >
                Oops! Something went wrong. Please try emailing me directly at {profile.email}
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
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
