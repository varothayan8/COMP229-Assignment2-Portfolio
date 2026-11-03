import Button from "../components/Button.jsx";
import usePageMeta from "../hooks/usePageMeta.js";

/** NotFound — friendly fallback for unknown URLs. */
export default function NotFound() {
  usePageMeta("Page not found", "The page you are looking for does not exist.");
  return (
    <main className="container section not-found">
      <h1>Page not found</h1>
      <p>That page does not exist. Try one of the main pages instead.</p>
      <Button to="/" icon="arrow">Back to home</Button>
    </main>
  );
}
