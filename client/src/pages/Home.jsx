import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { siteConfig } from "../data/siteConfig.js";
import { projects, featuredProjectIds } from "../data/projects.js";

const HERO_STACK = ["React", "Firebase", "Gemini API", "Stripe", "C#", "Python"];

/**
 * Home — hero, featured projects and the contact-form confirmation.
 * After the Contact form submits, it navigates here with router state; we copy
 * that into local state, then clear the router state so a page refresh does
 * not show the confirmation again.
 */
export default function Home() {
  usePageMeta(
    null,
    "Varo (Varothayan Arumairatnam) is a Software Engineering Technology (AI) student at Centennial College building React, Firebase and Gemini-powered products."
  );

  const location = useLocation();
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    if (location.state?.contactSubmitted) {
      setConfirmation({ firstName: location.state.firstName });
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const featuredProjects = featuredProjectIds.map((id) => projects.find((project) => project.id === id));

  return (
    <main>
      {confirmation && (
        <div className="container">
          <div className="toast glass" role="status">
            <Icon name="check" size={20} />
            <p>
              Thanks{confirmation.firstName ? `, ${confirmation.firstName}` : ""}. Your message was received and I will reply by email.
            </p>
            <button type="button" className="toast__close" aria-label="Dismiss confirmation" onClick={() => setConfirmation(null)}>
              <Icon name="close" size={18} />
            </button>
          </div>
        </div>
      )}

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="availability"><span className="availability__dot" aria-hidden="true" />{siteConfig.availability}</p>
            <h1 id="hero-title">
              Software Engineering (AI) student building intelligent, useful products.
            </h1>
            <p className="hero__lead">
              I'm {siteConfig.displayName}. I build and ship React apps powered by Firebase, Gemini AI and Stripe at {siteConfig.school}.
            </p>
            <div className="hero__actions">
              <Button to="/projects" icon="arrow">View my work</Button>
              <Button to="/about" variant="secondary">About me</Button>
              <Button href={siteConfig.resumePath} download variant="ghost" icon="download" aria-label="Download résumé (PDF)">Résumé</Button>
            </div>
            <SocialLinks />
          </div>

          <div className="hero__visual">
            <div className="hero-phone glass">
              <img
                src="/images/aeruvo-today.webp"
                alt="Aeruvo, my live weather and wardrobe app, showing today's weather"
                width="300"
                height="650"
              />
            </div>
            <div className="hero-stack glass" aria-label="Core technologies">
              {HERO_STACK.map((tech) => <span key={tech} className="chip">{tech}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container section" aria-labelledby="featured-title">
        <SectionHeading
          id="featured-title"
          title="Featured projects"
          intro="Three applications I built and deployed. Each one has a live demo."
        />
        <div className="stack-lg">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
        <div className="section__cta">
          <Button to="/projects" variant="secondary" icon="arrow">See all project details</Button>
        </div>
      </section>
    </main>
  );
}
