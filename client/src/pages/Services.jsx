import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { services } from "../data/profileContent.js";

/** Services — what I can help build, grounded in projects I have shipped. */
export default function Services() {
  usePageMeta("Services", "Web development, AI-powered applications, full-stack development and API integration by student developer Varo.");

  return (
    <main className="container section">
      <SectionHeading as="h1" title="Services" intro="Work I can take on, based on the applications I have built." />
      <ul className="services-grid">
        {services.map((service) => (
          <li key={service.title} className="service-card glass">
            <span className="service-card__icon"><Icon name={service.icon} size={24} /></span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </li>
        ))}
      </ul>
      <div className="section__cta">
        <Button to="/contact" icon="arrow">Discuss a project</Button>
      </div>
    </main>
  );
}
