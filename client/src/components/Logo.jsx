/**
 * Logo
 * Original monogram: a rounded hexagon holding a "V" stroke (for Varo).
 * Pure SVG with its own gradient, no third-party brand assets.
 */
export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7cc4ff" />
          <stop offset="1" stopColor="#4f7dff" />
        </linearGradient>
      </defs>
      <polygon points="24,3 42,13.5 42,34.5 24,45 6,34.5 6,13.5" fill="url(#logoGradient)" />
      <path d="M15 16 L24 33 L33 16" fill="none" stroke="#0a1020" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
