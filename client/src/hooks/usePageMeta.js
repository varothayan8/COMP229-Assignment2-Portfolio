import { useEffect } from "react";

/**
 * usePageMeta
 * Sets the document title and meta description for the current page so each
 * route has its own search/recruiter-friendly metadata in this single-page app.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Varo — Software Engineering (AI) Student` : "Varo — Software Engineering (AI) Student";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) metaDescription.setAttribute("content", description);
  }, [title, description]);
}
