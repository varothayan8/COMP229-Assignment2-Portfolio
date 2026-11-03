/**
 * CoverArt
 * Illustrated cover for projects without a screenshot yet. It is an
 * abstract illustration, not a fake screenshot. Add real images through the
 * `screenshots` field in data/projects.js and they replace this automatically.
 */
export default function CoverArt({ projectId, name }) {
  return (
    <div className={`cover-art cover-art--${projectId}`} role="img" aria-label={`${name} project illustration`}>
      <svg viewBox="0 0 400 260" aria-hidden="true">
        {projectId === "fixsmart" ? (
          <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="120" y="70" width="160" height="120" rx="14" opacity=".9" />
            <path d="M160 70V50M200 70V50M240 70V50M160 190v20M200 190v20M240 190v20M120 110H100M120 150H100M280 110h20M280 150h20" opacity=".6" />
            <path d="M175 150l20-40 12 28 18-18" />
            <circle cx="200" cy="130" r="46" opacity=".25" />
          </g>
        ) : (
          <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="140" y="40" width="120" height="180" rx="16" opacity=".9" />
            <path d="M140 110h120" opacity=".6" />
            <path d="M160 160h20l10-24 16 44 12-28h22" />
            <circle cx="238" cy="72" r="6" opacity=".7" />
          </g>
        )}
      </svg>
    </div>
  );
}
