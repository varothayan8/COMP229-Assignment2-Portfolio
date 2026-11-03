/**
 * projects
 * Data-driven project showcase used by both the Home (featured) and
 * Projects pages. Content comes from the resume; nothing here is a metric.
 *
 * To add a real screenshot to a project, put the file in public/images and
 * list it under `screenshots`. Projects without screenshots render an
 * illustrated cover instead. Add `githubUrl` when a repository is public.
 */
export const projects = [
  {
    id: "aeruvo",
    name: "Aeruvo",
    tagline: "Weather-aware outfit recommendations from the clothes you already own",
    period: "Jun 2026 – Present",
    type: "Personal project",
    role: "Designer & developer (end to end)",
    problem:
      "People check the forecast but still have to guess which of their own clothes suit it. Aeruvo connects the two.",
    summary:
      "A React weather and wardrobe app. Users scan clothing into a digital wardrobe, and Gemini image analysis stores each item's attributes so recommendations can be matched to the day's weather.",
    outcome: [
      "Deployed on Vercel with Firebase, live at aeruvo.app",
      "Stripe Checkout and Customer Portal cover trial, subscription and cancellation flows",
      "Hardened with API retries, timeouts, structured logging, error handling and tests after debugging scanning and notification failures",
    ],
    tech: ["React", "Firebase", "Vercel", "Gemini API", "Stripe"],
    liveUrl: "https://www.aeruvo.app/",
    githubUrl: null,
    screenshots: [
      { src: "/images/aeruvo-today.webp", alt: "Aeruvo Today screen showing current weather, hourly forecast and sunrise and sunset times" },
      { src: "/images/aeruvo-recommendation.webp", alt: "Aeruvo daily outfit recommendation built from wardrobe items" },
      { src: "/images/aeruvo-wardrobe.webp", alt: "Aeruvo wardrobe screen with today's picks and clothing categories" },
      { src: "/images/aeruvo-forecast.webp", alt: "Aeruvo seven-day forecast list" },
    ],
  },
  {
    id: "fixsmart",
    name: "FixSmart",
    tagline: "An AI repair assistant that puts safety first",
    period: "Sep 2026",
    type: "Hackathon project",
    role: "Developer",
    problem:
      "Fixing a broken item at home can be risky when you cannot tell what is wrong or which repairs are safe to attempt.",
    summary:
      "An AI-powered repair assistant. Users upload a photo of an item and receive troubleshooting guidance from Gemini AI.",
    outcome: [
      "Analyzes uploaded item photos to suggest troubleshooting steps",
      "Safety-focused guidance covering short-circuit and explosion risks, recommending professional repair for complex or hazardous cases",
      "Stripe payment functionality integrated",
    ],
    tech: ["React", "TanStack", "Gemini AI", "Firebase", "Stripe"],
    liveUrl: "https://fix-smart-app.vercel.app/home",
    githubUrl: null,
    screenshots: [],
  },
  {
    id: "fridgepulse",
    name: "FridgePulse",
    tagline: "Food inventory and rescue workflow for less food waste",
    period: "Aug 2026",
    type: "Centennial College hackathon",
    role: "Developer",
    problem:
      "Food gets thrown out because people lose track of what is in the fridge and when it will spoil.",
    summary:
      "A sustainability application that tracks food inventory and freshness, generates recipes, and guides users through a four-step food rescue workflow with rescue scoring.",
    outcome: [
      "Extracts food details from photos using Gemini structured outputs validated with Zod",
      "Image compression before upload; freshness tracking for each item",
      "Application workflows tested end to end",
    ],
    tech: ["TypeScript", "Gemini API", "Zod"],
    liveUrl: "https://echo-fridge.vercel.app/",
    githubUrl: null,
    screenshots: [],
  },
];

/** Projects shown in the Featured section on the Home page. */
export const featuredProjectIds = ["aeruvo", "fixsmart", "fridgepulse"];
