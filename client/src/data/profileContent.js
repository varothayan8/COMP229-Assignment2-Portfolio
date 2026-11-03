/**
 * profileContent
 * Skills, services and education copy. Everything here is taken from the
 * resume; skills are grouped, not rated, so nothing implies a made-up level.
 */
export const skillGroups = [
  { title: "Languages", items: ["C# (OOP)", "Python", "Java", "JavaScript", "SQL", "HTML/CSS"] },
  { title: "Frameworks & libraries", items: ["React", "TanStack", "Node.js", "Express", ".NET", "Angular", "Tailwind CSS", "Zod"] },
  { title: "Cloud & data", items: ["Firebase", "Vercel", "Google Cloud", "AWS", "Azure", "MySQL", "Oracle"] },
  { title: "AI & integrations", items: ["Gemini API", "Structured outputs", "Stripe", "REST APIs"] },
  { title: "Practices & tools", items: ["Git/GitHub", "SDLC", "QA & testing", "Debugging & logging", "Jira", "CI/CD"] },
];

export const services = [
  { icon: "browser", title: "Web development", text: "Responsive, accessible React websites and web apps, from a portfolio page to a multi-page product." },
  { icon: "spark", title: "AI-powered applications", text: "Features built on the Gemini API, such as image analysis and structured data extraction with validation." },
  { icon: "layers", title: "Full-stack development", text: "React front ends with Firebase or Node.js and Express back ends, deployed on Vercel." },
  { icon: "plug", title: "API integration", text: "Connecting third-party services such as Stripe payments, with retries, timeouts and clear error handling." },
  { icon: "phone", title: "Responsive UI development", text: "Interfaces that stay clear and usable from phone to desktop, with attention to accessibility." },
  { icon: "bug", title: "Testing & reliability", text: "Debugging with structured logging and tests so user workflows keep working as the app changes." },
];

export const education = {
  credential: "Advanced Diploma",
  program: "Software Engineering Technology – Artificial Intelligence (Co-op)",
  school: "Centennial College, Toronto, ON",
  expected: "Expected January 2029",
  gpa: "GPA 4.125 / 4.5",
  coursework: [
    { name: "C# Programming", note: "Object-oriented programming and .NET" },
    { name: "Java Programming", note: "Object-oriented design in Java" },
    { name: "Database Concepts", note: "Relational design with SQL" },
    { name: "Artificial Intelligence Systems Design", note: "Designing AI-enabled systems" },
    { name: "Web Application Development", note: "React and modern web applications" },
  ],
  coop: "Available January 2027 for a 4-month co-op, returning to studies afterward.",
};
