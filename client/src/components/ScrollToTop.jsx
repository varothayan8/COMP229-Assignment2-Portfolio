import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** ScrollToTop — resets scroll position when the route changes (SPA default keeps old position). */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
