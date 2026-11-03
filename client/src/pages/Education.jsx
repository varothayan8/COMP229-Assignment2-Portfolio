import SectionHeading from "../components/SectionHeading.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { education } from "../data/profileContent.js";

/** Education — current program, expected completion and relevant coursework. */
export default function Education() {
  usePageMeta("Education", "Software Engineering Technology – Artificial Intelligence (Co-op) Advanced Diploma at Centennial College, with relevant coursework.");

  return (
    <main className="container section">
      <SectionHeading as="h1" title="Education" intro="My current program and the coursework behind my projects." />

      <article className="edu-card glass">
        <p className="edu-card__meta">{education.expected} · {education.gpa}</p>
        <h2>{education.program}</h2>
        <p className="edu-card__school">{education.credential}, {education.school}</p>
        <p>{education.coop}</p>
      </article>

      <section className="section section--tight" aria-labelledby="coursework-title">
        <SectionHeading id="coursework-title" title="Relevant coursework" />
        <ul className="course-grid">
          {education.coursework.map((course) => (
            <li key={course.name} className="glass">
              <h3>{course.name}</h3>
              <p>{course.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
