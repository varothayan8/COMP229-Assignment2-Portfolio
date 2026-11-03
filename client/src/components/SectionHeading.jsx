/** SectionHeading — consistent title + intro used at the top of every section. */
export default function SectionHeading({ title, intro, as: Tag = "h2", id }) {
  return (
    <div className="section-heading">
      <Tag id={id}>{title}</Tag>
      {intro && <p>{intro}</p>}
    </div>
  );
}
