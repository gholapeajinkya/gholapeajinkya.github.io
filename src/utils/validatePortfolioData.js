const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

export function validatePortfolioData({ profile, experience, projects, skills, certifications, languages }) {
  const issues = [];

  if (!profile || !isNonEmptyString(profile.name) || !isNonEmptyString(profile.email)) {
    issues.push("Invalid profile data: name and email are required.");
  }

  if (!Array.isArray(experience) || experience.length === 0) {
    issues.push("Experience list is empty or invalid.");
  }

  if (!Array.isArray(projects) || projects.some((item) => !isNonEmptyString(item.name) || !isNonEmptyString(item.link))) {
    issues.push("Projects contain invalid entries (name/link required).");
  }

  if (!skills || typeof skills !== "object" || Object.keys(skills).length === 0) {
    issues.push("Skills data is missing.");
  }

  if (!Array.isArray(certifications)) {
    issues.push("Certifications data is invalid.");
  }

  if (!Array.isArray(languages) || languages.length === 0) {
    issues.push("Languages data is missing.");
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}
