import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { siteConfig } from "../data/siteConfig.js";
import { skillGroups } from "../data/profileContent.js";

/** About — legal name, photo, concise bio, approach, skills and résumé download. */
export default function About() {
  usePageMeta("About Me", "About Varothayan Arumairatnam, a Software Engineering Technology (AI) student at Centennial College focused on AI-powered web applications.");

  return (
    <main className="container section">
      <div className="about-hero">
        <figure className="portrait glass">
          <img src="/images/varo-headshot.webp" alt={`Portrait of ${siteConfig.legalName}`} width="400" height="491" />
        </figure>

        <div>
          <h1>{siteConfig.legalName}</h1>
          <p className="about-role">{siteConfig.program}, {siteConfig.school}</p>
          <p>
            I go by Varo. I'm a co-op student who builds full web applications, from the React interface to the cloud services behind it, and I've deployed three of them: Aeruvo, FixSmart and FridgePulse.
          </p>
          <p>
            I'm most interested in software that uses AI to make an everyday task simpler, such as suggesting an outfit from the clothes you own or guiding a safe repair from a photo.
          </p>
          <div className="hero__actions">
            <Button href={siteConfig.resumePath} download icon="download" aria-label="Download résumé (PDF)">Download résumé</Button>
            <Button to="/contact" variant="secondary" icon="arrow">Get in touch</Button>
          </div>
        </div>
      </div>

      <section className="section section--tight" aria-labelledby="approach-title">
        <SectionHeading id="approach-title" title="How I build" />
        <ul className="approach-grid">
          <li className="glass"><h3>Start with the user's workflow</h3><p>I define the everyday task first, then build the smallest flow that solves it.</p></li>
          <li className="glass"><h3>Make AI output dependable</h3><p>I use structured outputs with Zod validation so model responses fit the app's data.</p></li>
          <li className="glass"><h3>Plan for failure</h3><p>Retries, timeouts, structured logging and tests make failures visible and fixable.</p></li>
        </ul>
      </section>

      <section className="section section--tight" aria-labelledby="skills-title">
        <SectionHeading id="skills-title" title="Technologies" intro="Grouped by area, taken from my résumé." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group glass">
              <h3>{group.title}</h3>
              <ul className="chip-list">
                {group.items.map((item) => <li key={item} className="chip">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
