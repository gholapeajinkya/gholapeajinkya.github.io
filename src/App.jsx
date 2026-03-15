import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaBriefcase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMoon,
  FaReact,
  FaRocket,
  FaSun,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { profile, experience, projects, skills, certifications, languages } from "./data/portfolioData";
import { trackEvent, trackSocial, trackOutboundLink } from "./analytics";
import { validatePortfolioData } from "./utils/validatePortfolioData";

const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

function DeferredSection({ children, minHeight = "240px", rootMargin = "220px" }) {
  const anchorRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender || !anchorRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(anchorRef.current);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={anchorRef} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? children : null}
    </div>
  );
}

export default function PortfolioApp() {
  const shouldReduceMotion = useReducedMotion();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    const validation = validatePortfolioData({
      profile,
      experience,
      projects,
      skills,
      certifications,
      languages,
    });

    if (!validation.isValid) {
      console.warn("Portfolio data validation issues:", validation.issues);
    }
  }, []);

  const pageClass = isDark
    ? "min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased relative overflow-hidden"
    : "min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 text-slate-800 antialiased relative overflow-hidden";
  const blobOneClass = isDark
    ? "absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-float"
    : "absolute top-20 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-float";
  const blobTwoClass = isDark
    ? "absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed"
    : "absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-float-delayed";
  const mutedTextClass = isDark ? "text-slate-300" : "text-slate-600";
  const subtleTextClass = isDark ? "text-slate-400" : "text-slate-500";
  const panelClass = isDark
    ? "p-6 rounded-2xl border border-slate-700 backdrop-blur-sm bg-slate-900/70 shadow-lg"
    : "p-6 rounded-2xl border border-slate-200 backdrop-blur-sm bg-white/80 shadow-sm";
  const cardClass = isDark
    ? "p-5 rounded-xl border border-slate-700 bg-slate-900/70 hover:shadow-lg transition-all"
    : "p-5 rounded-xl border border-slate-200 bg-white/80 hover:shadow-md transition-all";
  const projectCardClass = isDark
    ? "group block p-6 rounded-2xl bg-slate-900/70 border border-slate-700 hover:border-sky-400 transition-all relative overflow-hidden shadow-lg"
    : "group block p-6 rounded-2xl bg-white/80 border border-slate-200 hover:border-sky-400 transition-all relative overflow-hidden shadow-sm";
  const chipClass = isDark
    ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-slate-800 border border-slate-700 hover:border-sky-400 transition-all cursor-default"
    : "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-slate-100 border border-slate-200 hover:border-sky-300 transition-all cursor-default";
  const languageChipClass = isDark
    ? "px-2 py-1 rounded-md bg-slate-800 border border-slate-700"
    : "px-2 py-1 rounded-md bg-slate-100 border border-slate-200";
  const secondaryButtonClass = isDark
    ? "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 bg-slate-900/70 hover:bg-slate-800 text-sm transition-all"
    : "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-900 hover:text-white text-sm transition-all";
  const contactButtonClass = isDark
    ? "inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-600 bg-slate-900/70 hover:bg-slate-800 transition-all"
    : "inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white transition-all";

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      url: "https://gholapeajinkya.github.io/",
      email: profile.email,
      sameAs: [profile.linkedin, profile.github],
      address: {
        "@type": "PostalAddress",
        addressCountry: profile.location,
      },
      knowsAbout: [
        "React",
        "JavaScript",
        "Micro-frontends",
        "Frontend Architecture",
        "GraphQL",
        "Testing",
      ],
    }),
    []
  );

  const baseMotion = (value) => (shouldReduceMotion ? {} : value);

  return (
    <>
      <Helmet>
        <title>Ajinkya Gholape | Frontend & AI Engineer</title>
        <meta name="description" content="Frontend & AI Engineer at Bentley Systems. Creator of DubSync — AI video dubbing with voice cloning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gholapeajinkya.github.io/" />
        <meta property="og:title" content="Ajinkya Gholape | Frontend & AI Engineer" />
        <meta property="og:description" content="Frontend & AI Engineer at Bentley Systems. Creator of DubSync — AI video dubbing with voice cloning." />
        <meta property="og:image" content="https://gholapeajinkya.github.io/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ajinkya Gholape | Frontend & AI Engineer" />
        <meta property="twitter:description" content="Frontend & AI Engineer at Bentley Systems. Creator of DubSync — AI video dubbing with voice cloning." />
        <meta property="twitter:image" content="https://gholapeajinkya.github.io/og-image.jpg" />
        <link rel="canonical" href="https://gholapeajinkya.github.io/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-20 focus:translate-y-0 bg-sky-700 text-white px-3 py-2 rounded-md transition-transform"
      >
        Skip to content
      </a>

      <div className={pageClass}>
        <div className={blobOneClass}></div>
        <div className={blobTwoClass}></div>

        <main id="main-content" className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.header
          {...baseMotion({
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
          })}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <HiSparkles className="text-amber-500 animate-pulse" />
              {profile.name}
            </h1>
            <p className={`text-sm mt-1 flex items-center gap-2 ${mutedTextClass}`}>
              <FaReact className="text-sky-600" />
              {profile.title}
              <span className={subtleTextClass}>•</span>
              <FaMapMarkerAlt className="text-rose-500" />
              {profile.location}
            </p>
          </div>
          <nav className="flex gap-4 text-sm items-center flex-wrap">
            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              className="hover:text-sky-600 transition-colors flex items-center gap-1"
            >
              <FaRocket className="text-xs" /> Projects
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              className="hover:text-sky-600 transition-colors flex items-center gap-1"
            >
              <FaBriefcase className="text-xs" /> Experience
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              className="hover:text-sky-600 transition-colors flex items-center gap-1"
            >
              <FaEnvelope className="text-xs" /> Contact
            </motion.a>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
              onClick={() => setIsDark((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors ${
                isDark
                  ? "border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-800"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-slate-600" />}
              <span>{isDark ? "Light" : "Dark"}</span>
            </motion.button>
          </nav>
        </motion.header>

        <section className="mt-12 grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            {...baseMotion({
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.15 },
            })}
            className="md:col-span-2"
          >
            <h2 className="text-4xl font-bold leading-tight" id="intro-heading">
              I build enterprise IoT platforms and ship AI tools that work.
            </h2>
            <p className={`mt-4 max-w-2xl ${mutedTextClass}`}>{profile.bio}</p>

            <div className="mt-6 flex gap-3">
              <motion.a
                href="#projects"
                whileHover={{
                  ...(shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)",
                      }),
                }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-md transition-all"
              >
                <IoRocketSharp /> View projects
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                onClick={() => trackEvent("contact", "click", "email_button")}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={secondaryButtonClass}
              >
                <FaEnvelope /> Email me
              </motion.a>
            </div>
          </motion.div>

          <motion.aside
            {...baseMotion({
              initial: { scale: 0.95, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 0.6, delay: 0.25 },
            })}
            className={panelClass}
          >
            <div className="w-60 h-60 mx-auto rounded-full border-4 border-sky-500/50 shadow-xl relative overflow-hidden group">
              <img 
                src="/profile_picture.jpeg" 
                alt="Ajinkya Gholape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className={`mt-6 space-y-3 text-sm ${mutedTextClass}`}>
              <motion.a
                href={`mailto:${profile.email}`}
                onClick={() => trackEvent("contact", "click", "email_sidebar")}
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className={`flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}
              >
                <FaEnvelope className="text-sky-600" />
                <span className="truncate">{profile.email}</span>
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                onClick={() => trackSocial("linkedin", "click", "profile_link")}
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className={`flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}
              >
                <FaLinkedin className="text-blue-600" />
                <span>LinkedIn Profile</span>
                <FaExternalLinkAlt className="text-xs ml-auto" />
              </motion.a>
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                onClick={() => trackSocial("github", "click", "profile_link")}
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className={`flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}
              >
                <FaGithub className="text-violet-600" />
                <span>gholapeajinkya</span>
                <FaExternalLinkAlt className="text-xs ml-auto" />
              </motion.a>
            </div>
          </motion.aside>
        </section>

        <DeferredSection>
          <Suspense fallback={<div className={`${panelClass} mt-16`}>Loading sections…</div>}>
            <ProjectsSection
              projects={projects}
              mutedTextClass={mutedTextClass}
              subtleTextClass={subtleTextClass}
              projectCardClass={projectCardClass}
              onProjectClick={(link, label) => trackOutboundLink(link, label)}
              shouldReduceMotion={shouldReduceMotion}
              isDark={isDark}
            />
          </Suspense>
        </DeferredSection>

        <DeferredSection>
          <Suspense fallback={<div className={`${panelClass} mt-10`}>Loading experience…</div>}>
            <ExperienceSection
              experience={experience}
              skills={skills}
              certifications={certifications}
              languages={languages}
              mutedTextClass={mutedTextClass}
              subtleTextClass={subtleTextClass}
              panelClass={panelClass}
              cardClass={cardClass}
              chipClass={chipClass}
              languageChipClass={languageChipClass}
              onCertificateClick={(link, label) => trackOutboundLink(link, label)}
              shouldReduceMotion={shouldReduceMotion}
            />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight="180px">
          <Suspense fallback={<div className={`${panelClass} mt-10`}>Loading contact…</div>}>
            <ContactSection
              profile={profile}
              mutedTextClass={mutedTextClass}
              isDark={isDark}
              contactButtonClass={contactButtonClass}
              onEmailClick={() => trackEvent("contact", "click", "email_contact_section")}
              onLinkedinClick={() => trackSocial("linkedin", "click", "contact_section")}
              onGithubClick={() => trackSocial("github", "click", "contact_section")}
              shouldReduceMotion={shouldReduceMotion}
            />
          </Suspense>
        </DeferredSection>

        <footer className={`mt-16 text-center text-xs ${subtleTextClass}`}>
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.5 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <span>
              © {new Date().getFullYear()} {profile.name}. Built with
            </span>
            <FaReact className="text-sky-600 animate-spin-slow" />
            <span>React + Tailwind + Framer Motion</span>
          </motion.div>
        </footer>
        </main>
      </div>
    </>
  );
}
