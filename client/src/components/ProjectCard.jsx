import Button from "./Button.jsx";
import CoverArt from "./CoverArt.jsx";

/**
 * ProjectCard
 * Renders one project from data/projects.js.
 * - `compact` (Home page): screenshot/cover, name, tagline, tech, links.
 * - full (Projects page): adds role, problem, summary and outcome list.
 * Media: real screenshots when supplied, otherwise an illustrated cover.
 */
export default function ProjectCard({ project, compact = false, reverse = false }) {
  const { name, tagline, role, problem, summary, outcome, tech, liveUrl, githubUrl, screenshots, period, type } = project;
  const shotsToShow = compact ? screenshots.slice(0, 1) : screenshots.slice(0, 3);

  return (
    <article className={`project-card glass ${compact ? "project-card--compact" : ""} ${reverse ? "project-card--reverse" : ""}`}>
      <div className="project-card__media">
        {shotsToShow.length > 0 ? (
          <div className={`phone-row phone-row--${shotsToShow.length}`}>
            {shotsToShow.map((shot) => (
              <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" width="300" height="650" />
            ))}
          </div>
        ) : (
          <CoverArt projectId={project.id} name={name} />
        )}
      </div>

      <div className="project-card__body">
        <p className="project-card__meta">{type} · {period}</p>
        <h3>{name}</h3>
        <p className="project-card__tagline">{tagline}</p>

        {!compact && (
          <>
            <dl className="project-facts">
              <div><dt>My role</dt><dd>{role}</dd></div>
              <div><dt>Problem</dt><dd>{problem}</dd></div>
              <div><dt>What it does</dt><dd>{summary}</dd></div>
            </dl>
            <ul className="project-outcome">
              {outcome.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </>
        )}

        <ul className="chip-list" aria-label={`${name} technologies`}>
          {tech.map((item) => <li key={item} className="chip">{item}</li>)}
        </ul>

        <div className="project-card__actions">
          {liveUrl && <Button href={liveUrl} external icon="external" variant="primary" aria-label={`Live demo of ${name}`}>Live demo</Button>}
          {githubUrl && <Button href={githubUrl} external icon="github" variant="secondary" aria-label={`${name} on GitHub`}>GitHub</Button>}
          {compact && <Button to="/projects" variant="ghost" icon="arrow" aria-label={`Read more about ${name}`}>Details</Button>}
        </div>
      </div>
    </article>
  );
}
